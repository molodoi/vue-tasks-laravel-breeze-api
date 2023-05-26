<script setup>
import { ref } from "vue";
import { useAuthStore } from "../../stores/auth";

const authStore = useAuthStore();
const email = ref("");
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
                                authStore.handleForgotPassword(email)
                            "
                        >
                            <div
                                class="mb-2 p-2 text-green-900 font-semibold bg-green-300 rounded-md"
                                v-if="authStore.status"
                            >
                                {{ authStore.status }}
                            </div>
                            <div class="mb-6">
                                <input
                                    type="email"
                                    id="email"
                                    v-model="email"
                                    class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                                    placeholder="email@laraveller.com"
                                />
                                <div v-if="authStore.errors.email" class="flex">
                                    <span
                                        class="text-red-400 text-sm m-2 p-2"
                                        >{{ authStore.errors.email[0] }}</span
                                    >
                                </div>
                            </div>
                            <button
                                class="w-full px-4 py-3 bg-sky-800 hover:bg-sky-900 rounded-md text-white transition-colors ease-in-out"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
