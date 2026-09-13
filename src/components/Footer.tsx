function Footer() {

    return (

    <footer className="bg-white border-t">

        <div className="max-w-7xl mx-auto px-4 py-12 grid md:grid-cols-4 gap-10">


        <div>

            <div className="flex items-center gap-2">

                <div className="gradient-bg w-9 h-9 rounded-lg flex items-center justify-center text-white font-bold">
                DS
                </div>

                <span className="brand-gradient text-xl font-bold">
                Dev Stack
                </span>

            </div>


            <p className="text-gray-500 text-sm mt-4">
                Curated tools, technologies, and resources for developers
                building modern software.
            </p>


            <div className="flex gap-4 mt-4">

                <a href="#">GitHub</a>

                <a href="#">Twitter</a>

                <a href="#">LinkedIn</a>

            </div>

        </div>


        <div>

            <h3 className="font-bold">
                PRODUCT
            </h3>

            <div className="flex flex-col gap-3 mt-4 text-gray-500">

                <a href="#home">Home</a>

                <a href="#technologies">
                Technologies
                </a>

                <a href="#projects">
                Projects
                </a>

            </div>

        </div>


        <div>

            <h3 className="font-bold">
                COMPANY
            </h3>

            <div className="flex flex-col gap-3 mt-4 text-gray-500">

                <a href="#about">About</a>

                <a href="#contact">Contact</a>

                <a href="#">
                Careers
                </a>

            </div>

        </div>


            <div>

            <h3 className="font-bold">
                LEGAL
            </h3>

            <div className="flex flex-col gap-3 mt-4 text-gray-500">

                <a href="#">
                Privacy Policy
                </a>

                <a href="#">
                Terms of Service
                </a>

            </div>

            </div>

        </div>


        <div className="border-t">

            <div className="max-w-7xl mx-auto px-4 py-5 flex flex-col md:flex-row justify-between gap-3 text-sm text-gray-500">

            <p>
                © 2026 Dev Stack. All rights reserved.
            </p>

            <div className="flex gap-5">

                <a href="#">Privacy</a>

                <a href="#">Terms</a>

            </div>

            </div>

        </div>

        </footer>

    );
}

export default Footer;