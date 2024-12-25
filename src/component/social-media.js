import {FaLinkedin, FaSquareFacebook, FaSquareGithub, FaSquareInstagram} from "react-icons/fa6";
function SocialMedia(){
    return(
        <>
            <ul className="flex gap-7">
                <ol className="animate-fade-up animate-once animate-duration-[900ms] animate-delay-[10ms] w-8 h-8 bg-white rounded-full flex hover:scale-110 transition-all duration-100 ease-linear justify-center cursor-pointer items-center">
                    <span><FaSquareFacebook /></span>
                </ol>
                <ol className="animate-fade-up animate-once animate-duration-[1400ms] animate-delay-[10ms] w-8 h-8 bg-white rounded-full flex hover:scale-110 transition-all duration-100 ease-linear justify-center cursor-pointer items-center">
                    <span><FaSquareInstagram /></span>
                </ol>
                <ol className="animate-fade-up animate-once animate-duration-[1900ms] animate-delay-[10ms] w-8 h-8 bg-white rounded-full flex hover:scale-110 transition-all duration-100 ease-linear justify-center cursor-pointer items-center">
                    <span><FaSquareGithub /></span>
                </ol>
                <ol className="animate-fade-up animate-once animate-duration-[2400ms] animate-delay-[10ms] w-8 h-8 bg-white rounded-full flex hover:scale-110 transition-all duration-100 ease-linear justify-center cursor-pointer items-center">
                    <span><FaLinkedin /></span>
                </ol>
            </ul>
        </>
    )
}
export default SocialMedia;