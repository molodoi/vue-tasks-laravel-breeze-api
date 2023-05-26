<script setup>
import { useAuthStore } from "../../stores/auth";
import { ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const authStore = useAuthStore();

const form = ref({
    password: "",
    password_confirmation: "",
    email: route.query.email,
    token: route.params.token,
});
</script>
<template>
    <section class="bg-slate-100 md:py-20">
        <div class="container px-5 py-5 md:py-24 mx-auto">
            <div class="flex flex-wrap">
                <div class="w-full px-4">
                    <div
                        class="relative mx-auto max-w-[525px] overflow-hidden rounded-lg bg-white py-16 px-4 text-center sm:px-12 md:px-[60px] border-solid border-1 border-gray-400 shadow-2xl"
                    >
                        <div className="mb-10 text-center md:mb-16">
                            Forgot your password? Let us know your email address
                            and we will send you a password reset link.
                        </div>
                        <form
                            @submit.prevent="
                                authStore.handleResetPassword(form)
                            "
                        >
                            <div
                                class="m-2 p-2 text-green-900 font-semibold bg-green-300 rounded-md"
                                v-if="authStore.status"
                            >
                                {{ authStore.status }}
                            </div>
                            <div class="mb-6">
                                <label
                                    for="password"
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                    >New password</label
                                >
                                <input
                                    type="password"
                                    id="password"
                                    v-model="form.password"
                                    class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                                />
                                <div
                                    v-if="authStore.errors.password"
                                    class="flex"
                                >
                                    <span
                                        class="text-red-400 text-sm m-2 p-2"
                                        >{{
                                            authStore.errors.password[0]
                                        }}</span
                                    >
                                </div>
                            </div>
                            <div class="mb-6">
                                <label
                                    for="repeat-password"
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                    >Confirm Password</label
                                >
                                <input
                                    type="password"
                                    id="repeat-password"
                                    v-model="form.password_confirmation"
                                    class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                                />
                            </div>
                            <button
                                type="submit"
                                class="w-full px-4 py-3 bg-sky-800 hover:bg-sky-900 rounded-md text-white transition-colors ease-in-out"
                            >
                                Reset Password
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
