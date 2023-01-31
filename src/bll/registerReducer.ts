
//constants

const initialState = {}

//reducer
export const registerReducer = (state: InitialStateType = initialState, action: RegisterActionsType): InitialStateType => {
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
export type RegisterActionsType = ReturnType<typeof fakeAC>