<script setup>
import { reactive } from "vue";
import useTasks from "../../../lib/task";

const { storeTask, errors } = useTasks();

const form = reactive({
    title: "",
    description: "",
});
</script>

<template>
    <div
        class="container mx-auto max-w-3xl md:mt-12 bg-white border-solid border-1 border-gray-400 shadow-2xl rounded-lg"
    >
        <section class="text-gray-600 body-font">
            <div class="container px-5 py-5 md:py-24 mx-auto">
                <div class="flex flex-col text-center w-full mb-10">
                    <h1
                        class="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900"
                    >
                        Create a new Task
                    </h1>
                </div>
                <div class="lg:w-2/3 w-full mx-auto overflow-auto">
                    <form @submit.prevent="storeTask(form)">
                        <div>
                            <label
                                for="title"
                                class="block text-sm font-medium leading-6 text-gray-900 mt-5"
                            >
                                Title
                            </label>
                            <div class="mt-2">
                                <input
                                    id="title"
                                    name="title"
                                    type="text"
                                    v-model="form.title"
                                    autoComplete="title"
                                    class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Your task title..."
                                />
                            </div>
                            <div v-if="errors.title">
                                <span class="text-sm text-red-400">{{
                                    errors.title[0]
                                }}</span>
                            </div>
                        </div>
                        <div>
                            <label
                                for="description"
                                class="block text-sm font-medium leading-6 text-gray-900 mt-2"
                            >
                                Description
                            </label>
                            <div class="mt-2">
                                <textarea
                                    id="description"
                                    name="description"
                                    v-model="form.description"
                                    rows="4"
                                    class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Your task description..."
                                ></textarea>
                            </div>
                            <div v-if="errors.description">
                                <span class="text-sm text-red-400">{{
                                    errors.description[0]
                                }}</span>
                            </div>
                        </div>
                        <div class="flex justify-end pl-4 mt-4 w-full mx-auto">
                            <RouterLink
                                :to="{ name: 'TaskIndex' }"
                                class="flex mr-2 text-center text-sky-800 border-solid border-2 border-sky-800 py-2 px-4 focus:outline-none rounded"
                                aria-current="page"
                            >
                                Back
                            </RouterLink>
                            <button
                                type="submit"
                                class="text-center text-white bg-sky-800 border-0 py-2 px-6 focus:outline-none hover:bg-sky-900 rounded"
                            >
                                Create
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    </div>
</template>
