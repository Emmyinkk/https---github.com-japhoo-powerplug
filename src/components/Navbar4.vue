<template>
    <div class="Navbar4">
        <div class="top-nav">
            <div class="l-nav">
                <li><router-link to="/"><img src="@/assets/newLogo.png" alt="Powerplug logo"></router-link></li>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .top-nav {
        display: block;
        width: 100%;
        position: fixed;
        padding-bottom: 1.9em;
        top: 0;
        z-index: 999;
        background: white;
        border-bottom: .5px solid rgb(165, 165, 165);
    }
    .l-nav {
        width: 85%;
        margin: 0 auto;
        text-align: left; 
    }
    .l-nav img {
        top: -.2em;
    }
    @media only screen and (min-width: 1024px) {
        .navbar {
           display: block;
        }
        .l-nav {
            width: 90%;
            margin: 0 auto;
            text-align: left;
            padding-top: 1.1em;
        }
        .l-nav img {
            top: 0;
        }
        .top-nav {
            padding-bottom: 2.5em;
        }
    }
</style>