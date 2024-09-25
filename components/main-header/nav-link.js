'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import classes from './nav-link.module.css';

export default function NavLink({ href = '/', children }) {
  const path = usePathname();

  if (!href) {
    console.error('href prop is missing in NavLink component');
    return null; // Optionally, you can render nothing if href is undefined
  }

  return (
    <Link
      href={href}
      className={
        path.startsWith(href)
          ? `${classes.link} ${classes.active}`
          : classes.link
      }
    >
      {children}
    </Link>
  );
}
