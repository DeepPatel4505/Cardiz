import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { resetJudgementGame } from "@/utils/resetGame.js";

export default function JudgementLandingPage() {
    const navigate = useNavigate();
    const startGame = () => {
        // Reset game state if needed
        resetJudgementGame()
        navigate("/judgement/setup");
    }

    return (
        <div className="h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white flex flex-col items-center justify-center px-6 py-12">
            <div className="max-w-3xl text-center space-y-8">
                <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight">
                    Judgment
                </h1>
                <p className="text-lg sm:text-xl text-gray-300">
                    A strategic trick-taking game where bidding and precision
                    are key. Predict how many tricks you'll win each round, and
                    aim to hit that number exactly. Outsmart your opponents and
                    become the champion.
                </p>

                <ul className="text-left text-gray-400 max-w-xl mx-auto space-y-2 text-base sm:text-lg">
                    <li>🎯 Bid the exact number of tricks you’ll win.</li>
                    <li>🃏 Play round-by-round with changing trump suits.</li>
                    <li>
                        🏆 Earn points for accurate predictions. Miss, and you
                        lose it all.
                    </li>
                </ul>

                <Button
                    size="lg"
                    className="mt-6 px-10 py-6 text-lg bg-purple-600 hover:bg-purple-700 transition-all duration-200 transform hover:scale-105"
                    onClick={startGame}
                >
                    Start Game
                </Button>
            </div>
        </div>
    );
}
