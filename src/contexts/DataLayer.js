import React, {createContext} from 'react'
import DataLayerReducer from '../reducers/DataLayerReducer';

export const DataLayerContext = createContext();


function DataLayer(props) {
    const [DummyState, dispatch] = DataLayerReducer();
    return (
        <DataLayerContext.Provider  value={{DummyState, dispatch}}>
            {props.children}
        </DataLayerContext.Provider>
    )
}

export default DataLayer;