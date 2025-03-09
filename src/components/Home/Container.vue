<template>
  <header ref="home" id="home" class="sm:pt-20 pt-8 parallax_container">
    <div class="w-full grid sm:grid-cols-2 grid-cols-1 gap-3 sm:mt-20 mt-0">
      <div class="welcome__text flex justify-center items-center mx-10">
        <WelcomeText />
      </div>
      <div class="image__user sm:mt-0 mt-5 sm:mb-0 md:mb-0 mb-5 relative">
        <div
          class="flex justify-end items-start w-full h-full absolute lg:visible invisible"
        >
          <i
            class="pi pi-comments text-rose-300 dark:text-rose-500 mr-24"
            style="font-size: 1.5em"
          ></i>
        </div>
        <div
          class="flex items-center w-ful h-full absolute lg:visible invisible"
        >
          <i
            class="pi pi-star text-yellow-300 dark:text-yellow-500 ml-20 mt-10"
            style="font-size: 1.5em"
          ></i>
        </div>
        <div class="flex items-end w-ful h-full absolute lg:visible invisible">
          <i
            class="pi pi-hashtag text-slate-400 dark:text-slate-200 ml-48"
            style="font-size: 1.2em"
          ></i>
        </div>
        <div class="flex justify-center">
          <MainImage />
        </div>
      </div>
    </div>
  </header>
  <main class="pt-20">
    <SkillFlexing />
    <div class="mx-10 border-[1px] border-slate-400 dark:border-sky-400 mt-4" />
    <Testimonial />
    <div
      class="mx-10 border-[1px] border-slate-400 dark:border-sky-400 mt-10"
    />
    <AboutMe />
  </main>
  <footer class="bg-white rounded-b-lg shadow-md m-4 dark:bg-primary-dark">
    <div class="w-full mx-auto max-w-screen-xl p-4 text-center">
      <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400"
        >© 2023 - {{ years }}
        <a
          href="https://teguh-website-portfolio.vercel.app/"
          class="hover:underline"
          >Teguh Website Portfolio</a
        >. All Rights Reserved.
      </span>
    </div>
  </footer>
</template>

<script>
import WelcomeText from "../Home/WelcomeText.vue";
import MainImage from "../Home/MainImage.vue";
import SkillFlexing from "../Home/SkillFlexing.vue";
import Testimonial from "../Home/Testimonial.vue";
import AboutMe from "../Home/AboutMe.vue";

export default {
  components: {
    WelcomeText,
    MainImage,
    SkillFlexing,
    Testimonial,
    AboutMe,
  },
  setup() {
    const years = new Date().getFullYear();

    return { years };
  },
};
</script>

<style scoped>
/* .parallax_container {
  width: 100%;
  min-height: 600px;
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
  background-image: url("../../../img/bg__main.webp");
} */
</style>
