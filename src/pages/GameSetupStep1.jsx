import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useJudgement } from "@/context/JudgementContext";
import { Button } from "@/components/ui/button";
import { Plus, Minus } from "lucide-react";

export default function GameSetupStep1() {
    const navigate = useNavigate();
    const { gameState, setGameState } = useJudgement();

    const [playerCount, setPlayerCount] = useState(
        gameState.players.length || 4
    );
    const [maxCards, setMaxCards] = useState(13);
    const [totalRounds, setTotalRounds] = useState(gameState.totalRounds || 13);

    useEffect(() => {
        const computedMax = Math.min(Math.floor(52 / playerCount), 13);
        setMaxCards(computedMax); // cap only if needed
    }, [playerCount]);

    const updateStateAndNext = () => {
        const players = Array(playerCount)
            .fill("")
            .map((_, i) => `Player ${i + 1}`);
        setGameState((prev) => ({
            ...prev,
            players,
            maxCards,
            totalRounds,
            number_of_players: playerCount,
        }));
        navigate("/judgement/setup/players");
    };

    const control = (label, value, setValue, min, max) => (
        <div className="bg-gray-800 p-4 pb-6 rounded-md text-center">
            <p className="text-sm text-gray-400">{label}</p>
            <div className="flex justify-center gap-4 items-center">
                <Button
                    variant="outline"
                    className="bg-gray-700 w-14 h-14 p-0 flex items-center justify-center rounded"
                    onClick={() => setValue((prev) => Math.max(min, prev - 1))}
                    type="button"
                >
                    <Minus strokeWidth={2} />
                </Button>
                <span className="text-5xl font-bold w-16 text-center inline-block select-none">
                    {value}
                </span>
                <Button
                    variant="outline"
                    className="bg-gray-700 w-14 h-14 p-0 flex items-center justify-center rounded"
                    disabled={value >= max}
                    onClick={() => setValue((prev) => Math.min(max, prev + 1))}
                    size="icon"
                >
                    <Plus strokeWidth={2} />
                </Button>
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
                    {control("Players", playerCount, setPlayerCount, 4, 8)}
                    {control(
                        "Max Cards",
                        maxCards,
                        setMaxCards,
                        6,
                        Math.min(Math.floor(52 / playerCount), 13)
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
}
