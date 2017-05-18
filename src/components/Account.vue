<template>
    <div>
        <div class="content">
            <div style="text-align: center;margin-top: 20px;">
                <mu-avatar :src="imageUrl" :size='80' backgroundColor="grey100"/>
            </div>
            <div style="text-align:center;margin-bottom:20px;">
                <div>
                    {{nickname}}
                </div>
                <template v-if='isVIP'>
                    <span style='color:#fff;width:40px;border-radius: 2px;background-color:#ffd54f;margin: 0 auto;display: block;'>VIP</span>
                </template>
                <template v-else>   
                    <span style='color:#fff;width:80px;border-radius: 2px;background-color:#e0e0e0;margin: 0 auto;display: block;'>成为VIP</span>
                </template>
            </div>

            
            <mu-list>
                <mu-divider />
                <mu-list-item title="渠道管理">
                </mu-list-item>
                <mu-divider />
                <mu-list-item title="我的权利"> 
                </mu-list-item>
                <mu-divider />
                <mu-list-item title="我要反馈">
                </mu-list-item>
                <mu-divider />
                <mu-list-item title="我要捐赠"> 
                </mu-list-item>
                <mu-divider />
                <mu-list-item title="关于聚货">
                </mu-list-item>
                <mu-divider />
          </mu-list>

        </div>

        <Tabbar active-item='account'></Tabbar>
    </div>
</template>

<script>
import Tabbar from './Tabbar'
import { mapState } from 'vuex'
export default {
    computed : {
        ...mapState({
            imageUrl : state => state.user.imageUrl,
            nickname : state => state.user.nickname,
            isVIP : state => state.user.isVIP
        })
    },
    components: {
       Tabbar 
    }
}
</script>