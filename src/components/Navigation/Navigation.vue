<template>
  <nav
    class="sm:block hidden fixed top-0 w-full dark:bg-primary-dark border-b-[1px] border-sky-400 py-5 px-6 shadow-md z-50 backdrop-blur-md"
  >
    <div class="flex items-center justify-between">
      <div class="menu_link">
        <ul
          class="flex items-center justify-around mx-8 space-x-10 text-slate-500"
        >
          <li>
            <router-link
              :to="{ name: 'home', hash: '#home' }"
              :class="{ active: getCurrentHashRoute === '#home' }"
              exact-path
            >
              <i
                class="pi pi-home"
                target-hash="#home"
                style="font-size: 1.5rem"
              ></i>
            </router-link>
          </li>
          <li>
            <router-link
              :to="{ name: 'home', hash: '#skill' }"
              :class="{ active: getCurrentHashRoute === '#skill' }"
              exact-path
            >
              <i class="pi pi-code" style="font-size: 1.3rem"></i>
            </router-link>
          </li>
          <li>
            <router-link
              :to="{ name: 'home', hash: '#testi' }"
              :class="{ active: getCurrentHashRoute === '#testi' }"
              exact-path
            >
              <i class="pi pi-dollar" style="font-size: 1.3rem"></i>
            </router-link>
          </li>
          <li>
            <router-link
              :to="{ name: 'home', hash: '#aboutme' }"
              :class="{ active: getCurrentHashRoute === '#aboutme' }"
              exact-path
            >
              <i class="pi pi-user" style="font-size: 1.3rem"></i>
            </router-link>
          </li>
        </ul>
      </div>
      <div class="dark__mode__swicther">
        <SwitchDark />
      </div>
    </div>
  </nav>

  <div class="Mobile_Menu_Display">
    <MobileMenuDisplay />
  </div>
</template>

<script>
import SwitchDark from "./SwitchDark.vue";
import MobileMenuDisplay from "./MobileMenuDisplay.vue";
import { computed } from "vue";
import { useRoute } from "vue-router";

export default {
  components: {
    SwitchDark,
    MobileMenuDisplay,
  },
  setup() {
    const route = useRoute();
    const getCurrentHashRoute = computed(() => route.hash);

    return { getCurrentHashRoute };
  },
};
</script>

<style>
.active {
  color: #30a2ff;
}
</style>
