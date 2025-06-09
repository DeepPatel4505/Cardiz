import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Plus, Minus } from "lucide-react";
import { useSpadeOf3Context } from "../../context/SpadeOf3Context";
import { p } from "framer-motion/client";


const Spade3SetupPage1 = () => { 
    const navigate = useNavigate();
    const { dispatch } = useSpadeOf3Context();

    const [playerCount, setPlayerCount] = useState(5);
    const [maxCards, setMaxCards] = useState(10);
    const [totalRounds, setTotalRounds] = useState(50);

    useEffect(() => {
        const computedMax =
            Math.min(Math.floor(52 / playerCount), 13) * playerCount;
        setMaxCards(computedMax); // cap only if needed
    }, [playerCount]);

    const updateStateAndNext = () => {
        dispatch({
            type: "SETUP_GAME",
            payload: {
                players: Array.from({ length: playerCount }, (_, i) => ({
                    name: `Player ${i + 1}`,
                    id: i + 1,
                })),
                maxCards,
                eachRoundCards : Math.floor(maxCards / playerCount),
                totalRounds,
                number_of_players: playerCount,
            },
        });
        navigate("/spade-of-3/setup/players");
    };

    const control = (label, value, setValue, min, max, disabled = false) => (
        <div className="bg-gray-800 p-4 pb-6 rounded-md text-center">
            <p className="text-sm text-gray-400">{label}</p>
            <div className="flex justify-center gap-4 items-center">
                {!disabled ? (
                    <Button
                        variant="outline"
                        className="bg-gray-700 w-14 h-14 p-0 flex items-center justify-center rounded"
                        onClick={() =>
                            setValue((prev) => Math.max(min, prev - 1))
                        }
                        type="button"
                        disabled={value <= min || disabled}
                    >
                        <Minus strokeWidth={2} />
                    </Button>
                ) : null}
                <span className="text-5xl font-bold w-16 text-center inline-block select-none">
                    {value}
                </span>
                {!disabled ? (
                    <Button
                        variant="outline"
                        className="bg-gray-700 w-14 h-14 p-0 flex items-center justify-center rounded"
                        disabled={value >= max || disabled}
                        onClick={() =>
                            setValue((prev) => Math.min(max, prev + 1))
                        }
                        size="icon"
                    >
                        <Plus strokeWidth={2} />
                    </Button>
                ) : null}
            </div>
        </div>
    );

    return (
        <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center px-6 py-10">
            <div className="max-w-4xl w-full space-y-8">
                <h2 className="text-3xl font-bold text-center">
                    Game Setup - Step 1
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                    {control("Players", playerCount, setPlayerCount, 5, 8)}
                    {control(
                        "Total Cards",
                        maxCards,
                        setMaxCards,
                        6,
                        Math.min(Math.floor(52 / playerCount), 13) *
                            playerCount,
                        true
                    )}

                    {control("Rounds", totalRounds, setTotalRounds, 1, 50)}
                </div>

                <div className="text-center pt-6">
                    <Button
                        className="w-full sm:min-w-36 sm:w-auto text-4xl font-light py-7 bg-blue-600 hover:bg-blue-700"
                        onClick={updateStateAndNext}
                    >
                        Next
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Spade3SetupPage1;
