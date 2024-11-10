import Image from "next/image";

export function Hero() {
    return (
        <div className="flex flex-col gap-8 items-center justify-between">
            <div className="flex flex-row gap-3 items-center drop-shadow-[#4379BC]">
                <Image src={"/apple-touch-icon.png"} width={100} height={100} alt="exo" className="w-[2rem] sm:w-[3rem] md:w-[4rem] lg:w-[5rem] hover:glitch" priority fetchPriority="high"  />
                <h1 className="dark:header-dark header uppercase">
                    exo
                </h1>
            </div>
            <ul className="font-suse font-semibold tracking-wide max-w-xl flex flex-col items-stretch justify-between text-opacity-75 w-full gap-2 text-sm md:text-base 2xl:text-lg *:z-10">
                <li className="mr-12 bg-blend-hard-light dark:text-blue-500 text-zinc-600 hover:text-inherit transition-colors duration-700 ease-in-out dark:hover:text-cyan-500">
                    Share content that is personally designable 
                </li>
                <li className="ml-12 bg-blend-color-dodge dark:text-blue-600/75 text-zinc-500 hover:text-inherit transition-colors duration-700 ease-in-out dark:hover:text-cyan-600/75">
                    A creative canvas where you create your own tools
                </li>
                <li className="mr-6 bg-blend-color-burn dark:text-blue-500/80 text-zinc-500/75 hover:text-inherit transition-colors duration-700 ease-in-out dark:hover:text-cyan-500/80">
                    You choose how to display your content
                </li>
                <div className="scanlines" />
            </ul>
        </div>
    )
}