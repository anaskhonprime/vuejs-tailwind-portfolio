<template>
  <header>
    <div class="page-banner home-banner">
      <div class="container h-100">
        <div class="row align-items-center h-100">
          <div class="col-lg-6 py-3 wow fadeInUp">
            <p
              v-motion
              :initial="{ opacity: 0, x: 200 }"
              :enter="{ opacity: 1, x: 0 }"
              :delay="500"
              class="text-green-600 hover:text-green-500 text-2xl lg:text-4xl font-medium lg:font-semibold mb-5 lg:leading-normal leading-snug">
              HI, I'm ANASKHON
              <br />
              Front-End Developer,
              <br />
              Blockchain Engineer
            </p>
            <p
              v-motion
              :initial="{ opacity: 0, y: 200 }"
              :enter="{ opacity: 1, y: 0 }"
              :delay="1200"
              class="hidden lg:block text-2xl mb-5">
              I like to craft solid and scalable frontend products with great
              user experiences.
            </p>

            <router-link
              v-motion
              :initial="{ opacity: 0, y: 200 }"
              :enter="{ opacity: 1, y: 0 }"
              :delay="1400"
              to="/about"
              name="fade"
              class="btn btn-outline border text-secondary">
              About
            </router-link>
            <a
              href="#"
              v-motion
              :initial="{ opacity: 0, y: 200 }"
              :enter="{ opacity: 1, y: 0 }"
              :delay="1600"
              class="btn btn-primary btn-split ml-2">
              Resume
              <div class="fab"><span class="mai-play"></span></div>
            </a>
          </div>
          <div class="col-lg-6 wow zoomIn">
            <div
              v-motion
              :initial="{ opacity: 0, x: 200 }"
              :enter="{ opacity: 1, x: 0 }"
              :delay="1400"
              class="m-3 lg:m-3 p-1 lg:p-5">
              <lottie-player
                src="https://assets2.lottiefiles.com/packages/lf20_gnb0jsok.json"
                background="transparent"
                speed="1"
                style="max-width: 500px; max-height: 500px"
                autoplay></lottie-player>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { directive as motion } from "@vueuse/motion";

export default {};
</script>

<style></style>
