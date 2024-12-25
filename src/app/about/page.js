
function About(){
    return(
        <>
            <div className="flex flex-col">
                <div
                    className="relative  sm:top-[20px] top-[600px] rounded-2xl shadow-black w-full sm:shadow-2xl sm:shadow-black  sm:h-[150px] h-[100px] bg-yellow-600 ">
                    <div
                        className="absolute sm:bottom-7 bottom-12 sm:left-3 left-2 animate-fade-left animate-once animate-delay-[10ms] border-t-8 border-r-8 border-b-zinc-800 w-[150px] h-[150px] sm:w-[350px] sm:h-[350px] shadow-2xl shadow-black flex justify-center items-center rounded-full bg-yellow-600">
                        <img src="/profile/my-pic-new.png"/>
                    </div>
                    <div className=" flex justify-center">
                        <p className="sm:my-10 my-10 font-bold text-xl sm:text-6xl"><span
                            className="text-white">ABOUT </span>ME</p>
                    </div>
                </div>
                <div className="flex justify-center sm:mt-7 mt-[550px]">
                    <div
                        className="w-full flex justify-center items-center m-[300px] shadow-2xl  border rounded-3xl mt-20 h-[300px] bg-amber-50">
                        <p className=" sm:text-xl text-sm w-[700px] p-5 ">"I am <span className="sm:text-2xl text-xl text-yellow-600 font-bold">Shanuka Imantha. </span>I am a dedicated
                        software engineer with experience in designing and developing robust applications.
                        Proficient in multiple programming languages and frameworks, I thrive in collaborative
                        environments and am passionate about problem-solving. With a keen eye for detail and a
                        commitment to continuous learning, I strive to deliver high-quality software solutions that meet and exceed
                        user expectations."</p>
                    </div>
                </div>
            </div>


        </>
    )
}

export default About;