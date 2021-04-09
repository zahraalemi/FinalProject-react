import { createSlice } from '@reduxjs/toolkit';
const walletSlice = createSlice({
    name : "walletCard",
    initialState:{
        listCard :[
            {
                name : "Zahra Alemi",
                cardno : "1234 5678 9123 4567",
                date: "09/24",
                cvv : '321',
                type : 1
            }

        ]
    },
    reducers :{
        addNewCard : (state,action) =>{
            state.listCard.push(action.payload)
        },
        removeCard : (state,action)=>{
            state.listCard.splice(action.payload)
        }
    }
});


const { reducer, actions } = walletSlice;
export const { addNewCard, removeCard } =actions;
export default reducer;