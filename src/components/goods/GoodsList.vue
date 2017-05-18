<template>
    <div>
        <mu-list>
            <template v-for='(item, index) in goodsList'>
            <mu-list-item title="item.name" describeText="'剩余: ' + item.totalCount" @click='enterDetail(index)'>
              <mu-avatar src="item.imageUrl" slot="leftAvatar" :size='80' :iconSize="80"/>
              <mu-icon value="info" slot="right"/>
            </mu-list-item>
            </template>
        </mu-list>
    </div>
</template>
<script>
import {mapState} from 'vuex'
    export default {
        computed : {
            ...mapState({
                goodsList : state => state.stock.goodsList
            })
        },
        methods : {
            enterDetail(index) {
                this.$router.push('/goods/detail/' + this.goodsList[index].id);
            }
        }
    }  
</script>