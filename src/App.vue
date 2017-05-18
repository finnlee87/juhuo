<template>
  <div id="app">
    
    <router-view></router-view>
    
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      bottomNav : "stock"
    }
  },
  methods: {
    handleChange(val) {
      this.bottomNav = val;
      this.$router.push('/' + val);
    }
  }
}
</script>

<style>
#app {
  /*background-color: #eee;*/
  /*box-sizing: border-box*/
}
.content {
  margin: 0px 0px 56px 0px;
}
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-active {
  transform: translateX(10px);
  opacity: 0;
}
.slide-left-enter, .slide-right-leave-to {
  opacity: 0;
  -webkit-transform: translate(30px, 0);
  transform: translate(30px, 0);
}
.slide-left-leave-to, .slide-right-enter {
  opacity: 0;
  -webkit-transform: translate(-30px, 0);
  transform: translate(-30px, 0);
}
.tabbar {
  position: fixed;
  bottom: 0px;
  left: 0px;
  right: 0px;
  z-index: 99999;
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
