<template>
    <div class="main-wrapper">
        <div ref="split" class="split"></div>
    </div>
</template>
<script type="text/javascript">
export default {
    props: {
        height: {
            type: Number
        }
    },
    created() {
        this.$nextTick(function() {
            this.$refs.split.style.height = this.height+'px';
        })
    }
}
</script>
<style rel="stylesheet" scoped>
.main-wrapper .split {
    width: 100%;
    border-top: 1px solid #EAEAEA;
    border-bottom: 1px solid #EAEAEA;
    background-color: #F1F0F5;
}
</style>
