
//constants

const initialState = {}

//reducer
export const recoveryReducer = (state: InitialStateType = initialState, action: RecoveryActionsType): InitialStateType => {
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
export type RecoveryActionsType = ReturnType<typeof fakeAC>