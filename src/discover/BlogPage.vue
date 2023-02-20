<template>
  <Navbar />

  <div class="hidden lg:relative container mt-5">
    <div class="page-banner1">
      <div class="row justify-content-center align-items-center h-100">
        <div class="col-md-6">
          <nav aria-label="Breadcrumb">
            <ul class="breadcrumb justify-content-center py-0 bg-transparent">
              <li class="breadcrumb-item">
                <router-link to="/">Home</router-link>
              </li>
              <li class="breadcrumb-item active">Blogs</li>
            </ul>
          </nav>
          <h1 class="text-center">Discover The Blogs</h1>
          <div class="divider mx-auto"></div>
        </div>
      </div>
    </div>
  </div>

  <div class="bg-green-50 page-section">
    <div class="container">
      <div class="row">
        <div
          class="relative lg:hidden col-md-6 col-lg-3 py-3 wow fadeInUp">
          <div class="bg-green-400 card-blog">
            <div class="header">
              <div class="entry-footer">
                <div class="post-author text-medium text-white">
                  Welcome to Blogs
                </div>
                <a href="#" class="post-date"></a>
              </div>
            </div>
            <div class="body">
              <div class="pl-2 text-white text-2xl font-medium">
                <a>
                  Share My Knowledge
                  <br />
                  Research Skills
                  <br />
                  Makes More Employable
                </a>
              </div>

              <div
                class="footer text-green-600 after:no-underline font-medium btn bg-green-200">
                <a href="https://prmblogs.tistory.com/">
                  Visit Prime Blogs
                  <span class="mai-chevron-forward text-sm"></span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div v-for="(a, i) in blog" :key="a" class="col-md-6 col-lg-4 py-3">
          <div

            class="card-blog bg-white">
            <div class="header">
              <div class="avatar">
                <img :src="blog[i].profile" />
              </div>
              <div class="entry-footer">
                <div class="post-author">{{ blog[i].username }}</div>
                <a class="post-date">{{ blog[i].date }}</a>
              </div>
            </div>

            <div class="body">
              <div class="post-title">
                <a>{{ blog[i].title }}</a>
              </div>
              <div class="post-excerpt">
                {{ blog[i].intro }}
              </div>
            </div>
            <div class="footer ml-2">
              <a href="https://prmblogs.tistory.com/">
                Read More
                <span class="mai-chevron-forward text-sm"></span>
              </a>
            </div>
          </div>
        </div>

        <div class="col-12 mt-5">
          <nav aria-label="Page Navigation">
            <ul class="pagination justify-content-center">
              <li class="page-item disabled">
                <a
                  class="page-link"
                  href="#"
                  tabindex="-1"
                  aria-disabled="true">
                  Previous
                </a>
              </li>
              <li class="page-item"><a class="page-link" href="#">1</a></li>
              <li class="page-item active" aria-current="page">
                <a class="page-link" href="#">
                  2
                  <span class="sr-only">(current)</span>
                </a>
              </li>
              <li class="page-item"><a class="page-link" href="#">3</a></li>
              <li class="page-item">
                <a class="page-link" href="#">Next</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </div>

  <Footer />
</template>

<script>
import Data from "../data/data.js";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default {
  name: "Blog Page",
  data() {
    return {
      blog: Data,
    };
  },

  components: {
    Navbar,
    Footer,
  },
};
</script>

<style></style>
