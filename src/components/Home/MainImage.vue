<template>
  <div
    class="hover:border-8 hover:border-sky-400 hover:rounded-md transition-all duration-200"
  >
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
  width: 250px;
  height: 250px;
  overflow: hidden;
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
</style>
