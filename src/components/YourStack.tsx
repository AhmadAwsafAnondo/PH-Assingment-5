import type { Technology } from "../types/technology";

interface Props {
    stack: Technology[];
    removeFromStack: (id: string) => void;
    removeAll: () => void;
}

function YourStack({
    stack,
    removeFromStack,
    removeAll}: Props) {

    return (

    <div className="bg-white border-gray-900 rounded-2xl p-5 h-fit lg:sticky lg:top-24">


        <div className="flex justify-between">

            <div>

            <h2 className="text-xl font-bold">
                Your Stack
            </h2>

            <p className="text-sm text-gray-500">
                {stack.length} Technology Selected
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
                    className="text-red-500"
                >
                    ✕
                </button>

                </div>

            ))}

            </div>

        )}

        </div>

    );
}

export default YourStack;