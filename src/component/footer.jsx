
function Footer(){
    return(
        <>
            <footer className="bg-yellow-600 text-white py-8">
                <div className="container mx-auto px-6 sm:px-12">
                    <div className="flex flex-col sm:flex-row justify-between items-center">

                        <div className="mb-4 sm:mb-0">
                            <h3 className="text-xl font-bold">Shanuka Imantha</h3>
                            <p className="text-sm">Full Stack Developer</p>
                        </div>


                        <div className="flex space-x-4 mb-4 sm:mb-0">
                            <a href="#" className="text-white hover:text-yellow-200 transition-all duration-300">
                                <i className="fab fa-facebook"></i>
                            </a>
                            <a href="#" className="text-white hover:text-yellow-200 transition-all duration-300">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href="#" className="text-white hover:text-yellow-200 transition-all duration-300">
                                <i className="fab fa-linkedin"></i>
                            </a>
                            <a href="#" className="text-white hover:text-yellow-200 transition-all duration-300">
                                <i className="fab fa-github"></i>
                            </a>
                        </div>


                        <div className="text-center sm:text-right">
                            <p className="text-sm">Email: shanukaimantha0@gmail.com</p>
                            <p className="text-sm">Phone: 077 388 0132</p>
                        </div>
                    </div>


                    <div className="mt-6 text-center">
                        <p className="text-sm">&copy; 2024 Shanuka Imantha. All Rights Reserved.</p>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;