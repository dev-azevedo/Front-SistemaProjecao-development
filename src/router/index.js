import Vue from 'vue'
import Router from 'vue-router'

// components
import Abstract from "./../components/abstract.vue"
import Register from "./../components/register/register.vue"
import Contract from "./../components/contract/contract.vue"
import Income from "./../components/income/income.vue"


Vue.use(Router)
const routes = [
    {
        name: 'abstract',
        path: '/',
        component: Abstract
    },
    {
        name: 'register',
        path: '/cadastrar',
        component: Register
    },
    {
        name: 'contract',
        path: '/contrato',
        component: Contract
    },
    {
        name: 'income',
        path: '/faturamento',
        component: Income
    }
]

const router = new Router({ routes })

export default router