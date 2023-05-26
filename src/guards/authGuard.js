import { useAuthStore } from "../stores/auth";

export const authGuard = async (to, from, next) => {
    const authStore = useAuthStore();

    try {
        await authStore.getUser();
        if (authStore.user) {
            return next();
        }
    } catch (e) {
        // if (e.response.status == 401) {
        //     console.log(e); // log erreur
        // }
        return next({ name: "Login" });
    }
};
