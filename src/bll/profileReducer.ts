
//constants

const initialState = {}

//reducer
export const profileReducer = (state: InitialStateType = initialState, action: ProfileActionsType): InitialStateType => {
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
export type ProfileActionsType = ReturnType<typeof fakeAC>