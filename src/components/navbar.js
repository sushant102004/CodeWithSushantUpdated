export default function NavBar() {
    return (
        <>
        <div className='flex justify-between mx-4 lg:mx-14 my-4'>
            <h2 className="font-medium text-slate-800 text-xl mt-0.5 lg:text-2xl">Sushant Dhiman</h2>
            {/* Menu */}
            <ul className="hidden md:flex mt-1.5 text-base text-slate-700">
                <li className='mr-6'><a href="#about-section">About</a></li>
                <li className='mr-6'><a href="/">Projects</a></li>
                <li className='mr-6'><a href="/">Blog</a></li>
                <li className='mr-6'><a href="/">Contact</a></li>
            </ul>
            {/* LinkedIn Button */}
            <div className="flex w-24 h-8 bg-yellow-400 rounded-md justify-center items-center text-sm text-slate-800">
                <a href="https://linkedin.com/in/sushant102004" className="bg-transparent">LinkedIn</a>
            </div>
        </div>
        <hr className='bg-slate-400' style={{height : '0.1rem'}}></hr>
        </>
    )
}