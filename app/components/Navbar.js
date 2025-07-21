'use client';

import { useState, useEffect } from 'react';
import {
  Menu,
  X,
  Home,
  MapPin,
  Route,
  BookText,
  Layers,
  FileText,
  Search,
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import clsx from 'clsx';


const navItems = [
  {
    label: 'Home',
    icon: Home,
    path: '/',
  },
  {
    label: 'Destination',
    icon: MapPin,
    submenu: [
      { label: 'Destination List', path: '/destinations/list' },
      { label: 'Destination By Country', path: '/destinations/country' },
    ],
  },
  {
    label: 'Tours',
    icon: Route,
    submenu: [
      { label: 'Standard List', path: '/tours/standard-list' },
      { label: 'Tour Item', path: '/tours/tour-item' },
    ],
  },
  {
    label: 'Categories',
    icon: Layers,
    submenu: [
      { label: 'Domestic Tours', path: '/category/domestic' },
      { label: 'International Tours', path: '/category/international' },
      { label: 'Jungle Safaris', path: '/category/jungleSafari' },
    ],
  },
  {
    label: 'Blog',
    icon: BookText,
    path: '/blog',
  },
  {
    label: 'Pages',
    icon: FileText,
    submenu: [
      { label: 'About Us', path: '/about' },
      { label: 'Contact Us', path: '/contact' },
      { label: 'What We Offer', path: '/offerings' },
    ],
  },
  {
    label: 'Search',
    icon: Search,
    path: '/search',
  },
];

const MobileNavbar = () => {
  const [open, setOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDropdown = (label) => {
    setActiveDropdown((prev) => (prev === label ? null : label));
  };

  return (
    <nav className={clsx(
      'lg:hidden fixed top-0 left-0 right-0 z-50 px-4 py-2 flex items-center justify-between transition-all duration-300',
      scrolled ? 'bg-black/30 backdrop-blur-md' : 'bg-transparent'
    )}>
      {/* Left: Hamburger */}
      <button
        className="text-white"
        onClick={() => {
          setOpen((prev) => !prev);
          setActiveDropdown(null); // Close all submenus on open toggle
        }}
        aria-label="Toggle Menu"
      >
        {open ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Center: Logo */}
      <Link href="/" className="mx-auto">
        <Image
          src="/logo.png"
          alt="Logo"
          width={100}
          height={30}
          className="object-contain"
        />
      </Link>

      {/* Right: Contact */}
      <Link href="/contact" className="text-white text-sm font-medium hover:text-sky-400">
        Contact
      </Link>

      {/* Dropdown Menu */}
      <div
        className={clsx(
          'absolute left-0 top-full w-full bg-black/90 text-white px-6 py-4 shadow-xl z-40 transition-all duration-500 ease-in-out',
          open
            ? 'max-h-[90vh] opacity-100 translate-y-0'
            : 'max-h-0 opacity-0 -translate-y-2 pointer-events-none'
        )}
        style={{ overflowY: 'auto', overflowX: 'hidden' }}
      >
        {navItems.map((item, index) => {
          const Icon = item.icon;

          const hasSubmenu = !!item.submenu;

          return (
            <div key={index} className="mb-3">
              {item.path && !hasSubmenu ? (
                <Link
                  href={item.path}
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-3 py-2 text-white hover:text-sky-300 transition"
                >
                  <Icon size={16} />
                  {item.label}
                </Link>
              ) : (
                <>
                  <button
                    onClick={() => toggleDropdown(item.label)}
                    className="w-full flex items-center justify-between py-2 text-white hover:text-sky-300 transition"
                  >
                    <span className="flex items-center gap-3">
                      <Icon size={16} />
                      {item.label}
                    </span>
                    <span className="text-xs">
                      {activeDropdown === item.label ? '−' : '+'}
                    </span>
                  </button>

                  {/* Submenu */}
                  {activeDropdown === item.label && (
                    <div className="pl-7 pt-1 space-y-2">
                      {item.submenu.map((subItem, subIdx) => (
                        <Link
                          key={subIdx}
                          href={subItem.path}
                          onClick={() => setOpen(false)}
                          className="block text-sm text-white hover:text-sky-300"
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              )}
            </div>
          );
        })}
      </div>
    </nav>
  );
};

export default MobileNavbar;