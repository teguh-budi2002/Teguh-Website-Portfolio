<template>
  <div class="space-y-2">
    <p
      class="sm:text-7xl text-5xl font-semibold text-sky-700 dark:text-sky-400 pb-4"
    >
      Hello Everyone,
    </p>
    <VueWriter
      class="sm:text-2xl text-md text-sky-400"
      :array="textArr"
      :typeSpeed="35"
      :delay="1000"
      :start="2000"
    />

    <p class="sm:text-sm text-xs text-slate-400">
      Experienced programmer with nearly {{ yearExpeirence }} years, offering
      freelance web application services with a commitment to delivering the
      best solutions and ensuring customer satisfaction.
      <span class="text-sky-400">
        Always eager to learn and explore new tech.</span
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
    const date = new Date();
    const yearExpeirence = date.getFullYear() - 2022;

    return { textArr, yearExpeirence };
  },
};
</script>

<style scoped></style>
