import * as React from "react";
import Image from "next/image";
import {useRef, useState} from "react";

export const Search: React.FC = () => {
    const [value, setValue] = useState('')
    const inputEl = useRef(null);
    const onChangeHandler = event => {
        setValue(event.target.value)
    };
    const clearValue = () => setValue('')

    return (
        <div className="w-[170px] px-[16px] py-[10px] bg-white-gray grid items-center
        grid-cols-inputSearch gap-3  rounded max-h-[40px]">
            <Image src="/search.svg" width="13px" height="13px"/>
            <input
                onChange={onChangeHandler}
                value={value}
                ref={inputEl}
                className="bg-white-gray text-white border-none outline-none w-full text-[13px] "
                type="search"/>
            {value &&
                <Image src="/cancel.svg"
                       width="11px"
                       height="11px"
                       className="cursor-pointer hover:invert-[20%]"
                       onClick={clearValue}
                />
            }
        </div>
    )
}