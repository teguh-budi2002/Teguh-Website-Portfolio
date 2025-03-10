<template>
  <div class="relative">
    <div class="cricle-1-group">
      <div
        class="circle-1 absolute sm:left-20 left-28 sm:top-10 top-20 sm:w-[350px] w-[250px] sm:h-[350px] h-[250px] rounded-full bg-sky-100 dark:bg-sky-500"
      ></div>
      <div
        class="circle-1-white absolute sm:left-3 left-2 sm:top-1.5 top-1 sm:w-[350px] w-[300px] sm:h-[350px] h-[300px] rounded-full bg-white dark:bg-primary-dark"
      ></div>
    </div>
    <div class="circle-2-group">
      <div
        class="circle-2 absolute -left-8 top-1 w-[200px] h-[200px] rounded-full bg-rose-100 dark:bg-rose-500"
      ></div>
      <div
        class="circle-2-orange absolute -left-2 top-3 w-[30px] h-[30px] rounded-full bg-yellow-400"
      ></div>
    </div>
    <div class="rounded-md transition-all duration-200">
      <Image alt="img_preview" preview>
        <template #indicatoricon>
          <i class="pi pi-search-plus"></i>
        </template>
        <template #image>
          <img
            src="../../../img/MainImage.jpeg"
            class="rounded-md img__main"
            alt="image_main"
          />
        </template>
        <template #preview="slotProps">
          <img
            src="../../../img/MainImage.jpeg"
            alt="preview_image"
            width="300"
            :style="slotProps.style"
            @click="slotProps.onClick"
          />
        </template>
      </Image>
    </div>
  </div>
</template>

<script>
import Image from "primevue/image";
export default {
  components: {
    Image,
  },
};
</script>
<style scoped>
.p-image-preview-container {
  display: block;
  width: 350px;
  height: 350px;
  overflow: hidden;
  border-radius: 100%;
}

.p-image-preview-container .img__main {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 0.3s ease-in;
}

.p-image-preview-container:hover .img__main {
  transform: scale(1.5);
}

@media screen and (max-width: 640px) {
  .p-image-preview-container {
    width: 300px;
    height: 300px;
  }
}
</style>
