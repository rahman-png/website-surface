<template>
  <div id="reviews">
    <div class="sh-s font-medium mb15">Reviews</div>
    <div class="box-star-review mb15" v-if="rating">
      <div class="">
        <star-rating
          :rating="rating.avg"
          :increment="0.5"
          :read-only="true"
          :show-rating="false"
          :star-size="12"
          :padding="10"
          :rounded-corners="false"
          :border-width="3"
          :active-border-color="'#000'"
          :border-color="'#000'"
          :inactive-color="'#fff'"
          :active-color="'#000'"
        ></star-rating>
      </div>
      <div class="l grey ml-3">{{ rating.count }} Reviews</div>
    </div>

    <div class="for-review-head mb50">
      <div class="for-btn-review">
        <button
          type="button"
          class="btn btn-solid write-review"
          @click="writeReview"
        >
          Write a Review
        </button>
      </div>
      <div class="for-filter-review">
        <div class="labelbox mb8 s">Sort by :</div>
        <div class="box-fliter r12">
          <select
            class="form-control no-border filter-select"
            v-model="sorting"
          >
            <option
              v-for="(sort, index) in sortingTypes"
              :key="index"
              :value="sort.value"
            >
              <span class="s font-medium">{{ sort.text }}</span>
            </option>
          </select>
        </div>
      </div>
    </div>

    <div class="for-review-content">
      <template v-for="(review, index) in reviews">
        <div class="review-item" :key="index">
          <div class="row justify-content-between">
            <div class="col-xl-6 col-sm-4">
              <div class="l akkurat text-uppercase">{{ review.author }}</div>
              <div class="m grey mb15" v-if="review.verified">
                Verified Buyer
              </div>
              <div class="box-review-product hidden">
                <div class="m">
                  <span class="black font-medium">Skin Type:</span>
                  {{ review.skin_type }}
                </div>
                <div class="m">
                  <span class="black font-medium">Skin Concern:</span>
                  {{ review.skin_concern.join(", ") }}
                </div>
              </div>
            </div>
            <div class="col-xl-6 col-sm-8">
              <div class="box-star-review justify-content-between mb15">
                <div class="">
                  <!-- <star-rating
                    :rating="Number(review.rating)"
                    :increment="0.5"
                    :read-only="true"
                    :show-rating="false"
                    :star-size="10"
                    :padding="7"
                    :rounded-corners="false"
                    :border-width="3"
                    :active-border-color="'#ffd055'"
                    :border-color="'#ffd055'"
                    :inactive-color="'#fff'"
                  ></star-rating> -->
                  <star-rating
                    :rating="Number(review.rating)"
                    :increment="0.5"
                    :read-only="true"
                    :show-rating="false"
                    :star-size="12"
                    :padding="10"
                    :rounded-corners="false"
                    :border-width="3"
                    :active-border-color="'#000'"
                    :border-color="'#000'"
                    :inactive-color="'#fff'"
                    :active-color="'#000'"
                  ></star-rating>
                </div>
                <div class="box-star-review">
                  <div class="m grey">{{ review.date }}</div>
                </div>
              </div>
              <div class="m akkurat text-uppercase mb15">
                {{ review.title }}
              </div>
              <p class="m grey">
                {{ review.review }}
              </p>
              <div class="img-review mt-4">
                <template v-for="(photo, zindex) in review.photo">
                  <div class="img-review-item mr-3" :key="zindex">
                    <img :src="photo" class="img-fluid" />
                  </div>
                </template>
              </div>
            </div>
          </div>
        </div>
      </template>
    </div>

    <div class="row align-items-center justify-content-between">
      <div class="col-sm-12">
        <ul class="pager akkurat">
          <li>
            <a
              href="javascript: void(0)"
              :class="{ 'not-active': pager.currentPage == 1 }"
              @click="setPage(pager.currentPage - 1)"
            >
              <i class="fa fa-chevron-left"></i>
            </a>
          </li>
          <li v-for="page in pager.pages" :key="page">
            <a
              href="javascript: void(0)"
              :class="{ active: page == pager.currentPage }"
              @click="setPage(page)"
            >
              {{ page }}
            </a>
          </li>
          <li>
            <a
              href="javascript: void(0)"
              :class="{ 'not-active': pager.currentPage == pager.totalPages }"
              @click="setPage(pager.currentPage + 1)"
            >
              <i class="fa fa-chevron-right"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>

    <div
      class="popup-content-overlay green-bg"
      :class="{ 'overlay-show': showForm }"
    >
      <div class="container">
        <div class="review-content not-show" :class="{ show: showForm }">
          <div class="for-btn-close">
            <button
              type="button"
              class="btn btn-close bg-white"
              @click="showForm = false"
            >
              <i class="fa fa-times"></i>
            </button>
          </div>
          <div class="scroll-review">
            <form @submit.prevent="submitReview">
              <div class="sh-m font-medium mb30">Write A Review</div>

              <div class="s grey mb15" :class="{ 'is-invalid': error.rating }">
                Score
              </div>
              <div class="box-add-score mb20">
                <star-rating
                  v-model="form.rating"
                  :increment="1"
                  :show-rating="false"
                  :star-size="12"
                  :padding="10"
                  :rounded-corners="false"
                  :border-width="3"
                  :active-border-color="'#000'"
                  :border-color="'#000'"
                  :inactive-color="'#fff'"
                  :active-color="'#000'"
                ></star-rating>
              </div>
              <div class="invalid-feedback" v-if="error.rating">
                Please insert your rating.
              </div>

              <div class="row mb15">
                <div class="col-lg-6">
                  <div class="s grey mb15">Title</div>
                  <input
                    type="text"
                    class="form-control main-form"
                    placeholder="Enter title here"
                    v-model="form.title"
                    :class="{ 'is-invalid': error.title }"
                  />
                  <div class="invalid-feedback" v-if="error.title">
                    Please insert title review.
                  </div>
                </div>
              </div>
              <div class="row mb15">
                <div class="col-lg-9">
                  <div class="s grey mb15">Review</div>
                  <textarea
                    class="form-control main-form"
                    placeholder="Your review"
                    v-model="form.review"
                    :class="{ 'is-invalid': error.review }"
                  ></textarea>
                  <div class="invalid-feedback" v-if="error.review">
                    Please insert your review.
                  </div>
                </div>
              </div>
              <div class="row mb20">
                <div class="col-lg-9">
                  <div class="s grey mb15">Attach Photos</div>
                  <div class="box-photo-review">
                    <template v-for="(photo, index) in form.photo">
                      <div class="bpr-item mr-3" :key="index">
                        <img :src="photo.src" class="img-fluid" />
                        <div class="for-bpr-close">
                          <button
                            class="btn btn-bpr-close"
                            type="button"
                            @click="removePhoto(index)"
                          >
                            <i class="fa fa-times"></i>
                          </button>
                        </div>
                      </div>
                    </template>
                    <div class="bpr-btn-upload">
                      <div class="file file--upload">
                        <label for="input-file">
                          <i class="fa fa-plus-circle"></i>
                        </label>
                        <input
                          id="input-file"
                          type="file"
                          ref="upload"
                          @change="upload"
                          accept=".jpg, .jpeg, .png"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col-sm-4 col-lg-2">
                  <button
                    type="reset"
                    @click="showForm = false"
                    class="btn btn-grey btn-block"
                  >
                    Cancel
                  </button>
                </div>
                <div class="col-sm-5 col-lg-3">
                  <button type="submit" class="btn btn-solid btn-block">
                    Submit Review
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import paginate from "jw-paginate";
import StarRating from "vue-star-rating";

