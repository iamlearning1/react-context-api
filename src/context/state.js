import React, { createContext, useReducer } from 'react';

const initialState = {
    transactions: [
        { id: 1, text: 'Flower', amount: -20 },
        { id: 2, text: 'Salary', amount: 300 },
        { id: 3, text: 'Book', amount: -10 },
        { id: 4, text: 'Camera', amount: 150 }
    ]
}

// Reducer
const AppReducer = (state, action) => {
    switch(action.type) {
        case 'DELETE': {
            return {
                ...state,
                transactions: state.transactions.filter(t => t.id !== action.id)
            }
        }
        case 'ADD': {
            return {
                ...state,
                transactions: [action.payload, ...state.transactions]
            }
        }
        default: return state;
    }
}

// Create Context
export const Context = createContext(initialState);

// Provider component
export const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    // Actions
    const deleteTransaction = (id) => {
        dispatch({
            type: 'DELETE',
            id
        })
    }

    const addTransaction = payload => {
        dispatch({
            type: 'ADD',
            payload
        })
    }

    return (
        <Context.Provider value={{
            transactions: state.transactions,
            deleteTransaction,
            addTransaction
        }}>
            {children}
        </Context.Provider>
    )
}