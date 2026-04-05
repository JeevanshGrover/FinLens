import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    transactions : [],
    filters: {
        type: 'all',
        category: 'all'
    },
    role : 'viewer' 
}

export const TransactionSlice = createSlice({
    name: 'transactions',
    initialState,
    reducers: {
        addTransaction: {
            reducer:(state, action) => {
             state.transactions.unshift(action.payload)
            },
            prepare: (transaction) => {
                return {
                    payload: {
                        id: nanoid(),
                        date: transaction.date || new Date().toISOString(),
                        amount: Number(transaction.amount),
                        type: transaction.type,
                        category:transaction.type,
                        note: transaction.note || ''
                    }
                }
            }
        },
    },

    deleteTransaction: (state, action) => {
        state.transactions = state.transactions.filter((transaction) => action.payload.id !== transaction.id)
    },

    setFilter: (state, action) => {
        if (action.payload.type !== undefined) {
            state.filters.type = action.payload.type
        }
        if (action.payload.category !== undefined) {
            state.filters.category = action.payload.category
        }
    },

    setRole: (state, action) => {
        const allowedRoles = ['viewer', 'admin']
        if (allowedRoles.includes(action.payload)) {
            state.role = action.payload
        }
    },
})

export const {
    addTransaction,
    deleteTransaction,
    setFilter,
    setRole,
} = TransactionSlice.actions;

export default TransactionSlice.reducer