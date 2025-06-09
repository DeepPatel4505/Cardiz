import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
    Minus,
    Plus,
    Crown,
    ChevronsRight,
    MoreVertical,
    Swords,
} from "lucide-react";
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { useSpadeOf3Context } from "@/context/SpadeOf3Context";
import { s } from "framer-motion/client";

const suits = ["spade", "club", "heart", "diamond"];

export default function Spade3BiddingPage() {
    const navigate = useNavigate();
    const { state, dispatch } = useSpadeOf3Context();

    const players = state.players || [];
    const specialIndex = state.specialPlayerIndex || 0;
    const specialPlayer = players[specialIndex];

    const [bid, setBid] = useState(150);
    const [bidder, setBidder] = useState(specialPlayer.name);
    const [bidderIndex, setBidderIndex] = useState(specialIndex);
    const [trump, setTrump] = useState("spade");

    const handleBidChange = (delta) => {
        setBid((prev) => {
            let newBid = prev + delta;
            if (newBid < 150) return 150;
            if (newBid > 250) return 250;
            return newBid;
        });
    };

    const handleBidderChange = (name) => {
        const index = players.findIndex((p) => p.name === name);
        if (index !== -1) {
            setBidder(name);
            setBidderIndex(index);
        }
    };

    const handleProceed = () => {
        console.log({ bidder, bid, trump });
        // Save bid state logic here if needed
        //         trumpSuits: action.payload?.trumpSuits || [],
        //         scores: [],
        //         bidderPlayerIndex:
        //             action.payload?.bidderPlayerIndex ??
        //             state.bidderPlayerIndex,
        //         roundBidders: action.payload?.roundBidders || [],
        //         currentRound: action.payload?.currentRound || state.currentRound,
        dispatch({
            type: "START_BIDDING",
            payload: {
                trumpSuits:  trump,
                scores: [],
                bidderPlayerIndex: bidderIndex,
                roundBidders: [...state.roundBidders, bidder],
                currentRound: state.currentRound,
                roundBids: [...state.roundBids, bid],
                currentBid: bid,
            },
        });

        navigate("/spade-of-3/scoring");
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white px-4 py-8">
            <div className="max-w-3xl mx-auto space-y-8">
                <h1 className="text-4xl font-bold text-center text-purple-400">
                    Rouund - {state.currentRound}
                </h1>

                {/* Trump Selection */}
                <div className="flex justify-center mt-4">
                    <label className="flex items-center gap-2 text-base sm:text-lg">
                        <Swords className="w-5 h-5 text-blue-400" />
                        <span className="text-3xl">Trump:</span>
                        <select
                            value={trump}
                            onChange={(e) => setTrump(e.target.value)}
                            className="text-2xl ml-2 bg-gray-800 border border-gray-600 text-white rounded px-3 py-2 focus:outline-none"
                        >
                            {suits.map((suit) => (
                                <option key={suit} value={suit}>
                                    {suit.charAt(0).toUpperCase() +
                                        suit.slice(1)}
                                </option>
                            ))}
                        </select>
                    </label>
                </div>

                {/* Bidder Selection */}
                <div className="flex justify-center mt-4">
                    <label className="flex items-center gap-2 text-base sm:text-lg">
                        <Crown className="w-5 h-5 text-yellow-400" />
                        <span className="text-3xl">Bidder:</span>
                        <select
                            value={bidder}
                            onChange={(e) => handleBidderChange(e.target.value)}
                            className="text-2xl ml-2 bg-gray-800 border border-gray-600 text-white rounded px-3 py-2 focus:outline-none"
                        >
                            {players.map((p) => (
                                <option key={p.name} value={p.name}>
                                    {p.name}
                                </option>
                            ))}
                        </select>
                    </label>
                </div>

                {/* Bid Input */}
                <div className="flex items-center justify-center gap-6 pt-4">
                    <Button
                        size="icon"
                        onClick={() => handleBidChange(-5)}
                        disabled={bid <= 150}
                        className="w-12 h-12 sm:w-14 sm:h-14 bg-gray-700 hover:bg-gray-600 text-white"
                    >
                        <Minus className="w-6 h-6 sm:w-7 sm:h-7" />
                    </Button>

                    <span className="text-5xl sm:text-6xl font-bold w-20 text-center">
                        {bid}
                    </span>

                    <Button
                        size="icon"
                        onClick={() => handleBidChange(5)}
                        disabled={bid >= 250}
                        className="w-12 h-12 sm:w-14 sm:h-14 bg-gray-700 hover:bg-gray-600 text-white"
                    >
                        <Plus className="w-6 h-6 sm:w-7 sm:h-7" />
                    </Button>

                    <Button
                        variant="ghost"
                        className="text-lg sm:text-xl text-green-500 underline px-2"
                        onClick={() => setBid(250)}
                    >
                        Max
                    </Button>
                </div>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row justify-center pt-6 gap-4 w-full">
                    <Button
                        className="bg-blue-600 hover:bg-blue-700 text-lg sm:text-2xl font-mono w-full sm:w-auto px-6 py-4 sm:py-6 rounded flex items-center justify-center gap-2"
                        onClick={handleProceed}
                    >
                        <ChevronsRight
                            strokeWidth={2}
                            size={30}
                            className="sm:size-8"
                        />
                        Proceed
                    </Button>

                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button
                                variant="ghost"
                                className="bg-gray-700 hover:bg-gray-800 text-white text-xl sm:text-2xl font-mono px-6 py-4 sm:py-6 rounded"
                            >
                                <MoreVertical className="w-6 h-6 sm:w-8 sm:h-8" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent
                            side="top"
                            align="end"
                            className="bg-gray-800 text-white border border-gray-700 rounded-lg"
                        >
                            <DropdownMenuItem
                                onClick={() => navigate("/spade-of-3/results")}
                                className="hover:bg-red-600 text-red-400 hover:text-white px-4 py-2 font-mono text-2xl rounded transition-colors duration-150"
                            >
                                Exit Game
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
        </div>
    );
}
