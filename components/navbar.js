import Link from "next/link"
import React from "react"

const Navbar = () => {
    return (
        <div className="sticky top-0 z-20 py-2 bg-white md:py-6 md:mb-6 dark:bg-black">
            <div className="container px-4 mx-auto lg:max-w-4xl flex items-center justify-between">
                <Link href="/">
                    <a className={"font-medium tracking-wider transition-colors text-gray-900 hover:text-yellow-500 \
                    lowercase dark:text-white"}>sujithrengan</a>
                </Link>
            </div>
        </div>
    )
}

export default Navbar;