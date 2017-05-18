<template>
    <div>
        <mu-card>
            <mu-card-media>
                <div class="detail_image" v-bind:style="{backgroundImage: 'url(' + goodsDetail.imageUrl + ')'}"></div>
            </mu-card-media>
            <mu-card-title :title="goodsDetail.name" :subTitle="'剩余库存: ' + goodsDetail.totalCount"/>
            <mu-card-text>
                <div>{{goodsDetail.remark}}</div>
                <div>入库时间: {{goodsDetail.inStockTime}}</div>
                <div>入库价格: {{goodsDetail.inPrice}}</div>
                <div>出库价格: {{goodsDetail.outPrice}}</div>
            </mu-card-text>
            <mu-card-actions>
                <div style="padding: 8px;">
                    <mu-raised-button label="发货" primary fullWidth style='margin-bottom: 10px;' @click='startShip'/>
                    <mu-raised-button label="删除" fullWidth @click='open'/>
                </div>
            </mu-card-actions>
        </mu-card>

        <mu-dialog :open="dialog" title="提醒" @close="close">
            确定删除这条数据吗?
            <mu-flat-button slot="actions" @click="close" primary label="取消"/>
            <mu-flat-button slot="actions" primary @click="confirmDelete" label="确定"/>
        </mu-dialog>
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    export default {
        props: {

        },
        data() {
            return {
                dialog : false
            }
        },
        mounted() {

        },
        computed: {
            ...mapState({
                goodsDetail : state => state.stock.goodsDetail
            })
        },
        methods: {
            startShip() {
                this.$router.push('/goods/' + this.goodsDetail.id + '/send');
            },
            close() {
                this.dialog = false;
            },
            open() {
                this.dialog = true;
            },
            confirmDelete() {

            }
        }
    }
</script>
<style scoped>
    .image {
        height: 200px;
        background-origin:content;           
        background-position:50% 50%;             
        background-size:contain;                  
        background-repeat:no-repeat;
        /*background-color: #ececec;*/
    }
    .md-card .md-card-content {
        padding: 8px;
    }
</style>