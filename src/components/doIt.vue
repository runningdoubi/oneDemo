<template>
    <div class="main-wrapper">
        <div class="title">
            <h3>完善病历卡</h3>
        </div>
        <div class="img-wrapper">
            <img src="../../static/img/完善病历卡_02.png" height="100%" width="100%" alt="">
            <router-link to="/testPhone" class="hot-space-one" tag="div"></router-link>
            <router-link to="/subjectItem" class="hot-space-two" tag="div"></router-link>
        </div>
    </div>
</template>
<script type="text/javascript">
export default {}
</script>
<style rel="stylesheet" scoped>
.img-wrapper {
    position: relative;
}

.hot-space-one {
    position: absolute;
    top: 220px;
    left: 0;
    background-color: transparent;
    height: 35px;
    width: 100%;
}
.hot-space-two{
    position: absolute;
    top: 405px;
    left: 37px;
    background-color: transparent;
    height: 50px;
    width: 80%;
}
</style>
