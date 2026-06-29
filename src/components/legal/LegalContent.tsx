'use client';

import React, { ReactNode } from 'react';
import MainLayout from '../layout/MainLayout';

interface LegalContentProps {
  title: string;
  updatedAt: string;
  children: ReactNode;
}

const LegalContent: React.FC<LegalContentProps> = ({ title, updatedAt, children }) => {
  return (
    <MainLayout>
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
            {title}
          </h1>
          <p className="text-sm text-gray-500 mb-8">Última atualização: {updatedAt}</p>
          <div className="space-y-6 text-gray-700 leading-relaxed [&_h2]:text-xl [&_h2]:md:text-2xl [&_h2]:font-bold [&_h2]:text-gray-900 [&_h2]:mt-8 [&_h2]:mb-3 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-1 [&_a]:text-primary [&_a]:underline">
            {children}
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default LegalContent;
