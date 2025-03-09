<template>
  <Suspense :timeout="100000">
    <template #default>
      <div class="w-full min-h-full bg-white dark:bg-black overflow-x-hidden">
        <Container />
      </div>
    </template>
    <template #fallback>
      <Transition name="fade" mode="out-in">
        <Loading />
      </Transition>
    </template>
  </Suspense>
</template>

<script>
import Loading from "../components/Loading/Index.vue";
import { defineAsyncComponent } from "vue";

const Container = defineAsyncComponent({
  loader: () => import("../components/Home/Container.vue"),
  delay: 0,
  timeout: 30000,
  errorComponent: Loading,
});

export default {
  components: {
    Container,
    Loading,
  },
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
