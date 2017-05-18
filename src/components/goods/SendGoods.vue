<template>
    <div class="goods_send">
        <div>
            <mu-text-field hintText="出售价格(人民币)" type="number" fullWidth/>
        </div>
        <div>
            <mu-select-field v-model="expressCode" hintText="选择快递名称" fullWidth>
                <mu-menu-item value="1" title="顺丰快递" />
                <mu-menu-item value="2" title="申通快递" />
                <mu-menu-item value="3" title="圆通快递" />
            </mu-select-field>
        </div>
        <div style="display: flex;">
            <mu-text-field hintText="快递单号(点击右侧扫描条形码)" type="number" style="flex:1"></mu-text-field>
            <mu-icon value="photo_camera" :size="28" @click="scanCode"/>
        </div>
        <div>
            <mu-select-field v-model="channel" hintText="选择销售渠道" fullWidth>
                <mu-menu-item value="1" title="微信" />
            </mu-select-field>
        </div>

        <div>
            <mu-raised-button label="确定" primary fullWidth @click='confirmShip'/>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                channel : null,
                expressCode : null
            }
        },
        methods : {
            scanCode() {
                console.log('scan');
            },
            confirmShip() {

            }
        }
    }
</script>
<style scoped>
    .goods_send {
        background-color: #fff;
        padding: 16px;
    }
</style>