<script setup>
import {
    PlusCircleIcon,
    EyeIcon,
    TrashIcon,
    CheckCircleIcon,
    ArrowPathIcon,
} from "@heroicons/vue/24/outline";
import { TailwindPagination } from "laravel-vue-pagination";
import useTasks from "../../../lib/task";
import { onMounted } from "vue";
const { tasks, getTasks, destroyTask, updateStatusTask } = useTasks();
onMounted(() => getTasks());
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
                        Tasks
                    </h1>
                    <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
                        Make the tasks come through
                    </p>
                </div>
                <div
                    class="flex justify-end lg:w-2/3 w-full mx-auto overflow-auto"
                >
                    <RouterLink
                        :to="{ name: 'TaskCreate' }"
                        class="flex text-center text-white bg-sky-800 border-0 p-2 focus:outline-none hover:bg-sky-900 rounded mb-3"
                        aria-current="page"
                    >
                        <PlusCircleIcon class="h-6 w-6 mr-1 text-white" />
                        Create a new Task
                    </RouterLink>
                </div>
                <div class="lg:w-2/3 w-full mx-auto overflow-auto">
                    <table
                        class="table-auto w-full text-left whitespace-no-wrap mt-2"
                    >
                        <thead>
                            <tr>
                                <th
                                    class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl"
                                >
                                    Name
                                </th>
                                <th
                                    class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100"
                                >
                                    Status
                                </th>
                                <th
                                    class="w-10 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tr rounded-br"
                                ></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="task in tasks.data" :key="task.id">
                                <td class="px-4 py-3">{{ task.title }}</td>
                                <td class="px-4 py-3">
                                    <button
                                        @click="updateStatusTask(task.id)"
                                        class="px-4 py-2 text-white rounded-md"
                                    >
                                        <CheckCircleIcon
                                            v-if="task.status"
                                            class="h-5 w-5 text-green-500"
                                        />
                                        <ArrowPathIcon
                                            v-else
                                            class="h-5 w-5 text-purple-500"
                                        />
                                    </button>
                                </td>
                                <td class="px-4 py-3">
                                    <div class="flex items-stretch">
                                        <RouterLink
                                            :to="{
                                                name: 'TaskEdit',
                                                params: { id: task.id },
                                            }"
                                            class="self-center px-4 py-2 text-white rounded-md"
                                        >
                                            <EyeIcon
                                                class="h-5 w-5 text-blue-500"
                                            />
                                        </RouterLink>
                                        <button
                                            @click="destroyTask(task.id)"
                                            class="self-center px-4 py-2 text-white rounded-md"
                                        >
                                            <TrashIcon
                                                class="h-5 w-5 text-red-500"
                                            />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="flex justify-end pl-4 mt-4 lg:w-2/3 w-full mx-auto">
                    <TailwindPagination
                        :data="tasks"
                        @pagination-change-page="getTasks"
                    />
                </div>
            </div>
        </section>
    </div>
</template>
