<script setup>
import { onMounted } from "vue";
import NavbarVue from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
import AdminLayout from "./views/admin/AdminLayout.vue";
import PublicLayout from "./views/public/PublicLayout.vue";
</script>

<template>
    <main class="bg-slate-100 min-h-screen">
        <NavbarVue />
        <RouterView />
        <Footer />
    </main>
</template>
