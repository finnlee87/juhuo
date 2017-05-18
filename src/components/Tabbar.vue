<template>
	<div class="tab-bar">
		<mu-paper>
            <mu-bottom-nav :value="activeItem" @change="handleChange">
              <mu-bottom-nav-item value="stock" title="库存" icon="assignment"/>
              <mu-bottom-nav-item value="ship" title="出库" icon="local_shipping"/>
              <mu-bottom-nav-item value="cash" title="财务" icon="credit_card"/>
              <mu-bottom-nav-item value="account" title="账号" icon="account_circle"/>
            </mu-bottom-nav>
        </mu-paper>
	</div>
</template>

<script>
	export default {
		props:[
			"activeItem"
		],
		methods: {
		    enterPage(hash) {
		      this.$router.push(hash);
		    },
            handleChange(val) {
                this.$router.push('/' + val);
            }
		}
	}
</script>

<style scoped>
.tab-bar {
    position: fixed;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 99999;
}
</style>