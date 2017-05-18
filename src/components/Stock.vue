<template>
	<div>
		<div class="content">
        <!-- <mu-refresh-control :refreshing="refreshing" :trigger="trigger" @refresh="refresh"/> -->
		<mu-list>
            <template v-for='(item, index) in goodsList'>
            <mu-list-item :title="item.name" :describeText="'剩余: ' + item.totalCount" @click='enterDetail(index)' disableRipple>
              <mu-avatar :src="item.imageUrl" slot="leftAvatar" :size='40' :iconSize="40"/>
              <!-- <mu-icon value="info" slot="right"/>
              <mu-icon value="info" slot="right"/> -->
              <mu-flat-button label="详细" primary slot="right"/>
            </mu-list-item>
            <mu-divider/>
            </template>
        </mu-list>
        <!-- <mu-infinite-scroll :scroller="scroller" :loading="loading" @load="loadMore"/> -->
		</div>

        <div class="add_div">
            <mu-float-button icon="add" @click='enterAddGoods'/>
        </div>
        

		<Tabbar active-item='stock'></Tabbar>
	</div>
</template>

<script>
import Tabbar from './Tabbar'
import {mapState,mapActions} from 'vuex'
export default {
    data() {
        return {
            refreshing : false,
            trigger: null,
            loading : false
        }
    },
	computed: {
		...mapState({
			goodsList: state => state.stock.goodsList
		})
	},
	mounted() {
		console.log('mounted');
        // this.getGoodsList(1);
        // this.getGoodsList(1);
        // this.$store.dispatch('GET_GOODS_LIST', 1);
        this.trigger = this.$el;
	},
	methods: {
		startShip(index, event) {
            this.$router.push('/goods/' + this.goodsList[index].id + '/send');
		},
		enterDetail(index) {
			this.$router.push('/goods/' + this.goodsList[index].id + '/detail');
		},
        enterAddGoods() {
            this.$router.push('/goods/add');
        },
        ...mapActions({
            getGoodsList : 'GET_GOODS_LIST'
        }),
        refresh() {
            this.refreshing = true
            let _this = this;
            setTimeout(() => {
                _this.refreshing = false
            }, 2000)
        },
        loadMore() {
            console.log('loadMore')
            this.loading = true;
            let _this = this;
            setTimeout(() => {
                // _this.getGoodsList(1);
                _this.loading = false
                console.log('loadMore stop')
            }, 2000)
        }
	},
	components: {
		Tabbar
	}
}
</script>

<style scoped>
.md-card-header-text {
	margin-left: 8px;
}
.md-card .md-card-header .md-card-media {
	margin-left: 0px;
}
.md-theme-default.md-card {
	margin-bottom: 3px;
}
.image {
	height: 100px;
	background-origin:content;           
    background-position:50% 50%;             
    background-size:contain;                  
    background-repeat:no-repeat;
    /*background-color: #ececec;*/
}
.md-button {
	min-width: 50px;
}
.md-fab.md-fab-bottom-right, .md-speed-dial.md-fab-bottom-right {
    bottom: 80px;
}
.add_div {
    z-index: 99999;
    position: fixed;
    bottom: 80px;
    right: 20px;
}
.add_div .md-theme-default.md-button:not([disabled]).md-fab:hover {

    color: rgba(0, 0, 0, .87);
    /*width: 50px;*/
    /*height: 50px;*/
    /*border-radius: 25px;*/
}
.add_div .md-theme-default.md-button:not([disabled]).md-fab {
    color: rgba(0, 0, 0, .87);
}
.add_div .md-button.md-fab .md-icon {
    position: relative;
}
</style>