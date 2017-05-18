<template>
    <div class="content">
        <mu-list>
            <template v-for='item,index in shippingList'>
                <mu-list-item :title="item.name + '（' + item.outPrice + '）'" @click='enterDetail(index)' disableRipple>
                  <mu-avatar :src="item.imageUrl" slot="leftAvatar"/>
                  <span slot="describe">
                    <span>物流单号: {{item.expressNo}}</span> <br/>
                    <span>发货时间: {{item.outTime}} </span>
                  </span>
                  <mu-flat-button label="详细" primary slot="right"/>
                </mu-list-item>
                <mu-divider inset/>
            </template>
        </mu-list>

        <Tabbar active-item='ship'></Tabbar>
    </div>
</template>
<script>
import { mapState } from 'vuex'
import Tabbar from './Tabbar'

export default {
    computed : {
        ...mapState({
            shippingList : state => state.ship.shippingList
        })
    },
    methods : {
        enterDetail(index) {
            this.$router.push('/ship/' + this.shippingList[index].id + '/detail');
        }
    },
    components: {
        Tabbar
    }
}    
</script>
<style>
    
</style>