import { a, tr } from "framer-motion/client";
import { createContext, useContext, useEffect, useReducer } from "react"; // ✅ add useReducer

const SpadeOf3Context = createContext();

const defaultState = {
    number_of_players: 5,
    players: [],
    scores: [],
    currentRound: 1,
    totalRounds: 50,
    eachRoundCards: 1,
    maxCards: 10,
    trumpSuits: null,
    roundScores: [],
    roundBidders: [],
    roundBids: [],
    currentBid: 150,
    bidderPlayerIndex: 0,
    specialPlayerIndex: 0, // Index of the special player (e.g., the one who can choose trump)
};

function reducer(state, action) {
    switch (action.type) {
        // Initialize the game with players and settings
        case "SETUP_GAME":
            return {
                ...state,
                players: action.payload.players || [], // players should be an array of player names or objects
                scores: Array(action.payload.players.length).fill(0), // initialize scores for each player
                maxCards: action.payload.maxCards,
                eachRoundCards:
                    action.payload.eachRoundCards ||
                    Math.floor(
                        action.payload.maxCards / action.payload.players.length
                    ),
                totalRounds: action.payload.totalRounds,
                number_of_players: action.payload.number_of_players,
                roundScores: [],
                roundBidders: [],
                bidderPlayerIndex: action.payload.bidderPlayerIndex || 0,
                trumpSuits: action.payload.trumpSuits || null,
                specialPlayerIndex: action.payload.specialPlayerIndex || 0, // Index of the special player
                currentRound: 1,
                currentBid: 150,
                roundBids: [],
            };

        case "UPDATE_PLAYER_NAMES":
            return {
                ...state,
                players: state.players.map((player, index) => ({
                    ...player,
                    name: action.payload[index] || player.name,
                })),
            };

        // Start a new round (optional card count & trump suit can be passed)
        case "START_BIDDING":
            return {
                ...state,
                trumpSuits: action.payload?.trumpSuits || null,
                bidderPlayerIndex:
                    action.payload?.bidderPlayerIndex ??
                    state.bidderPlayerIndex,
                roundBidders: action.payload?.roundBidders || [],
                currentRound:
                    action.payload?.currentRound || state.currentRound,
                currentBid: action.payload?.currentBid || 150,
                roundBids: action.payload?.roundBids || [],
            };

        // Set trump suits
        case "SET_TRUMP":
            return {
                ...state,
                trumpSuits: action.payload,
            };

        // Set the bidder's index
        case "SET_BIDDER":
            return {
                ...state,
                bidderPlayerIndex: action.payload,
            };

        case "UPDATE_ROUND_SCORES":
            return {
                ...state,
                scores: action.payload.scores || state.scores,
                roundScores: action.payload.roundScores || state.roundScores,
            };

        // Append current round's scores to history and reset for next round
        case "COMPLETE_ROUND":
            return {
                ...state,
                currentRound: state.currentRound + 1,
                specialPlayerIndex : (state.specialPlayerIndex + 1) % state.number_of_players
            };

        // Manually override all scores (used for loading saved data)
        case "SET_SCORES":
            return {
                ...state,
                scores: action.payload,
            };

        // Reset the entire game
        case "RESET_GAME":
            return {
                ...defaultState,
            };

        default:
            return state;
    }
}

const initializer = () => {
    const stored = localStorage.getItem("spadeOf3State");
    return stored ? JSON.parse(stored) : defaultState;
};

export const SpadeOf3Provider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer,undefined,initializer);

    const resetGame = () => {
        dispatch({ type: "RESET_GAME" });
        localStorage.removeItem("spadeOf3State");
    };

    useEffect(() => {
        localStorage.setItem("spadeOf3State", JSON.stringify(state));
    }, [state]);

    return (
        <SpadeOf3Context.Provider value={{ state, dispatch, resetGame }}>
            {/* Provide the state and dispatch function to children components */}
            {children}
        </SpadeOf3Context.Provider>
    );
};

export const useSpadeOf3Context = () => useContext(SpadeOf3Context);
