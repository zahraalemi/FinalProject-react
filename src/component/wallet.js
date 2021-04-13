import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getUsers = createAsyncThunk ("users/getUsers" , async () =>{
    return fetch('https://randomuser.me/api')
    .then((response)=> response.json());
});

const walletSlice = createSlice({
    name : "walletCard",
    initialState:{
        listUser:[],
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
            state.listCard = state.listCard.filter((card) => card.id !== action.payload.id)
        },
        

        changeActiveCard : (state,action)=>{
            /* const cardCvv = action.payload;
            const item = state.listCard[cardCvv]
            console.log(cardCvv.active)
            item.active = !item.active */

             for(let i = 0; i< state.listCard.length; i++){
                if(state.listCard[i].active === true){
                    state.listCard[i].active = false;
                }
                if(state.listCard[i].id === action.payload){
                    state.listCard[i].active = true;
                }
            } 
        }
    },

    extraReducers:{
        [getUsers.pending]: (state) => {
            state.status ="loading..."
            console.log(state.status);
        },
        [getUsers.fulfilled] : (state,action) => {
            state.status = "success";
            const user = action.payload.results[0].name;
            console.log(user)
            state.listCard[0].name = (user.first + " " + user.last).toUpperCase();
            
        },
        [getUsers.rejected]:(state) => {
            state.status ="rejected";
            console.log(state.status);
        }

    }
});


const { reducer, actions } = walletSlice;
export const { addNewCard, removeCard, changeActiveCard } =actions;
export default reducer;