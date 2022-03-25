import React from "react";
import { createStore } from 'redux';
import { Provider } from "react-redux";
import { rootReducer } from "./reducer";

const StateProvider: React.FC = ({children}) => {
    const store = createStore(rootReducer);
    
    return(
        <Provider store={store}>
            {children}
        </Provider>
    )
}

export default StateProvider;