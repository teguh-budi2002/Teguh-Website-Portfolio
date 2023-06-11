<template>
  <div class="space-y-2">
    <p
      class="sm:text-7xl text-6xl font-semibold text-sky-700 dark:text-sky-400 pb-4"
    >
      Hello Everyone,
    </p>
    <VueWriter
      class="sm:text-2xl text-xl text-sky-300 dark:text-white"
      :array="textArr"
      :typeSpeed="35"
      :delay="1000"
      :start="2000"
    />
    <p class="text-sm text-slate-400 capitalize">
      Experience Programmer Almost 2 Years, open a freelance web app service and
      provide the best service to customers.
      <span class="font-semibold text-slate-100"
        >happy to learn new things</span
      >
    </p>
  </div>
</template>

<script>
import { ref } from "vue";
import VueWriter from "vue-writer";
export default {
  components: {
    VueWriter,
  },
  setup() {
    const textArr = ref([
      "My Name is Teguh Budi Laksono",
      "I Am Junior Full Stack Developer",
      "Coding is  Part Of My Life",
    ]);

    return { textArr };
  },
};
</script>

<style scoped></style>
