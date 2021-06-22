import React ,{createContext , useReducer} from 'react'

export const IsLoadingContext = createContext({})

export const UPDATE_ISLOADING = 'upDateIsLoading'

export const reducer = (state,action) => {
    switch (action.type){
        case UPDATE_ISLOADING:
            return action.loading
        default:
            return state
    }
}

export const Loading = props => {
    const [isLoading , dispatch] = useReducer(reducer,false)
    console.log(props)
    return (
        <IsLoadingContext.Provider value={{isLoading:isLoading,dispatch}}>
            {props.children}
        </IsLoadingContext.Provider>
    )

}