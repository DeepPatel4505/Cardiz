import { useSpadeOf3Context } from "@/context/SpadeOf3Context";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Spade3ResultsPage() {
    const { state, resetGame } = useSpadeOf3Context();
    const navigate = useNavigate();
    console.log("Current Game State:", state);
    console.log(state);
    
    const headers = ["Round", "Bid", "Bidder", ...state.players.map(p => p.name)];

    const getCsvContent = () => {
        const rows = [headers];
        state.roundScores.forEach((round, i) => {
            const row = [
                i + 1,
                state.roundBids[i] || "N/A",
                state.roundBidders[i] || "N/A",
                ...round
            ];
            rows.push(row);
        });

        const totalRow = ["Total", "", "", ...state.scores];
        rows.push(totalRow);

        return rows.map(row => row.join(",")).join("\n");
    };

    const downloadCsv = () => {
        const csv = getCsvContent();
        const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "spade3_results.csv");
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white px-4 py-8">
            <div className="max-w-4xl mx-auto space-y-6">
                <h1
                    className="text-5xl font-bold text-center mb-4 cursor-pointer 
                    bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 
                    bg-clip-text text-transparent transition duration-300 hover:scale-105 
                    leading-[1.2]"
                    onClick={() => {
                        resetGame();
                        navigate("/spade-of-3");
                    }}
                >
                    SPADE 3
                </h1>

                <h2 className="text-3xl font-bold text-center mb-4">
                    Game Results
                </h2>

                <div className="overflow-x-auto rounded-xl border border-gray-700">
                    <table className="min-w-full table-auto text-sm">
                        <thead className="bg-gray-800 text-white">
                            <tr>
                                {headers.map((h, idx) => (
                                    <th
                                        key={idx}
                                        className="px-4 py-2 border border-gray-700 text-left"
                                    >
                                        {h}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {state.roundScores.map((round, i) => (
                                <tr
                                    key={i}
                                    className="odd:bg-gray-900 even:bg-gray-800"
                                >
                                    <td className="px-4 py-2 border border-gray-700">{i + 1}</td>
                                    <td className="px-4 py-2 border border-gray-700">
                                        {state.roundBids[i] || "N/A"}
                                    </td>
                                    <td className="px-4 py-2 border border-gray-700">
                                        {state.roundBidders[i]|| "N/A"}
                                    </td>
                                    {round.map((score, j) => (
                                        <td
                                            key={j}
                                            className="px-4 py-2 border border-gray-700"
                                        >
                                            {score}
                                        </td>
                                    ))}
                                </tr>
                            ))}
                            <tr className="bg-gray-900 font-bold">
                                <td className="px-4 py-2 border border-gray-700" colSpan={3}>
                                    Total
                                </td>
                                {state.scores.map((score, i) => (
                                    <td
                                        key={i}
                                        className="px-4 py-2 border border-gray-700 text-green-400"
                                    >
                                        {score}
                                    </td>
                                ))}
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="flex justify-center pt-6">
                    <Button
                        className="bg-blue-600 hover:bg-blue-700 text-lg font-semibold px-6 py-3 rounded-xl"
                        onClick={downloadCsv}
                    >
                        <Download className="w-5 h-5 mr-2" /> Download CSV
                    </Button>
                </div>
            </div>
        </div>
    );
}
