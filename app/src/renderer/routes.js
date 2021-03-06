export default [
    {
        path: '/',
        name: 'main',
        component: require('pages/Main.vue'),
        children: [
            {
                path: 'bucketPage',
                name: 'bucketPage',
                component: require('pages/bucketPage.vue')
            },
            {
                path: 'setup',
                name: 'setup',
                component: require('pages/Setup.vue')
            }
        ]
    },
    {
        path: '/login',
        name: 'login',
        component: require('pages/Login.vue')
    },
    {
        path: '/tray',
        name: 'tray',
        component: require('pages/Tray.vue')
    }
]
