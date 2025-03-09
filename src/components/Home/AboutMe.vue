<template>
  <div id="aboutme" ref="aboutme" class="text-center mt-5">
    <p
      class="sub-heading-font sm:text-6xl text-4xl text-slate-600 dark:text-primary"
    >
      About Me
    </p>
    <p class="text-sm dark:text-primary sm:block hidden">
      let's get to know each other
    </p>
  </div>
  <div class="grid sm:grid-cols-2 grid-cols-1 gap-2 mt-10 mb-20">
    <div
      class="box_social_media sm:flex flex-col justify-center items-center sm:visible hidden"
      data-aos="fade-right"
      data-aos-duration="500"
      data-aos-once="true"
    >
      <!-- <p class="text-2xl font-semibold text-slate-600 dark:text-slate-300">
        Contact Me!
      </p> -->
      <div
        class="w-80 h-44 flex flex-col justify-evenly items-center p-4 text-center rounded-md shadow-md mt-3 hover:scale-110 transition-all duration-200 dark:bg-primary-dark dark:text-white"
      >
        <i class="pi pi-envelope text-rose-500" style="font-size: 1.5em"></i>
        <p class="text-slate-500">Email</p>
        <a
          class="p-2 bg-rose-400 hover:bg-rose-500 rounded text-white block w-full"
          href="mailto:budilaksono1102@gmai.com"
          >Send Email To Me</a
        >
      </div>
      <div
        class="w-80 h-44 flex flex-col justify-evenly items-center p-4 text-center rounded-md shadow-md mt-3 hover:scale-110 transition-all duration-200 dark:bg-primary-dark dark:text-white"
      >
        <i class="pi pi-whatsapp text-green-500" style="font-size: 1.5em"></i>
        <p class="text-slate-500">Whatsapp</p>
        <a
          class="p-2 bg-green-400 hover:bg-green-500 rounded text-white mt-3 block w-full"
          href="wa.me/6283834819552"
          >Send Message To Me</a
        >
      </div>
      <div
        class="w-80 h-44 flex flex-col justify-evenly items-center p-4 text-center rounded-md shadow-md mt-3 hover:scale-110 transition-all duration-200 dark:bg-primary-dark dark:text-white"
      >
        <i class="pi pi-instagram text-violet-500" style="font-size: 1.5em"></i>
        <p class="text-slate-500">Instagram</p>
        <a
          class="p-2 bg-purple-400 hover:bg-purple-500 rounded text-white mt-3 block w-full"
          href="instagram.com/teguhbudiii"
          >Let's Follow Up Each Other</a
        >
      </div>
      <div
        class="w-80 h-44 flex flex-col justify-evenly items-center p-4 text-center rounded-md shadow-md mt-3 hover:scale-110 transition-all duration-200 dark:bg-primary-dark dark:text-white"
      >
        <i class="pi pi-github text-slate-400" style="font-size: 1.5em"></i>
        <p class="text-slate-500">Github</p>
        <a
          class="p-2 bg-slate-400 hover:bg-slate-500 rounded text-white mt-3 block w-full"
          href="https://github.com/teguh-budi2002"
          >Let's Follow Up Each Other</a
        >
      </div>
    </div>
    <div
      class="description mx-5 leading-loose"
      data-aos="fade-left"
      data-aos-duration="500"
      data-aos-once="true"
    >
      <div class="img_user mb-5">
        <img
          src="../../../img/my-photo-profile.jpg"
          class="w-48 h-48 rounded-full mx-auto mb-4"
          alt=""
        />
        <p
          class="sm:text-3xl text-2xl text-slate-600 font-semibold dark:text-white text-center"
        >
          Teguh Budi Laksono
        </p>
        <p
          class="sm:text-md text-sm text-slate-400 font-light dark:text-white text-center mt-2"
        >
          Junior Website Developer
        </p>
        <div class="sm:hidden flex items-center justify-center space-x-3 mt-3">
          <a href="wa.me/6283834819552"
            ><i
              class="pi pi-whatsapp text-green-500"
              style="font-size: 1.4em"
            ></i
          ></a>
          <a href="mailto:budilaksono1102@gmai.com"
            ><i
              class="pi pi-envelope text-rose-500"
              style="font-size: 1.4em"
            ></i
          ></a>
          <a href="instagram.com/teguhbudiii"
            ><i
              class="pi pi-instagram text-violet-500"
              style="font-size: 1.4em"
            ></i
          ></a>
          <a href="https://github.com/teguh-budi2002"
            ><i class="pi pi-github text-slate-400" style="font-size: 1.4em"></i
          ></a>
        </div>
      </div>
      <p
        class="sm:mt-3 mt-0 dark:text-slate-300 dark:hover:text-slate-100 transition duration-300"
        data-aos="fade-left"
        data-aos-duration="600"
        data-aos-once="true"
      >
        I am {{ myAge }} years old, My experience with coding and programming
        has been almost 3 years
      </p>
      <p
        class="dark:text-slate-300 dark:hover:text-slate-100 transition duration-300"
        data-aos="fade-left"
        data-aos-duration="700"
        data-aos-once="true"
      >
        and of course there are many ups and downs when learning new things from
        certain
      </p>
      <p
        class="dark:text-slate-300 dark:hover:text-slate-100 transition duration-300"
        data-aos="fade-left"
        data-aos-duration="800"
        data-aos-once="true"
      >
        programming languages.
      </p>
      <p
        class="dark:text-slate-300 dark:hover:text-slate-100 transition duration-300"
        data-aos="fade-left"
        data-aos-duration="900"
        data-aos-once="true"
      >
        I don't know if I can be called a Full Stack Web Developer or not, but I
        am confident with
      </p>
      <p
        class="dark:text-slate-300 dark:hover:text-slate-100 transition duration-300"
        data-aos="fade-left"
        data-aos-duration="1000"
        data-aos-once="true"
      >
        my sufficient knowledge in the field of programming and the many
        projects I have
      </p>
      <p
        class="dark:text-slate-300 dark:hover:text-slate-100 transition duration-300"
        data-aos="fade-left"
        data-aos-duration="1100"
        data-aos-once="true"
      >
        developed, including creating Restfull API, Scrapping e-commerce data
        with Python,
      </p>
      <p
        class="dark:text-slate-300 dark:hover:text-slate-100 transition duration-300"
        data-aos="fade-left"
        data-aos-duration="1200"
        data-aos-once="true"
      >
        Integrating with many Payment Gateways, and most importantly always
        reading the
      </p>
      <p
        class="dark:text-slate-300 dark:hover:text-slate-100 transition duration-300"
        data-aos="fade-left"
        data-aos-duration="1300"
        data-aos-once="true"
      >
        documentation on every technology I use.
      </p>
      <p
        class="dark:text-slate-300 dark:hover:text-slate-100 transition duration-300"
        data-aos="fade-left"
        data-aos-duration="1400"
        data-aos-once="true"
      >
        With that, I was confident enough to enter the company as a Junior
        Website Developer.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    const myAge = new Date().getFullYear() - 2002;
    return { myAge };
  },
};
</script>

<style></style>
