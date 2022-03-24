import * as React from "react";
import Image from "next/image";
import {useEffect, useRef, useState} from "react";

const categories = [
    "Adventure",
    "Drama",
    "Action",
    "Fantasy",
]

export const Dropdown: React.FC = () => {
    const [visible, setVisible] = useState(false)
    const handleVisibleTrue = () => setVisible(true);
    const inputRef = useRef();

    const handleOutsideClick = (event) => {
        const path = event.path || (event.composedPath && event.composedPath());
        if (!path.includes(inputRef.current)) {
            setVisible(false); //меняю setVisible - false
        }
    };
    useEffect(() => {
        document.body.addEventListener('click', handleOutsideClick)
    }, [])

    return (
        <div className="relative">
            <div
                ref={inputRef}
                onClick={handleVisibleTrue}
                className="w-[170px] px-[16px] py-[10px] bg-white-gray grid items-center
                grid-cols-dropdown gap-3  rounded max-h-[40px] cursor-pointer">
                <input
                    placeholder="Any"
                    className="bg-white-gray text-white border-none outline-none w-full text-[13px] "
                    type="search"/>
                <Image src="/drop.svg" width="13px" height="13px" className="hover:invert-[20%]"/>
            </div>
            {visible &&
            <div className="flex flex-col px-4 py-1 bg-white-gray rounded text-white mt-3 absolute min-w-[170px]">
                {categories.map((item) => (
                    <div className="p-1 cursor-pointer" key={item}>{item}</div>
                ))}
            </div>
            }
        </div>
    )
}