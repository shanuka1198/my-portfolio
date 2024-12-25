import Link from "next/link";

function Menu(){
    return (
        <div>
            <ul className="flex flex-col sm:flex-row sm:gap-8 gap-2 items-center sm:items-start">
                <li className="animate-fade-up animate-once animate-duration-[900ms] animate-delay-[7ms] w-full sm:w-auto p-2 h-10 hover:bg-yellow-600 rounded-t cursor-pointer transition-all duration-300 ease-in-out text-center sm:text-left">Home</li>
                <Link href="/about">
                    <li className="animate-fade-up animate-once animate-duration-[900ms] animate-delay-[7ms] sm:w-auto p-2 h-10 hover:bg-yellow-600 rounded-t cursor-pointer transition-all duration-300 ease-in-out text-center sm:text-left">About</li>
                </Link>
                <Link href="/project">
                <li className=" animate-fade-up animate-once animate-duration-[900ms] animate-delay-[7ms] w-full sm:w-auto p-2 h-10 hover:bg-yellow-600 rounded-t cursor-pointer transition-all duration-300 ease-in-out text-center sm:text-left">Project</li>
                </Link>
                <Link href="/skills">
                    <li className=" animate-fade-up animate-once animate-duration-[900ms] animate-delay-[7ms] w-full sm:w-auto p-2 h-10 hover:bg-yellow-600 rounded-t cursor-pointer transition-all duration-300 ease-in-out text-center sm:text-left">Skills</li>
                </Link>
                <Link href="/certificate">
                    <li className=" animate-fade-up animate-once animate-duration-[900ms] animate-delay-[7ms] w-full sm:w-auto p-2 h-10 hover:bg-yellow-600 rounded-t cursor-pointer transition-all duration-300 ease-in-out text-center sm:text-left">Certificate</li>
                </Link>
                <Link href="/contact">
                    <li className=" animate-fade-up animate-once animate-duration-[900ms] animate-delay-[7ms] w-full sm:w-auto p-2 h-10 hover:bg-yellow-600 rounded-t cursor-pointer transition-all duration-300 ease-in-out text-center sm:text-left">Contact</li>
                </Link>

            </ul>

        </div>
    )
}

export default Menu;