<template>
  <nav
    class="sm:block hidden fixed top-0 w-full dark:bg-black border-b-[1px] border-sky-400 py-6 px-6 shadow-md z-50 backdrop-blur-md"
  >
    <div class="flex items-center justify-between">
      <div class="menu_link">
        <ul
          class="flex items-center justify-around mx-8 space-x-10 text-slate-500"
        >
          <li>
            <router-link
              :to="{ name: 'home', hash: '#home' }"
              :class="{ active: currentRouteHash === '#home' }"
              exact-path
              @click="handleMenuClick('home')"
            >
              <span>Home</span>
            </router-link>
          </li>
          <li>
            <router-link
              :to="{ name: 'home', hash: '#skill' }"
              :class="{ active: currentRouteHash === '#skill' }"
              exact-path
              @click="handleMenuClick('skill')"
            >
              <span>Experience</span>
            </router-link>
          </li>
          <li>
            <router-link
              :to="{ name: 'home', hash: '#testi' }"
              :class="{ active: currentRouteHash === '#testi' }"
              exact-path
              @click="handleMenuClick('testi')"
            >
              <span>Testimonial</span>
            </router-link>
          </li>
          <li>
            <router-link
              :to="{ name: 'home', hash: '#aboutme' }"
              :class="{ active: currentRouteHash === '#aboutme' }"
              exact-path
              @click="handleMenuClick('aboutme')"
            >
              <span>About Me</span>
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
import { ref, onMounted, watch, nextTick } from "vue";
import { useRoute, useRouter } from "vue-router";

export default {
  components: {
    SwitchDark,
    MobileMenuDisplay,
  },
  setup() {
    const router = useRouter();
    const route = useRoute();
    const currentRouteHash = ref(route.hash || "#home");
    const activeSection = ref([]);
    const menuClick = ref(false);
    let observer = null;

    const createdObserver = () => {
      if (observer) observer.disconnect();

      const options = {
        root: null,
        threshold: 0.5,
      };

      observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (!menuClick.value && entry.isIntersecting) {
            currentRouteHash.value = `#${entry.target.id}`;
            router.replace({ hash: currentRouteHash.value });
          }
        });
      }, options);

      activeSection.value.forEach((section) => {
        if (section) observer.observe(section);
      });
    };

    const handleMenuClick = (sectionId) => {
      menuClick.value = true;
      currentRouteHash.value = `#${sectionId}`;
      router.push({ hash: currentRouteHash.value });

      nextTick(() => {
        const targetElement = document.getElementById(sectionId);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }

        setTimeout(() => {
          menuClick.value = false;
        }, 1000);
      });
    };

    onMounted(() => {
      setTimeout(() => {
        activeSection.value = [
          document.getElementById("home"),
          document.getElementById("skill"),
          document.getElementById("testi"),
          document.getElementById("aboutme"),
        ];

        createdObserver();

        window.addEventListener("scroll", function () {
          if (menuClick.value) {
            return;
          }
        });
      }, 300);

      if (route.hash) {
        menuClick.value = true;
        const targetId = route.hash.substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          setTimeout(() => {
            targetElement.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
            setTimeout(() => {
              menuClick.value = false;
            }, 1000);
          }, 500);
        }
      }
    });

    watch(
      () => route.hash,
      (newHash) => {
        if (newHash) {
          currentRouteHash.value = newHash;
        }
      }
    );

    return { currentRouteHash, menuClick, handleMenuClick };
  },
};
</script>

<style>
.active {
  color: #30a2ff;
}
</style>
