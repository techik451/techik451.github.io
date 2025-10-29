'use client';

import { FormEvent, useMemo, useState } from 'react';
import { FirestoreRecord, useFirestoreCollection } from '@/hooks/useFirestoreCollection';

export type CollectionSchema<T extends Record<string, unknown>> = {
  title: string;
  description: string;
  fields: Array<{
    id: keyof T & string;
    label: string;
    type: 'text' | 'textarea' | 'image' | 'date';
    placeholder?: string;
    helperText?: string;
  }>;
  collectionPath: string;
  defaultValues: T;
  orderByField?: string;
};

type CollectionManagerProps<T extends Record<string, unknown>> = {
  schema: CollectionSchema<T>;
  fallbackItems: FirestoreRecord<T>[];
};

export function CollectionManager<T extends Record<string, unknown>>({ schema, fallbackItems }: CollectionManagerProps<T>) {
  const { items, loading, error, add, update, remove } = useFirestoreCollection<T>({
    path: schema.collectionPath,
    defaultValues: schema.defaultValues,
    orderByField: schema.orderByField
  });

  const [editingItem, setEditingItem] = useState<FirestoreRecord<T> | null>(null);
  const records = useMemo(() => (items.length ? items : fallbackItems), [items, fallbackItems]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const values = schema.fields.reduce<Record<string, unknown>>((accumulator, field) => {
      accumulator[field.id] = form.get(field.id) ?? schema.defaultValues[field.id];
      return accumulator;
    }, {});

    if (editingItem) {
      await update(editingItem.id, values as Partial<T>);
      setEditingItem(null);
    } else {
      await add(values as Partial<T>);
    }

    event.currentTarget.reset();
  };

  const handleEdit = (record: FirestoreRecord<T>) => {
    setEditingItem(record);
  };

  const handleDelete = async (record: FirestoreRecord<T>) => {
    await remove(record.id);
    if (editingItem?.id === record.id) {
      setEditingItem(null);
    }
  };

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-semibold text-igf-blue">{schema.title}</h2>
        <p className="mt-2 text-sm text-igf-blue/70">{schema.description}</p>
      </div>

      <form onSubmit={handleSubmit} className="grid gap-4 rounded-3xl border border-igf-blue/10 bg-white p-6 shadow">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-igf-blue">
            {editingItem ? 'Update content' : 'Create new entry'}
          </h3>
          {editingItem ? (
            <button type="button" className="text-sm text-igf-blue/60 underline" onClick={() => setEditingItem(null)}>
              Cancel edit
            </button>
          ) : null}
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {schema.fields.map((field) => (
            <label key={field.id} className="flex flex-col gap-2 text-sm text-igf-blue">
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-igf-blue/60">{field.label}</span>
              {field.type === 'textarea' ? (
                <textarea
                  id={field.id}
                  name={field.id}
                  defaultValue={editingItem ? String(editingItem[field.id]) : ''}
                  placeholder={field.placeholder}
                  rows={4}
                  className="rounded-2xl border border-igf-blue/20 bg-white px-4 py-3 text-sm text-igf-blue focus:border-igf-blue focus:outline-none"
                />
              ) : (
                <input
                  id={field.id}
                  name={field.id}
                  type={field.type === 'date' ? 'date' : 'text'}
                  defaultValue={editingItem ? String(editingItem[field.id]) : ''}
                  placeholder={field.placeholder}
                  className="rounded-2xl border border-igf-blue/20 bg-white px-4 py-3 text-sm text-igf-blue focus:border-igf-blue focus:outline-none"
                />
              )}
              {field.helperText ? <p className="text-xs text-igf-blue/50">{field.helperText}</p> : null}
            </label>
          ))}
        </div>
        <button
          type="submit"
          className="w-fit rounded-full bg-igf-blue px-6 py-3 text-sm font-semibold text-igf-cream transition hover:-translate-y-0.5 hover:bg-igf-slate"
        >
          {editingItem ? 'Save changes' : 'Publish entry'}
        </button>
      </form>

      <section className="space-y-4">
        <h3 className="text-lg font-semibold text-igf-blue">Published entries</h3>
        <div className="grid gap-4">
          {loading ? <p className="text-sm text-igf-blue/60">Loading...</p> : null}
          {error ? <p className="text-sm text-red-600">{error}</p> : null}
          {records.map((record) => (
            <article key={record.id} className="rounded-3xl border border-igf-blue/10 bg-white p-6 shadow-sm">
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div className="space-y-2 text-sm text-igf-blue">
                  {schema.fields.map((field) => (
                    <div key={field.id}>
                      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-igf-blue/50">{field.label}</p>
                      <p className="mt-1 text-sm text-igf-blue/80">{String(record[field.id])}</p>
                    </div>
                  ))}
                </div>
                <div className="flex gap-3 text-sm font-semibold">
                  <button
                    type="button"
                    className="rounded-full border border-igf-blue/20 px-4 py-2 text-igf-blue transition hover:border-igf-blue/40"
                    onClick={() => handleEdit(record)}
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    className="rounded-full border border-red-100 bg-red-50 px-4 py-2 text-red-600 transition hover:bg-red-100"
                    onClick={() => handleDelete(record)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </article>
          ))}
          {!records.length ? <p className="text-sm text-igf-blue/60">No entries yet. Add your first update above.</p> : null}
        </div>
      </section>
    </div>
  );
}
