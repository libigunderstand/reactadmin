// import Login from "_pages/Login"
// import Home from "_pages/Home"

export const routes = [
    {
        path: '/',
        component: ()=> import("_pages/Home")
    },
    {
        path: '/login',
        component: ()=> import("_pages/Login")
    }
]