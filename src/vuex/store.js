import stock from './module/stock'
import ship from './module/ship'
import cash from './module/cash'
import user from './module/user'
import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex);

export default new Vuex.Store({
    modules:{
        stock,
        ship,
        cash,
        user
    }
    
})