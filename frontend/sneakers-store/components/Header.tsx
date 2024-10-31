'use client'
import Link from 'next/link'
import { useState } from 'react'
import { Dropdown } from './schadcn_components/Dropdown'
import { IoMenu } from "react-icons/io5";
import { TiShoppingCart } from "react-icons/ti";
import { MdOutlineFavorite } from "react-icons/md";
import closeDropdown from '@/hooks/closeDropdown';
import { useShopContext } from "@/context/shopContext";

function Header() {
    const [menuClicked, setMenuClicked] = useState(false)
    const { productsInCart, favorites } = useShopContext()

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
                    <Link href="/"> MK. </Link>
                </h1>

                <div className='flex text-2xl items-center space-x-6 lg:hidden'>
                    <Link href="/favourites">
                        <MdOutlineFavorite className={`cursor-pointer ${(favorites.length > 0) ? ' text-red-500 ' : 'text-gray-400 '}`} />
                    </Link>
                    <Link href="/shopping-cart">
                        <TiShoppingCart className=' cursor-pointer' />
                    </Link>
                    <IoMenu className='absolut cursor-pointer' onClick={handleMenuClicked} />
                </div>

                <nav className='hidden  lg:inline-flex items-center justify-center'>
                    <ul className=" flex space-x-14">
                        <li>
                            <Link className='text-red-700 font-bold' href="/sale">SALE🔥</Link>
                        </li>
                        <li>
                            <Link className='hover:text-blue-600' href="/herren">Herren</Link>
                        </li>
                        <li>
                            <Link className='hover:text-blue-600' href="/damen">Damen</Link>
                        </li>

                        {/* <Dropdown /> */}
                        <li>
                            <Link className='hover:text-blue-600' href="/shopping-cart">Warenkorb ({productsInCart.length}) </Link>
                        </li>
                        <li>
                            <Link className='hover:text-blue-600' href="/favourites"> {favorites.length > 0 ? 'Favoriten ❤️' : 'Favoriten'} </Link>
                        </li>
                    </ul>
                </nav>

            </header>
            {menuClicked &&
                <div ref={dropdownRef} className=' border backdrop-blur-lg rounded-sm fixed right-5 top-20 p-4 text-xl text-left z-50'>
                    <Link className='font-bold' href="/sale">SALE🔥</Link>
                    <div className='my-3'>
                        <Link href="/damen">Damen</Link>
                    </div>
                    <div>
                        <Link href="/herren">Herren</Link>
                    </div>

                </div>
            }
            <hr />
        </>
    )
}

export default Header
