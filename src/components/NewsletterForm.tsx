'use client';

import { useState } from 'react';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { firestore } from '@/lib/firebase';

export function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!email) return;

    if (!firestore) {
      setStatus('error');
      setMessage('Firestore is not configured yet. Add Firebase keys to enable submissions.');
      return;
    }

    setStatus('loading');
    setMessage('');

    try {
      await addDoc(collection(firestore, 'newsletter_signups'), {
        email,
        createdAt: serverTimestamp()
      });
      setStatus('success');
      setMessage('Thank you for subscribing.');
      setEmail('');
    } catch (error) {
      console.error(error);
      setStatus('error');
      setMessage('There was an issue submitting your email. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex w-full flex-col gap-3 sm:flex-row">
      <input
        type="email"
        name="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        placeholder="Your email address"
        required
        className="flex-1 rounded-full border border-igf-blue/20 bg-white/80 px-5 py-3 text-sm text-igf-blue focus:border-igf-blue focus:outline-none"
      />
      <button
        type="submit"
        className="rounded-full bg-igf-blue px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-igf-blue/20 disabled:cursor-not-allowed disabled:bg-igf-blue/50"
        disabled={status === 'loading'}
      >
        {status === 'loading' ? 'Sending…' : 'Subscribe'}
      </button>
      {message && (
        <p className={`text-xs ${status === 'error' ? 'text-red-500' : 'text-igf-blue/80'}`}>{message}</p>
      )}
    </form>
  );
}
