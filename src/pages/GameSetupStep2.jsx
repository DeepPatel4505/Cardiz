import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useJudgement } from "@/context/JudgementContext";
import { Button } from "@/components/ui/button";
import { User } from "lucide-react";

export default function GameSetupStep2() {
    const navigate = useNavigate();
    const { gameState, setGameState } = useJudgement();
    const [playerNames, setPlayerNames] = useState(gameState.players);

    const handleChange = (index, value) => {
        const updated = [...playerNames];
        updated[index] = value;
        setPlayerNames(updated);
    };

    const startGame = () => {
        if (playerNames.some((name) => name.trim() === "")) {
            alert("Please enter all player names.");
            return;
        }

        setGameState((prev) => ({
            ...prev,
            players: playerNames,
            scores: Array(playerNames.length).fill(0),
            currentRound: 1,
            trumpSuits: [],
            roundScores: [],
            specialPlayerIndex: 0,
        }));

        navigate("/judgement/bidding");
    };

    return (
        <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center px-6 py-10">
            <div className="max-w-4xl w-full space-y-8">
                <h2 className="text-3xl sm:text-4xl font-bold text-center">
                    Game Setup - Step 2
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {playerNames.map((name, i) => (
                        <div
                            key={i}
                            className="bg-gray-800 p-4 rounded-lg flex flex-col gap-2"
                        >
                            <label for={`player-${i}`} className="flex items-center gap-2 text-gray-300 text-base">
                                <User className="w-5 h-5" />
                                <span>Player {i + 1}</span>
                            </label>
                            <input
                                id={`player-${i}`}
                                value={name}
                                onChange={(e) => handleChange(i, e.target.value)}
                                className="bg-gray-700 text-white rounded px-4 py-3 text-base focus:outline-none focus:ring focus:ring-purple-500"
                                placeholder={`Enter name for Player ${i + 1}`}
                            />
                        </div>
                    ))}
                </div>

                <div className="text-center pt-6">
                    <Button
                        className="w-full sm:min-w-36 sm:w-auto text-2xl font-light py-6 bg-green-600 hover:bg-green-700"
                        onClick={startGame}
                    >
                        Start Bidding
                    </Button>
                </div>
            </div>
        </div>
    );
}
