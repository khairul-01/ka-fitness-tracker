import { IoRocket } from "react-icons/io5";

const Newsletter = () => {
    return (
        <div className="rounded-lg h-[400px] bg-violet-700 text-white flex flex-col items-center justify-center gap-7">
            <h1 className="text-6xl font-bold">Newsletter</h1>
            <div className="flex w-2/3 justify-center items-center relative">
                <input type="email" placeholder="Email Address" className="input input-bordered input-success p-7 text-black rounded-full w-full " />

                <button className="flex btn absolute right-5">
                    <div className="divider divider-horizontal"></div>
                    Subscribe
                    <IoRocket />
                </button>
            </div>
        </div>
    );
};

export default Newsletter;