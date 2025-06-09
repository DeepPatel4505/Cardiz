// App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import JudgementPage from "./pages/Judgement/JudgementPage.jsx";
import SpadeOf3Page from "./pages/SpadeOf3/SpadeOf3Page.jsx";
import GameSetupPage from "./pages/Judgement/GameSetupPage.jsx";
import GameSetupStep1 from "./pages/Judgement/GameSetupStep1.jsx";
import GameSetupStep2 from "./pages/Judgement/GameSetupStep2.jsx";
import BiddingPage from "./pages/Judgement/BiddingPage.jsx";
import ScoringPage from "./pages/Judgement/ScoringPage.jsx";
import ResultsPage from "./pages/Judgement/ResultsPage.jsx";
import VictoryBox from "./pages/Test/VictoryBox.jsx";
import Spade3SetupPage1 from "./pages/SpadeOf3/Spade3SetupPage1.jsx";
import Spade3SetupPage2 from "./pages/SpadeOf3/Spade3SetupPage2.jsx";
import Spade3BiddingPage from "./pages/SpadeOf3/Spade3BiddingPage.jsx";
import Spade3ScoringPage from "./pages/SpadeOf3/Spade3ScoringPage.jsx";
import Spade3ResultsPage from "./pages/SpadeOf3/Spade3ResultsPage.jsx";

function App() {
    return (
        <Router>
            <Routes>
                {/* Landing Page */}
                <Route path="/" element={<LandingPage />} />

                {/* Test */}
                <Route path="/test" element={<VictoryBox />} />

                {/* Judgement Game Routes */}
                <Route path="/judgement" element={<JudgementPage />} />
                <Route path="/judgement/setup" element={<GameSetupStep1 />} />
                <Route
                    path="/judgement/setup/players"
                    element={<GameSetupStep2 />}
                />
                <Route path="/judgement/bidding" element={<BiddingPage />} />
                <Route path="/judgement/scoring" element={<ScoringPage />} />
                <Route path="/judgement/results" element={<ResultsPage />} />

                {/* Spade of 3 Game Routes */}
                <Route path="/spade-of-3" element={<SpadeOf3Page />} />
                <Route path="/spade-of-3/setup" element={<Spade3SetupPage1 />} />
                <Route
                    path="/spade-of-3/setup/players"
                    element={<Spade3SetupPage2 />}
                />
                <Route path="/spade-of-3/bidding" element={<Spade3BiddingPage />} />
                <Route path="/spade-of-3/scoring" element={<Spade3ScoringPage />} />
                <Route path="/spade-of-3/results" element={<Spade3ResultsPage />} />

                {/* Game Setup Page */}
            </Routes>
        </Router>
    );
}

export default App;
