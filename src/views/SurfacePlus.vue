<template>
  <div id="surface-plus-page">
    <product-menu></product-menu>
    <cart-right-bar></cart-right-bar>
    <section class="sp-slider">
      <swiper
        id="sp-slider"
        ref="spSwiper"
        :options="surfacePlusSwiperOptions"
        class="swiper-container"
      >
        <swiper-slide v-for="(slide, index) in sliders" :key="index">
          <template v-if="slide.video === false || slide.video === undefined">
            <div
              class="video-container"
              :style="{ backgroundImage: 'url(' + slide.img + ')' }"
              data-aos="fade-up"
            >
              <div class="container">
                <div class="sp-heading">
                  <div class="box-asp">
                    <div
                      class="row"
                      :style="{ visibility: index == 0 ? 'visible' : 'hidden' }"
                    >
                      <div class="col-xl-5 col-lg-6">
                        <div class="akkurat grey xs text-uppercase mb15">
                          explore our products
                        </div>
                        <div class="headingxl mb30">
                          Personalized skincare for your personal journey
                        </div>
                        <router-link to="/product" class="btn btn-solid">
                          Shop now
                        </router-link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </template>
          <template v-else>
            <video class="w100" controls autoplay muted>
              <source :src="slide.video" type="video/mp4" />
            </video>
          </template>
        </swiper-slide>
      </swiper>
      <div class="sp swiper-button-prev"></div>
      <div class="sp swiper-button-next"></div>
    </section>

    <div class="section-cwt">
      <div class="container" data-aos="fade-up">
        <div class="text-center headingxl mb80">Concerns We Treat</div>
        <div class="row">
          <div class="col-lg-10 offset-lg-1">
            <div class="row">
              <div class="col-lg-6 col-sm-6 col-6">
                <div class="product-sp-box">
                  <img
                    src="/img/gentle_acne_night_cream.jpeg"
                    class="img-fluid r-25 w-100 mb20"
                  />
                  <div class="l akkurat text-uppercase mb-2">
                    Acne Night Cream Rx
                  </div>
                  <div class="m grey mb15">
                    To wipe all your blemishes and troubles away
                  </div>
                  <router-link to="/product" class="btn btn-solid-sm">
                    Shop Now
                  </router-link>
                </div>
              </div>
              <div class="col-lg-6 col-sm-6 col-6">
                <div class="product-sp-box">
                  <img
                    src="/img/gentle_dark_spot_cream.jpeg"
                    class="img-fluid r-25 w-100 mb20"
                  />
                  <div class="l akkurat text-uppercase mb-2">
                    Dark Spots Night Cream Rx
                  </div>
                  <div class="m grey mb15">
                    To brighten your skin and your day
                  </div>
                  <router-link to="/product" class="btn btn-solid-sm">
                    Shop Now
                  </router-link>
                </div>
              </div>
              <div class="col-lg-6 col-sm-6 col-6">
                <div class="product-sp-box">
                  <img
                    src="/img/gentle_wrinkle_night_cream.jpeg"
                    class="img-fluid r-25 w-100 mb20"
                  />
                  <div class="l akkurat text-uppercase mb-2">
                    Wrinkle Night Cream Rx
                  </div>
                  <div class="m grey mb15">
                    To rejuvenate your complexion and daily energy
                  </div>
                  <router-link to="/product" class="btn btn-solid-sm">
                    Shop Now
                  </router-link>
                </div>
              </div>
              <div class="col-lg-6 col-sm-6 col-6">
                <div class="product-sp-box">
                  <img
                    src="/img/gentle_momies_2b_cream.jpeg"
                    class="img-fluid r-25 w-100 mb20"
                  />
                  <div class="l akkurat text-uppercase mb-2">
                    Mommies 2B Acne Cream Rx
                  </div>
                  <div class="m grey mb15">
                    To fight off the acne and negativity
                  </div>
                  <router-link to="/product" class="btn btn-solid-sm">
                    Shop Now
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="section-journey">
      <div class="container" data-aos="fade-up">
        <div class="text-uppercase headingl normal">ready to</div>
        <div class="heading3xl text-uppercase bottom100px">
          start your journey?
        </div>

        <div class="row-step" data-aos="fade-up">
          <div class="step-item">
            <div class="btn-block mb50">
              <span id="number-desk" class="number-step">1</span>
            </div>
            <img src="/img/journey-1.svg" class="img-fluid mb40" />
            <div class="l akkurat text-uppercase">
              <span id="number-mobile" class="number-step">1</span>
              Complete online doctor visit
            </div>
          </div>
          <div class="step-arrow">
            <img src="/img/dot-arrow.svg" class="to-down" />
          </div>
          <div class="step-item">
            <div class="btn-block mb50">
              <span id="number-desk" class="number-step">2</span>
            </div>
            <img src="/img/journey-2.svg" class="img-fluid mb40" />
            <div class="l akkurat text-uppercase">
              <span id="number-mobile" class="number-step">2</span>
              Place your order online
            </div>
          </div>
          <div class="step-arrow">
            <img src="/img/dot-arrow.svg" class="to-down" />
          </div>
          <div class="step-item">
            <div class="btn-block mb50">
              <span id="number-desk" class="number-step">3</span>
            </div>
            <img src="/img/journey-3.svg" class="img-fluid mb40" />
            <div class="l akkurat text-uppercase">
              <span id="number-mobile" class="number-step">3</span>
              The medication is shipped to you
            </div>
          </div>
        </div>

        <div class="compare-row mb80">
          <div class="compare-box">
            <ul class="compare-name">
              <li>
                <img src="/img/compare-1.svg" class="img-fluid" /> No doctor
                visits, no lines
              </li>
              <li>
                <img src="/img/compare-2.svg" class="img-fluid" /> Fast and
                simple online consultation
              </li>
              <li>
                <img src="/img/compare-3.svg" class="img-fluid" /> Customized
                formulations
              </li>
              <li>
                <img src="/img/compare-4.svg" class="img-fluid" /> Easy
                prescription refill
              </li>
            </ul>
          </div>
          <div class="compare-check">
            <div class="box-ttl-compare">
              <div class="sh-s text-uppercase text-center font-medium mb15">
                SURFACE+
              </div>
            </div>
            <ul class="check-list wb">
              <li><i class="fa fa-check"></i></li>
              <li><i class="fa fa-check"></i></li>
              <li><i class="fa fa-check"></i></li>
              <li><i class="fa fa-check"></i></li>
            </ul>
          </div>
          <div class="compare-check">
            <div class="box-ttl-compare">
              <div class="sh-s text-uppercase text-center font-medium mb15">
                STANDARD PRESCRIPTION
              </div>
            </div>
            <ul class="check-list">
              <li><i class="fa fa-times ct"></i></li>
              <li><i class="fa fa-times ct"></i></li>
              <li><i class="fa fa-times ct"></i></li>
              <li><i class="fa fa-times ct"></i></li>
            </ul>
          </div>
        </div>

        <div class="text-center box-compare-button">
          <router-link
            to="/surfaceplus/ingredients"
            class="btn btn-grey mr-2 mb-mobile"
          >
            Learn about our Ingredients
          </router-link>
          <router-link to="/product" class="btn btn-solid m-0">
            Start Shopping
          </router-link>
        </div>
      </div>
    </div>

    <!-- <div class="section-testi">
      <div class="container">
        <div class="headingxl font-medium mb60" data-aos="fade-up">
          What Our Customers Say
        </div>
        <swiper
          id="ba-testi"
          ref="restiSwiper"
          :options="testiSwiperOptions"
          class="swiper-container mb50"
          data-aos="fade-up"
        >
          <swiper-slide>
            <div class="box-ba-slider">
              <div class="img-ba">
                <img src="/img/ba-1.png" class="img-fluid" />
              </div>
              <div class="desc-ba">
                <div class="sh-m font-medium">Naveesh Khattar</div>
                <hr class="mb40" />
                <div class="row mb40">
                  <div class="col-sm-6 mb-mobile">
                    <div class="m akkurat text-uppercase mb8">concerns</div>
                    <p class="s grey">Acne</p>
                    <p class="s grey">Breakouts</p>
                  </div>
                  <div class="col-sm-6">
                    <div class="m akkurat text-uppercase mb8">treatments</div>
                    <p class="s grey">Treatment ABC</p>
                    <p class="s grey">Treatment XYZ</p>
                  </div>
                </div>
                <p class="m grey">
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci
                  mollis nam sit et. Amet arcu libero curabitur urna sapien
                  ultrices. At risus platea in sed interdum auctor. At iaculis
                  diam tempor morbi donec curabitur amet viverra diam. Nulla
                  ornare aliquam sodales bibendum consequat. Vivamus amet, eu,
                  consequat, sed sem. Egestas ante dictum sed quam quis
                  adipiscing sit augue”
                </p>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="box-ba-slider">
              <div class="img-ba">
                <img src="/img/ba-2.png" class="img-fluid" />
              </div>
              <div class="desc-ba">
                <div class="sh-m font-medium">Naveesh Khattar</div>
                <hr class="mb40" />
                <div class="row mb40">
                  <div class="col-sm-6 mb-mobile">
                    <div class="m akkurat text-uppercase mb8">concerns</div>
                    <p class="s grey">Acne</p>
                    <p class="s grey">Breakouts</p>
                  </div>
                  <div class="col-sm-6">
                    <div class="m akkurat text-uppercase mb8">treatments</div>
                    <p class="s grey">Treatment ABC</p>
                    <p class="s grey">Treatment XYZ</p>
                  </div>
                </div>
                <p class="m grey">
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci
                  mollis nam sit et. Amet arcu libero curabitur urna sapien
                  ultrices. At risus platea in sed interdum auctor. At iaculis
                  diam tempor morbi donec curabitur amet viverra diam. Nulla
                  ornare aliquam sodales bibendum consequat. Vivamus amet, eu,
                  consequat, sed sem. Egestas ante dictum sed quam quis
                  adipiscing sit augue”
                </p>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="box-ba-slider">
              <div class="img-ba">
                <img src="/img/ba-3.png" class="img-fluid" />
              </div>
              <div class="desc-ba">
                <div class="sh-m font-medium">Naveesh Khattar</div>
                <hr class="mb40" />
                <div class="row mb40">
                  <div class="col-sm-6 mb-mobile">
                    <div class="m akkurat text-uppercase mb8">concerns</div>
                    <p class="s grey">Acne</p>
                    <p class="s grey">Breakouts</p>
                  </div>
                  <div class="col-sm-6">
                    <div class="m akkurat text-uppercase mb8">treatments</div>
                    <p class="s grey">Treatment ABC</p>
                    <p class="s grey">Treatment XYZ</p>
                  </div>
                </div>
                <p class="m grey">
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci
                  mollis nam sit et. Amet arcu libero curabitur urna sapien
                  ultrices. At risus platea in sed interdum auctor. At iaculis
                  diam tempor morbi donec curabitur amet viverra diam. Nulla
                  ornare aliquam sodales bibendum consequat. Vivamus amet, eu,
                  consequat, sed sem. Egestas ante dictum sed quam quis
                  adipiscing sit augue”
                </p>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="box-ba-slider">
              <div class="img-ba">
                <img src="/img/ba-4.png" class="img-fluid" />
              </div>
              <div class="desc-ba">
                <div class="sh-m font-medium">Naveesh Khattar</div>
                <hr class="mb40" />
                <div class="row mb40">
                  <div class="col-sm-6 mb-mobile">
                    <div class="m akkurat text-uppercase mb8">concerns</div>
                    <p class="s grey">Acne</p>
                    <p class="s grey">Breakouts</p>
                  </div>
                  <div class="col-sm-6">
                    <div class="m akkurat text-uppercase mb8">treatments</div>
                    <p class="s grey">Treatment ABC</p>
                    <p class="s grey">Treatment XYZ</p>
                  </div>
                </div>
                <p class="m grey">
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci
                  mollis nam sit et. Amet arcu libero curabitur urna sapien
                  ultrices. At risus platea in sed interdum auctor. At iaculis
                  diam tempor morbi donec curabitur amet viverra diam. Nulla
                  ornare aliquam sodales bibendum consequat. Vivamus amet, eu,
                  consequat, sed sem. Egestas ante dictum sed quam quis
                  adipiscing sit augue”
                </p>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="box-ba-slider">
              <div class="img-ba">
                <img src="/img/ba-5.png" class="img-fluid" />
              </div>
              <div class="desc-ba">
                <div class="sh-m font-medium">Naveesh Khattar</div>
                <hr class="mb40" />
                <div class="row mb40">
                  <div class="col-sm-6 mb-mobile">
                    <div class="m akkurat text-uppercase mb8">concerns</div>
                    <p class="s grey">Acne</p>
                    <p class="s grey">Breakouts</p>
                  </div>
                  <div class="col-sm-6">
                    <div class="m akkurat text-uppercase mb8">treatments</div>
                    <p class="s grey">Treatment ABC</p>
                    <p class="s grey">Treatment XYZ</p>
                  </div>
                </div>
                <p class="m grey">
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci
                  mollis nam sit et. Amet arcu libero curabitur urna sapien
                  ultrices. At risus platea in sed interdum auctor. At iaculis
                  diam tempor morbi donec curabitur amet viverra diam. Nulla
                  ornare aliquam sodales bibendum consequat. Vivamus amet, eu,
                  consequat, sed sem. Egestas ante dictum sed quam quis
                  adipiscing sit augue”
                </p>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="box-ba-slider">
              <div class="img-ba">
                <img src="/img/ba-6.png" class="img-fluid" />
              </div>
              <div class="desc-ba">
                <div class="sh-m font-medium">Naveesh Khattar</div>
                <hr class="mb40" />
                <div class="row mb40">
                  <div class="col-sm-6 mb-mobile">
                    <div class="m akkurat text-uppercase mb8">concerns</div>
                    <p class="s grey">Acne</p>
                    <p class="s grey">Breakouts</p>
                  </div>
                  <div class="col-sm-6">
                    <div class="m akkurat text-uppercase mb8">treatments</div>
                    <p class="s grey">Treatment ABC</p>
                    <p class="s grey">Treatment XYZ</p>
                  </div>
                </div>
                <p class="m grey">
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci
                  mollis nam sit et. Amet arcu libero curabitur urna sapien
                  ultrices. At risus platea in sed interdum auctor. At iaculis
                  diam tempor morbi donec curabitur amet viverra diam. Nulla
                  ornare aliquam sodales bibendum consequat. Vivamus amet, eu,
                  consequat, sed sem. Egestas ante dictum sed quam quis
                  adipiscing sit augue”
                </p>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="box-ba-slider">
              <div class="img-ba">
                <img src="/img/ba-7.png" class="img-fluid" />
              </div>
              <div class="desc-ba">
                <div class="sh-m font-medium">Naveesh Khattar</div>
                <hr class="mb40" />
                <div class="row mb40">
                  <div class="col-sm-6 mb-mobile">
                    <div class="m akkurat text-uppercase mb8">concerns</div>
                    <p class="s grey">Acne</p>
                    <p class="s grey">Breakouts</p>
                  </div>
                  <div class="col-sm-6">
                    <div class="m akkurat text-uppercase mb8">treatments</div>
                    <p class="s grey">Treatment ABC</p>
                    <p class="s grey">Treatment XYZ</p>
                  </div>
                </div>
                <p class="m grey">
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci
                  mollis nam sit et. Amet arcu libero curabitur urna sapien
                  ultrices. At risus platea in sed interdum auctor. At iaculis
                  diam tempor morbi donec curabitur amet viverra diam. Nulla
                  ornare aliquam sodales bibendum consequat. Vivamus amet, eu,
                  consequat, sed sem. Egestas ante dictum sed quam quis
                  adipiscing sit augue”
                </p>
              </div>
            </div>
          </swiper-slide>
        </swiper>
        <div class="row align-items-center pt10" data-aos="fade-up">
          <div class="col-xl-6 col-md-6 col-sm-6 order-lg-2 order-sm-2">
            <div class="position-relative nav-ba">
              <div class="ba swiper-button-prev"></div>
              <div class="ba swiper-button-next"></div>
            </div>
          </div>
          <div class="col-xl-6 col-md-6 col-sm-6 order-lg-1 order-sm-1">
            <div class="center-mobile">
              <router-link
                to="/home#testimonial-client"
                class="btn btn-solid m-0 not-link"
              >
                View all testimonials
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div> -->

    <!-- <div class="container">
      <div class="sf-intro">
        <div class="headingxl mb25 text-center" data-aos="fade-up">
          Personalized prescription skincare for your personal journey
        </div>
        <div class="row">
          <div class="col-lg-6 offset-lg-3">
            <div class="text-center">
              <p class="m mb30"></p>

              <p class="m mb40">
                Formulated with effective and proven ingredients, delivered from
                our pharmacy to your doorstep.
              </p>

              <router-link to="/product" class="btn btn-solid">
                Discover products
              </router-link>
            </div>
          </div>
        </div>
      </div>

      <section class="product-sp" id="product">
        <div class="container" data-aos="fade-up" data-aos-duration="1000">
          <div class="text-center headingxl mb80">Our Treatments</div>
          <div class="row justify-content-center">
            <div class="row">
              <div class="col-lg-4 offset-lg-2">
                <a href="/product/2492">
                  <img
                    src="/img/acne-night-cream.jpeg"
                    class="img-fluid w100"
                  />
                </a>
                <a href="/product/2492" class="link-ps-product">
                  <div class="sh-s akkurat">Acne Night Cream Rx</div>
                  <p class="s">
                    For antibacterial, anti-acne, comedo reduction, pore
                    reduction, exfloliation
                  </p>
                </a>
              </div>
              <div class="col-lg-4">
                <a href="/product/2497">
                  <img src="/img/dark-spot-cream.jpeg" class="img-fluid w100" />
                </a>
                <a href="/product/2497" class="link-ps-product">
                  <div class="sh-s akkurat">Dark Spots Night Cream Rx</div>
                  <p class="s">
                    For Brightening, exfloliation, pore reduction, skin
                    conditioning
                  </p>
                </a>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-4 offset-lg-2">
                <a href="/product/2496">
                  <img
                    src="/img/wrinkle-night-cream.jpeg"
                    class="img-fluid w100"
                  />
                </a>
                <a href="/product/2496" class="link-ps-product">
                  <div class="sh-s akkurat">Wrinkle Night Cream Rx</div>
                  <p class="s">
                    For skin conditioning, exfloliation, pore reduction,
                    brightening
                  </p>
                </a>
              </div>
              <div class="col-lg-4">
                <a href="/product/2494">
                  <img
                    src="/img/mommies-2b-cream.jpeg"
                    class="img-fluid w100"
                  />
                </a>
                <a href="/product/2494" class="link-ps-product">
                  <div class="sh-s akkurat">Mommies 2B Acne Cream Rx</div>
                  <p class="s">
                    For antibacterial, anti-acne, brightening, dark spots
                  </p>
                </a>
              </div>
            </div>
          </div>
          <div class="d-flex justify-content-center">
            <a href="/product" class="btn btn-solid">View all products</a>
          </div>
        </div>
      </section>
    
      <div class="headingxl mb25" data-aos="fade-up" data-aos-duration="1000">
        Meet our favorites
      </div>
      <p class="mw450 l grey mb20">
        Personalized skin care formulated by our pharmacy, handpicked for your
        unique skin.
      </p>

      <section id="bestseller">
        <swiper
          id="product-slider"
          data-aos="fade-up"
          data-aos-duration="1000"
          ref="productSwiper"
          :options="productSwiperOptions"
          v-if="bestSellerProducts.length"
        >
          <swiper-slide
            v-for="(product, index) in bestSellerProducts"
            :key="index"
          >
            <router-link :to="`/product/${product.id}`" class="hp-box">
              <div class="f100 mb40">
                <div class="box-img-product mb15">
                  <div class="rx-button">
                    <button class="btn btn-sm-top left">R</button>
                    <button class="btn btn-sm-top right">X</button>
                  </div>
                  <img :src="product.thumbnail" class="w100" />
                  <div class="hover-box">
                    <p class="xs" v-html="product.excerpt"></p>
                  </div>
                </div>

                <div class="row">
                  <div class="col-7">
                    <p class="s">{{ product.title }}</p>
                  </div>
                  <div class="col-5">
                    <p class="xs font-medium text-right">
                      {{ product.price.default | format_k_currency }}
                    </p>
                  </div>
                </div>
              </div>
            </router-link>
          </swiper-slide>
        </swiper>
      </section>

      <div class="row justify-content-between align-items-center mb80">
        <div class="col-lg-3 col-sm-5">
          <div class="center-mobile">
            <router-link to="/product" class="btn btn-solid">
              View all products
            </router-link>
          </div>
        </div>
        <div class="col-lg-3 col-sm-5">
          <div class="center-arrow">
            <div class="prod-a">
              <div class="ps-arrow swiper-button-prev"></div>
              <div class="ps-arrow swiper-button-next"></div>
            </div>
          </div>
        </div>
      </div>
    </div> -->

    <!-- <section class="product-concern" id="concern">
      <div class="container" data-aos="fade-up" data-aos-duration="1000">
        <div class="sh-l text-center text-uppercase mb25 font-bold">
          Unique solutions for personal journeys
        </div>
        <div class="d-flex justify-content-center">
          <div>
            <p class="mw600 text-center m mb80">
              Every skin journey is a personal one, and we are here to guide you
              through yours. Our in-house aesthetic medical doctors assess your
              medical history to ensure that you are using the right ingredients
              for your skin, and our products are differentiated to fix your
              particular skin concerns.
            </p>
          </div>
        </div>
      </div>

      <swiper
        id="product-concern"
        data-aos="fade-up"
        data-aos-duration="1000"
        ref="productConcernSwiper"
        :options="productConcerenSwiperOptions"
      >
        <swiper-slide>
          <a href="/product?concern=58" class="box-pc">
            <img src="/img/us-acne.jpg" class="img-fluid" />
            <div class="pc-text">
              <div class="sh-s mb-1">Acne</div>
              <p class="s">
                Get rid of your pimples, whiteheads, and blackheads
              </p>
            </div>
          </a>
        </swiper-slide>

        <swiper-slide>
          <a href="/product?concern=62" class="box-pc">
            <img src="/img/us-aging.jpg" class="img-fluid" />
            <div class="pc-text">
              <div class="sh-s mb-1">Aging</div>
              <p class="s">
                Young forever, wrinkle prevention can't start early enough
              </p>
            </div>
          </a>
        </swiper-slide>

        <swiper-slide>
          <a href="/product?concern=61" class="box-pc">
            <img src="/img/us-dark.jpg" class="img-fluid" />
            <div class="pc-text">
              <div class="sh-s mb-1">Dark Spots</div>
              <p class="s">
                Get the sun spots, melasma and post-acne marks away
              </p>
            </div>
          </a>
        </swiper-slide>

        <swiper-slide>
          <a href="/product?concern=65" class="box-pc">
            <img src="/img/us-hair.jpg" class="img-fluid" />
            <div class="pc-text">
              <div class="sh-s mb-1">Dry and Dehydrated</div>
              <p class="s">
                Moist and hydrated skin for the win
              </p>
            </div>
          </a>
        </swiper-slide>

        <swiper-slide>
          <a href="/product?concern=64" class="box-pc">
            <img src="/img/us-dry.jpg" class="img-fluid" />
            <div class="pc-text">
              <div class="sh-s mb-1">Wrinkles</div>
              <p class="s">
                Wrinkle prevention can’t start early enough
              </p>
            </div>
          </a>
        </swiper-slide>

        <swiper-slide>
          <a href="/product?concern=66" class="box-pc">
            <img src="/img/us-wrinkels.jpg" class="img-fluid" />
            <div class="pc-text">
              <div class="sh-s mb-1">Hair</div>
              <p class="s">
                Treat hair loss and regrow fuller hair
              </p>
            </div>
          </a>
        </swiper-slide>
      </swiper>

      <div class="d-flex justify-content-center">
        <div class="for-pc-arrow">
          <div class="pc-arrow swiper-button-prev black"></div>
          <div class="pc-arrow swiper-button-next black"></div>
        </div>
      </div>
    </section> -->

    <!-- <section class="why-choose" id="choose">
      <div class="container" data-aos="fade-up">
        <div class="text-center headingxl mb80">Why People Choose Us</div>

        <div class="row mb80" data-aos="fade-up">
          <div class="col-lg-3 col-sm-6">
            <div class="box260 f100  text-center">
              <img src="/img/mp-2.svg" class="img-fluid mb40" />
              <p class="sh-xs normal mb12">Honest and Effective</p>
              <p class="m mb30">
                Our prescription and over-the-counter products are created with
                science-backed ingredients.
              </p>
            </div>
          </div>

          <div class="col-lg-3 col-sm-6">
            <div class="box260 f100 text-center">
              <img src="/img/mp-1.svg" class="img-fluid mb40" />
              <p class="sh-xs normal mb12">Team of Experts</p>
              <p class="m mb30">
                All products are formulated by our doctors and pharmacists. We
                rely on them (not AI or algorithms!) to determine what is best
                for you.
              </p>
            </div>
          </div>

          <div class="col-lg-3 col-sm-6">
            <div class="box260 f100  text-center">
              <img src="/img/mp-3.png" class="img-fluid mb40" />
              <p class="sh-xs normal mb12">Personalized</p>
              <p class="m mb30">
                We believe that no one skin is the same, and our products are
                personalized to meet your unique needs.
              </p>
            </div>
          </div>

          <div class="col-lg-3 col-sm-6">
            <div class="box260 f100  text-center">
              <img src="/img/mp-4.png" class="img-fluid mb40" />
              <p class="sh-xs normal mb12">Convenience</p>
              <p class="m mb30">
                We make it easy for you to order prescription and
                over-the-counter products from the comfort of your home.
              </p>
            </div>
          </div>
        </div>

        <div class="d-flex justify-content-center">
          <router-link to="/product" class="btn btn-white">
            Start your journey
          </router-link>
        </div>
      </div>
    </section> -->

    <!-- <section id="history-sec" class="history-section">
      <div class="box-history">
        <div class="container" data-aos="fade-up" data-aos-duration="1000">
          <div class="text-center headingl font-bold text-uppercase mb60">
            Ready to start your Journey?
          </div>
          <div class="row align-items-center">
            <div class="col-lg-6 col-sm-6">
              <div class="history-item-img">
                <img
                  src="/img/Visit-Our-Virtual-Doctor.jpeg"
                  class="img-fluid"
                />
              </div>
            </div>
            <div class="col-lg-6 col-sm-6">
              <div class="history-item-text">
                <div class="sh-s mb15">
                  A Skin Doctor At Your Fingertips
                </div>
                <div class="mw400 m">
                  No wait, no lines.<br /><br />
                  All it takes is answering a few questions about your skin<br />
                  Tell us how we can help!
                </div>
              </div>
            </div>
          </div>

          <div class="row align-items-center">
            <div class="col-lg-6 col-sm-6 order-lg-2 order-sm-2">
              <div class="history-item-text">
                <img
                  src="/img/wait-for-your-evaluation.jpeg"
                  class="img-fluid"
                />
              </div>
            </div>
            <div class="col-lg-6 col-sm-6 order-lg-1 order-sm-1">
              <div class="history-item-img">
                <div class="sh-s mb15 text-right">
                  Personalized To Your Needs
                </div>
                <div class="mw400 text-right m">
                  Customize the packaging with your initials and <br />
                  favorite color, and let us do the rest.<br /><br />
                  Our doctors will review your online visit and prescribe the
                  strength level of the product most suitable for your skin
                </div>
              </div>
            </div>
          </div>

          <div class="row align-items-center">
            <div class="col-lg-6 col-sm-6">
              <div class="history-item-img">
                <img src="/img/time-to-start-journey.jpeg" class="img-fluid" />
              </div>
            </div>
            <div class="col-lg-6 col-sm-6">
              <div class="history-item-text">
                <div class="sh-s mb15">From Our Pharmacy To Your Doorstep</div>
                <div class="mw400 m">
                  Every product is formulated by our doctors using high quality,
                  science-backed ingredients. <br /><br />
                  Your order will be delivered within 5 business days.
                </div>
              </div>
            </div>
          </div>

          <div class="d-flex justify-content-center pt120">
            <router-link to="/product" class="btn btn-solid">
              View all products
            </router-link>
          </div>
        </div>
      </div>
    </section> -->

    <!-- <section class="product-design">
      <div class="container">
        <div class="heading2xl text-uppercase text-center mb80 mx-5">
          Your product, your design
        </div>
        <div class="box-product-desktop">
          <div id="img-pack" class="d-flex justify-content-center">
            <div><img src="/img/package.png" class="img-fluid" /></div>
          </div>

          <div class="text-for-box tl">
            <div class="l mb8 font-medium">Your formulation</div>
            <p class="m">Different product strength levels for a unique you.</p>
          </div>

          <div class="text-for-box bl">
            <div class="l mb8 font-medium">Your prescription</div>
            <p class="m">If it's a prescription product, we'll indicate it.</p>
          </div>

          <div class="text-for-box tr">
            <div class="l mb8 font-medium">Your name</div>
            <p class="m">Add your initials to the front of the box.</p>
          </div>

          <div class="text-for-box br">
            <div class="l mb8 font-medium">Your color</div>
            <p class="m">Blue, red, yellow, purple - choose your favorite!</p>
          </div>
          <div class="text-for-box bot text-uppercase">
            Customize your packaging
          </div>
          <div class="number-package no1">
            1
          </div>
          <div class="number-package no2">
            2
          </div>
          <div class="number-package no3">
            3
          </div>
          <div class="number-package no4">
            4
          </div>
        </div>

        <div class="box-product-mobile">
          <div class="row">
            <div class="col-6">
              <div class="d-flex mb15">
                <div class="mr-2">
                  <div class="m font-medium">1.</div>
                </div>
                <div>
                  <div class="m mb8 font-medium">Your formulation</div>
                  <p class="s">
                    Different product strength levels for a unique you.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-6">
              <div class="d-flex mb15">
                <div class="mr-2">
                  <div class="m font-medium">2.</div>
                </div>
                <div>
                  <div class="m mb8 font-medium">Your name</div>
                  <p class="s">Add your initials to the front of the box.</p>
                </div>
              </div>
            </div>
            <div class="col-6">
              <div class="d-flex mb15">
                <div class="mr-2">
                  <div class="m font-medium">3.</div>
                </div>
                <div>
                  <div class="m mb8 font-medium">Your prescription</div>
                  <p class="s">
                    If it's a prescription product, we'll indicate it.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-6">
              <div class="d-flex mb15">
                <div class="mr-2">
                  <div class="m font-medium">4.</div>
                </div>
                <div>
                  <div class="m mb8 font-medium">Your color</div>
                  <p class="s">
                    Blue, red, yellow, purple - choose your favorite!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section> -->

    <!-- <section class="ingeredients" id="ingeredients">
      <div class="container" data-aos="fade-up">
        <div class="row">
          <div class="col-lg-10">
            <div class="headingxl mb60">
              Our products use the best quality ingredients that are safe and
              effective.
            </div>
          </div>
          <div class="col-lg-6">
            <div class="sh-s font-medium mb25">
              And every ingredient is added intentionally in the quantity that
              is most suitable for you.
            </div>

            <p class="m mb30">
              Retinoids, hydroquinone, and tretinoin are a few of the powerhouse
              ingredients we use as the base of our products.
            </p>

            <p class="m mb30">
              Everything from acne to dark spots and wrinkles - we got you
              covered.
            </p>
            <router-link to="/surfaceplus/ingredients" class="btn btn-solid">
              Explore ingredients
            </router-link>
          </div>
        </div>

        <div class="img-ing">
          <img src="/img/ing-img.png" class="img-fluid" />
        </div>
      </div>
    </section> -->

    <!-- <section class="collection" id="collection">
      <div class="container" data-aos="fade-up" data-aos-duration="1000">
        <div class="text-center headingl mb60">
          CHECK OUT OUR FULL COLLECTION
        </div>
        <div class="collection-bg">
          <div>
            <div class="sh-m text-center mb8"></div>
            <p class="text-center mw450 mb40"></p>
            <div class="d-flex justify-content-center">
              <a href="/product" class="btn btn-solid">
                Shop All
              </a>
            </div>
          </div>
        </div>
      </div>
    </section> -->

    <!-- <section class="ps-blog" id="article">
      <div class="container" data-aos="fade-up" data-aos-duration="1000">
        <div class="text-center headingxl mb40">Surface+ Tips & Trends</div>
        <div class="d-flex justify-content-center mb100">
          <a href="/blog" class="btn btn-white">Read our blog</a>
        </div>
      </div>

      <swiper
        id="blog-slider"
        data-aos="fade-up"
        data-aos-duration="1000"
        ref="blogSwiper"
        :options="blogSwiperOptions"
        v-if="blogs.length"
      >
        <swiper-slide v-for="(blog, index) in blogs" :key="index">
          <router-link :to="`/blog/${blog.slug}`" class="hp-box">
            <img :src="blog.thumbnail" class="w100" />
            <div class="white-card">
              <p class="xs mb15">
                <template v-if="blog.tags.length">
                  {{ blog.tags[0].name.toUpperCase() }}
                </template>
              </p>
              <h5 class="m mb-3" v-html="blog.title"></h5>
              <router-link :to="`/blog/${blog.slug}`" class="blog-link">
                Read More <img src="/img/arrow.svg" class="arrow-link" />
              </router-link>
            </div>
          </router-link>
        </swiper-slide>
      </swiper>
    </section> -->

    <FAQ />
  </div>
