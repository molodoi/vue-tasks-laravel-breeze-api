import { createRouter, createWebHistory } from "vue-router";
import { authGuard } from "../guards/authGuard";
const routes = [
    {
        path: "/",
        name: "public",
        component: () => import("../views/public/PublicLayout.vue"),
        children: [
            {
                path: "/",
                name: "Home",
                component: () => import("../views/public/Home.vue"),
            },
            {
                path: "/login",
                name: "Login",
                component: () => import("../views/public/Login.vue"),
            },
            {
                path: "/register",
                name: "Register",
                component: () => import("../views/public/Register.vue"),
            },
            {
                path: "/forgot-password",
                name: "ForgotPassword",
                component: () => import("../views/public/ForgotPassword.vue"),
            },
            {
                path: "/password-reset/:token",
                name: "ResetPassword",
                component: () => import("../views/public/ResetPassword.vue"),
            },
            {
                path: "/admin",
                name: "Admin",
                meta: { auth: true },
                component: () => import("../views/admin/AdminLayout.vue"),
                children: [
                    {
                        path: "dashboard",
                        name: "Dashboard",
                        meta: { auth: true },
                        component: () => import("../views/admin/Dashboard.vue"),
                    },
                    {
                        path: "tasks/index",
                        name: "TaskIndex",
                        meta: { auth: true },
                        component: () =>
                            import("../views/admin/tasks/TaskIndex.vue"),
                    },
                    {
                        path: "tasks/create",
                        name: "TaskCreate",
                        meta: { auth: true },
                        component: () =>
                            import("../views/admin/tasks/TaskCreate.vue"),
                    },
                    {
                        path: "/tasks/:id/edit",
                        name: "TaskEdit",
                        meta: { auth: true },
                        component: () =>
                            import("../views/admin/tasks/TaskEdit.vue"),
                        props: true,
                    },
                    { path: "/:pathMatch(.*)*", redirect: "/admin/dashboard" },
                ],
            },
            {
                path: "/:pathMatch(.*)*",
                redirect: "/",
            },
        ],
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach(async (to, from, next) => {
    if (to.matched.some((record) => record.meta.auth)) {
        await authGuard(to, from, next);
    } else {
        return next();
    }
});

export default router;
