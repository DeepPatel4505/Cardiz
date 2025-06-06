import { createContext, useContext, useEffect, useState } from "react";

const JudgementContext = createContext();

export const useJudgement = () => useContext(JudgementContext);

const defaultState = {
    number_of_players: 4,
    players: [],
    scores: [],
    currentRound: 1,
    totalRounds: 50,
    currentRoundCards: 1,
    maxCards: 13,
    trumpSuits: [],
    roundScores: [],
    currentBids: [],
    roundHistory: [],
    specialPlayerIndex: 0,
};

export const JudgementProvider = ({ children }) => {
    const [gameState, setGameState] = useState(() => {
        const stored = localStorage.getItem("judgementState");
        return stored ? JSON.parse(stored) : defaultState;
    });

    const resetGame = () => {
        setGameState(defaultState);
        localStorage.removeItem("judgementState");
    };

    // Save to localStorage whenever state updates
    useEffect(() => {
        localStorage.setItem("judgementState", JSON.stringify(gameState));
    }, [gameState]);

    return (
        <JudgementContext.Provider value={{ gameState, setGameState, resetGame }}>
            {children}
        </JudgementContext.Provider>
    );
};
