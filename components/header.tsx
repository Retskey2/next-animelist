import * as React from 'react';
import {useEffect, useState} from "react";
import Menu from "../image/icons8-hamburger-menu-100.svg";
import Logo from "../image/logo.svg"
import useMedia from 'use-media';
import Link from 'next/link'
import {useRouter} from "next/router";

export const Header: React.FC = () => {
    const isWide = useMedia({minWidth: '1024px'});
    const [visibleBrowse, setVisibleBrowse] = useState(false)
    const [visibleMenu, setVisibleMenu] = useState(false);
    const router = useRouter();

    const handlerModalWindows = () => {
        setVisibleBrowse(!visibleBrowse)
    }
    const handlerMenu = () => {
        setVisibleMenu(!visibleMenu)
    }
    useEffect(() => {
        setVisibleMenu(true)
    }, [isWide])

    const menu = [
        {text: 'Social', path: '/social'},
        {text: 'Forum', path: '/forum/overview'},
    ];


    return (
        <>
            <div className="bg-regal-gray w-100vh h-16 text-sm flex justify-center items-center text-sm lp:hidden">
                <div className="flex items-center justify-between min-w-[60%]">
                    <Link href="/">
                        <Logo className="cursor-pointer"/>
                    </Link>
                    <ul className="flex items-center">
                        {menu.map(({text, path}) =>
                            <li className="hover:text-regal-red" key={path}>
                                <Link href={path} passHref>
                                    <a className="p-4">{text}</a>
                                </Link>
                            </li>
                        )}
                        <div className="p-4" onMouseEnter={handlerModalWindows}
                             onMouseLeave={handlerModalWindows}>
                            <li className="hover:text-regal-red transition duration-100">
                                <Link href="/search/anime">
                                    <a className="p-4">Browse</a>
                                </Link>
                            </li>
                            {
                                visibleBrowse &&
                                <div className="absolute top-[54px] text-black">
                                    <div className="danger-arrow-top ml-4 bg-white border-none"/>
                                    <div className="border-r-transparent w-[270px] rounded-md bg-white relative">
                                        <div className="py-5 px-8">
                                            <div>anime</div>
                                            <div>manga</div>
                                        </div>
                                        <div>footer</div>
                                    </div>
                                </div>
                            }
                        </div>
                    </ul>
                    <div className="">
                        <button className="hover:text-regal-red">
                            <Link href="/login">
                                <a className="p-4">Login</a>
                            </Link>
                        </button>
                        <button className="transition ease-in-out duration-300 hover:shadow-rd
                        bg-regal-red rounded-md font-extrabold py-2 px-4 ml-5 hover:scale-[1.04]">
                            <Link href="/signup">
                                <a>Sign Up</a>
                            </Link>
                        </button>
                    </div>
                </div>
            </div>
            {visibleMenu ?
                <div
                    onClick={() => handlerMenu()}
                    className="hidden lp:flex h-14 w-14 bg-regal-gray rounded-md absolute right-[20px] bottom-[25px]
                    cursor-pointer items-center justify-center shadow-wt z-50">
                    <Menu/>
                </div> :
                <div
                    className="hidden lp:flex absolute right-[20px] bottom-[20px] shadow-regal bg-regal-gray w-[210px] h-12 rounded-md p-2 shadow-wt"
                    onClick={() => handlerMenu()}>
                    menu
                </div>
            }

        </>
    );
};