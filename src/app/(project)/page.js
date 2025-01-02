import {motion} from "framer-motion";

function Project(){
    return(
        <>
            <div
                className="flex flex-col sm:flex-row justify-center items-center sm:gap-6 gap-4 p-6 bg-opacity-70 bg-yellow-600">
                <div className="sm:w-[600px] flex justify-center w-full rounded-3xl sm:h-[600px] h-[150px] bg-white">
                    <motion.p
                        initial={{opacity: 0, y: 50}}
                        whileInView={{opacity: 1, y: 0}}
                        viewport={{once: false, amount: 0.2}}
                        transition={{duration: 1, ease: "easeInOut"}}
                        className="sm:text-6xl sm:my-60 mx-24 my-12 text-center text-3xl font-bold text-yellow-600"
                    >
                        MY<span className="text-black"> PROJECT</span>
                    </motion.p>
                </div>
                <motion.div
                    initial={{opacity: 0, x: 50}}
                    whileInView={{opacity: 1, x: 0}}
                    viewport={{once: false}}
                    transition={{duration: 0.2, ease: "easeInOut"}}
                    className="w-full sm:w-[300px] bg-yellow-100 my-20 hover:scale-105 transition-all duration-300 ease-linear rounded-xl shadow-lg overflow-hidden">
                    <img
                        src="/profile/Screenshot from 2024-12-28 20-04-09.png"
                        alt="Image 1"
                        className="w-full h-[200px] object-cover"
                    />
                    <div className="p-4 bg-yellow-50 h-[250px] flex flex-col justify-between">
                        <h3 className="text-yellow-800 font-bold text-lg mb-2">My Portfolio Web Site</h3>
                        <p className="text-sm text-gray-700 overflow-hidden text-ellipsis h-[80px]">
                            This portfolio website was created by me to showcase professional skills, projects, and achievements. It
                            reflects creativity, technical expertise, and attention to detail.
                        </p>
                        <button
                            className="w-full mt-4 bg-yellow-600 text-white font-semibold py-2 rounded-lg shadow-md hover:bg-yellow-700 transition-all duration-300 ease-linear">
                            Learn More
                        </button>
                    </div>
                </motion.div>

                <motion.div
                    initial={{opacity: 0, x: 50}}
                    whileInView={{opacity: 1, x: 0}}
                    viewport={{once: false}}
                    transition={{duration: 0.8, ease: "easeInOut"}}
                    className="w-full sm:w-[300px] bg-yellow-100 my-20 hover:scale-105 transition-all duration-300 ease-linear rounded-xl shadow-lg overflow-hidden">
                    <img
                        src="/profile/Screenshot from 2024-12-28 20-06-30.png"
                        alt="Image 2"
                        className="w-full h-[200px] object-cover"
                    />
                    <div className="p-4 bg-yellow-50 h-[250px] flex flex-col justify-between">
                        <h3 className="text-yellow-800 font-bold text-lg mb-2">Anantra Resort Hotel and Spa Booking System</h3>
                        <p className="text-sm text-gray-700 overflow-hidden text-ellipsis h-[80px]">
                            Anantra Resort Hotel and Spa booking project, developed by me, features a seamless reservation system and
                            user-friendly interfaces.
                        </p>
                        <button
                            className="w-full mt-4 bg-yellow-600 text-white font-semibold py-2 rounded-lg shadow-md hover:bg-yellow-700 transition-all duration-300 ease-linear">
                            Learn More


                        </button>
                    </div>
                </motion.div>
            </div>
        </>
    )
}

export default Project;