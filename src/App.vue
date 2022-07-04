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
// import axios from 'axios'
  export default {
      components: {
          HomeView,
          AboutView
      },
      // async mounted() {
      //   var axios = require('axios');
      //   var phoneNumber = this.$store.state.buyerNumber
      //   console.log(phoneNumber)

      //   var config = {
      //     method: 'get',
      //     url: 'https://beta.powerplug.ng/api/class.php?key=Autofill&PP_API_KEY=P_P_Auth_API_Master_key--><--(...)&phone=' + phoneNumber,
      //     headers: { }
      //   };

      //   axios(config)
      //   .then(function (response) {
      //     console.log(JSON.stringify(response.data));
      //   })
      //   .catch(function (error) {
      //     console.log(error);
      //   });

      // }
  }
</script>

<style>

</style>