"use client";

import type React from "react";
import "./globals.css";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen bg-gray-50`}>
        <nav className="bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <Link href="/" className="flex-shrink-0">
                  <span className="text-2xl font-bold">
                    <span className="text-google-blue">G</span>
                    <span className="text-google-red">D</span>
                    <span className="text-google-yellow">S</span>
                    <span className="text-google-green">C</span>
                    <span className="text-gray-800 ml-2">AAMU WEB DEV</span>
                  </span>
                </Link>
              </div>
              <div className="flex items-center space-x-4">
                <Link href="/" className="px-3 py-2 text-gray-600 hover:text-gray-900">
                  Home
                </Link>
                <Link href="/about" className="px-3 py-2 text-gray-600 hover:text-gray-900">
                  About
                </Link>
                <Link href="/timeline" className="px-3 py-2 text-gray-600 hover:text-gray-900">
                  Timeline
                </Link>
                <Link href="/team" className="px-3 py-2 text-gray-600 hover:text-gray-900">
                  Team
                </Link>
                <Link href="/resources" className="px-3 py-2 text-gray-600 hover:text-gray-900">
                  Resources
                </Link>
                <Link href="/contact" className="px-3 py-2 text-gray-600 hover:text-gray-900">
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </nav>
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">{children}</main>
        <footer className="bg-white border-t mt-auto">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <p className="text-center text-gray-500">&copy; 2025 Google Developer Student Club - Alabama A&M University.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
