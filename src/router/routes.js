import Login from "_pages/Login"
import Home from "_pages/Home"
import Error404 from "_pages/404/Error404"

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
    },
    {
        path: '/404',
        component: Error404,
    }
]

export default routes