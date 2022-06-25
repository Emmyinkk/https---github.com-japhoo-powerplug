<template>
<Navbar4 />
    <div class="pageNotFound">
        <h1>404</h1>
        <h2>Page Not Found</h2>
        <router-link to="/"> Go Home </router-link>
    </div>
</template>

<script>
    import Navbar3 from '@/components/Navbar3.vue';

    export default {
        components: {
            Navbar3,
        },
    }
</script>

<style scoped>
     .pageNotFound {
        display: flex;
        height: 100vh;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    h1 {
        color: #D91821;
        font-size: 50px;
    }
    a {
        margin-top: 5em;
        color: #D91821;
    }
</style>
