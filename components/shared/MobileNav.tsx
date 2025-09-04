'use client';

import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { navLinks } from "@/constants"
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "../ui/button";

const MobileNav = () => {
  const pathname = usePathname()

  return (
    <header className="header">
      <Link href={'/'} className="flex items-center gap-2 md:py-2">
        <Image
          src={'/assets/images/logo-text.svg'}
          alt="logo"
          width={180}
          height={28}
        />
      </Link>

      <nav className="flex gap-2">
        <SignedIn>
          <UserButton />

          <Sheet>
            <SheetTrigger>
              <Image
                src={'/assets/icons/menu.svg'}
                alt="menu"
                width={30}
                height={30}
                className="cursor-pointer"
              />
            </SheetTrigger>
            <SheetContent className="sheet-content sm:w-64">
              <>
                <Image
                  src={'/assets/images/logo-text.svg'}
                  alt="logo"
                  width={152}
                  height={33}
                  className="mt-3 ml-3"
                />

                <ul className='header-nav_elements'>
                  {navLinks.map(({ label, route, icon }) => {
                    const isActive = route === pathname
                    return (
                      <li key={label} className={`${isActive && 'gradient-text'} flex whitespace-nowrap text-dark-700`}>
                        <Link href={route} className='sidebar-link cursor-pointer'>
                          <Image
                            src={icon}
                            alt='logo'
                            width={24}
                            height={24}
                          />
                          {label}
                        </Link>
                      </li>
                    )
                  })}

                  <li className='flex-center gap-2 p-4 cursor-pointer'>
                    <UserButton showName />
                  </li>
                </ul>
              </>
            </SheetContent>
          </Sheet>
        </SignedIn>

        <SignedOut>
          <Button asChild className='button bg-purple-gradient bg-cover'>
            <Link href={'/sign-in'}>
              Login
            </Link>
          </Button>
        </SignedOut>
      </nav>
    </header>
  )
}

export default MobileNav
