<template>
    <div class="main-wrapper">
        <div class="content-top">
            <div class="title">
                <el-row>
                    <el-col :span="24">
                        {{hospitalInfo.hospName}}
                    </el-col>
                </el-row>
            </div>
            <div class="hos-img">
                <img :src="hospitalInfo.hospImage" alt="">
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
                        <router-link :to="{name:'hospDesc',params:{'hospItem':hospitalInfo}}" class="hospIntro" tag="p">
                            {{hospitalInfo.hospIntro}}
                        </router-link>
                    </el-col>
                </el-row>
            </div>
        </div>
        <split :height="15"></split>
        <div class="content-bottom">
            <router-link :to="{name:'hospDesc',params:{'hospItem':hospitalInfo}}" class="item no-bl" tag="div">
                <div class="item-logo">
                    <img class="logo-img" src="../assets/img/图片2_09.gif" alt="">
                </div>
                <span class="item-font">医院介绍</span>
            </router-link>
            <router-link :to="{name:'breastDesc',params:{'hospItem':hospitalInfo}}" class="item" tag="div">
                <div class="item-logo">
                    <img class="logo-img" src="../assets/img/图片2_11.gif" alt="">
                </div>
                <span class="item-font">乳腺筛查中心介绍</span>
            </router-link>
            <div class="item">
                <div class="item-logo">
                    <img class="logo-img" src="../assets/img/图片2_13.gif" alt="">
                </div>
                <span class="item-font">乳腺外科介绍</span>
            </div>
            <div class="item no-bl no-bb">
                <div class="item-logo">
                    <img class="logo-img" src="../assets/img/图片2_18.gif" alt="">
                </div>
                <span class="item-font">就诊流程</span>
            </div>
            <div class="item no-bb">
                <div class="item-logo">
                    <img class="logo-img" src="../assets/img/图片2_19.gif" alt="">
                </div>
                <span class="item-font">就诊注意事项</span>
            </div>
            <router-link to="/orderSearch" class="item no-bb" tag="div">
                <div class="item-logo">
                    <img class="logo-img" src="../assets/img/图片2_20.gif" alt="">
                </div>
                <span class="item-font">预约检查</span>
            </router-link>
        </div>
    </div>
</template>
<script type="text/javascript">
import split from './split';

export default {
    data() {
            return {
                hospitalInfo: {}
            }
        },
        components: {
            split
        },
        mounted() {
            if (this.$route.params.hospItem == undefined) {
                this.hospitalInfo = JSON.parse(sessionStorage.getItem("HOSPITAL_INFO"));
            } else {
                let info = this.$route.params.hospItem;
                let str = JSON.stringify(info);
                sessionStorage.setItem("HOSPITAL_INFO", str);
                this.hospitalInfo = this.$route.params.hospItem;
            }
        },
        methods: {

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

.hospIntro-wrapper .hospIntro {
    /* position:relative;
        line-height:1.4em;
        3 times the line-height to show 3 lines
        height:2.8em;
        overflow:hidden; */
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}


/* .hospIntro-wrapper .hospIntro:after {
    content: ". . .";
    font-weight: bold;
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 0 20px 1px 45px;
    background: url(http://css88.b0.upaiyun.com/css88/2014/09/ellipsis_bg.png) repeat-y;
} */

.content-bottom {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 10px 5px 10px 5px;
    font-size: 14px;
}

.content-bottom .item {
    width: 30%;
    height: 100px;
    padding: 5px;
    white-space: nowrap;
    text-align: center;
    border-left: 1px solid rgba(175, 175, 175, .15);
    border-bottom: 1px solid rgba(175, 175, 175, .15);
}

.content-bottom .item.no-bl {
    border-left: none;
}

.content-bottom .item.no-bb {
    border-bottom: none;
}

.content-bottom .item .logo-img {
    width: 50px;
    height: 50px;
}
</style>
