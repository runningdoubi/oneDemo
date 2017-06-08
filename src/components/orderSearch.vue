<template>
    <div class="main-wrapper">
        <div class="tab">
            <div class="tab-item" :class="{'tab-active':timeActiveFlag}" @click="timeActive">时间</div>
            <div class="tab-item" :class="{'tab-active':historyActiveFlag}">历史</div>
        </div>
        <div class="select-wrapper">
            <div class="time-wrapper">
                <span class="title">选择日期</span>
                <div class="time-content">
                    <div class="year-wrapper time-item">
                        <el-select v-model="year" placeholder="请选择年">
                            <el-option v-for="item in years" :key="item.value" :label="item.label" :value="item.value">
                            </el-option>
                        </el-select>
                    </div>
                    <div class="month-wrapper time-item">
                        <el-select v-model="month" placeholder="请选择月">
                            <el-option v-for="item in months" :key="item.value" :label="item.label" :value="item.value">
                            </el-option>
                        </el-select>
                    </div>
                    <div class="date-wrapper time-item">
                        <el-select v-model="date" placeholder="请选择日">
                            <el-option v-for="item in dates" :key="item.value" :label="item.label" :value="item.value">
                            </el-option>
                        </el-select>
                    </div>
                </div>
            </div>
            <div class="noon-wrapper">
                <span class="title">选择上、下午</span>
                <div class="item-content">
                    <el-select class="item-content" v-model="noonData" placeholder="">
                        <el-option v-for="item in noons" :key="item.value" :label="item.label" :value="item.value">
                        </el-option>
                    </el-select>
                </div>
            </div>
            <div class="test-option">
                <span class="title">预约检查项目</span>
                <div class="item-content">
                    <el-select class="item-content" v-model="testData" placeholder="">
                        <el-option v-for="item in testOptions" :key="item.value" :label="item.label" :value="item.value">
                        </el-option>
                    </el-select>
                </div>
            </div>
            <div class="pay-wrapper">
                <span class="title">支付选择</span>
                <div class="item-content">
                    <el-select class="item-content" v-model="payData" placeholder="">
                        <el-option v-for="item in payOptions" :key="item.value" :label="item.label" :value="item.value">
                        </el-option>
                    </el-select>
                </div>
            </div>
        </div>
        <div class="submit-wrapper">
            <el-button class="btn-item" type="primary" size="large">下一步</el-button>
        </div>
    </div>
</template>
<script type="text/javascript">
import constant from '../../static/js/constant'

const years = constant.years;
const months = constant.months;
const dates = constant.dates;
const testOptions = constant.testOptions;
const payOptions = constant.payOptions;
var nowDate = new Date();
var nowYear = nowDate.getFullYear() + '年';
var nowMonth = nowDate.getMonth() + 1 + '月';
var nowDay = nowDate.getDate() + '日';

export default {
    data() {
            return {
                timeActiveFlag: true,
                historyActiveFlag: false,
                years: years,
                months:months,
                dates:dates,
                testOptions:testOptions,
                payOptions:payOptions,
                year: nowYear,
                month: nowMonth,
                date: nowDay,
                noonData: '上午',
                testData: '乳腺X线检查',
                payData: '微信支付',
                noons: [{
                    'value': '上午',
                    'label': '上午'
                }, {
                    'value': '下午',
                    'label': '下午'
                }]
            }
        },
        methods: {
            timeActive() {
                this.timeActiveFlag = true;
                this.historyActiveFlag = false;
            },
            historyActive() {
                this.timeActiveFlag = false;
                this.historyActiveFlag = true;
            }
        }

}
</script>
<style rel="stylesheet" scoped>
.main-wrapper {
    box-sizing: border-box;
    width: 100%;
    padding: 8px;
}

.main-wrapper .tab {
    display: flex;
    margin: 0 -8px 0 -8px;
}

.main-wrapper .tab .tab-item {
    display: inline-block;
    flex: 1;
    font-size: 18px;
    padding: 8px;
    padding-top: 0;
    border-bottom: 1px solid #E5E5E7;
}

.main-wrapper .tab .tab-item.tab-active {
    border-bottom: 1px solid #DF2D8F;
}

.main-wrapper .select-wrapper {
    text-align: left;
}

.select-wrapper .title {
    display: inline-block;
    padding: 10px 0 10px 0;
}

.main-wrapper .time-content {
    display: flex;
    justify-content: center;
}

.time-content .time-item + .time-item {
    margin-left: 5px;
}

.main-wrapper .item-content {
    width: 100%;
}

.submit-wrapper {
    width: 100%;
}

.submit-wrapper .btn-item {
    width: 100%;
    height: 50px;
    margin-top: 30px;
    background-color: #DF2D8F;
    border: none;
}
</style>
