import { FaLinkedinIn, FaPhone, FaFacebookF, FaTwitter, FaEnvelope } from 'react-icons/fa';
import Image from 'next/image';
import Kontanctme from '@/components/Kontanctme';
import Navbar from '@/components/Navbar';
import Link from 'next/link';

const Footer: React.FC = () => {
    return (
        <div>
       
         <div className="flex justify-center fixed top-[100px] md:top-1/4 left-0 right-0 z-50    ">
    <Kontanctme/>
</div>

            <footer className="bg-gradient-to-r from-gray-800 to-gray-900 fixed bottom-0 w-full h-2/3 ">
                <div className="flex justify-center items-center pt-40 ">
                <Link href="/home">
                    <Image
                        src="/osraaa.png"
                        alt="Logo"
                        width={80}
                        height={80}
                        
                    />
                    </Link>
                </div>
                <div className="flex justify-center items-center pt-4 pb-8 text-2xl">
                    <h1 className='text-cyan-700 text-center leading-relaxed'>
                        Living, learning, & leveling up <br />one day at a time.
                    </h1>
                </div>
                <div>
                </div>
                <ul className="flex justify-center space-x-4 mt-4">
                    <li>
                        <div className="p-2 rounded-full border border-[#d6ae57] hover:bg-[#d6ae57] transition duration-500 ease-in-out">
                            <a href="https://www.linkedin.com/">
                                <FaLinkedinIn className="w-6 h-6 text-white hover:text-gray-900" />
                            </a>
                        </div>
                    </li>
                    <li>
                        <div className="p-2 rounded-full border border-[#d6ae57] hover:bg-[#d6ae57] transition duration-500 ease-in-out ">
                            <a href="tel:+1234567890">
                                <FaPhone className="w-6 h-6 text-white hover:text-gray-900" />
                            </a>
                        </div>
                    </li>
                    <li>
                        <div className="p-2 rounded-full border border-[#d6ae57] hover:bg-[#d6ae57] transition duration-500 ease-in-out ">
                            <a href="https://www.facebook.com/">
                                <FaFacebookF className="w-6 h-6 text-white hover:text-gray-900" />
                            </a>
                        </div>
                    </li>
                    <li>
                        <div className="p-2 rounded-full border border-[#d6ae57] hover:bg-[#d6ae57] transition duration-500 ease-in-out">
                            <a href="https://twitter.com/">
                                <FaTwitter className="w-6 h-6 text-white hover:text-gray-900" />
                            </a>
                        </div>
                    </li>
                    <li>
                        <div className="p-2 rounded-full border border-[#d6ae57] hover:bg-[#d6ae57] transition duration-500 ease-in-out ">
                            <a href="mailto:osradk@gmail.com">
                                <FaEnvelope className="w-6 h-6 text-white hover:text-gray-900" />
                            </a>
                        </div>
                    </li>
                </ul>
            </footer>
        </div>
    );
};

export default Footer;
