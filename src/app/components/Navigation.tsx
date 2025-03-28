'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NavItem, styles } from '@/types';
import { ROUTES, NAV_ITEMS } from '@/constants';
import { Icons } from './Icons';
import Logo from './Logo';

/**
 * Navigation component that provides both desktop and mobile navigation.
 * Features responsive design, active state highlighting, and a mobile menu.
 */
const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string): boolean => pathname === path;

  // Shared styles for navigation items
  const navItemStyles = (active: boolean) => `
    text-lg font-medium transition-colors px-4 py-2 rounded-lg
    ${active 
      ? 'text-emerald-500 bg-emerald-100/80' 
      : 'text-gray-600 hover:text-emerald-500 hover:bg-emerald-100/80'
    }
  `;

  // Mobile navigation icon styles
  const mobileIconStyles = `
    flex flex-col items-center px-4 py-2 rounded-lg
    ${styles.transition}
  `;

  // Map navigation items to their icons
  const getNavIcon = (href: string) => {
    switch (href) {
      case ROUTES.HOME:
        return Icons.HOME;
      case ROUTES.GENERATE:
        return Icons.GENERATE;
      case ROUTES.SAVED:
        return Icons.SAVED;
      case ROUTES.CONTACT:
        return Icons.CONTACT;
      default:
        return null;
    }
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center justify-between h-20 px-6 bg-white border-b border-emerald-100">
        <div className="w-[200px]">
          <Logo />
        </div>
        
        <div className="flex-1 flex justify-center">
          <div className="flex items-center space-x-12">
            {NAV_ITEMS.map((item) => (
              <Link 
                key={item.href}
                href={item.href} 
                className={navItemStyles(isActive(item.href))}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="w-[200px] flex justify-end">
          <Link 
            href={ROUTES.PROFILE}
            className={`${styles.button.primary} px-6 py-2 text-lg font-medium`}
          >
            Sign up
          </Link>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div className="md:hidden">
        {/* Top Bar */}
        <div className="flex items-center justify-between h-16 px-4 bg-white border-b border-emerald-100">
          <Logo />
          <Link 
            href={ROUTES.PROFILE}
            className={`${styles.button.primary} px-4 py-1.5 text-sm font-medium`}
          >
            Sign up
          </Link>
        </div>

        {/* Bottom Navigation */}
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-emerald-100">
          <div className="flex justify-around items-center h-16">
            {NAV_ITEMS.map((item) => (
              <Link 
                key={item.href}
                href={item.href} 
                className={`${mobileIconStyles} ${
                  isActive(item.href) 
                    ? 'text-emerald-500 bg-emerald-100/80' 
                    : 'text-gray-600 hover:text-emerald-500 hover:bg-emerald-100/80'
                }`}
              >
                {getNavIcon(item.href)}
                <span className="text-xs mt-1">{item.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation; 