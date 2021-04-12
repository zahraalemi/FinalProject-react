import { createSlice } from '@reduxjs/toolkit';
const walletSlice = createSlice({
    name : "walletCard",
    initialState:{
        listCard :[
            {
                id : 0,
                name : "Zahra Alemi",
                cardno : "1234 5678 9123 4567",
                date: "09/24",
                cvv : '321',
                type : 1,
                active : true
            }

        ]
    },
    reducers :{
        addNewCard : (state,action) =>{
            state.listCard.push(action.payload)
        },
        removeCard : (state,action)=>{
            /* state.listCard.splice(action.payload,1) */
            state.listCard = state.listCard.filter((card) => card.id !== action.payload.id)
            console.log(action.payload)
        },

        changeActiveCard : (state,action)=>{
            const cardCvv = action.payload;
            /* const item = state.listCard[cardCvv] */
            console.log(cardCvv.active)
            /* cardCvv.active = !cardCvv.active */

            /* for(let i = 0; i< state.listCard.length; i++){
                if(state.listCard[i].active === true){
                    console.log(state.listCard[i].name)
                    state.listCard[i].active = false;
                }
                if(state.listCard[i].cvv === action.payload){
                    state.listCard[i].active = true;
                }
            } */
        }
    }
});


const { reducer, actions } = walletSlice;
export const { addNewCard, removeCard, changeActiveCard } =actions;
export default reducer;