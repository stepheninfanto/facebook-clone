import React ,{createContext,useContext,useReducer} //hooks 
from "react";

export const StateContext =createContext();//prep data layer

//below is the higher order component used to wrap our app 
export const StateProvider = ({reducer,initialState,children })=> (
    <StateContext.Provider value={useReducer(reducer,initialState)}>
        {children}
    </StateContext.Provider>
);

//whenever u need to pull something from data layer we use the useStateValue hook 
export const useStateValue=() => useContext(StateContext);