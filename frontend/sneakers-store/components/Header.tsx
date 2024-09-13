'use client'
import Link from 'next/link'
import { useState } from 'react'
import { Dropdown } from './schadcn_components/Dropdown'
import { IoMenu } from "react-icons/io5";
import { TiShoppingCart } from "react-icons/ti";
import { MdFavoriteBorder } from "react-icons/md";
import closeDropdown from '@/hooks/closeDropdown';
import { useShopContext } from "@/context/shopContext";

function Header() {
    const [menuClicked, setMenuClicked] = useState(false)
    const { productsInCart, favorites} = useShopContext()

    const handleMenuClicked = () => {
        setMenuClicked(!menuClicked)
    }

    const handleCloseDropdown = () => {
        setMenuClicked(false);
    };

    const dropdownRef = closeDropdown<HTMLDivElement>(handleCloseDropdown);

    return (
        <>
            <header className="flex p-2 mt-5 justify-between items-center lg:p-4">
                <h1 className="text-4xl text-gray-950 font-extrabold cursor-pointer">
                   <Link href="/"> S&S. </Link>
                </h1>

                <div className='flex items-center space-x-4 lg:hidden'>
                    <MdFavoriteBorder className=' cursor-pointer' />
                    <TiShoppingCart className=' cursor-pointer' />
                    <IoMenu className='absolut cursor-pointer' onClick={handleMenuClicked} />
                </div>

                <nav className='hidden  lg:inline-flex items-center justify-center'>
                    <ul className=" flex space-x-14">
                        <li>
                            <Link className='text-red-700 font-bold' href="/sale">SALE🔥</Link>
                        </li>

                        <Dropdown />
                        <li>
                            <Link className='hover:text-blue-600' href="/shopping-cart">Warenkorb ({productsInCart.length}) </Link>
                        </li>
                        <li>
                            <Link className='hover:text-blue-600' href="/favourites"> {favorites.length > 0 ? 'Favoriten ❤️' : 'Favoriten' } </Link>
                        </li>
                    </ul>
                </nav>

            </header>
            {menuClicked &&
                // <div className='relative'>
                <div ref={dropdownRef} className=' border backdrop-blur-lg rounded-sm fixed right-5 top-20 p-4 text-xl text-left z-50'>
                    <Link className='font-bold' href="/sale">SALE🔥</Link>
                    <div className='space-y-2 mt-3'>
                        <details className='' open={false}>
                            <summary className='font-bold'> Damen </summary>
                            <ul className='text-md'>
                                <li>Nike</li>
                                <li>Adidas</li>
                                <li>New Balance</li>
                            </ul>
                        </details>
                        <details className='text-wrap' open={false}>
                            <summary className='font-bold'> Herren </summary>
                            <ul className=' text-md'>
                                <li>Nike</li>
                                <li>Adidas</li>
                                <li>Puma</li>
                                <li>New Balance</li>
                            </ul>
                        </details>
                    </div>
                </div>
            }
            <hr />
        </>
    )
}

export default Header
