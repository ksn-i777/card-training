
//constants

const initialState = {}

//reducer
export const loginReducer = (state: InitialStateType = initialState, action: LoginActionsType): InitialStateType => {
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
export type LoginActionsType = ReturnType<typeof fakeAC>