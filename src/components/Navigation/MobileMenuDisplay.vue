<template>
  <div class="sm:invisible visible flex justify-center">
    <div
      class="fixed bottom-8 w-96 backdrop-blur-sm bg-primary-blue dark:bg-slate-800 z-50 p-3.5 rounded-full"
    >
      <ul class="flex items-center justify-around mx-8 relative text-sky-200">
        <li>
          <router-link
            :to="{ name: 'home', hash: '#home' }"
            :class="{ active_mobile: getCurrentHashRoute === '#home' }"
            exact
          >
            <i class="pi pi-home"></i>
          </router-link>
        </li>
        <li class="mr-10">
          <router-link
            :to="{ name: 'home', hash: '#skill' }"
            :class="{ active_mobile: getCurrentHashRoute === '#skill' }"
            exact-path
            exact
          >
            <i class="pi pi-code"></i>
          </router-link>
        </li>
        <li>
          <button
            :class="
              'btn_dark_mobile absolute -top-6 right-28 shadow-md py-6 px-7 rounded-xl ' +
              bgIconIsDark
            "
            type="button"
            @click="toggleDarkMode"
          >
            <i :class="isDark + textColorDark" style="font-size: 1.2em"></i>
          </button>
        </li>
        <li class="ml-10">
          <router-link
            :to="{ name: 'home', hash: '#testi' }"
            :class="{ active_mobile: getCurrentHashRoute === '#testi' }"
          >
            <i class="pi pi-dollar"></i>
          </router-link>
        </li>
        <li>
          <router-link
            :to="{ name: 'home', hash: '#aboutme' }"
            :class="{ active_mobile: getCurrentHashRoute === '#aboutme' }"
          >
            <i class="pi pi-user"></i>
          </router-link>
        </li>
      </ul>
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
    const bgIconIsDark = computed(() => {
      return themeMode.value ? "bg-yellow-800" : "bg-blue-800";
    });

    const textColorDark = computed(() => {
      return themeMode.value
        ? " text-yellow-100 icon__switch__dark"
        : " text-sky-500";
    });

    onBeforeMount(() => {
      setDarkMode();
    });

    return {
      getCurrentHashRoute,
      toggleDarkMode,
      isDark,
      bgIconIsDark,
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

.icon__switch__dark {
  animation: spin-slow 2s linear infinite;
}

@keyframes spin-slow {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
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
