import { useEffect, useState } from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechnologyCard from "./components/TechnologyCard";
import YourStack from "./components/YourStack";
import Footer from "./components/Footer";

import type { Technology } from "./types/technology";


function App() {

  // All technologies
  const [technologies, setTechnologies] = useState<Technology[]>([]);

  // Selected technologies
  const [stack, setStack] = useState<Technology[]>([]);

  // Loading
  const [loading, setLoading] = useState(true);


  // Load JSON
  useEffect(() => {

    fetch("/data/technologies.json")

      .then(response => response.json())

      .then(data => {

        setTechnologies(data);
        setLoading(false);

      });

  }, []);


  // Add technology
  const addToStack = (technology: Technology) => {

    const alreadyAdded = stack.find(
      item => item.id === technology.id
    );


    if (alreadyAdded) {

      toast.warning("This technology is already added!");

      return;
    }


    setStack([...stack, technology]);

    toast.success(
      `${technology.name} added to your stack!`
    );
  };


  // Remove technology
  const removeFromStack = (id: string) => {

    setStack(
      stack.filter(item => item.id !== id)
    );

    toast.info("Technology removed!");
  };


  // Remove all
  const removeAll = () => {

    setStack([]);

    toast.info("All technologies removed!");

  };


  return (

    <div className="min-h-screen bg-gray-50">

      <Navbar />

      <Hero />


      {/* Technologies */}

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


        {/* Loading */}

        {loading && (

          <div className="text-center py-20">

            <div className="animate-spin w-8 h-8 border-4 border-gray-300 border-t-orange-500 rounded-full mx-auto">
            </div>

            <p className="mt-3">
              Loading technologies...
            </p>

          </div>

        )}


        {/* Main Content */}

        {!loading && (

          <div className="grid lg:grid-cols-[1fr_300px] gap-8 mt-10">


            {/* Cards */}

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">

              {technologies.map(technology => {

                const isAdded = stack.some(
                  item => item.id === technology.id
                );


                return (

                  <TechnologyCard

                    key={technology.id}

                    technology={technology}

                    isAdded={isAdded}

                    addToStack={addToStack}

                  />

                );

              })}

            </div>


            {/* Your Stack */}

            <YourStack

              stack={stack}

              removeFromStack={removeFromStack}

              removeAll={removeAll}

            />

          </div>

        )}

      </section>


      {/* Projects */}

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


      {/* About */}

      <section
        id="about"
        className="max-w-7xl mx-auto px-4 py-16"
      >

        <h2 className="text-3xl font-bold">
          About Dev Stack
        </h2>

        <p className="mt-3 text-gray-600">
          Curated tools, technologies, and resources for developers
          building modern software.
        </p>

      </section>


      {/* Contact */}

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


      <Footer />


      {/* Toast */}

      <ToastContainer
        position="top-right"
        autoClose={2000}
      />

    </div>

  );
}

export default App;