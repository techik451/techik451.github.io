'use client';

import { useEffect, useMemo, useState } from 'react';
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  updateDoc
} from 'firebase/firestore';
import type { DocumentData } from 'firebase/firestore';
import { db } from '@/lib/firebase';

export type FirestoreRecord<T> = T & { id: string; createdAt?: Date };

type CollectionConfig<T extends Record<string, unknown>> = {
  path: string;
  defaultValues: T;
  orderByField?: string;
};

export function useFirestoreCollection<T extends Record<string, unknown>>({
  path,
  defaultValues,
  orderByField
}: CollectionConfig<T>) {
  const [items, setItems] = useState<FirestoreRecord<T>[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const colRef = collection(db, path);
    const q = orderByField ? query(colRef, orderBy(orderByField)) : colRef;

    const unsubscribe = onSnapshot(
      q,
      (snapshot) => {
        const nextItems = snapshot.docs.map((snapshotDoc) => {
          const data = snapshotDoc.data() as DocumentData;
          return {
            id: snapshotDoc.id,
            ...(data as T),
            createdAt: data.createdAt?.toDate?.()
          };
        });

        setItems(nextItems as FirestoreRecord<T>[]);
        setLoading(false);
      },
      (snapshotError) => {
        console.error(snapshotError);
        setError(snapshotError.message);
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, [path, orderByField]);

  const handlers = useMemo(
    () => ({
      async add(values: Partial<T>) {
        await addDoc(collection(db, path), {
          ...defaultValues,
          ...values,
          createdAt: serverTimestamp()
        });
      },
      async update(id: string, values: Partial<T>) {
        await updateDoc(doc(db, path, id), values);
      },
      async remove(id: string) {
        await deleteDoc(doc(db, path, id));
      }
    }),
    [path, defaultValues]
  );

  return { items, loading, error, ...handlers };
}
