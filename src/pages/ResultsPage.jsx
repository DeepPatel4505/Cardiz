import { useJudgement } from "@/context/JudgementContext";
import { Button } from "@/components/ui/button";
import { Download, Trophy } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function ResultsPage() {
    const { gameState, resetGame } = useJudgement();
    const navigate = useNavigate();

    const headers = ["Round", "Trump", ...gameState.players];

    const getCsvContent = () => {
        const rows = [headers];
        gameState.roundScores.forEach((round, i) => {
            const row = [i + 1, gameState.trumpSuits[i], ...round];
            console.log(row);

            rows.push(row);
        });

        const totalRow = ["Total", "", ...gameState.scores];
        rows.push(totalRow);
        return rows.map((r) => r.join(",")).join("\n");
    };
    console.log("Current Game State:", gameState);

    const downloadCsv = () => {
        const csv = getCsvContent();
        const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "judgement_results.csv");
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const totalScores = gameState.players.map((_, i) =>
        gameState.roundHistory.reduce((sum, r) => sum + r.scores[i], 0)
    );

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white px-4 py-8">
            <div className="max-w-3xl mx-auto space-y-6">
                <h1
                    className="text-5xl font-bold text-center mb-4 cursor-pointer 
             bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 
             bg-clip-text text-transparent transition duration-300 hover:scale-105 
             leading-[1.2]"
                    onClick={(e) => {
                        e.preventDefault();
                        resetGame();
                        navigate("/");
                    }}
                >
                    JUDGEMENT
                </h1>

                <h2 className="text-3xl font-bold text-center mb-4">
                    Game Results
                </h2>

                <div className="overflow-x-auto rounded-xl border border-gray-700">
                    <table className="min-w-full table-auto text-sm">
                        <thead className="bg-gray-800 text-white">
                            <tr>
                                {headers.map((h) => (
                                    <th
                                        key={h}
                                        className="px-4 py-2 border border-gray-700 text-left"
                                    >
                                        {h}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {gameState.roundScores.map((round, i) => (
                                <tr
                                    key={i}
                                    className="odd:bg-gray-900 even:bg-gray-800"
                                >
                                    <td className="px-4 py-2 border border-gray-700">
                                        {i + 1}
                                    </td>
                                    <td className="px-4 py-2 border border-gray-700">
                                        {gameState.trumpSuits[i] || "N/A"}
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
                                <td
                                    className="px-4 py-2 border border-gray-700"
                                    colSpan={2}
                                >
                                    Total
                                </td>
                                {gameState.scores.map((score, i) => (
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
