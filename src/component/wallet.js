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
                type : "visa"
            }
        ]
    },
    reducers :{
        addCard : (state,action) =>{
            state.listCard.push(action.payload)
        }
    }
});


const { reducer } = walletSlice;
export default reducer;