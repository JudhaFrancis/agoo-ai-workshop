'use client';

import React from 'react';
import { Brain } from 'lucide-react';

interface FooterProps {
  currentYear: number;
}

export const Footer = ({ currentYear }: FooterProps) => {
  return (
    <footer className="bg-slate-900 pt-20 pb-10 text-white px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-violet-600 p-2 rounded-xl text-white">
                <Brain className="w-6 h-6" />
              </div>
              <div>
                <span className="text-2xl font-black text-white">Agoo Technology</span>
                <p className="text-[10px] text-violet-400 font-bold uppercase tracking-widest leading-tight">AI Training & Workshops</p>
              </div>
            </div>
            <p className="text-slate-400 font-medium leading-relaxed">
              Empowering professionals with practical AI skills to work faster, smarter, and more efficiently.
            </p>
          </div>

          {[
            { title: "Quick Links", links: ["About Us", "All Workshops", "Blog", "Careers"] },
            { title: "Workshop Info", links: ["Curriculum", "Certificate", "Refund Policy", "FAQs"] },
            { title: "Contact", links: ["support@agootechnology.com", "WhatsApp Support", "Twitter / X", "LinkedIn"] }
          ].map((col, i) => (
            <div key={i}>
              <h4 className="text-lg font-black mb-8">{col.title}</h4>
              <ul className="space-y-4">
                {col.links.map(l => (
                  <li key={l}><a href="#" className="text-slate-400 hover:text-white transition-colors font-medium">{l}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <hr className="border-slate-800 mb-10" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">© {currentYear} Agoo Technology. All rights reserved.</p>
          <div className="flex gap-8 text-xs font-bold uppercase tracking-widest text-slate-500">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
