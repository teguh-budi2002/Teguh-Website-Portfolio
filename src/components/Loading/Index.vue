<template>
  <div
    class="wrapper__loading w-full h-screen bg-gray-50 dark:bg-black flex justify-center items-center"
  >
    <div class="spinner"></div>
  </div>
</template>

<style>
.spinner {
  width: 56px;
  height: 56px;
  display: grid;
  border: 4.5px solid #0000;
  border-radius: 50%;
  border-right-color: #5b5bfb;
  animation: spinner-custom 1s infinite linear;
}

.spinner::before,
.spinner::after {
  content: "";
  grid-area: 1/1;
  margin: 2.2px;
  border: inherit;
  border-radius: 50%;
  animation: spinner-custom 2s infinite;
}

.spinner::after {
  margin: 8.9px;
  animation-duration: 3s;
}

@keyframes spinner-custom {
  100% {
    transform: rotate(1turn);
  }
}

@keyframes pull-up-bg {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
</style>
