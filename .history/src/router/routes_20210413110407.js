import Login from "_pages/Login"
import Home from "_pages/Home"

const routes = [
    {
        path: '/',
        component: Home,
        exact: true,
        auth: true
    },
    {
        path: '/home',
        component: Home,
        auth: true
    },
    {
        path: '/login',
        component: Login,
        auth: true
    }
]

export default routes