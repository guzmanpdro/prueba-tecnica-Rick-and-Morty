'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx';

const links = [
    {
      name: 'Characters',
      href: '/dashboard/characters'
    },
    { name: 'Episodes', 
      href: '/dashboard/episodes'
    },
  ];
  
  export default function NavLinks() {
    const pathname = usePathname()
  
    return (
      <>
        {links.map((link) => {
          return (
            <Link
              key={link.name}
              href={link.href}
              className={clsx(
                'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-neutral-200 hover:bg-neutral-300 p-3 text-sm font-medium md:flex-none md:justify-start md:p-2 md:px-3',
                {
                  'bg-neutral-200': pathname === link.href,
                },
              )}
            >
              {link.name}
            </Link>
          );
        })}
      </>
    );
  }