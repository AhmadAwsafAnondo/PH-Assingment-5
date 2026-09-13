function Hero() {

    return (

        <section
        id="home"
        className="max-w-7xl mx-auto px-4 py-20 grid lg:grid-cols-2 gap-10 items-center"
        >

        <div>

            <h1 className="text-4xl md:text-6xl font-bold">

            Build Your Ideal

            <br />

            <span className="brand-gradient">
                Development Stack
            </span>

            </h1>


            <p className="mt-6 text-gray-600 text-lg max-w-xl">

            Explore frontend, backend, database, and tooling options,
            compare them side by side, and put together the stack that
            fits your next project.

            </p>


            <div className="mt-8 flex gap-3 flex-col sm:flex-row">

            <a
                href="#technologies"
                className="gradient-bg text-white px-6 py-3 rounded-full text-center"
            >
                Explore Technologies
            </a>


            <a
                href="#about"
                className="border px-6 py-3 rounded-full text-center"
            >
                Learn More
            </a>

            </div>

        </div>

        <div>

            <img
            src="../assets/banner-stack.png"
            alt=""
            className="w-full rounded-3xl"
            />

        </div>

        </section>

    );
}

export default Hero;