import Link from 'next/link';
import Image from 'next/image';


const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-gray-800 to-gray-900 text-white py-2 px-4 shadow-lg shadow-cyan-500/50 rounded-t-none rounded-bl-lg rounded-br-lg">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/home">
          <span>
            <Image
              src="/osraaa.png"
              alt="Logo"
              width={80}
              height={80}
            />
          </span>
        </Link>
        <div>
       
          <Link href="/projects">
            <span className="mr-4 cursor-pointer hover:text-yellow-600 transition-colors">Projectss</span>
          </Link>
          <Link href="/contactpage">
            <span className="cursor-pointer hover:text-yellow-600 transition-colors">Contact</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;