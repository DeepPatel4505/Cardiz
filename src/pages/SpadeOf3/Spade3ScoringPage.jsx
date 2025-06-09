// src/pages/SpadeOf3ScoringPage.jsx

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSpadeOf3Context } from "@/context/SpadeOf3Context";
import { Button } from "@/components/ui/button";
import { CheckCircle, XCircle, Trophy } from "lucide-react";

export default function SpadeOf3ScoringPage() {
    const navigate = useNavigate();
    const { state, dispatch } = useSpadeOf3Context();

    const [results, setResults] = useState(
        Array(state.players.length).fill("miss")
    );

    const toggleResult = (index, value) => {
        setResults((prev) => {
            const updated = [...prev];
            updated[index] = value;
            return updated;
        });
    };

    const confirmScores = () => {
        const roundScore = state.players.map((_, i) =>
            results[i] === "hit" ? state.currentBid : 0
        );
        const scores = state.scores.map((score, i) => score + roundScore[i]);
        console.log("Round Scores:", [...state.roundScores, roundScore]);
        console.log("Updated Scores:", scores);

        dispatch({
            type: "UPDATE_ROUND_SCORES",
            payload: {
                roundScores: [...state.roundScores, roundScore],
                scores,
            },
        });
        console.log("Scores updated");

        dispatch({ type: "COMPLETE_ROUND" });

        navigate("/spade-of-3/bidding");
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white px-4 py-8">
            <div className="max-w-3xl mx-auto space-y-6 text-center">
                <h2 className="text-3xl font-bold">
                    Scoring - Round {state.currentRound}
                </h2>

                <div className="flex justify-center items-center gap-2 text-xl">
                    <Trophy className="text-yellow-400 w-5 h-5" />
                    Bid Amount:{" "}
                    <span className="font-semibold text-white ml-1">
                        {state.currentBid}
                    </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                    {state.players.map((player, index) => (
                        <div
                            key={index}
                            className="bg-gray-800 p-4 rounded-2xl shadow border border-gray-700 space-y-2"
                        >
                            <div className="text-lg font-semibold">
                                {player.name}
                            </div>
                            <div className="flex gap-4 mt-2 justify-center">
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

                <div className="pt-6">
                    <Button
                        className="bg-green-600 hover:bg-green-700 text-lg sm:text-2xl font-mono w-full sm:w-auto px-6 py-4 sm:py-6 rounded"
                        onClick={confirmScores}
                    >
                        Confirm Scores
                    </Button>
                </div>
            </div>
        </div>
    );
}
