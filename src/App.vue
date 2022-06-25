<template> 
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <div>
          <component :is="Component" />
        </div>
      </transition>
    </router-view>
<notifications classes="my-notification" position="top right" />
</template>
<script>
import HomeView from './views/HomeView.vue';
import AboutView from './views/AboutView.vue';
  export default {
      components: {
          HomeView,
          AboutView
      },
  }
</script>

<style>

/* .fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}


.fade-enter-from,
.fade-leave-to {
  opacity: 0;
} */
</style>