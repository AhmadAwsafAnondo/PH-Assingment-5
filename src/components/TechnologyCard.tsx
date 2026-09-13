import type { Technology } from "../types/technology";

interface Props {
    technology: Technology;
    isAdded: boolean;
    addToStack: (technology: Technology) => void;
}

function TechnologyCard({
    technology,
    isAdded,
    addToStack
}: Props) {

    return (

    <div className="bg-white border rounded-2xl p-5 shadow-sm">


        <div className="flex justify-between items-start">

        <img
            src={technology.icon}
            alt={technology.name}
            className="w-12 h-12 object-contain"
        />

        <span className="bg-orange-50 text-orange-600 px-3 py-1 rounded-full text-xs">
            {technology.badge}
        </span>

        </div>


        <h3 className="text-xl font-bold mt-5">
            {technology.name}
        </h3>


        <p className="text-gray-600 text-sm mt-2 min-h-[65px]">
        {technology.description}
        </p>


        <div className="flex gap-2 mt-4">

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
            disabled={isAdded}
            className={`w-full mt-4 py-2 rounded-lg ${
            isAdded
            ? "bg-green-100 text-green-600"
            : "gradient-bg text-white"
        }`}>

        {isAdded
            ? "✓ Added to Stack"
            : "Add to Stack"
        }

        </button>

        </div>
    );
}

export default TechnologyCard;