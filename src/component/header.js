import Menu from "@/component/menu";
import SocialMedia from "@/component/social-media";

function Header(){

    return(
        <>
            <div className="w-full relative h-[650px]  ">

                <div className="flex absolute top-6 right-4 sm:top-12 sm:right-1 border-b-2 border-b-yellow-600">
                    <Menu/>
                </div>

                <div className="flex flex-col sm:flex-row-reverse ">

                    <div
                        className="flex justify-center  sm:justify-end sm:mr-40 mx-12 mt-[400px] sm:mt-[160px] order-1 sm:order-none ">
                        <div
                            className="animate-fade-left animate-once animate-delay-[10ms] border-t-8 border-r-8 border-b-zinc-800 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] shadow-2xl shadow-black flex justify-center items-center rounded-full bg-yellow-600">
                            <img className="hover:scale-110 transition-all duration-600 ease-linear"
                                 src="/profile/profile1.png" alt="Profile"/>
                        </div>
                    </div>


                    <div
                        className="relative w-full animate-fade-up animate-once animate-duration-[900ms] animate-delay-[7ms] sm:w-full sm:h-[340px] h-[500px] sm:rounded-r-full shadow-2xl shadow-black bg-yellow-600 my-8 sm:my-48 order-2 sm:order-none">
                        <div className="absolute w-full">
                            <p className="font-bold mt-7 text-xl sm:text-xl flex justify-center text-white text-opacity-70">
                                Hello, It's me
                            </p>
                            <p className="font-bold animate-fade-down animate-once animate-duration-[900ms] animate-delay-[7ms] text-3xl sm:text-5xl flex sm:justify-center md:justify-center justify-center text-white text-opacity-70">
                                SHANUKA IMANTHA
                            </p>
                            <div
                                className="flex animate-fade-right animate-once animate-duration-[900ms] animate-delay-[7ms] flex-col  gap-2">
                                <p className="font-bold sm:text-xl text-sm flex sm:justify-center md:justify-center justify-center  text-white text-opacity-70">And
                                    I am a</p>
                                <p className="font-bold sm:text-xl text-sm flex sm:justify-center md:justify-center justify-center text-black text-opacity-70 animate-pulse">
                                    FULL STACK DEVELOPER
                                </p>
                            </div>
                            <div className="flex mt-3 justify-center items-center">
                                <small
                                    className="text-xs sm:text-[10px] sm:w-[300px] w-[500px] text-center leading-relaxed text-black text-opacity-70">
                                    "Create efficient, user-centered software solutions solving real-world problems
                                    while learning, growing, and contributing to team success."
                                </small>
                            </div>
                            <div className="flex justify-center mt-3">
                                <SocialMedia/>
                            </div>
                            <div className="flex justify-center sm:mt-4 mt-14 animate-fade-up animate-once animate-duration-[900ms] ">
                                <button className="text-xs bg-white p-2 text-amber-700 hover:scale-105 transition-all ease-linear rounded-2xl">Discover My Work</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}

export default Header;