<script setup>
import { ref } from "vue";
import { useAuthStore } from "../stores/auth";

let showMenu = ref(false);
const toggleNav = () => (showMenu.value = !showMenu.value);
const authStore = useAuthStore();
</script>

<template>
    <nav class="bg-sky-800 text-white px-2 py-2.5 sm:px-4">
        <div
            class="container mx-auto flex flex-wrap items-center justify-between"
        >
            <router-link
                :to="{ name: 'Home' }"
                class="p-2 text-white hover:text-sky-300 transition-colors ease-in-out"
                aria-current="page"
            >
                Home
            </router-link>
            <button
                data-collapse-toggle="navbar-default"
                type="button"
                class="ml-3 inline-flex items-center rounded-lg p-2 text-sm text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden"
                aria-controls="navbar-default"
                aria-expanded="false"
                @click="toggleNav"
            >
                <span class="sr-only">Open main menu</span>
                <svg
                    class="h-6 w-6"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fill-rule="evenodd"
                        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                        clip-rule="evenodd"
                    ></path>
                </svg>
            </button>
            <div
                :class="showMenu ? 'flex' : 'hidden'"
                class="w-full md:block md:w-auto"
                id="navbar-default"
            >
                <ul
                    class="mt-4 flex flex-col rounded-lg p-4 md:mt-0 md:flex-row md:space-x-8 md:text-sm md:font-medium"
                >
                    <template v-if="!authStore.user">
                        <li>
                            <router-link
                                :to="{ name: 'Login' }"
                                class="block py-2 pr-4 pl-3 text-white hover:text-sky-300 transition-colors ease-in-out"
                            >
                                Login
                            </router-link>
                        </li>
                        <li>
                            <router-link
                                :to="{ name: 'Register' }"
                                class="block py-2 pr-4 pl-3 text-white hover:text-sky-300 transition-colors ease-in-out"
                            >
                                Register
                            </router-link>
                        </li>
                    </template>
                    <template v-else>
                        <button
                            @click="authStore.handleLogout"
                            class="block rounded py-2 pr-4 pl-3 text-white hover:text-sky-300 transition-colors ease-in-out"
                        >
                            Logout
                        </button>
                    </template>
                </ul>
            </div>
        </div>
    </nav>
</template>
