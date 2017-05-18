<template>
    <div class="goods_add">
        <div style="display: flex;">
            <mu-text-field hintText="条形码(点击右侧扫描条形码)" type="number" style="flex:1"></mu-text-field>
            <mu-icon value="photo_camera" :size="28" @click="scanCode"/>
        </div>

        <div>
            <mu-text-field hintText="商品名称" type="text" fullWidth/>
        </div>

        <div>
            <mu-text-field hintText="数目" type="number" fullWidth/>
        </div>

        <div>
            <mu-text-field hintText="进货价格(人民币)" type="number" fullWidth/>
        </div>

        <div>
            <mu-text-field hintText="预计出售价格(人民币)" type="number" fullWidth/>
        </div>

        <div>
            <div class="detail_image" v-bind:style="{backgroundImage: 'url(' + imageSrc + ')'}"></div>
        </div>

        <div style="text-align: center;margin-top:16px;">
            <mu-raised-button @click='uploadGoodsImage' label="商品图片" icon="photo_camera" primary/>
        </div>

        <div style=";margin-top:16px;">
            <mu-raised-button label="确定" primary fullWidth @click='confirmAdd'/>
        </div>
    </div>
</template>
<script>
import defaultImage from '../../assets/default.jpg'
export default {
    data() {
        return {
            imageSrc : defaultImage
        }
    },
    methods : {
        confirmAdd() {

        },
        uploadGoodsImage() {

        },
        scanCode() {

        }
    }
}
</script>
<style scoped>
    .goods_add {
        background-color: #fff;
        padding: 16px;
    }
    .detail_image {
        height: 150px;
        background-origin:content;           
        background-position:50% 50%;             
        background-size:contain;                  
        background-repeat:no-repeat;
        /*background-color: #ececec;*/
    }
</style>