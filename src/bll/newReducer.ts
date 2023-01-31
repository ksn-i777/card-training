
//constants

const initialState = {}

//reducer
export const newReducer = (state: InitialStateType = initialState, action: NewActionsType): InitialStateType => {
    switch (action.type) {
        default:
            return state
    }
}

//actions
export const fakeAC = () => ({type: 'FAKE'} as const)

//thunks

//types
export type InitialStateType = typeof initialState
export type NewActionsType = ReturnType<typeof fakeAC>