export default {
  name: "ProductReview",
  components: {
    StarRating
  },
  props: {
    productId: {
      type: Number,
      default: 0
    }
  },
  watch: {
    productId(newVal) {
      console.log(newVal);
      this.getReviewProduct();
    },
    sorting() {
      this.setPage(1);
    },
    currentPage() {
      this.getReviewProduct();
    }
  },
  data() {
    return {
      rating: {},
      reviews: [],
      sortingTypes: [
        {
          value: "desc",
          text: "Latest"
        },
        {
          value: "asc",
          text: "Oldest"
        }
      ],
      sorting: "desc",
      currentPage: 1,
      perPage: 3,
      totalPage: 1,
      pager: {},
      showForm: false,
      form: {
        rating: 0,
        title: null,
        review: null,
        photo: []
      },
      error: {
        rating: false,
        title: false,
        review: false
      }
    };
  },
  methods: {
    getReviewProduct() {
      axios
        .post(
          `${process.env.VUE_APP_BASE_URL_API_CONTENT}/wp-json/surface/v1/products/review`,
          {
            product: this.productId,
            per_page: this.perPage,
            page: this.currentPage,
            sort: "comment_date",
            order: this.sorting
          }
        )
        .then(response => {
          this.rating = response.data.data.rating;
          this.reviews = response.data.data.review;
          this.totalPage = response.data.data.total_page;
          this.pager = paginate(
            this.totalPage,
            this.currentPage,
            this.perPage,
            5
          );
          this.$forceUpdate();
        });
    },
    setPage(page) {
      if (page > this.pager.totalPages) {
        return false;
      } else if (page == this.pager.currentPage) {
        return false;
      } else {
        this.currentPage = page;
      }
    },
    writeReview() {
      if (!this.$store.state.userData) {
        this.$store.commit("SET_RECENT_PRODUCT", this.productId);
        this.$router.push("/sign-in");
      } else {
        this.showForm = true;
      }
    },
    removePhoto(index) {
      this.form.photo.splice(index, 1);
      document.getElementById("input-file").value = null;
    },
    upload(event) {
      if (event.target.files[0] !== undefined) {
        let extension = event.target.files[0].name.split(".").pop();
        let allowedExtention = ["jpg", "jpeg", "png"];
        if (allowedExtention.includes(extension.toLowerCase())) {
          const filename = event.target.files[0].name;
          const reader = new FileReader();
          reader.onload = e => {
            const base64 = e.target.result;
            const mime = base64.split(";")[0];
            this.form.photo.push({
              name: filename,
              type: mime.split(":")[1],
              src: base64
            });
          };
          reader.readAsDataURL(event.target.files[0]);
        }
      }
    },
    submitReview() {
      this.error.rating = this.form.rating == 0 ? true : false;
      this.error.title =
        this.form.title === null || this.form.title == "" ? true : false;
      this.error.review =
        this.form.review === null || this.form.review == "" ? true : false;

      if (!this.error.rating && !this.error.title && !this.error.review) {
        axios
          .post(
            `${process.env.VUE_APP_BASE_URL_API_CONTENT}/wp-json/surface/v1/products/review/add`,
            {
              product: this.productId,
              rating: this.form.rating,
              title: this.form.title,
              review: this.form.review,
              skin_type: "",
              skin_concern: [],
              images: this.form.photo
            },
            {
              headers: {
                Authorization: `Bearer ${this.$store.getters.wooCommereceToken}`
              }
            }
          )
          .then(() => {
            if (this.currentPage == 1) {
              this.getReviewProduct();
            } else {
              this.setPage(1);
            }
            this.showForm = false;
            this.form = {
              rating: 0,
              title: null,
              review: null,
              photo: []
            };
            this.error = {
              rating: false,
              title: false,
              review: false
            };
          })
          .catch(error => {
            console.log(error.response.data);
          });
      }
    }
  }
};
</script>

<style scoped>
.scroll-review {
  height: 62vh;
  overflow-y: auto;
  overflow-x: hidden;
}
</style>
