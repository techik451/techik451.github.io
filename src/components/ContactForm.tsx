'use client';

import { useState } from 'react';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { firestore } from '@/lib/firebase';

export function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '', interest: 'partnerships' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [feedback, setFeedback] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!firestore) {
      setStatus('error');
      setFeedback('Firestore is not configured yet. Add Firebase keys to enable submissions.');
      return;
    }

    setStatus('loading');
    setFeedback('');

    try {
      await addDoc(collection(firestore, 'contact_messages'), {
        ...form,
        createdAt: serverTimestamp()
      });
      setStatus('success');
      setFeedback('Thanks for reaching out. Our team will reply shortly.');
      setForm({ name: '', email: '', message: '', interest: 'partnerships' });
    } catch (error) {
      console.error(error);
      setStatus('error');
      setFeedback('There was an issue sending your message. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="grid gap-4">
      <div className="grid gap-2">
        <label htmlFor="name" className="text-xs font-semibold uppercase tracking-[0.3em] text-igf-blue/70">
          Name
        </label>
        <input
          id="name"
          name="name"
          value={form.name}
          onChange={handleChange}
          required
          className="rounded-2xl border border-igf-blue/10 bg-white/70 px-4 py-3 text-sm text-igf-blue focus:border-igf-blue focus:outline-none"
        />
      </div>
      <div className="grid gap-2">
        <label htmlFor="email" className="text-xs font-semibold uppercase tracking-[0.3em] text-igf-blue/70">
          Email
        </label>
        <input
          id="email"
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          required
          className="rounded-2xl border border-igf-blue/10 bg-white/70 px-4 py-3 text-sm text-igf-blue focus:border-igf-blue focus:outline-none"
        />
      </div>
      <div className="grid gap-2">
        <label htmlFor="interest" className="text-xs font-semibold uppercase tracking-[0.3em] text-igf-blue/70">
          I'm interested in
        </label>
        <select
          id="interest"
          name="interest"
          value={form.interest}
          onChange={handleChange}
          className="rounded-2xl border border-igf-blue/10 bg-white/70 px-4 py-3 text-sm text-igf-blue focus:border-igf-blue focus:outline-none"
        >
          <option value="partnerships">Partnerships</option>
          <option value="volunteering">Volunteering</option>
          <option value="donations">Donations</option>
          <option value="media">Media & Speaking</option>
        </select>
      </div>
      <div className="grid gap-2">
        <label htmlFor="message" className="text-xs font-semibold uppercase tracking-[0.3em] text-igf-blue/70">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={form.message}
          onChange={handleChange}
          rows={4}
          required
          className="rounded-2xl border border-igf-blue/10 bg-white/70 px-4 py-3 text-sm text-igf-blue focus:border-igf-blue focus:outline-none"
        />
      </div>
      <button
        type="submit"
        className="rounded-full bg-igf-blue px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-igf-blue/20 disabled:cursor-not-allowed disabled:bg-igf-blue/50"
        disabled={status === 'loading'}
      >
        {status === 'loading' ? 'Sending…' : 'Send message'}
      </button>
      {feedback && (
        <p className={`text-sm ${status === 'error' ? 'text-red-500' : 'text-igf-blue/80'}`}>{feedback}</p>
      )}
    </form>
  );
}
