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

  const [technologies, setTechnologies] = useState<Technology[]>([]);

  const [stack, setStack] = useState<Technology[]>([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    fetch("/data/technologies.json")

      .then(response => response.json())

      .then(data => {

        setTechnologies(data);
        setLoading(false);

      });

  }, []);

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


  const removeFromStack = (id: string) => {

    setStack(
      stack.filter(item => item.id !== id)
    );

    toast.info("Technology removed!");
  };

  const removeAll = () => {

    setStack([]);

    toast.info("All technologies removed!");

  };


  return (

    <div className="min-h-screen bg-gray-50">

      <Navbar />

      <Hero />

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


            <YourStack

              stack={stack}

              removeFromStack={removeFromStack}

              removeAll={removeAll}

            />

          </div>

        )}

      </section>


      <Footer />


      <ToastContainer
        position="top-right"
        autoClose={2000}
      />

    </div>

  );
}

export default App;