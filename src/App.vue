<template>
  <Navigation />

  <RouterView />
</template>
<script>
import Navigation from "./components/Navigation/Navigation.vue";
export default {
  components: {
    Navigation,
  },
  setup() {},
};
</script>
