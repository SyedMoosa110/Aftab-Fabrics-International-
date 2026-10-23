'use client';
import { useState } from 'react';
import Modal from './ui/Modal';
import { waLink } from '@/lib/whatsapp';

export default function KhataModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [biz, setBiz] = useState('');
  return (
    <Modal open={open} onClose={onClose} label="Merchant Khata">
      <p className="text-[10px] uppercase tracking-[0.3em] text-ochre-deep">Merchant Khata / Ledger</p>
      <h3 className="font-serif text-3xl mt-2">Request your account statement</h3>
      <p className="text-sm text-espresso/60 mt-2">Existing merchants can request their ledger and outstanding balance from the wholesale desk.</p>
      <input value={biz} onChange={(e) => setBiz(e.target.value)} placeholder="Business name"
        className="mt-5 w-full border border-silk px-4 py-3 text-sm outline-none focus:border-ochre" />
      <a href={waLink(`Assalam-o-Alaikum, please share the khata/ledger statement for: ${biz || '(business name)'}.`)}
        target="_blank" rel="noopener noreferrer"
        className="mt-4 block text-center bg-espresso text-alabaster py-3 text-xs uppercase tracking-wider hover:bg-ochre-deep transition-colors">
        Request on WhatsApp
      </a>
    </Modal>
  );
}