</template>

<script>
import { directive } from "vue-awesome-swiper";
// import $ from "jquery";
import FAQ from "@/components/FAQ.vue";
import ProductMenu from "@/components/ProductMenu.vue";
import CartRightBar from "@/components/CartRightBar.vue";
import axios from "axios";
import moment from "moment";

export default {
  name: "SurfacePlus",
  metaInfo: {
    title: "Surface Plus"
  },
  components: {
    FAQ,
    ProductMenu,
    CartRightBar
  },
  directives: {
    swiper: directive
  },
  data() {
    return {
      sliders: [],
      surfacePlusSwiperOptions: {
        slidesPerView: 1,
        freeMode: false,
        loop: true,
        centeredSlides: false,
        navigation: {
          nextEl: ".sp.swiper-button-next",
          prevEl: ".sp.swiper-button-prev"
        }
      },
      testiSwiperOptions: {
        slidesPerView: 1,
        spaceBetween: 30,
        freeMode: false,
        loop: false,
        centeredSlides: false,
        navigation: {
          nextEl: ".ba.swiper-button-next",
          prevEl: ".ba.swiper-button-prev"
        }
      },
      productSwiperOptions: {
        slidesPerView: "auto",
        freeMode: false,
        loop: true,
        spaceBetween: 30,
        centeredSlides: false,
        mousewheel: {
          sensitivity: 1
        },
        navigation: {
          nextEl: ".ps-arrow.swiper-button-next",
          prevEl: ".ps-arrow.swiper-button-prev"
        },
        breakpoints: {
          576: {
            slidesPerView: 1
          },
          768: {
            slidesPerView: 2,
            freeMode: false
          },
          1024: {
            slidesPerView: 3
          },
          1200: {
            slidesPerView: 4,
            freeMode: true
          }
        }
      },
      productConcerenSwiperOptions: {
        slidesPerView: "auto",
        freeMode: false,
        centeredSlides: false,
        mousewheel: {
          sensitivity: 1
        },
        navigation: {
          nextEl: ".pc-arrow.swiper-button-next",
          prevEl: ".pc-arrow.swiper-button-prev"
        },
        breakpoints: {
          576: {
            slidesPerView: 1
          },
          768: {
            slidesPerView: 2,
            freeMode: false
          },
          1024: {
            slidesPerView: 3
          },
          1200: {
            slidesPerView: "auto",
            freeMode: true
          }
        }
      },
      blogSwiperOptions: {
        slidesPerView: "auto",
        freeMode: false,
        spaceBetween: 30,
        loop: true,
        centeredSlides: false,
        mousewheel: {
          sensitivity: 1
        },
        breakpoints: {
          576: {
            slidesPerView: 2
          },
          768: {
            slidesPerView: 2,
            freeMode: false
          },
          1024: {
            slidesPerView: 2
          },
          1200: {
            slidesPerView: "auto",
            freeMode: false
          }
        }
      },
      bestSellerProducts: [],
      blogs: []
    };
  },
  mounted() {
    // var black_1 = $(".ingeredients"),
    //   black_1_gone = $(".history-section"),
    //   black_2 = $(".product-concern"),
    //   black_2_gone = $(".ps-blog");

    // $(window).scroll(function() {
    //   var scroll = $(document).scrollTop(),
    //     section_1 = black_1.offset().top,
    //     section_2 = black_1_gone.offset().top,
    //     section_3 = black_2.offset().top,
    //     section_4 = black_2_gone.offset().top;

    //   if (scroll >= section_1) {
    //     $(".sticky-menu").addClass("dark");
    //   }
    //   if (scroll <= section_1) {
    //     $(".sticky-menu").removeClass("dark");
    //   }
    //   if (scroll >= section_1 && scroll < section_2) {
    //     $(".sticky-menu").addClass("dark");
    //   } else if (scroll > section_1 && scroll >= section_2) {
    //     $(".sticky-menu").removeClass("dark");
    //   }
    //   if (scroll >= section_3) {
    //     $(".sticky-menu").addClass("dark");
    //   }
    //   if (scroll >= section_3 && scroll < section_4) {
    //     $(".sticky-menu").addClass("dark");
    //   } else if (scroll > section_3 && scroll >= section_4) {
    //     $(".sticky-menu").removeClass("dark");
    //   }
    // });
    this.getSliders();
    this.fetchProducts();
    this.fetchBlog();

    // mixpanel tracking
    this.trackMixPanelEvent("View Surface+ Home", {
      source: "web",
      timestamp: moment()
        .format("DD MMMM YYYY H:mm:ss")
        .toString(),
      user_id: this.$store.state.userData
        ? this.$store.state.userData.userId
        : null,
      login_status: this.$store.state.userData ? true : false
    });
  },
  methods: {
    getSliders() {
      axios
        .get(
          `${process.env.VUE_APP_BASE_URL_API_CONTENT}/wp-json/surface/v1/home`
        )
        .then(response => {
          if (response.data.status == "ok") {
            this.sliders = response.data.data.banner;
          }
        });
    },
    fetchProducts() {
      axios
        .post(
          `${process.env.VUE_APP_BASE_URL_API_CONTENT}/wp-json/surface/v1/products`,
          {
            page: 1,
            per_page: 15,
            segment: {
              category: [],
              collection: [],
              concern: []
            },
            search: "",
            discount: "",
            order: "DESC",
            orderby: "best_seller",
            min_price: "",
            max_price: ""
          }
        )
        .then(response => {
          if (response.data.status == "ok") {
            this.bestSellerProducts = response.data.data.products;
          }
        });
    },
    fetchBlog() {
      axios
        .post(
          `${process.env.VUE_APP_BASE_URL_API_CONTENT}/wp-json/surface/v1/blog/list`,
          {
            page: 1,
            per_page: 15,
            category: [],
            tag: [],
            search: "",
            order: "DESC",
            orderby: "date",
            blog_in: []
          }
        )
        .then(response => {
          console.log(response.data);
          if (response.data.status == "ok") {
            this.blogs = response.data.data.blogs;
          }
        });
    }
  }
};
</script>

<style scoped>
.swiper-button-prev,
.swiper-button-next {
  background-image: none;
}
.pt10 {
  padding-top: 10px;
}
</style>
