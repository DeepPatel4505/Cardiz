import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useNavigate } from "react-router-dom";

export default function LandingPage() {
    const navigate = useNavigate();
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 flex flex-col items-center justify-center px-6 py-12">
            <div className="max-w-4xl w-full space-y-10 text-center">
                <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight">
                    Welcome to <span className="text-purple-500">Cardiz</span>
                </h1>

                <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto">
                    Dive into your favorite card games. Select your mode and start playing!
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-6">
                    <Button
                        size="lg"
                        className={cn(
                            "w-full sm:w-auto text-lg px-8 py-5 font-semibold rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600",
                            "hover:from-purple-700 hover:to-indigo-700 text-white shadow-md hover:shadow-xl",
                            "transition-all duration-300 transform hover:scale-105"
                        )}
                        onClick={() => navigate('/judgement')}
                    >
                        For Judgement
                    </Button>

                    <Button
                        size="lg"
                        variant="ghost"
                        className={cn(
                            "w-full sm:w-auto text-lg px-8 py-5 font-semibold rounded-xl border border-purple-500 text-purple-300",
                            "hover:bg-purple-700/10 hover:text-purple-100 hover:border-purple-400",
                            "transition-all duration-300 transform hover:scale-105"
                        )}
                        onClick={() => navigate('/spade-of-3')}
                    >
                        For Spade of 3
                    </Button>
                </div>
            </div>
        </div>
    );
}
