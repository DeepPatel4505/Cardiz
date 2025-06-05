// App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import JudgementPage from "./pages/JudgementPage.jsx";
import SpadeOf3Page from "./pages/SpadeOf3Page.jsx";
import GameSetupPage from "./pages/GameSetupPage.jsx";
import GameSetupStep1 from "./pages/GameSetupStep1.jsx";
import GameSetupStep2 from "./pages/GameSetupStep2.jsx";
import BiddingPage from "./pages/BiddingPage.jsx";
import ScoringPage from "./pages/ScoringPage.jsx";
import ResultsPage from "./pages/ResultsPage.jsx";

function App() {
    return (
        <Router basename="/Cardiz">
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/judgement" element={<JudgementPage />} />
                <Route path="/judgement/setup" element={<GameSetupStep1 />} />
                <Route
                    path="/judgement/setup/players"
                    element={<GameSetupStep2 />}
                />
                <Route path="/judgement/bidding" element={<BiddingPage />} />
        <Route path="/judgement/scoring" element={<ScoringPage />} />
        <Route path="/judgement/results" element={<ResultsPage />} />
                <Route path="/spade-of-3" element={<SpadeOf3Page />} />
            </Routes>
        </Router>
    );
}

export default App;
