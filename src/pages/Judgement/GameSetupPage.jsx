import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useJudgement } from "@/context/JudgementContext";

export default function GameSetupPage() {
    const navigate = useNavigate();
    const { setGameState } = useJudgement();

    const [playerCount, setPlayerCount] = useState(4);
    const [maxCards, setMaxCards] = useState(13);
    const [totalRounds, setTotalRounds] = useState(50);
    const [playerNames, setPlayerNames] = useState(["", "", "", ""]);

    useEffect(() => {
        const newMax = Math.min(Math.floor(52 / playerCount), 13);
        setMaxCards(newMax);
    }, [playerCount]);

    const changeValue = (value, min, max, setter) => {
        setter((prev) => {
            const next = prev + value;
            return next >= min && next <= max ? next : prev;
        });
    };

    const handleNameChange = (index, value) => {
        const updated = [...playerNames];
        updated[index] = value;
        setPlayerNames(updated);
    };

    const handleStartGame = () => {
        if (playerNames.some((name) => name.trim() === "")) {
            alert("All players must have a name.");
            return;
        }

        setGameState({
            players: playerNames,
            scores: Array(playerCount).fill(0),
            currentRound: 1,
            totalRounds,
            maxCards,
            trumpSuits: [],
            roundScores: [],
            specialPlayerIndex: 0,
        });

        navigate("/judgement/bidding");
    };

    return (
        <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center px-6 py-10">
            <div className="max-w-4xl w-full space-y-10">
                <h2 className="text-4xl font-bold text-center">Game Setup</h2>

                {/* Player Count, Max Cards, Total Rounds */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
                    <SetupControl
                        label="Players"
                        value={playerCount}
                        onDecrease={() => changeValue(-1, 4, 8, setPlayerCount)}
                        onIncrease={() => changeValue(1, 4, 8, setPlayerCount)}
                    />
                    <SetupControl label="Max Cards" value={maxCards} />
                    <SetupControl
                        label="Rounds"
                        value={totalRounds}
                        onDecrease={() =>
                            changeValue(-1, 1, 50, setTotalRounds)
                        }
                        onIncrease={() => changeValue(1, 1, 50, setTotalRounds)}
                    />
                </div>

                {/* Player Name Inputs */}
                <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-center">
                        Player Names
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {playerNames.map((name, i) => (
                            <div
                                key={i}
                                className="flex items-center justify-between bg-gray-800 p-3 rounded-md"
                            >
                                <span className="text-gray-300">
                                    Player {i + 1}
                                </span>
                                <input
                                    value={name}
                                    placeholder={`Player ${i + 1} Name`}
                                    onChange={(e) =>
                                        handleNameChange(i, e.target.value)
                                    }
                                    className="bg-gray-700 text-white rounded px-3 py-1 text-sm w-1/2 focus:outline-none focus:ring focus:ring-purple-500"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                <div className="text-center pt-6">
                    <Button
                        size="lg"
                        className="bg-blue-600 hover:bg-blue-700 px-10 py-4 text-lg"
                        onClick={handleStartGame}
                    >
                        Start Bidding
                    </Button>
                </div>
            </div>
        </div>
    );
}

// Reusable control block
function SetupControl({ label, value, onDecrease, onIncrease, disabled }) {
    return (
        <div className="bg-gray-800 p-4 rounded-md">
            <p className="text-sm text-gray-400 mb-2">{label}</p>
            <div className="flex items-center justify-center gap-4">
                {!disabled && (
                    <button
                        onClick={onDecrease}
                        className="bg-gray-700 px-3 py-1 rounded hover:bg-gray-600"
                    >
                        -
                    </button>
                )}
                <span className="text-xl font-bold">{value}</span>
                {!disabled && (
                    <button
                        onClick={onIncrease}
                        className="bg-gray-700 px-3 py-1 rounded hover:bg-gray-600"
                    >
                        +
                    </button>
                )}
            </div>
        </div>
    );
}
