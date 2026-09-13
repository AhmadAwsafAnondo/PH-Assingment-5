import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import technologies from "./technologies.json";

function App() {

  const [data, setData] = useState<any[]>([]);

  const [stack, setStack] = useState<any[]>([]);

  const [loading, setLoading] = useState(true);

  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {

    setTimeout(() => {
      setData(technologies);
      setLoading(false);
    }, 300);

  }, []);

  const addToStack = (technology: any) => {

    const alreadyAdded = stack.find(
      item => item.id === technology.id
    );

    if (alreadyAdded) {
      toast.warning("This technology is already added!");
      return;
    }

    setStack([...stack, technology]);

    toast.success(`${technology.name} added to your stack!`);
  };

  const removeFromStack = (id: string) => {

    const removed = stack.find(item => item.id === id);

    setStack(
      stack.filter(item => item.id !== id)
    );

    toast.info(`${removed.name} removed from your stack!`);
  };

  const removeAll = () => {

    setStack([]);

    toast.info("All technologies removed!");
  };


  return (
    <div className="min-h-screen bg-gray-50">


      <nav className="sticky top-0 z-50 bg-white border-b">

        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-2xl md:hidden"
          >
            ☰
          </button>

          <a
            href="#home"
            className="flex items-center gap-2"
          >

            <div className="gradient-bg w-9 h-9 rounded-lg flex items-center justify-center text-white font-bold">
              DS
            </div>

            <span className="brand-gradient font-bold text-xl">
              Dev Stack
            </span>

          </a>


          <div className="hidden md:flex gap-7">

            <a href="#home">Home</a>

            <a href="#technologies">Technologies</a>

            <a href="#projects">Projects</a>

            <a href="#about">About</a>

            <a href="#contact">Contact</a>

          </div>

          <div className="flex items-center gap-2">

            <button className="hidden sm:block px-3 py-2">
              Sign In
            </button>

            <button className="gradient-bg text-white px-5 py-2 rounded-full">
              Sign Up
            </button>

          </div>

        </div>

        {menuOpen && (

          <div className="md:hidden border-t bg-white p-5">

            <div className="flex flex-col gap-4">

              <a href="#home">Home</a>

              <a href="#technologies">Technologies</a>

              <a href="#projects">Projects</a>

              <a href="#about">About</a>

              <a href="#contact">Contact</a>

            </div>

          </div>

        )}

      </nav>

      <section
        id="home"
        className="max-w-7xl mx-auto px-4 py-20 grid lg:grid-cols-2 gap-10 items-center"
      >

        <div>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight">

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


          <div className="mt-8 flex flex-col sm:flex-row gap-3">

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
            src="/hero-image.png"
            alt="Development"
            className="w-full rounded-3xl"
          />

        </div>

      </section>

      <section
        id="technologies"
        className="max-w-7xl mx-auto px-4 py-16"
      >

        <h2 className="text-3xl font-bold">
          Explore the Technologies
        </h2>

        <p className="text-gray-500 mt-2">
          Pick technologies to build your ideal stack.
        </p>

        {loading && (

          <div className="text-center py-20">

            <div className="animate-spin w-8 h-8 border-4 border-gray-300 border-t-orange-500 rounded-full mx-auto">
            </div>

            <p className="mt-3">
              Loading technologies...
            </p>

          </div>

        )}

        {!loading && (

          <div className="grid lg:grid-cols-[1fr_300px] gap-8 mt-10">

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">

              {data.map(technology => (

                <div
                  key={technology.id}
                  className="bg-white border rounded-2xl p-5 shadow-sm"
                >

                  <div className="flex justify-between items-start">

                    <img
                      src={technology.icon}
                      alt={technology.name}
                      className="w-12 h-12 object-contain"
                    />

                    <span className="bg-orange-50 text-orange-600 text-xs px-3 py-1 rounded-full">
                      {technology.badge}
                    </span>

                  </div>

                  <h3 className="text-xl font-bold mt-5">
                    {technology.name}
                  </h3>

                  <p className="text-gray-600 text-sm mt-2 min-h-[65px]">
                    {technology.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-4">

                    <span className="bg-gray-100 px-3 py-1 rounded-full text-xs">
                      {technology.category}
                    </span>

                    <span className="bg-purple-50 text-purple-600 px-3 py-1 rounded-full text-xs">
                      {technology.difficulty}
                    </span>

                  </div>


                  <p className="mt-4">
                    ⭐ {technology.rating}
                  </p>


                  <button
                    onClick={() => addToStack(technology)}

                    disabled={stack.some(
                      item => item.id === technology.id
                    )}

                    className={`w-full mt-4 py-2 rounded-lg font-medium ${
                      stack.some(
                        item => item.id === technology.id
                      )
                        ? "bg-green-100 text-green-600"
                        : "gradient-bg text-white"
                    }`}
                  >

                    {stack.some(
                      item => item.id === technology.id
                    )
                      ? "✓ Added to Stack"
                      : "Add to Stack"
                    }

                  </button>

                </div>

              ))}

            </div>

            <div className="bg-white border rounded-2xl p-5 h-fit lg:sticky lg:top-24">

              <div className="flex justify-between items-start">

                <div>

                  <h2 className="text-xl font-bold">
                    Your Stack
                  </h2>

                  <p className="text-sm text-gray-500">
                    {stack.length} Technology
                    {stack.length !== 1 && "ies"} Selected
                  </p>

                </div>


                {stack.length > 0 && (

                  <button
                    onClick={removeAll}
                    className="text-red-500 text-sm"
                  >
                    Remove All
                  </button>

                )}

              </div>

              {stack.length === 0 && (

                <div className="text-center py-12">

                  <p className="text-4xl">
                    🧩
                  </p>

                  <p className="mt-4 text-gray-600">
                    No technologies selected yet.
                  </p>

                  <p className="text-sm text-gray-400">
                    Your stack is empty.
                  </p>

                </div>

              )}

              {stack.length > 0 && (

                <div className="mt-5 space-y-3">

                  {stack.map(item => (

                    <div
                      key={item.id}
                      className="flex items-center gap-3 bg-gray-50 p-3 rounded-xl"
                    >

                      <img
                        src={item.icon}
                        alt={item.name}
                        className="w-9 h-9"
                      />


                      <div className="flex-1">

                        <p className="font-semibold">
                          {item.name}
                        </p>

                        <p className="text-xs text-gray-500">
                          {item.category}
                        </p>

                      </div>


                      <button
                        onClick={() => removeFromStack(item.id)}
                        className="text-red-500 font-bold"
                      >
                        ✕
                      </button>

                    </div>

                  ))}

                </div>

              )}

            </div>

          </div>

        )}

      </section>


      <section
        id="projects"
        className="max-w-7xl mx-auto px-4 py-16"
      >

        <h2 className="text-3xl font-bold">
          Projects
        </h2>

        <p className="mt-2 text-gray-600">
          Build amazing projects with your selected stack.
        </p>

      </section>


      <section
        id="about"
        className="max-w-7xl mx-auto px-4 py-16"
      >

        <h2 className="text-3xl font-bold">
          About Dev Stack
        </h2>

        <p className="mt-3 max-w-2xl text-gray-600">
          Curated tools, technologies, and resources for developers
          building modern software.
        </p>

      </section>


      <section
        id="contact"
        className="max-w-7xl mx-auto px-4 py-16"
      >

        <h2 className="text-3xl font-bold">
          Contact
        </h2>

        <p className="mt-2 text-gray-600">
          Have a question? Get in touch with us.
        </p>

      </section>


      <footer className="bg-white border-t">

        <div className="max-w-7xl mx-auto px-4 py-12 grid md:grid-cols-4 gap-10">


          <div>

            <div className="flex items-center gap-2">

              <div className="gradient-bg w-9 h-9 rounded-lg flex items-center justify-center text-white font-bold">
                DS
              </div>

              <span className="brand-gradient font-bold text-xl">
                Dev Stack
              </span>

            </div>

            <p className="text-gray-500 text-sm mt-4">
              Curated tools, technologies, and resources for developers.
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

      <ToastContainer
        position="top-right"
        autoClose={2000}
      />

    </div>
  );
}

export default App;