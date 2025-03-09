<template>
  <div id="testi" ref="testi" class="mt-2">
    <div class="header__text mx-5">
      <p
        class="sub-heading-font text-center sm:text-6xl text-4xl my-5 text-slate-600 dark:text-primary"
      >
        Testimonial
      </p>
      <div class="sm:hidden block mb-3 dark:bg-primary-dark p-3 rounded-md">
        <Accordion class="accordion-custom" :activeIndex="0">
          <AccordionTab>
            <template #header>
              <i class="pi pi-info-circle text-slate-400 font-semibold"></i>
              <span class="text-slate-400 font-semibold">INFORMATION</span>
            </template>
            <div class="text-slate-400 flex items-center space-x-2">
              <p class="text-base">Click the image for preview the image.</p>
            </div>
            <!-- <div class="text-slate-400 flex items-center space-x-2">
              <p class="text-base">Scroll Right or Left To See More Picture.</p>
            </div> -->
          </AccordionTab>
        </Accordion>
      </div>
    </div>
    <div class="carousel_testimonial mx-10">
      <Carousel v-bind="settings" :breakpoints="breakpoints">
        <Slide v-for="photo in testiPhotos" :key="photo.name">
          <Image
            :src="photo.imgUrl"
            width="500"
            class="sm:h-80 sm:min-h-[400px] h-96"
            :alt="photo.name"
            preview
          />
        </Slide>
      </Carousel>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import Image from "primevue/image";
import Accordion from "primevue/accordion";
import AccordionTab from "primevue/accordiontab";
import { Carousel, Pagination, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
import testimonial from "../../../data/DummyTestiData";

export default {
  components: {
    Carousel,
    Slide,
    Pagination,
    Image,
    Accordion,
    AccordionTab,
  },
  setup() {
    const testiPhotos = ref(testimonial);
    const settings = ref({
      itemsToShow: 1,
      snapAlign: "center",
    });
    const breakpoints = ref({
      // 700px and up
      700: {
        itemsToShow: 3.5,
        snapAlign: "center",
      },
      // 1024 and up
      1024: {
        itemsToShow: 5,
        snapAlign: "start",
      },
    });
    return { testiPhotos, settings, breakpoints };
  },
};
</script>
<style scoped>
.accordion-custom i span {
  vertical-align: middle;
}

.accordion-custom span {
  margin: 0 0.5rem;
}

.p-accordion p {
  line-height: 1.5;
  margin: 0;
}
</style>
