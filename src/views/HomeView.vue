<template>
  <Suspense :timeout="100000">
    <template #default>
      <div class="w-full min-h-full bg-white dark:bg-black overflow-x-hidden">
        <Container />
      </div>
    </template>
    <template #fallback>
      <Loading />
    </template>
  </Suspense>
</template>

<script>
import Loading from "../components/Loading/Index.vue";
import { defineAsyncComponent } from "vue";
const Container = defineAsyncComponent(() => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(import("../components/Home/Container.vue"));
    }, 3000);
  });
});

export default {
  components: {
    Container,
    Loading,
  },
};
</script>
