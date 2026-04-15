'use client';

import React from 'react';
import { MapPin, Mail, Phone } from 'lucide-react';

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
              <div className="rounded-xl group-hover:scale-110 transition-transform duration-500 overflow-hidden shrink-0">
                <img src="/logo.png" alt="Agoo Technology Logo" className="w-12 h-12 object-contain" />
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
            {
              title: "Quick Links", links: [
                { name: "About Us", href: "#about" },
                { name: "Curriculum", href: "#curriculum" },
                { name: "Instructor", href: "#instructor" },
                { name: "Benefits", href: "#benefits" },
              ]
            },
            { title: "Workshop Info", links: [{ name: "Curriculum", href: "#curriculum" }, { name: "Certificate", href: "#" }, { name: "Refund Policy", href: "#" }, { name: "FAQs", href: "#faq" }] },
            {
              title: "Contact Us", links: [
                { name: "Floor no 103,104, Subash street, Vadasery, Nagercoil - 629001, TN, India", href: "#", icon: MapPin },
                { name: "info@agoo.in", href: "mailto:info@agoo.in", icon: Mail },
                { name: "+91 89034 89173", href: "https://wa.me/918903489173", icon: Phone },
              ]
            }
          ].map((col, i) => (
            <div key={i}>
              <h4 className="text-lg font-black mb-8">{col.title}</h4>
              <ul className="space-y-4">
                {col.links.map(link => {
                  const LinkIcon = (link as any).icon;
                  return (
                    <li key={link.name}>
                      <a href={link.href} className="flex items-start gap-3 text-slate-400 hover:text-white transition-colors font-medium">
                        {LinkIcon && <LinkIcon className="w-5 h-5 shrink-0 mt-0.5" />}
                        <span>{link.name}</span>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        <hr className="border-slate-800 mb-10" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-sm font-medium">
            Copyright © {currentYear} <a href="https://site.agoo.in/" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-700 transition-colors font-bold">Agoo Technologies</a>. All Rights Reserved.
          </p>
          <div className="flex gap-8 text-xs font-bold uppercase tracking-widest text-slate-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
