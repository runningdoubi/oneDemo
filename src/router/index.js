import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import hospInfo from '@/components/hospInfo'
import orderSearch from '@/components/orderSearch'
import hospDesc from '@/components/hospDesc'
import breastDesc from '@/components/breastDesc'
import doIt from '@/components/doIt'
import testPhone from '@/components/testPhone'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'hello',
        component: Hello
    }, {
        path: '/hospInfo',
        name: 'hospInfo',
        component: hospInfo
    }, {
        path: '/orderSearch',
        name: 'orderSearch',
        component: orderSearch
    },
    {
        path: '/hospDesc',
        name: 'hospDesc',
        component: hospDesc
    },
    {
        path: '/breastDesc',
        name: 'breastDesc',
        component: breastDesc
    },
    {
        path: '/doIt',
        name: 'doIt',
        component: doIt
    },
    {
        path: '/testPhone',
        name: 'testPhone',
        component: testPhone
    }]
})
