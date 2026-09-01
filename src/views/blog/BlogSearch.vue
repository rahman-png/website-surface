<template>
  <div id="blog-search-page">
    <template v-if="!validKeyword">
      <div id="m-mobile" class="content-box cm top150px">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 offset-lg-3">
              <div class="d-flex align-items-center justify-content-center">
                <div class="text-center">
                  <img src="/img/woman-icon.svg" class="img-fluid mb30" />
                  <div class="sh-xs mb8">Article Not Found</div>
                  <p class="s grey mb40">
                    Try to search article with other keyword
                  </p>
                  <router-link to="/blog" class="btn btn-solid">
                    Discover Article
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
    <template v-else>
      <div class="similiar-post pb100px top150px">
        <div class="container" data-aos="fade-down" data-aos-duration="1000">
          <div class="sh-l text-center mar-bc">{{ search }}</div>
          <div class="row">
            <template v-for="(blog, index) in blogs">
              <div
                :key="index"
                class="col-xl-4 col-md-6"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <router-link :to="`/blog/${blog.slug}`" class="hp-box">
                  <img :src="blog.thumbnail" class="w100" />
                  <div class="white-card bottom30px">
                    <p class="xs mb15">
                      <template v-if="blog.tags.length">
                        {{ blog.tags[0].name.toUpperCase() }}
                      </template>
                    </p>
                    <h5 class="m mb-3" v-html="blog.title"></h5>
                    <p class="s mb25" v-html="blog.excerpt"></p>
                    <router-link :to="`/blog/${blog.slug}`" class="blog-link">
                      Read More <img src="/img/arrow.svg" class="arrow-link" />
                    </router-link>
                  </div>
                </router-link>
              </div>
            </template>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "BlogSearch",
  metaInfo: {
    title: "Search Blog"
  },
  beforeCreate() {
    document.body.classList.add("bd-green");
  },
  beforeDestroy() {
    document.body.classList.remove("bd-green");
  },
  mounted() {
    console.log(this.$route.query);
    if (this.$route.query.search !== undefined) {
      this.searchBy = "topic";
      this.search = this.$route.query.search;
    } else if (this.$route.query.tag !== undefined) {
      this.searchBy = "tag";
      this.searchId = this.$route.query.tag.split(".")[0];
      this.search = this.$route.query.tag.split(".").pop();
    } else if (this.$route.query.category !== undefined) {
      this.searchBy = "category";
      this.searchId = this.$route.query.category.split(".")[0];
      this.search = this.$route.query.category.split(".").pop();
    }

    if (this.searchBy == "topic") {
      this.parameters.search = this.search;
    } else if (this.searchBy == "tag") {
      this.parameters.tag = [this.searchId];
    } else if (this.searchBy == "category") {
      this.parameters.category = [this.searchId];
    }

    if (
      this.$route.query.search === undefined &&
      this.$route.query.tag === undefined &&
      this.$route.query.category === undefined
    ) {
      this.validKeyword = false;
    }

    this.fetchBlog();
  },
  data() {
    return {
      validKeyword: true,
      searchId: null,
      searchBy: null,
      search: null,
      blogs: [],
      parameters: {
        page: 1,
        per_page: 9,
        category: [],
        tag: [],
        search: "",
        order: "",
        orderby: "",
        blog_in: []
      }
    };
  },
  methods: {
    fetchBlog() {
      axios
        .post(
          `${process.env.VUE_APP_BASE_URL_API_CONTENT}/wp-json/surface/v1/blog/list`,
          this.parameters
        )
        .then(response => {
          console.log(response.data);
          if (response.data.status == "ok") {
            this.blogs = response.data.data.blogs;
          } else {
            this.validKeyword = false;
          }
        });
    }
  }
};
</script>
