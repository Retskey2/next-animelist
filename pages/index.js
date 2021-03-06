import Head from 'next/head'
import Image from "next/image";
import Promo from "../public/Promo002.png"
import Separation from "../public/section-separator.svg"
import {Dropdown} from "../components/Dropdown/Dropdown";
import {Search} from "../components/Search/Search";

export default function Home() {
    return (
        <div>
            <Head>
                <title>AniList</title>
                <meta name="description" content="Generated by create next app "/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <div className="relative">
                <div className="mt-12 flex justify-evenly px-5">
                    <div className="mt-40 tb:mt-0">
                        <h1 className="text-5xl font-bold">A new level of <br/> anime listings</h1>
                        <p className="text-xl mt-6 max-w-lg">
                            What are your highest rated genres or most watched voice actors?
                            Follow your watching habits over time with in-depth statistics.
                        </p>
                        <button className="mt-8 mb-20 font-extrabold py-2 px-4 bg-regal-red rounded-3xl w-60">Join now
                        </button>
                    </div>
                    <div className="max-w-[450px] tb:hidden">
                        <Image src={Promo}/>
                    </div>
                </div>
                <div className="border-b-[10vh] border-b-solid border-b-regal-red
                border-l-[100vw] border-l-solid border-l-transparent bottom-full absolute
                bottom-[-1px] "/>
            </div>
            <div className="bg-regal-red min-h-[420px]"></div>
            <div className="max-w-[1140px] mx-auto h-[420px] p-8">
                <div className="grid grid-cols-search">
                    <div className="grid gap-6 grid-cols-five mt-10 mb-6">
                        <Search/>
                        <Dropdown/>
                        <Dropdown/>
                        <Dropdown/>
                        <Dropdown/>
                    </div>
                    <div className="mt-10 mb-6">
                        option
                    </div>
                </div>
                <div className="font-bold mt-10 mb-5 flex items-center justify-between">
                    <h3 className="uppercase">Trending Now</h3>
                    <div className="text-xs">View All</div>
                </div>
            </div>
        </div>
    )
}
