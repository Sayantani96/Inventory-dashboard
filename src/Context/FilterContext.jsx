import { inventoryData } from "../Data/InventoryData";
import { createContext,useReducer } from "react";
import { filterReducer } from "../Reducer/FilterReducer";

const initialState={
    inventory:[...inventoryData],
    dept:'',
    sort:'',
    stockBool:false
}

export const FilterContext = createContext();

const FilterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(filterReducer, initialState);

  const value = {
    state,
    dispatch
  };

  return (
    <FilterContext.Provider value={value}>
      {children}
    </FilterContext.Provider>
  );
};

export default FilterProvider