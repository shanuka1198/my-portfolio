"use client";
import React from "react";
import { motion } from "framer-motion";

function Certificate() {
    return (
        <>
            <div className="sm:m-10 m-5 flex-row sm:flex">

                <motion.p
                    initial={{opacity: 0, y: 50}} // Start below the viewport
                    whileInView={{opacity: 1, y: 0}} // Animate to visible state
                    viewport={{once: false, amount: 0.2}} // Trigger animation every time it's 20% in the viewport
                    transition={{duration: 1, ease: "easeInOut"}}
                    className="sm:text-6xl sm:my-60 my-12 text-center text-3xl font-bold text-yellow-600"
                >
                    CERTIFIC<span className="text-black">ATE</span>
                </motion.p>



                <motion.div
                    initial={{opacity: 0, x: -50}}
                    whileInView={{opacity: 1, x: 0}}
                    viewport={{once: false}}
                    transition={{duration: 0.8, ease: "easeInOut"}}
                    className="w-full sm:w-full hover:scale-105 transition-all duration-300 ease-linear rounded-3xl shadow-2xl sm:m-5 m-2 bg-opacity-70 h-[700px] bg-yellow-600"
                >
                    <div className="flex flex-row">
                        <div className="hover:scale-105 transition-all duration-300 ease-linear p-10 w-[400px] h-[600px]">
                            <img
                                className="w-[200px] h-[300px]"
                                src="/profile/certifi.jpg"
                                alt="Certificate"
                            />
                            <small className="w-[400px] text-xs">
                                I am thrilled to share that I have successfully completed my Diploma in Comprehensive
                                Master Java Developer. 🎓
                                This rigorous program has significantly enhanced my expertise in Java development and
                                strengthened my grasp
                                of core software engineering principles. I am looking forward to leveraging these skills
                                to deliver impactful
                                and efficient solutions in the tech world. 💻🚀 A big thank you to everyone who supported
                                me throughout this
                                incredible journey. The road ahead is full of exciting opportunities, and I can’t wait
                                to embrace them. 🌟
                            </small>
                        </div>
                    </div>
                </motion.div>


                <motion.div
                    initial={{opacity: 0, x: 50}}
                    whileInView={{opacity: 1, x: 0}}
                    viewport={{once: false}}
                    transition={{duration: 0.8, ease: "easeInOut"}}
                    className="w-full sm:w-full my-32 hover:scale-105 transition-all duration-300 ease-linear rounded-3xl shadow-2xl sm:m-5 m-2 bg-opacity-70 h-[700px] bg-yellow-600"
                >
                    <div className="flex flex-row">
                        <div className="p-10 hover:scale-105 transition-all duration-300 ease-linear w-[400px] h-[600px]">
                            <img
                                className="w-[200px] h-[300px]"
                                src="/profile/certificate-nsbm.jpeg"
                                alt="Certificate"
                            />
                            <small className="w-[400px] text-xs">
                                I pursued a degree in Accounting and Finance at NSBM Green University,
                                where I gained a strong foundation in financial management, auditing,
                                and corporate accounting. The program enhanced my analytical and problem-solving skills,
                                while also providing hands-on experience with financial modeling and reporting.
                                Through coursework and practical projects, I developed a deep understanding of business operations,
                                investment strategies, and financial decision-making. This academic journey has equipped
                                me with the knowledge and confidence to excel in dynamic and challenging financial environments.
                            </small>
                        </div>
                    </div>
                </motion.div>
            </div>
        </>
    );
}

export default Certificate;
