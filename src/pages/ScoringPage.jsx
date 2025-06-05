import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { useEffect, useState } from "react";
import { MoreVertical } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useJudgement } from "@/context/JudgementContext";
import { Button } from "@/components/ui/button";
import { Trophy, CheckCircle, XCircle } from "lucide-react";
// import { spec } from "node:test/reporters";

export default function ScoringPage() {
    const navigate = useNavigate();
    const { gameState, setGameState } = useJudgement();

    const [results, setResults] = useState(() =>
        Array(gameState.players.length).fill("hit")
    );

    const toggleResult = (index, value) => {
        setResults((prev) => {
            const updated = [...prev];
            updated[index] = value;
            return updated;
        });
    };

    console.log("Current Game State:", gameState);

    const calculateScores = () => {
        const newScores = gameState.players.map((_, i) => {
            const bid = gameState.currentBids[i];
            const isHit = results[i] === "hit";
            return isHit ? 10 + bid : 0;
        });

        const updatedScores = gameState.scores.map(
            (prevScore, i) => prevScore + newScores[i]
        );

        const nextRound = gameState.currentRound + 1;
        const isLastRound = gameState.currentRound === gameState.totalRounds;
        let nextRoundCards;

        if (gameState.currentRoundCards + 1 <= gameState.maxCards) {
            nextRoundCards = gameState.currentRoundCards + 1;
        } else {
            nextRoundCards = 1; // Reset to 1 if max cards reached
        }

        setGameState((prev) => ({
            ...prev,
            scores: updatedScores,
            roundScores: [...(prev.roundScores || []), newScores],
            currentRound: nextRound,
            currentRoundCards: nextRoundCards,
            specialPlayerIndex:
                (prev.specialPlayerIndex + 1) % prev.number_of_players,
        }));

        if (isLastRound) {
            navigate("/judgement/results");
        } else {
            navigate("/judgement/bidding");
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white px-4 py-8">
            <div className="max-w-3xl mx-auto space-y-6">
                <h2 className="text-3xl font-bold text-center">
                    Scoring - Round {gameState.currentRound}
                </h2>
                <div className="flex justify-center items-center gap-2 text-xl">
                    <Trophy className="text-yellow-400 w-5 h-5" />
                    Trump:{" "}
                    <span className="font-semibold text-white">
                        {gameState.trumpSuits[gameState.trumpSuits.length - 1]}
                    </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {gameState.players.map((player, index) => (
                        <div
                            key={index}
                            className="bg-gray-800 p-4 rounded-2xl shadow border border-gray-700 space-y-2"
                        >
                            <div className="flex flex-col">
                                <span className="text-lg sm:text-xl font-semibold">
                                    {player}
                                </span>
                                <span className="text-sm text-gray-400">
                                    Bid: {gameState.currentBids[index]}
                                </span>
                            </div>
                            <div className="flex gap-4 mt-2">
                                <Button
                                    className={
                                        results[index] === "hit"
                                            ? "bg-green-600 hover:bg-green-700 text-white"
                                            : "bg-gray-700 text-white"
                                    }
                                    onClick={() => toggleResult(index, "hit")}
                                >
                                    <CheckCircle className="mr-2 h-5 w-5" /> Hit
                                </Button>
                                <Button
                                    className={
                                        results[index] === "miss"
                                            ? "bg-red-600 hover:bg-red-700 text-white"
                                            : "bg-gray-700 text-white"
                                    }
                                    onClick={() => toggleResult(index, "miss")}
                                >
                                    <XCircle className="mr-2 h-5 w-5" /> Miss
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex flex-row sm:flex-row justify-center pt-6 gap-4 w-full">
                    {/* Confirm Scores Button */}
                    <Button
                        className="bg-green-600 hover:bg-green-700 text-lg sm:text-2xl font-mono w-4/5 sm:w-auto px-6 py-4 sm:py-7 rounded flex items-center justify-center gap-2"
                        onClick={calculateScores}
                    >
                        Confirm Scores
                    </Button>

                    {/* Dropdown for Finish Game */}
                    <DropdownMenu className="w-1/5 sm:w-auto">
                        <DropdownMenuTrigger asChild>
                            <Button
                                variant="ghost"
                                className="bg-gray-700 hover:bg-gray-800 text-white text-xl sm:text-2xl font-mono sm:w-auto px-6 py-4 sm:py-7 rounded flex items-center justify-center"
                            >
                                <MoreVertical className="w-6 h-6 sm:w-8 sm:h-8" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent
                            side="top"
                            align="end"
                            className="bg-gray-800 text-white border border-gray-700 rounded-lg shadow-md"
                        >
                            <DropdownMenuItem
                                onClick={() => {
                                    calculateScores();
                                    navigate("/judgement/results");
                                }}
                                className="hover:bg-red-600 text-red-400 hover:text-white px-4 py-2 font-mono text-2xl rounded transition-colors duration-150"
                            >
                                Finish Game
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
        </div>
    );
}
