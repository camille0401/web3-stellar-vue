<template>
    <div className="flex flex-col min-h-screen overflow-hidden supports-[overflow:clip]:overflow-clip">
        <!-- site header -->
        <Header />
        <!-- Page content -->
        <main class="grow">
            <router-view></router-view>
        </main>
        <!-- site footer -->
        <Footer />
    </div>
</template>

<script setup>
import Header from '../partials/Header.vue';
import Footer from '../partials/Footer.vue';
</script>

<style lang="scss" scoped></style>