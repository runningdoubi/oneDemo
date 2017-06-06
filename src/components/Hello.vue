<template>
    <div class="main-wrapper">
        <div class="search-wrapper">
            <el-row :gutter="20">
                <el-col :span="12">
                    <div class="grid-content">
                        <el-select size="large" v-model="selectedCity" filterable placeholder="医院地区" @change="selectHos">
                            <el-option v-for="item in citys" :key="item" :label="item" :value="item"></el-option>
                        </el-select>
                    </div>
                </el-col>
                <el-col :span="12">
                    <div class="grid-content">
                        <el-select size="large" v-model="selectedLevel" filterable placeholder="医院等级" @change="selectHos">
                            <el-option v-for="item in levels" :key="item" :label="item" :value="item"></el-option>
                        </el-select>
                    </div>
                </el-col>
            </el-row>
            <el-row :gutter="20">
                <el-col :span="24">
                    <div class="grid-content">
                        <el-input size='large' placeholder="输入医院名称快速搜索" icon="search" v-model="selectedHosName" :on-icon-click="searchHosByName">
                        </el-input>
                    </div>
                </el-col>
            </el-row>
        </div>
        <div class="help-wrapper">
            <el-row>
                <el-col :span="24">
                    <div class="help">
                        <span class="help-center">帮助中心</span>
                        <span class="help-content"><i class="fa fa-bullhorn"></i>如何使用微信预约</span>
                    </div>
                </el-col>
            </el-row>
        </div>
        <div class="hospital-wrapper">
            <el-row>
                <el-col :span="24">
                    <ul>
                        <li class="hospital-item" v-for="item in hospitals">
                            <router-link class="hop-img" :to="{name:'hospInfo',params:{'hospItem':item}}" tag="div"><img :src="item.hospImage" width="110" height="80" alt=""></router-link>
                            <div class="hop-content">
                                <router-link :to="{name:'hospInfo',params:{'hospItem':item}}" tag="h4">{{item.hospName}}</router-link>
                                <div class="hos-content-more clearfix">
                                    <div class="level-distance">
                                        <span class="level" v-text="item.level"></span>
                                        <span class="distance"><i class="fa fa-map-marker"></i>{{item.distance}}</span>
                                    </div>
                                    <div class="test-btn">
                                        <router-link to="/orderSearch" tag="div">
                                            <el-button class="test-elbtn" size="small" type="success">预约检查</el-button>
                                        </router-link>
                                    </div>
                                </div>
                                <div class="labels clearfix">
                                    <el-tag color="transparent" class="tag" type="gray" v-for="label in item.labels">{{label}}</el-tag>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <div class="no-result" v-show="noResultFlag">没有查询结果</div>
                </el-col>
            </el-row>
        </div>
    </div>
</template>
<script>
const STATUS_NO = 0;
//数组去重
Array.prototype.unique = function() {
    var arr = [];
    var obj = {};
    for (var i = 0; i < this.length; i++) {
        if (!obj[this[i]]) {
            arr.push(this[i]);
            obj[this[i]] = 1;
        }
    }
    return arr;
};

