<template>
    <div class="nav">
        <ul class="navbar">
            <div class="top-nav">
                <div class="l-nav">
                    <li><router-link to="/"><img src="@/assets/newLogo.png" alt="Powerplug logo"></router-link></li>
                </div>
            </div>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'Navbar2',
        
    }
</script>

<style scoped>
    .top-nav {
        display: block;
    }
    .l-nav {
        text-align: center;
    }
    @media only screen and (min-width: 1024px) {
        .navbar {
           display: block;
        }
    }
</style>