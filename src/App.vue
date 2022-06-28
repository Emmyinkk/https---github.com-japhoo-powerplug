<template> 
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <div>
          <component :is="Component" />
        </div>
      </transition>
    </router-view>
<notifications position="top right" />
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

</style>