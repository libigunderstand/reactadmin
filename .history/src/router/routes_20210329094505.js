// import Login from "_pages/Login"
// import Home from "_pages/Home"

var routes = [
    {
        path: '/',
        component: ()=> import("_pages/Home")
    },
    {
        path: '/login',
        component: ()=> import("_pages/Login")
    }
]

export default routes