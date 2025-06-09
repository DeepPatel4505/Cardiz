import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function SpadeOf3Page() {
    const navigate = useNavigate();
    const startGame = () => {
        navigate("/spade-of-3/setup");
    }

    return (
        <div className="h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white flex flex-col items-center justify-center px-6 py-12">
            <div className="max-w-3xl text-center space-y-8">
                <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight">
                    3 of Spades
                </h1>
                <p className="text-lg sm:text-xl text-gray-300">
                    A strategic trick-taking card game where bidding, partnership, and precise card play
                    determine your victory. Also known as "Kaali Ki Teeggi", this game combines
                    strategic bidding with dynamic partnerships and exciting trick-taking mechanics.
                </p>

                <ul className="text-left text-gray-400 max-w-xl mx-auto space-y-3 text-base sm:text-lg">
                    <li>🎯 Strategic Bidding: Predict and bid on the number of tricks you'll win</li>
                    <li>🤝 Dynamic Partnerships: Choose your partner based on specific cards</li>
                    <li>🃏 Trump Selection: The highest bidder chooses the trump suit</li>
                    <li>💎 Special Cards: The 3 of Spades holds special value in the game</li>
                    <li>🎴 Multiple Variations: Play with single or double deck options</li>
                    <li>🏆 Point System: Score points through tricks and special card combinations</li>
                </ul>

                <div className="text-sm text-gray-500 italic">
                    "A game where strategy meets partnership, and every trick counts"
                </div>

                <Button
                    size="lg"
                    className="mt-6 px-10 py-6 text-lg bg-blue-600 hover:bg-blue-700 transition-all duration-200 transform hover:scale-105"
                    onClick={startGame}
                >
                    Start Game
                </Button>
            </div>
        </div>
    );
}       