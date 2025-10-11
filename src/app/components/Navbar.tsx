'use client';

import { ConnectButton } from '@rainbow-me/rainbowkit';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="w-full bg-gray-900 text-white px-6 py-8 flex items-center justify-between shadow-md">
      {/* Logo */}
      <Link href="/" className="text-2xl font-bold text-blue-400">
        MyDapp
      </Link>

      {/* Search bar */}
      <div className="flex-1 mx-6 max-w-md">
        <input
          type="text"
          placeholder="Search..."
          className="w-full px-4 py-2 rounded-xl bg-gray-800 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Connect Wallet */}
      <div>
        <ConnectButton chainStatus="icon" showBalance={false} />
      </div>
    </nav>
  );
}
