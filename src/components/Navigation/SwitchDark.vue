<template>
  <div class="flex items-center space-x-3">
    <i class="pi pi-sun dark:text-slate-300" :class="isLight"></i>
    <InputSwitch @change="toggleDarkMode" v-model="checked" />
    <i class="pi pi-moon text-slate-300" :class="isDark"></i>
  </div>
</template>
<script>
import InputSwitch from "primevue/inputswitch";
import { computed, onBeforeMount, ref } from "vue";
import { handleDarkMode } from "../../assets/js/handleDarkMode";

export default {
  components: {
    InputSwitch,
  },
  setup() {
    const checked = ref(false);
    const { setDarkMode, toggleDarkMode, themeMode } = handleDarkMode();

    const checkedWhenDarkMode = () =>
      themeMode.value ? (checked.value = true) : (checked.value = false);

    const isDark = computed(() => {
      return checked.value ? "text-primary" : "";
    });
    const isLight = computed(() => {
      return !checked.value ? "text-yellow-500" : "";
    });

    onBeforeMount(() => {
      setDarkMode();
      checkedWhenDarkMode();
    });

    return {
      checked,
      isDark,
      isLight,
      toggleDarkMode,
    };
  },
};
</script>
