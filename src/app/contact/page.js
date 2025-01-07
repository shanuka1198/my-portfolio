"use client";
import {motion} from "framer-motion";

function Contact(){
    return(
        <>
            <div className="flex justify-center flex-col sm:flex-row items-center sm:items-start">
                <motion.p
                    initial={{opacity: 0, y: 50}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: false, amount: 0.2}}
                    transition={{duration: 1, ease: "easeInOut"}}
                    className="sm:text-6xl sm:my-60 mx-24 my-12 text-center text-3xl font-bold text-yellow-600"
                >
                    CONTACT <span className="text-black">ME</span>
                </motion.p>
                <motion.div
                    initial={{opacity: 0, x: -50}}
                    whileInView={{opacity: 1, x: 0}}
                    viewport={{once: false}}
                    transition={{duration: 1, ease: "easeInOut"}}
                    className="relative shadow-2xl w-full  sm:w-[300px] h-[360px]  sm:h-[443px]  rounded-lg bg-yellow-600 my-8 sm:my-48 order-2 sm:order-none  py-6  sm:py-10"
                >
                    <div className="absolute p-7 left-0 sm:left-3 w-full">
                        <p className="font-extrabold text-xl sm:text-3xl text-center sm:text-left text-black">
                            Let's Connect!
                        </p>
                        <p className="text-sm sm:text-sm text-center sm:text-left text-white mt-4">
                            "I’d love to hear from you! Whether it’s a project idea, a collaboration opportunity,
                            or just a friendly hello,feel free to drop me a message. Let’s create something amazing together!"
                        </p>
                        <div className="mt-6">
                            <p className="font-semibold text-black text-opacity-90 text-sm sm:text-md">
                                <span className="text-white">Email:</span> shanukaimantha0@gmail.com
                            </p>
                            <p className="font-semibold text-black text-opacity-90 text-sm sm:text-md mt-2">
                                <span className="text-white">Phone:</span> 077 388 0132
                            </p>
                        </div>
                        <div className="mt-6 flex justify-center sm:justify-start">
                            <button
                                className="bg-black text-yellow-500 font-bold text-sm px-4 py-2 rounded-full hover:scale-105 transition-transform">
                                Explore More
                            </button>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{opacity: 0, x: 50}}
                    whileInView={{opacity: 1, x: 0}}
                    viewport={{once: false}}
                    transition={{duration: 1, ease: "easeInOut"}}
                    className="flex shadow-2xl rounded-xl justify-center sm:justify-end mt-8 sm:mt-[195px] sm:ml-10 order-1 sm:order-none"
                >
                    <div className="bg-white border shadow-lg rounded-lg w-[380px]  sm:w-[300px]  p-4 ">
                        <h2 className="font-extrabold text-black text-center text-lg sm:text-xl mb-4">
                            Send a Message
                        </h2>
                        <form>
                            <div className="mb-4">
                                <label className="block text-black text-sm font-semibold mb-2" htmlFor="name">
                                    Your Name
                                </label>
                                <input
                                    id="name"
                                    type="text"
                                    placeholder="Enter your name"
                                    className="w-full px-3 py-2 border-2 border-black rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-600"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-black text-sm font-semibold mb-2" htmlFor="email">
                                    Your Email
                                </label>
                                <input
                                    id="email"
                                    type="email"
                                    placeholder="Enter your email"
                                    className="w-full px-3 py-2 border-2 border-black rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-600"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-black text-sm font-semibold mb-2" htmlFor="message">
                                    Your Message
                                </label>
                                <textarea
                                    id="message"
                                    placeholder="Write your message"
                                    rows="4"
                                    className="w-full px-3 py-2 border-2 border-black rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-600"
                                ></textarea>
                            </div>
                            <div className="flex justify-center">
                                <button
                                    type="submit"
                                    className="bg-yellow-500 text-black font-bold text-sm px-4 py-2 rounded-full hover:bg-yellow-600 transition-colors"
                                >
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>
                </motion.div>
            </div>
        </>
    )
}

export default Contact;