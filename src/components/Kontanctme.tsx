import Link from "next/link";

const Kontanctme: React.FC = () => {
    return (
        <div className="w-full md:w-3/4 md:h-[200px] flex flex-col md:flex-row justify-around items-center bg-[#f8f8f8] rounded-lg m-4 p-8 shadow-lg shadow-cyan-500/50 mb-[-100px] z-20">
            <span className="font-bold text-2xl lg:text-xl  text-cyan-800">Start a project</span>
            <p className="text-cyan-900 leading-loose text-center md:w-2/3 lg:text-sm">
                Interested in working together? We should queue up a time to chat.{" "}
                <br />
                I’ll buy the coffee.
            </p>
            <Link href="/form">
                <button className="bg-cyan-700 shadow-lg shadow-gray-500/50 inline-block border text-white py-3 px-8 rounded-full hover:bg-white hover:text-gray-900 transition duration-500 ease-in-out text-shadow mt-4 md:mt-0">
                    Let's do this
                </button>
            </Link>
        </div>
    );
};

export default Kontanctme;
