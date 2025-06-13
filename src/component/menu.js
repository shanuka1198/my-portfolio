

function Menu(){
    return (
        <div>
            <ul className="flex flex-col sm:flex-row sm:gap-8 gap-2 items-center sm:items-start">
                <li className="animate-fade-up animate-once animate-duration-[900ms] animate-delay-[7ms] w-full sm:w-auto p-2 h-10 hover:bg-yellow-600 rounded-t cursor-pointer transition-all duration-300 ease-in-out text-center sm:text-left">Home</li>

                    <li onClick={()=>{
                        window.scrollTo({ top: 680, behavior: "smooth" })
                    }} className="animate-fade-up animate-once animate-duration-[900ms] animate-delay-[7ms] sm:w-auto p-2 h-10 hover:bg-yellow-600 rounded-t cursor-pointer transition-all duration-300 ease-in-out text-center sm:text-left">About</li>


                <li onClick={()=>{
                    window.scrollTo({ top: 1780, behavior: "smooth" })
                }} className=" animate-fade-up animate-once animate-duration-[900ms] animate-delay-[7ms] w-full sm:w-auto p-2 h-10 hover:bg-yellow-600 rounded-t cursor-pointer transition-all duration-300 ease-in-out text-center sm:text-left">Project</li>


                <li onClick={()=>{
                    window.scrollTo({ top: 2700, behavior: "smooth" })
                }} className=" animate-fade-up animate-once animate-duration-[900ms] animate-delay-[7ms] w-full sm:w-auto p-2 h-10 hover:bg-yellow-600 rounded-t cursor-pointer transition-all duration-300 ease-in-out text-center sm:text-left">Skills</li>


                <li onClick={()=>{
                    window.scrollTo({ top: 3550, behavior: "smooth" })
                }} className=" animate-fade-up animate-once animate-duration-[900ms] animate-delay-[7ms] w-full sm:w-auto p-2 h-10 hover:bg-yellow-600 rounded-t cursor-pointer transition-all duration-300 ease-in-out text-center sm:text-left">Certificate</li>


                <li onClick={()=>{
                    window.scrollTo({ top: 4350, behavior: "smooth" })
                }} className=" animate-fade-up animate-once animate-duration-[900ms] animate-delay-[7ms] w-full sm:w-auto p-2 h-10 hover:bg-yellow-600 rounded-t cursor-pointer transition-all duration-300 ease-in-out text-center sm:text-left">Contact</li>


            </ul>

        </div>
    )
}

export default Menu;