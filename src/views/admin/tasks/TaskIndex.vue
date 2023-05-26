<script setup>
import {
    PlusCircleIcon,
    EyeIcon,
    TrashIcon,
    CheckCircleIcon,
    ArrowPathIcon,
} from "@heroicons/vue/24/outline";
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
                            <tr v-for="task in tasks" :key="task.id">
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
                    <a
                        class="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 cursor-pointer"
                    >
                        <span class="sr-only">Previous</span>
                        <svg
                            class="h-5 w-5"
                            view-box="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
                                clip-rule="evenodd"
                            />
                        </svg>
                    </a>
                    <a
                        class="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 cursor-pointer disabled:bg-gray-400"
                    >
                        <span class="sr-only">Next</span>
                        <svg
                            class="h-5 w-5"
                            view-box="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                                clip-rule="evenodd"
                            />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    </div>
</template>
