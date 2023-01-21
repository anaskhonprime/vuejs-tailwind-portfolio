<template>
  <Navbar />

  <div class="page-section pt-5" style="margin-top: 100px">
    <div class="container">
      <nav aria-label="Breadcrumb">
        <ul class="breadcrumb p-0 mb-0 bg-transparent">
          <li class="breadcrumb-item">
            <router-link to="/">Home</router-link>
          </li>
          <li class="breadcrumb-item">
            <router-link to="/blog">All Blog</router-link>
          </li>
          <li class="breadcrumb-item active">Discover The Blogs</li>
        </ul>
      </nav>

      <div class="row">
        <div class="col-lg-8">
          <div class="blog-single-wrap">
            <div class="header">
              <div class="post-thumb">
                <img :src="blog[1].image" alt="" />
              </div>
              <div class="meta-header"></div>
            </div>
            <h1 class="post-title">{{ blog[1].title }}</h1>
            <div class="post-meta">
              <div class="post-date">
                <span class="icon">
                  <span class="mai-time-outline"></span>
                </span>
                <a>{{ blog[1].date }}</a>
              </div>
            </div>

            <div class="post-content">
              <p style="font-size: 23px">{{ blog[0].start }}</p>
              <p style="font-size: 23px">{{ blog[0].content }}</p>
              <br />
              <blockquote class="quote">{{ blog[0].code1 }}</blockquote>
              <br />
              <p style="font-size: 23px">
                2. CSS로 다음과 같이 스타일을 주면 완료
              </p>
              <br />
              <blockquote class="quote">
                {{ blog[0].code2 }}
                <br />
                <br />
                {{ blog[0].code3 }}
                <br />
                <br />
                {{ blog[0].code4 }}
              </blockquote>
              <br />

              <p style="font-size: 23px">
                Daily Tip 애니메이션 주고 싶은 UI를 그냥 opasity 뿐만 아니라
                다양한 CSS 요소들 사용할 수 있다 . 예를 들어 결제 화면이 갑가지
                외에서 내려온다고 생각하고 만들어 본다면 opasity 대신 transform
                요소를 사용하면 된다.
              </p>
              <br />
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="widget">
            <!-- Widget search -->
            <div class="widget-box">
              <form action="#" class="search-widget">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Enter keyword.." />
                <button type="submit" class="btn btn-primary btn-block">
                  Search
                </button>
              </form>
            </div>

            <!-- Widget Categories -->
            <div class="widget-box">
              <h4 class="widget-title">Category</h4>
              <div class="divider"></div>

              <ul class="categories">
                <li><a>FrontEnd</a></li>
                <li><a>Blockchain</a></li>
                <!-- <li><a href="#">Healthy</a></li>
                  <li><a href="#">Sports</a></li>
                  <li><a href="#">Entertainment</a></li> -->
              </ul>
            </div>

            <!-- Widget recent post -->
            <div class="widget-box">
              <h4 class="widget-title">Recent Post</h4>
              <div class="divider"></div>

              <div v-for="(a, i) in 4" :key="a" class="blog-item">
                <a class="post-thumb" href="">
                  <img :src="blog[i + 1].image" alt="" />
                </a>
                <div class="content">
                  <h6 class="post-title">
                    <a>{{ blog[i + 1].title }}</a>
                  </h6>
                  <div class="meta">
                    <a href="#">
                      <span class="mai-calendar"></span>
                      {{ blog[i + 2].date }}
                    </a>
                    <!-- <a href="#"><span class="mai-person"></span> Admin</a>
                        <a href="#"><span class="mai-chatbubbles"></span> 19</a> -->
                  </div>
                </div>
              </div>
            </div>

            <div class="widget-box">
              <h4 class="widget-title">Tag Cloud</h4>
              <div class="divider"></div>

              <div class="tag-clouds">
                <a href="#" class="tag-cloud-link">Projects</a>
                <a href="#" class="tag-cloud-link">Design</a>
                <a href="#" class="tag-cloud-link">Travel</a>
                <a href="#" class="tag-cloud-link">Brand</a>
                <a href="#" class="tag-cloud-link">Trending</a>
                <a href="#" class="tag-cloud-link">Knowledge</a>
                <a href="#" class="tag-cloud-link">Food</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Footer />
</template>

<script>
import Data from "../data/data.js";
import Navbar from "./Navbar.vue";
import Footer from "./Footer.vue";

export default {
  name: "Single Blog",
  data() {
    return {
      blog: Data,
    };
  },
  props: {
    blog: Array,
  },
  components: {
    Navbar,
    Footer,
  },
};
</script>

<style></style>
