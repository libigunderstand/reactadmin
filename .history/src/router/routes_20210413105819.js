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
        exact: true
    },
    {
        path: '/login',
        component: Login
    }
]

export default routes