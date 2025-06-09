import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { MoreVertical } from "lucide-react";
import { use, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useJudgement } from "@/context/JudgementContext";
import { Button } from "@/components/ui/button";
import {
    Swords,
    Trophy,
    ChevronsRight,
    XCircle,
    Minus,
    Plus,
} from "lucide-react";

export default function BiddingPage() {
    const navigate = useNavigate();
    const { gameState, setGameState } = useJudgement();

    const [bids, setBids] = useState([]);
    const [cardsThisRound, setCardsThisRound] = useState(
        gameState.currentRoundCards || 1
    );
    const [trump, setTrump] = useState("spade");
    const [bidsThisRound, setBidsThisRound] = useState(0);
    const [forbiddenBid, setForbiddenBid] = useState(
        cardsThisRound - bidsThisRound
    );

    const players = [...gameState.players];
    const specialIndex = gameState.specialPlayerIndex;
    const specialPlayer = players[specialIndex];

    const isSpecial = (index) => players[index] === specialPlayer;

    useEffect(() => {
        const round = gameState.currentRound;
        const suits = [
            "spade",
            "diamond",
            "club",
            "heart",
            "lowest",
            "spade",
            "diamond",
            "club",
            "heart",
            "highest",
        ];

        setCardsThisRound(gameState.currentRoundCards);
        setTrump(suits[(round - 1) % suits.length]);
        setBids(Array(players.length).fill(0));
    }, []);

    const updateBid = (index, delta) => {
        const currentBid = bids[index];
        let newBid = currentBid + delta;

        // Loop: Skip forbidden bids for special player
        while (newBid >= 0 && newBid <= cardsThisRound && isSpecial(index)) {
            const hypotheticalBids = [...bids];
            hypotheticalBids[index] = newBid;
            const totalBids = hypotheticalBids.reduce((a, b) => a + b, 0);

            if (totalBids === cardsThisRound) {
                newBid += delta; // Skip forbidden
            } else {
                break; // Valid bid found
            }
        }

        // Final safety check
        if (newBid < 0 || newBid > cardsThisRound) return;

        // Apply bid
        const newBids = [...bids];
        newBids[index] = newBid;
        const totalBids = newBids.reduce((a, b) => a + b, 0);

        setBids(newBids);
        setBidsThisRound(totalBids);

        // ✅ Update forbiddenBid only when non-special player updates
        if (!isSpecial(index)) {
            if (totalBids > cardsThisRound) {
                setForbiddenBid(-1); // invalid overflow
            } else {
                const remaining = cardsThisRound - totalBids;
                setForbiddenBid(remaining); // new forbidden for special
            }
        }

        if (totalBids > cardsThisRound) {
            setForbiddenBid(-1); // invalid overflow
        }

        console.log(
            `Cards this round: ${cardsThisRound}, Bids: ${newBids}, Total: ${totalBids}`
        );
    };

    const proceed = () => {
        const total = bids.reduce((a, b) => a + b, 0);
        console.log(
            `Total bids: ${total}, Cards this round: ${cardsThisRound}`
        );
        if (total === cardsThisRound) {
            alert("Total bids cannot equal cards per player.");
            return;
        }

        setGameState((prev) => ({
            ...prev,
            currentBids: bids,
            trumpSuits: [...prev.trumpSuits, trump],
        }));
        console.log(gameState);

        navigate("/judgement/scoring");
    };

    // console.log(bids.reduce((s, val) => s + val, 0) === cardsThisRound);

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white px-4 py-8">
            <div className="max-w-3xl mx-auto space-y-8">
                {/* Round and Cards side by side on all screens */}
                <div className="flex flex-row justify-center items-center gap-6 text-base sm:text-lg">
                    <div className="flex items-center gap-2">
                        <span className="font-semibold text-3xl text-purple-400">
                            Round:
                        </span>
                        <span className="font-bold text-white text-xl sm:text-2xl">
                            {gameState.currentRound}
                        </span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="font-semibold text-3xl text-yellow-400">
                            Cards:
                        </span>
                        <span className="font-bold text-white text-xl sm:text-2xl">
                            {cardsThisRound}
                        </span>
                    </div>
                </div>

                {/* Trump selection below */}
                <div className="flex justify-center mt-4">
                    <label className="flex items-center gap-2 text-base sm:text-lg">
                        <Trophy className="w-5 h-5 text-yellow-400" />
                        <span className="text-3xl">Trump:</span>
                        <select
                            value={trump}
                            onChange={(e) => setTrump(e.target.value)}
                            className="text-2xl ml-2 bg-gray-800 border border-gray-600 text-white rounded px-3 py-2 focus:outline-none"
                        >
                            <option value="spade">♠ Spade</option>
                            <option value="club">♣ Club</option>
                            <option value="heart">♥ Heart</option>
                            <option value="diamond">♦ Diamond</option>
                            <option value="lowest">Lowest</option>
                            <option value="highest">Highest</option>
                        </select>
                    </label>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {players.map((player, index) => (
                        <div
                            key={index}
                            className="bg-gray-800 p-4 rounded-2xl shadow border border-gray-700 flex items-center justify-between"
                        >
                            {/* Player Name and Status */}
                            <div className="flex flex-col">
                                <span className="text-lg sm:text-xl font-semibold">
                                    {player}
                                </span>
                                <div className="flex items-center gap-2 text-sm sm:text-base text-gray-400">
                                    {isSpecial(index) && (
                                        <span className="text-sm text-pink-400">
                                            (Special)
                                        </span>
                                    )}
                                    {index === specialIndex &&
                                        bids[index] == forbiddenBid &&
                                        forbiddenBid >= 0 && (
                                            <p className="text-xs text-red-400">
                                                Cannot bid {forbiddenBid}{" "}
                                            </p>
                                        )}
                                </div>
                            </div>

                            {/* Bidding Controls */}
                            <div className="flex items-center gap-4">
                                <Button
                                    size="icon"
                                    className="w-12 h-12 sm:w-14 sm:h-14 bg-gray-700 hover:bg-gray-600 text-white"
                                    onClick={() => updateBid(index, -1)}
                                    disabled={bids[index] === 0}
                                >
                                    <Minus className="w-6 h-6 sm:w-7 sm:h-7" />
                                </Button>
                                <span className="text-3xl sm:text-4xl font-bold w-10 text-center">
                                    {bids[index]}
                                </span>
                                <Button
                                    size="icon"
                                    className="w-12 h-12 sm:w-14 sm:h-14 bg-gray-700 hover:bg-gray-600 text-white"
                                    onClick={() => updateBid(index, 1)}
                                >
                                    <Plus className="w-6 h-6 sm:w-7 sm:h-7" />
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex flex-row sm:flex-row justify-center pt-6 gap-4 w-full">
                    {/* Confirm Scores Button */}
                    <Button
                        className="bg-blue-600 hover:bg-blue-700 text-lg sm:text-2xl font-mono w-4/5 sm:w-auto px-6 py-4 sm:py-7 rounded flex items-center justify-center gap-2"
                        onClick={proceed}
                    >
                        <ChevronsRight
                            strokeWidth={2}
                            size={30}
                            className="sm:size-8"
                        />
                        Proceed
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
