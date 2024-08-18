import { SET_NAME_MODULE } from "./defaultTypes";

const initialState = [
        {category: "Fruits", price: "$1", stocked: true, name: "Apple"},
        {category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit"},
        {category: "Fruits", price: "$2", stocked: false, name: "Passionfruit"},
        {category: "Vegetables", price: "$2", stocked: true, name: "Spinach"},
        {category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin"},
        {category: "Vegetables", price: "$1", stocked: true, name: "Peas"}
      ];


const defaultReducer = (state=initialState,action) => {
    switch (action.type) {
        case SET_NAME_MODULE:{
            return {
                ...state,
                initialState: action.payload
            }
        }
        default: return state;
    }
};

export default defaultReducer;