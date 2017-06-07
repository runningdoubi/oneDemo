<template>
    <div class="main-wrapper">
        <div class="content-top">
            <div class="title">
                <el-row>
                    <el-col :span="24">
                        {{hospitalInfo.hospName}}-乳腺筛查中心
                    </el-col>
                </el-row>
            </div>
            <div v-if="hospitalInfo.breastImage != ''" class="hos-img">
                <img :src="hospitalInfo.breastImage" alt="">
            </div>
            <div class="hospInfo-wrapper">
                <el-row>
                    <el-col :span="24" class="clearfix">
                        <el-tag color="transparent" class="level" type="gray">{{hospitalInfo.level}}</el-tag>
                        <span class="distance"><i class="fa fa-map-marker"></i>{{hospitalInfo.distance}}</span>
                    </el-col>
                </el-row>
                <el-row class="hospIntro-wrapper">
                    <el-col :span="24">
                        <p class="hospIntro">{{hospitalInfo.breastIntro}}</p>
                    </el-col>
                </el-row>
            </div>
        </div>
    </div>
</template>
<script type="text/javascript">
export default {
    data() {
            return {
                hospitalInfo: {}
            }
        },
        mounted() {
            this.hospitalInfo = this.$route.params.hospItem;
        }
}
</script>
<style rel="stylesheet" scoped>
.clearfix:before,
.clearfix:after {
    content: " ";
    display: table;
}

.clearfix:after {
    clear: both;
}

.main-wrapper {
    background-color: #fff;
}

.content-top .title {
    padding: 10px;
}

.content-top .hos-img img {
    width: 100%;
    height: 200px;
}

.hospInfo-wrapper {
    padding: 0 10px 0 10px;
}

.hospInfo-wrapper .level {
    float: left;
    color: #FFC134;
    border: 1px solid #FFC134;
}

.hospInfo-wrapper .distance {
    float: right;
    color: rgba(51, 51, 51, .5);
}

.hospInfo-wrapper .distance .fa {
    margin-right: 5px;
}
.hospIntro-wrapper .hospIntro{
	text-align: left;
	text-indent: 2em;
}

</style>
