<script setup>
import { ref } from "vue";
import { useAuthStore } from "../../stores/auth";
const authStore = useAuthStore();
const form = ref({
    email: "",
    password: "",
});
</script>
<template>
    <section class="bg-slate-100 py-5 md:py-20">
        <div class="container mx-auto">
            <div class="flex flex-wrap">
                <div class="w-full px-4">
                    <div
                        class="relative mx-auto max-w-[525px] overflow-hidden rounded-lg bg-white py-16 px-4 text-center sm:px-12 md:px-[60px] border-solid border-1 border-gray-400 shadow-2xl"
                    >
                        <div className="mb-10 text-center md:mb-16">
                            Sign into your account
                        </div>
                        <form @submit.prevent="authStore.handleLogin(form)">
                            <div class="mb-4">
                                <input
                                    type="email"
                                    v-model="form.email"
                                    placeholder="Email"
                                    class="border-[#E9EDF4] w-full rounded-md border bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#ACB6BE] outline-none focus:border-primary focus-visible:shadow-none"
                                />
                                <div v-if="authStore.errors.email" class="flex">
                                    <span class="text-red-400 text-sm m-2 p-2">
                                        {{ authStore.errors.email[0] }}
                                    </span>
                                </div>
                            </div>
                            <div class="mb-6">
                                <input
                                    type="password"
                                    v-model="form.password"
                                    placeholder="Password"
                                    class="border-[#E9EDF4] w-full rounded-md border bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#ACB6BE] outline-none focus:border-primary focus-visible:shadow-none"
                                />
                                <div
                                    v-if="authStore.errors.password"
                                    class="flex"
                                >
                                    <span class="text-red-400 text-sm m-2 p-2">
                                        {{ authStore.errors.password[0] }}
                                    </span>
                                </div>
                            </div>
                            <div class="mb-10">
                                <button
                                    type="submit"
                                    class="w-full px-4 py-3 bg-sky-800 hover:bg-sky-900 rounded-md text-white transition-colors ease-in-out"
                                >
                                    Login
                                </button>
                            </div>
                        </form>
                        <RouterLink
                            to="/forgot-password"
                            class="mb-2 inline-block text-base text-[#adadad] hover:text-primary hover:underline"
                        >
                            Forgot Password?
                        </RouterLink>
                        <p class="text-base text-[#adadad]">
                            Not a member yet?
                            <RouterLink
                                to="/register"
                                class="text-primary hover:underline"
                            >
                                Sign Up
                            </RouterLink>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
