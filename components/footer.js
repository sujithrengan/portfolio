import React from "react";

const Footer = () => {
    return (
        <div className="mt-6 lg:mt-6 sm:pb-6 sm:py-6 py-6 dark:bg-black sticky top-[100vh]">
            <div className="max-w-4xl px-4 mx-auto text-gray-800 dark:text-white ">
                <div className="flex flex-col justify-between lg:flex-row items-center ">
                    <p>Built with Next.js, Tailwind and ❤️</p>
                    <div className="flex flex-wrap pt-2 sm:space-x-4 space-x-2 font-medium lg:pt-0">
                        <a href="#" className={"transition-colors hover:text-twitter-blue"} target="_blank" rel="noreferrer">Twitter</a>
                        <a href="#" className={"transition-colors hover:text-yellow-500"} target="_blank" rel="noreferrer">LinkedIn</a>
                        <a href="#" className={"transition-colors hover:text-yellow-500"} target="_blank" rel="noreferrer">GitHub</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;