<template>
  <div id="blog-detail-page">
    <div class="hb-post top80px" v-if="blog !== null">
      <div class="container">
        <div class="img-mobile-bd">
          <img :src="blog.thumbnail" class="img-fluid" />
        </div>
        <div class="o-y bd-wrap">
          <div class="mw400 top420px">
            <p class="xs mb20">
              <template v-if="blog.tags !== undefined && blog.tags.length">
                {{ blog.tags[0].name.toUpperCase() }}
              </template>
            </p>
            <div class="headingxl" v-html="blog.title"></div>
            <p class="mw350 bottom30px top30px m"></p>
            <div class="s font-medium">{{ blog.author }}</div>
            <p class="mb60">{{ blog.date | format_date }}</p>
            <p class="m" v-html="blog.excerpt"></p>
          </div>
        </div>
      </div>
      <div class="bg-top-blog">
        <img :src="blog.thumbnail" class="img-fluid w100 top-img-bd" />
      </div>
    </div>

    <div class="container pb120" v-if="blog !== null">
      <div class="row mb60">
        <div class="col-lg-8 offset-lg-2">
          <div class="m mb80 content" v-html="blog.content"></div>

          <div class="d-flex justify-content-between align-items-center">
            <div>
              <template v-for="(tag, index) in blog.tags">
                <router-link
                  :to="`/blog-search?tag=${tag.id}.${tag.name}`"
                  :key="index"
                  class="tag-art m-1"
                >
                  {{ tag.name }}
                </router-link>
              </template>
            </div>

            <div v-if="relateds.length">
              <router-link :to="`/blog/${relateds[0].slug}`" class="wc-link">
                Next Article <img src="/img/arrow.svg" class="arrow-link" />
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="similiar-post pb100px" v-if="relateds.length">
      <div class="container" data-aos="fade-down" data-aos-duration="1000">
        <div class="sh-s bottom30px">Similiar Posts</div>
        <div class="row">
          <div
            class="col-xl-4 col-sm-6"
            v-for="(post, index) in relateds"
            :key="index"
          >
            <router-link :to="`/blog/${post.slug}`" class="hp-box">
              <img :src="post.thumbnail" class="w100" />
              <div class="white-card bottom30px">
                <!-- <p class="xs mb15">
                  <template v-if="post.tags.length">
                    {{ post.tags[0].name.toUpperCase() }}
                  </template>
                </p> -->
                <h5 class="m mb-3" v-html="post.title"></h5>
                <p class="s mb25" v-html="post.excerpt"></p>
                <router-link :to="`/blog/${post.slug}`" class="blog-link">
                  Read More <img src="/img/arrow.svg" class="arrow-link" />
                </router-link>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "BlogDetail",
  metaInfo() {
    return {
      title: this.meta.title,
      meta: this.meta.content
    };
  },
  beforeCreate() {
    document.body.classList.add("bd-green");
  },
  beforeDestroy() {
    document.body.classList.remove("bd-green");
  },
  data() {
    return {
      meta: {
        title: null,
        content: []
      },
      blog: null,
      relateds: []
    };
  },
  mounted() {
    this.fetchContent();
  },
  methods: {
    fetchContent() {
      let loader = this.$loading.show({
        container: null,
        lockScroll: true,
        opacity: 1
      });
      axios
        .get(
          `${process.env.VUE_APP_BASE_URL_API_CONTENT}/wp-json/surface/v1/blog/${this.$route.params.id}`
        )
        .then(response => {
          console.log(response.data);
          if (response.data.status == "ok") {
            this.blog = response.data.data.blog;
            this.relateds = response.data.data.related;

            if (this.blog.meta.page_title !== undefined) {
              this.meta.title = this.blog.meta.page_title;
            }
            if (this.blog.meta.meta_keyword !== undefined) {
              this.meta.content.push({
                name: "keywords",
                content: this.blog.meta.meta_keyword
              });
            }
            if (this.blog.meta.meta_description !== undefined) {
              this.meta.content.push({
                name: "description",
                content: this.blog.meta.meta_description
              });
            }
          }
        })
        .then(() => {
          loader.hide();
        });
    }
  }
};
</script>
