<template>
    <div class="content">
        <div class="total-title">今日盈利</div>
        <div style='text-align: center;'>
            <mu-paper class='total-text' circle :zDepth="2">{{totalCount}}</mu-paper>
        </div>

        <mu-divider />
        <mu-list>
        <template v-for='item,index in sellRecords'>
            <mu-list-item :title="item.name" :describeText="item.sellTime">
                <span slot='right'>{{item.outPrice}}</span>
            </mu-list-item>
            <mu-divider />
        </template>
        </mu-list>
        <div style="text-align: center;margin-top: 10px;">
            <mu-raised-button label="查看历史" primary/>
        </div>
        <Tabbar active-item='cash'></Tabbar>
    </div>
</template>
<script>
import { mapState } from 'vuex'
import Tabbar from './Tabbar'
export default {
    computed : {
        ...mapState({
            totalCount : state => state.cash.totalCount,
            sellRecords : state => state.cash.sellRecords
        })
    },
    components : {
        Tabbar
    }
}
</script>
<style scoped>
.total-text {
    display: inline-block;
    height: 100px;
    width: 100px;
    margin: 20px;
    text-align: center;
    line-height: 100px;
    font-size: 20px;
    background-color: #009688;
    color: #fff;
}
.total-title {
    text-align: center;
    color: #009688; 
    font-size: 22px;
    margin-top: 20px;
    font-weight: bold;
}
/*.mu-paper {
    background-color: #009688;
    color: #fff;
}*/
</style>