<template>
  <header id="home" class="pt-20 dark:bg-primary-dark parallax_container">
    <div class="w-full grid sm:grid-cols-2 grid-cols-1 gap-3 sm:mt-20 mt-0">
      <div class="welcome__text flex justify-center items-center mx-10">
        <WelcomeText />
      </div>
      <div class="image__user flex justify-center sm:mt-0 mt-5 sm:mb-0 mb-20">
        <MainImage />
      </div>
    </div>
  </header>
  <main
    class="w-full min-h-full pt-20 mb-20 bg-white dark:bg-black overflow-x-hidden"
  >
    <SkillFlexing />
    <div class="mx-10 border-[1px] border-slate-400 dark:border-sky-400 mt-4" />
    <Testimonial />
    <div
      class="mx-10 border-[1px] border-slate-400 dark:border-sky-400 mt-10"
    />
    <AboutMe />
  </main>
</template>

<script>
import WelcomeText from "../components/Home/WelcomeText.vue";
import MainImage from "../components/Home/MainImage.vue";
import SkillFlexing from "../components/Home/SkillFlexing.vue";
import Testimonial from "../components/Home/Testimonial.vue";
import AboutMe from "../components/Home/AboutMe.vue";
export default {
  components: {
    WelcomeText,
    MainImage,
    SkillFlexing,
    Testimonial,
    AboutMe,
  },
  setup() {},
};
</script>
<style scoped>
.parallax_container {
  width: 100%;
  min-height: 600px;
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
  background-image: url("../../img/bg__main.webp");
}
</style>
