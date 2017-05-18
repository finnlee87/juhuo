<template>
    <div>
        <mu-card>
            <mu-card-media>
                <div class="detail_image" v-bind:style="{backgroundImage: 'url(' + shipDetail.imageUrl + ')'}"></div>
            </mu-card-media>
            <mu-card-title :title="shipDetail.name"/>
            <mu-card-text>
                <div>入库时间: {{shipDetail.inTime}}</div>
                <div>入库价格: {{shipDetail.inPrice}}</div>
                <div>出售时间: {{shipDetail.outTime}}</div>
                <div>出售价格: {{shipDetail.outPrice}}</div>
                <div style='margin-left: -10px;'><mu-flat-button :label="shippingBtnText" icon="local_shipping" primary @click='toggleShippingInfo'/></div>
                <div v-if="showShippingInfo">
                <template v-for='item in shipDetail.expressInfoList'>
                    <div>{{item.time}}--{{item.info}}</div>
                </template>
                </div>
            </mu-card-text>
            <mu-card-actions>
                <div style="padding: 8px;">
                    <mu-raised-button label="返回" primary fullWidth style='margin-bottom: 10px;' @click='back'/>
                </div>
            </mu-card-actions>
        </mu-card>
    </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
    data() {
        return {
            shippingBtnText: '查看物流信息',
            showShippingInfo: false
        }
    },
    computed : {
        ...mapState({
            shipDetail : state => state.ship.shipDetail
        })
    },
    methods : {
        back() {
            this.$router.push('/ship');
        },
        toggleShippingInfo() {
            if (this.shippingBtnText == '查看物流信息') {
                this.showShippingInfo = true;
                //查询物流信息
            }
        }
    }
}
</script>
<style>
    
</style>