import { configureStore } from '@reduxjs/toolkit';
import wallet from './wallet';

const store = configureStore({
    reducer:{
        cardWallet : wallet
    },

});

export default store;