"use client";

import type React from "react";
import "./globals.css";
import { Inter } from "next/font/google";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen bg-gray-50 flex flex-col`}>
        {/* Navbar */}
        <nav className="bg-white border-b sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              {/* Logo */}
              <Link href="/" className="flex-shrink-0 text-2xl font-bold">
                <span className="text-google-blue">G</span>
                <span className="text-google-red">D</span>
                <span className="text-google-yellow">S</span>
                <span className="text-google-green">C</span>
                <span className="text-gray-800 ml-2">AAMU WEB DEV</span>
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-4">
                {["Home", "About", "Timeline", "Team", "Resources", "Contact"].map((item) => (
                  <Link
                    key={item}
                    href={`/${item.toLowerCase()}`}
                    className="px-3 py-2 text-gray-600 hover:text-gray-900 transition"
                  >
                    {item}
                  </Link>
                ))}
              </div>

              {/* Mobile Menu Toggle */}
              <button
                className="md:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 focus:outline-none"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle navigation menu"
              >
                {menuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {menuOpen && (
            <div className="md:hidden bg-white border-t">
              <div className="flex flex-col py-2">
                {["Home", "About", "Timeline", "Team", "Resources", "Contact"].map((item) => (
                  <Link
                    key={item}
                    href={`/${item.toLowerCase()}`}
                    className="px-4 py-3 text-gray-600 hover:text-gray-900 transition"
                    onClick={() => setMenuOpen(false)}
                  >
                    {item}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </nav>

        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-grow">
          {children}
        </main>

        {/* Footer */}
        <footer className="bg-white border-t mt-auto">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <p className="text-center text-gray-500">
              &copy; 2025 Google Developer Student Club - Alabama A&M University.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
