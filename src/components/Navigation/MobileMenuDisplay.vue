<template>
  <div class="sm:invisible visible">
    <div class="w-full flex justify-center">
      <div
        class="fixed bottom-12 w-3/4 bg-sky-100 dark:bg-sky-800 z-50 p-4 rounded-full"
      >
        <ul
          class="flex items-center justify-between mx-8 relative text-sky-200"
        >
          <li>
            <router-link
              :to="{ name: 'home', hash: '#home' }"
              class="text-sky-500"
              :class="{ active_mobile: getCurrentHashRoute === '#home' }"
              exact
            >
              <i class="pi pi-home"></i>
            </router-link>
          </li>
          <li>
            <router-link
              :to="{ name: 'home', hash: '#skill' }"
              class="text-sky-500"
              :class="{ active_mobile: getCurrentHashRoute === '#skill' }"
              exact-path
              exact
            >
              <i class="pi pi-code"></i>
            </router-link>
          </li>
          <li>
            <button
              class="btn_dark_mobile"
              type="button"
              @click="toggleDarkMode"
            >
              <i :class="isDark + textColorDark"></i>
            </button>
          </li>
          <li>
            <router-link
              :to="{ name: 'home', hash: '#testi' }"
              :class="{ active_mobile: getCurrentHashRoute === '#testi' }"
              class="text-sky-500"
            >
              <i class="pi pi-dollar"></i>
            </router-link>
          </li>
          <li>
            <router-link
              :to="{ name: 'home', hash: '#aboutme' }"
              :class="{ active_mobile: getCurrentHashRoute === '#aboutme' }"
              class="text-sky-500"
            >
              <i class="pi pi-user font-light"></i>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import { computed, onBeforeMount, ref } from "vue";
import { handleDarkMode } from "../../assets/js/handleDarkMode";
import { useRoute } from "vue-router";

export default {
  setup() {
    const route = useRoute();
    const getCurrentHashRoute = computed(() => route.hash);
    const { setDarkMode, toggleDarkMode, themeMode } = handleDarkMode();
    const isDark = computed(() => {
      return themeMode.value ? "pi pi-sun" : "pi pi-moon";
    });

    const textColorDark = computed(() => {
      return themeMode.value ? " text-yellow-300" : " text-sky-500";
    });

    onBeforeMount(() => {
      setDarkMode();
    });

    return {
      getCurrentHashRoute,
      toggleDarkMode,
      isDark,
      textColorDark,
    };
  },
};
</script>
<style scoped>
.active_mobile {
  position: relative;
  z-index: 99999;
  color: white;
  transition: 0.5s;
  animation: fade-in-active 0.25s ease-in;
}

.active_mobile::before {
  content: "";
  position: absolute;
  left: -8px;
  top: -5px;
  z-index: -2;
  padding: 16px;
  border-radius: 50%;
  background-color: rgb(88, 197, 244);
}

@keyframes fade-in-active {
  from {
    opacity: 0.2;
  }
  to {
    opacity: 1;
  }
}
</style>
