<template>
    <div id="app">
        <transition name="fade">
            <router-view class="pos"></router-view>
        </transition>
    </div>
</template>
<script>
export default {
    name: 'app'
}
</script>
<style>
html,
body {
    margin: 0;
    height: 100%;
    background-color: #F1F0F5;
}

#app {
    /* height: 100%; */
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}
.fade-enter-active, .fade-leave-active {
  transition: all .5s;
  opacity: 1;
}
.fade-enter, .fade-leave-active {
  transform: translateX(100%);
  opacity: 0;
}
.pos{
  position: absolute;
}
</style>