export default {
    data() {
            return {
                hospitals: [],
                allHospitals: [],
                citys: ['全部地区'],
                levels: ['全部等级'],
                selectedCity: '',
                selectedLevel: '',
                selectedHosName: '',
                noResultFlag: false
            }
        },
        created() {
            this.axios.get('/api/hosData').then((res) => {
                if (res.data.statusNo == STATUS_NO) {
                    this.hospitals = res.data.data;
                    this.allHospitals = res.data.data;
                };
                this.hospitals.forEach((item, index) => {
                    this.citys.push(item.provinceName);
                    this.levels.push(item.level);
                });
                this.citys = this.citys.unique();
                this.levels = this.levels.unique();
            })
        },
        methods: {
            selectHos() {
                let newHospital = [];
                if ((this.selectedCity == '全部地区' || this.selectedCity == '') && (this.selectedLevel == '全部等级' || this.selectedLevel == '')) {
                    this.hospitals = this.allHospitals;
                } else if ((this.selectedCity != '全部地区' || this.selectedCity != '') && (this.selectedLevel == '全部等级' || this.selectedLevel == '')) {
                    this.allHospitals.forEach((item, index) => {
                        if (item.provinceName == this.selectedCity) {
                            newHospital.push(item);
                            return false;
                        };
                    });
                    this.hospitals = newHospital;
                } else if ((this.selectedCity == '全部地区' || this.selectedCity == '') && (this.selectedLevel != '全部等级' || this.selectedLevel != '')) {
                    this.allHospitals.forEach((item, index) => {
                        if (item.level == this.selectedLevel) {
                            newHospital.push(item);
                            return false;
                        };
                    });
                    this.hospitals = newHospital;
                } else {
                    this.allHospitals.forEach((item, index) => {
                        if (item.provinceName == this.selectedCity && item.level == this.selectedLevel) {
                            newHospital.push(item);
                            return false;
                        };
                    });
                    this.hospitals = newHospital;
                }
            },
            searchHosByName() {
                let newHospital = [];
                this.allHospitals.forEach((item, index) => {
                    if (item.hospName.indexOf(this.selectedHosName) != -1) {
                        newHospital.push(item);
                    };
                });
                this.hospitals = newHospital;
                if (newHospital.length > 0) {
                    this.noResultFlag = false;
                } else {
                    this.noResultFlag = true;
                };
            }
        }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.clearfix:before,
.clearfix:after {
    content: " ";
    display: table;
}

.clearfix:after {
    clear: both;
}

.el-row {
    margin-bottom: 20px;
}

.el-row:last-child {
    margin-bottom: 0;
}

ul {
    margin: 0;
    padding: 0;
}

ul li {
    list-style: none;
}

h4 {
    margin: 0;
}

.search-wrapper,
.help-wrapper,
.hospital-wrapper {
    padding: 8px;
}

.help-wrapper,
.hospital-wrapper {
    background-color: #fff;
}

.search-wrapper {
    margin-bottom: 5px;
}

.help-wrapper {
    padding-top: 14px;
    border-top: 1px solid rgba(175, 175, 175, .15);
}

.hospital-wrapper {
    padding-bottom: 0;
}

.help {
    text-align: left;
}

.help .help-center {
    padding-right: 10px;
    color: #DF2D8F;
    border-right: 1px solid rgba(175, 175, 175, .15);
}

.help .help-content {
    padding-left: 10px;
    font-size: 13px;
    color: rgb(175, 175, 175);
}

.help .help-content .fa {
    margin-right: 12px;
}

.hospital-item {
    display: flex;
    padding-top: 15px;
    padding-bottom: 15px;
    border-top: 1px solid rgba(175, 175, 175, .15);
}

.hospital-item:last-child {
    border-bottom: 1px solid rgba(175, 175, 175, .15);
    margin-bottom: 0;
}

.hop-img {
    flex: 0 0 110px;
    width: 110px;
    height: 80px;
    overflow: hidden;
    margin-right: 10px;
    border-radius: 7px;
}

.hop-content {
    flex: 1;
    text-align: left;
}

.hop-content .level-distance,
.hop-content .test-btn {
    display: inline-block;
}

.hop-content .test-btn {
    float: right;
}

.hop-content .test-btn .test-elbtn {
    background-color: #DF2D8F;
    border: none;
    border-radius: 7px;
}

.hos-content-more {
    margin-top: 5px;
    font-size: 12px;
    line-height: 28px;
}

.hos-content-more .level {
    margin-right: 18px;
    color: #FFC134;
}

.hos-content-more .distance {
    color: rgba(51, 51, 51, .5);
}

.labels .tag {
    border-radius: 10px;
    font-size: 10px;
}

.labels .tag + .tag {
    margin-left: 5px;
}
</style>
