<template> 
    <!-- <router-view v-slot="{ Component }">
      <transition name="route" mode="out-in">
          <component :is="Component" :key="$route.path" />
      </transition>
  </router-view> -->
  <router-view />
<notifications position="top right" />
</template>
<script>
import Navbar from './components/Navbar.vue';
import HomeView from './views/HomeView.vue';
import AboutView from './views/AboutView.vue';
  export default {
      components: {
          HomeView,
          AboutView,
          Navbar
      },
  }
</script>

<style>

  .route-enter-from {
    opacity: 0;
    transform: translateX(100px);
  }
  .route-enter-active {
    transition: all 0.3s ease-out;
  }
  .route-leave-to {
    opacity: 0;
    transform: translateX(-100px);
  }
  .route-leave-active {
    transition: all 0.3s ease-in;
  }
</style>