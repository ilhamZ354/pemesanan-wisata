
export default function Footer() {
    return(
                
            <footer className="bg-white">
                <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                    <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0">
                        <a href="#" className="flex items-center">
                            <img src="/images/logo.png" className="h-8 me-3" alt="Logo" fetchPriority="high" />
                            <span className="self-center text-2xl text-sky-800 font-semibold whitespace-nowrap">MasTRIP</span>
                        </a>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Support</h2>
                            <ul className="text-gray-500 font-medium">
                                <li className="mb-4">
                                    <a href="https://www.freepik.com/" className="hover:underline">Freepik</a>
                                </li>
                                <li>
                                    <a href="https://id.pinterest.com/" className="hover:underline">Pinterest</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Follow Me</h2>
                            <ul className="text-gray-500 font-medium">
                                <li className="mb-4">
                                    <a href="https://github.com/ilhamZ354" className="hover:underline ">Github</a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/in/ilham-zukhri/" className="hover:underline">Linkedin</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Legal</h2>
                            <ul className="text-gray-500">
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Privacy Policy</a>
                                </li>
                                <li>
                                    <a href="#" className="hover:underline">Terms &amp; Conditions</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm text-gray-500 sm:text-center">© 2024 <a href="https://flowbite.com/" className="hover:underline">Ilham Zukhri™</a>. All Rights Reserved.
                    </span>
                </div>
                </div>
            </footer>

    )
}