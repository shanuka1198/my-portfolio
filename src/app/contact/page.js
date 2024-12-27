
function Contact(){
    return(
        <>
            <div className="flex flex-col sm:flex-row items-center sm:items-start">
                {/* Contact Information */}
                <div
                    className="relative left-5 w-full sm:w-1/2 h-[500px] sm:h-[340px] rounded-lg shadow-lg  bg-yellow-600 my-8 sm:my-48 order-2 sm:order-none"
                >
                    <div className="absolute w-full px-6 sm:px-12 py-10">
                        <p className="font-extrabold text-2xl sm:text-3xl text-center sm:text-left text-black">
                            Let's Connect!
                        </p>
                        <p className="text-md sm:text-lg text-center sm:text-left text-white mt-4">
                            Feel free to get in touch with me for any inquiries, collaborations, or just to say hi!
                        </p>
                        <div className="mt-6">
                            <p className="font-semibold text-black text-opacity-90 text-sm sm:text-md">
                                <span className="text-white">Email:</span> shanuka@example.com
                            </p>
                            <p className="font-semibold text-black text-opacity-90 text-sm sm:text-md mt-2">
                                <span className="text-white">Phone:</span> +94 77 123 4567
                            </p>
                        </div>
                        <div className="mt-8 flex justify-center sm:justify-start">
                            <button
                                className="bg-black text-yellow-500 font-bold text-sm px-4 py-2 rounded-full hover:scale-110 transition-transform">
                                Explore More
                            </button>
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <div
                    className="flex justify-center sm:justify-end mx-12 mt-[400px] sm:mt-[160px] sm:ml-10 order-1 sm:order-none">
                    <div
                        className="bg-white border-2 border-black shadow-lg rounded-lg w-[300px] sm:w-[400px] p-6 transform hover:scale-105 transition-transform"
                    >
                        <h2 className="font-extrabold text-black text-center text-lg sm:text-xl mb-4">
                            Send a Message
                        </h2>
                        <form>
                            <div className="mb-4">
                                <label
                                    className="block text-black text-sm font-semibold mb-2"
                                    htmlFor="name"
                                >
                                    Your Name
                                </label>
                                <input
                                    id="name"
                                    type="text"
                                    placeholder="Enter your name"
                                    className="w-full px-3 py-2 border-2 border-black rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                                />
                            </div>
                            <div className="mb-4">
                                <label
                                    className="block text-black text-sm font-semibold mb-2"
                                    htmlFor="email"
                                >
                                    Your Email
                                </label>
                                <input
                                    id="email"
                                    type="email"
                                    placeholder="Enter your email"
                                    className="w-full px-3 py-2 border-2 border-black rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                                />
                            </div>
                            <div className="mb-4">
                                <label
                                    className="block text-black text-sm font-semibold mb-2"
                                    htmlFor="message"
                                >
                                    Your Message
                                </label>
                                <textarea
                                    id="message"
                                    placeholder="Write your message"
                                    rows="4"
                                    className="w-full px-3 py-2 border-2 border-black rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
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
                </div>
            </div>


        </>
    )
}

export default Contact;