import { ref } from "vue";
import { useRouter } from "vue-router";
import axios from "../lib/axios";

export default function useTasks() {
    const tasks = ref([]);
    const task = ref([]);
    const currentPage = ref(1);
    const errors = ref({});
    const router = useRouter();

    const getTasks = async (page = 1) => {
        const response = await axios.get(`/api/v1/tasks?page=${page}`);
        tasks.value = response.data;
        currentPage.value = page;
    };

    const getTask = async (id) => {
        const response = await axios.get("/api/v1/tasks/" + id);
        task.value = response.data.data;
    };

    const storeTask = async (data) => {
        try {
            await axios.post("/api/v1/tasks", data);
            await router.push({ name: "TaskIndex" });
        } catch (error) {
            if (error.response.status === 422) {
                errors.value = error.response.data.errors;
            }
        }
    };

    const updateTask = async (id) => {
        try {
            await axios.put("/api/v1/tasks/" + id, task.value);
            await router.push({ name: "TaskIndex" });
        } catch (error) {
            if (error.response.status === 422) {
                errors.value = error.response.data.errors;
            }
        }
    };

    const destroyTask = async (id) => {
        if (!window.confirm("Are You Sure?")) {
            return;
        }
        await axios.delete("/api/v1/tasks/" + id);
        await getTasks(currentPage.value);
    };

    const updateStatusTask = async (id) => {
        await axios.put("/api/v1/tasks/status/" + id).then((res) => res.data);
        await getTasks(currentPage.value);
    };

    return {
        task,
        tasks,
        getTask,
        getTasks,
        storeTask,
        updateTask,
        destroyTask,
        updateStatusTask,
        errors,
    };
}
