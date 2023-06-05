<template>
  <div id="skill" class="sm:mx-36 mx-3">
    <p
      class="text-center sm:text-6xl text-4xl font-semibold text-slate-500 dark:text-primary"
    >
      My Experiences
    </p>
    <p
      class="text-3xl mb-5 mt-3 text-slate-600 dark:text-primary w-fit underline__magical"
    >
      Frontend Developer
    </p>
    <div class="flex justify-center skill__carousel">
      <Carousel
        :value="dataCarouselFE"
        :numVisible="3"
        :numScroll="1"
        :responsiveOptions="responsiveOptions"
        class="w-full"
      >
        <template #item="slotProps">
          <div
            class="grid grid-cols-1 grid-rows-2 gap-5 border-[1px] border-slate-400 rounded-md shadow-md m-2 py-5 px-3 w-auto sm:h-[350px] h-[400px] dark:bg-primary-dark"
          >
            <div class="mb-1 flex justify-center items-center">
              <img
                :src="'../../../img/' + slotProps.data.imgUrl"
                class="w-24"
              />
            </div>
            <div>
              <div
                class="headeing__text flex items-center justify-center space-x-4 pb-3"
              >
                <p
                  class="sm:text-3xl text-xl font-bold uppercase text-slate-400 dark:text-primary"
                >
                  {{ slotProps.data.Name }}
                </p>
                <i
                  class="pi pi-verified text-blue-400"
                  style="font-size: 1.3rem"
                ></i>
              </div>
              <div class="status__skill pb-3 text-start">
                <Tag severity="info">{{ slotProps.data.status }}</Tag>
              </div>
              <div
                class="desc_text text-sm text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition capitalize leading-tight"
              >
                <p>{{ slotProps.data.desc }}</p>
              </div>
            </div>
          </div>
        </template>
      </Carousel>
    </div>
  </div>
  <div class="sm:mx-36 mx-3">
    <p
      class="text-3xl mb-5 text-slate-600 dark:text-primary w-fit underline__magical"
    >
      Backend Developer
    </p>
    <div class="flex justify-center skill__carousel">
      <Carousel
        :value="dataCarouselBE"
        :numVisible="3"
        :numScroll="1"
        :responsiveOptions="responsiveOptions"
        class="w-full"
      >
        <template #item="slotProps">
          <div
            class="grid grid-cols-1 gap-5 border-[1px] border-slate-400 rounded-md shadow-md m-2 py-5 px-3 w-auto h-[350px] dark:bg-primary-dark"
          >
            <div class="mb-1 flex justify-center items-center">
              <img
                :src="'../../../img/' + slotProps.data.imgUrl"
                class="w-24 aspect-square"
                style="filter: brightness(150%)"
              />
            </div>
            <div>
              <div
                class="headeing__text flex items-center justify-center space-x-2 pb-3"
              >
                <p
                  class="sm:text-3xl text-xl font-bold uppercase text-slate-400 dark:text-primary"
                >
                  {{ slotProps.data.Name }}
                </p>
                <i
                  class="pi pi-verified text-blue-400"
                  style="font-size: 1.3rem"
                ></i>
              </div>
              <div class="status__skill pb-3 text-start">
                <Tag severity="info">{{ slotProps.data.status }}</Tag>
              </div>
              <div
                class="desc_text text-sm text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition capitalize leading-tight"
              >
                <p>{{ slotProps.data.desc }}</p>
              </div>
            </div>
          </div>
        </template>
      </Carousel>
    </div>
  </div>
</template>
<script>
import Carousel from "primevue/carousel";
import Tag from "primevue/tag";
import { onMounted, ref } from "vue";
import { dataSkillBE, dataSkillFE } from "../../../data/DummySkillData";

export default {
  components: {
    Carousel,
    Tag,
  },
  setup() {
    const dataCarouselFE = ref(dataSkillFE);
    const dataCarouselBE = ref(dataSkillBE);
    const responsiveOptions = ref([
      {
        breakpoint: "1024px",
        numVisible: 3,
        numScroll: 1,
      },
      {
        breakpoint: "728px",
        numVisible: 2,
        numScroll: 1,
      },
      {
        breakpoint: "640px",
        numVisible: 1,
        numScroll: 1,
      },
    ]);

    return {
      responsiveOptions,
      dataCarouselFE,
      dataCarouselBE,
    };
  },
};
</script>
<style>
.p-carousel .p-carousel-content .p-carousel-next {
  border: 1px solid rgb(89, 162, 246);
}

.p-carousel-prev-icon {
  color: rgb(89, 162, 246);
}

.p-carousel .p-carousel-content .p-carousel-prev {
  border: 1px solid rgb(89, 162, 246);
}

.p-carousel-next-icon {
  color: rgb(89, 162, 246);
}

.underline__magical {
  background-image: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);
  background-repeat: no-repeat;
  background-size: 100% 0.2em;
  background-position: 0 88%;
  transition: background-size 0.25s ease-in;
  padding: 8px;
}

.underline__magical:hover {
  color: white;
  background-size: 100% 88%;
}
</style>
