import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import Link from 'next/link';
import Logo from '../Logo/LogoLight';
import Button from '../Button/Button';
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu';

export default function Navbar() {
    return (
        <nav className='grid grid-cols-2 md:grid-cols-2 h-nav px-8 py-5 md:py-6 bg-neutral-900 whitespace-nowrap'>
            <Link className='flex items-center w-60' href='/' title='Home'>
                <Logo />
            </Link>

            {/* DROPDOWN MENU (for mobile/smaller devices) */}
             <div className='flex justify-end items-center md:hidden'>
                <Menu>
                    <MenuButton className='outline-none'>
                        <HamburgerMenu />
                    </MenuButton>
                    <MenuItems className='flex flex-col justify-evenly items-center w-full pt-8 pb-11 bg-neutral-900 h-full outline-none text-neutral-200 text-2xl font-semibold' anchor="bottom">
                        <MenuItem>
                        <Link className='hover:text-neutral-400 active:text-neutral-400 transition-all duration-100 ease-linear' href='/Menu' title='Menu'>
                            MENU
                        </Link>
                        </MenuItem>
                        <MenuItem>
                        <Link className='hover:text-neutral-400 active:text-neutral-400 transition-all duration-100 ease-linear' href='/OurStory' title='Our Story'>
                            OUR STORY
                        </Link>
                        </MenuItem>
                        <MenuItem>
                            <Link className="block " href='/BookCatering' title='Book Catering'>
                                <Button text='BOOK CATERING' />
                            </Link>
                        </MenuItem>
                    </MenuItems>
                </Menu>
             </div>

            {/* NAVBAR (for medium/larger devices) */}
            <div className='md:flex justify-center md:justify-end items-center md:gap-12 md:text-1xl lg:text-nav-lg text-neutral-50 font-light text-center hidden'>
                <Link className='hover:text-neutral-400 active:text-neutral-400 transition-all duration-100 ease-linear' href='/Menu' title='Menu'>
                    MENU
                </Link>
                <Link className='hover:text-neutral-400 active:text-neutral-400 transition-all duration-100 ease-linear' href='/OurStory' title='Our Story'>
                    OUR STORY
                </Link>
                <Link href='/BookCatering' title='Book Catering'>
                    <Button text='BOOK CATERING' />
                </Link>
            </div>
        </nav>
    );
}