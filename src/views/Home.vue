<template>
  <div id="home">
    <div class="section1 pt100px">
      <div class="container">
        <div
          class="heading2xl mt-5 mb80 margin-mobile text-uppercase"
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          Your Friendly Expert Skin Clinic.
        </div>
      </div>
    </div>

    <section class="two-img">
      <div class="for-top-img" style="background-image: url(img/top-left.jpg);">
        <div class="inner-top-img left">
          <div class="box-iti-left">
            <div class="sh-m text-uppercase mb8">treatments</div>
            <p class="m mb15">
              Boost your skincare routine with our science-backed medical
              treatments.
            </p>
            <router-link to="/skin-habit#treatment" class="btn btn-solid">
              Explore Treatments
            </router-link>
          </div>
        </div>
      </div>
      <div
        class="for-top-img"
        style="background-image: url(img/top-right.jpg);"
      >
        <div class="inner-top-img right">
          <div class="box-iti-right">
            <div class="sh-m text-uppercase mb8">products</div>
            <p class="m mb15">
              Build healthy habits with our line of personalized skincare.
            </p>
            <router-link to="/surfaceplus" class="btn btn-solid">
              Explore Products
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <div class="section3">
      <div class="container">
        <div class="sh-l font-bold text-uppercase mb60">
          Always there for you
        </div>
        <div class="pb150px" data-aos="fade-up" data-aos-duration="1200">
          <swiper id="atfy" :options="atfySwiperOptions">
            <swiper-slide>
              <div class="box360 mb30">
                <img
                  src="/img/reach-1.jpg"
                  class="img-fluid mb20 w100"
                  alt="Reach"
                />
                <div class="">
                  <div class="l akkurat text-uppercase mb8">
                    When you want it
                  </div>
                  <p class="m grey mb12">1-on-1 with the doctor on-the-go!</p>
                  <a href="https://wa.me/6281222346115" class="wc-link">
                    Book Now
                  </a>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="box360 mb30">
                <img
                  src="/img/reach-2.jpg"
                  class="img-fluid mb20 w100"
                  alt="Reach"
                />
                <div class="">
                  <div class="l akkurat text-uppercase mb8">
                    Where you want it
                  </div>
                  <p class="m grey mb12">
                    In-clinic consultations because some things have to be done
                    in-person.
                  </p>
                  <a href="https://wa.me/6281222346115" class="wc-link">
                    Book Now
                  </a>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="box360 mb30">
                <img
                  src="/img/reach-3.jpg"
                  class="img-fluid mb20 w100"
                  alt="Reach"
                />
                <div class="">
                  <div class="l akkurat text-uppercase mb8">
                    Wherever you want it
                  </div>
                  <p class="m grey mb12">
                    Our At-home Service from the convenience of your house.
                  </p>
                  <a href="https://wa.me/6281222346115" class="wc-link">
                    Book Now
                  </a>
                </div>
              </div>
            </swiper-slide>
          </swiper>
          <div id="atfy-a" class="container">
            <div class="position-relative">
              <div class="d-flex justify-content-center align-items-center">
                <div id="atfy-arrow" class="swiper-button-prev b-a black"></div>
                <div id="atfy-arrow" class="swiper-button-next b-a black"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="section4 pt400px">
      <div class="container">
        <div class="heading3xl text-uppercase heading-wrap">
          <div data-aos="fade-up" data-aos-duration="1000">
            A unique experience
            <span class="for-sh">for you and your</span> skin.
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-xl-12">
          <div class="container">
            <div class="box-fa">
              <div class="inner-fa">
                <div class="h-arrow swiper-button-next black"></div>
                <div class="h-arrow swiper-button-prev black"></div>
              </div>
            </div>
          </div>
          <!-- Swiper -->
          <div
            class="services-slider"
            data-aos="fade-up"
            data-aos-duration="1100"
          >
            <swiper
              id="s-slide"
              ref="experienceSwiper"
              :options="experienceSwiperOptions"
            >
              <swiper-slide>
                <div class="box-services">
                  <img src="/img/service-1.jpg" class="w-100" />
                  <div class="white-card-services akkurat">
                    CASUAL AND RELAXING ATMOSPHERE
                  </div>
                </div>
              </swiper-slide>
              <swiper-slide>
                <div class="box-services">
                  <img src="/img/service-2.jpg" class="w-100" />
                  <div class="white-card-services akkurat">
                    TEAM OF EXPERTS
                  </div>
                </div>
              </swiper-slide>
              <swiper-slide>
                <div class="box-services">
                  <img src="/img/service-3.jpg" class="w-100" />
                  <div class="white-card-services akkurat">
                    EFFECTIVE TREATMENTS
                  </div>
                </div>
              </swiper-slide>
              <swiper-slide>
                <div class="box-services">
                  <img src="/img/service-4.jpg" class="w-100" />
                  <div class="white-card-services akkurat">
                    IN-HOUSE PHARMACY
                  </div>
                </div>
              </swiper-slide>
              <swiper-slide>
                <div class="box-services">
                  <img src="/img/service-5.jpg" class="w-100" />
                  <div class="white-card-services akkurat">
                    FOCUSED ON YOU
                  </div>
                </div>
              </swiper-slide>
            </swiper>
          </div>

          <div id="ba-bottom" class="container">
            <div class="position-relative">
              <div class="d-flex justify-content-center align-items-center">
                <div class="h-arrow swiper-button-prev b-a black"></div>
                <div class="h-arrow swiper-button-next b-a black"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div id="our-team" class="section5">
      <div class="container">
        <div class="headingxl text-center">Meet Our Team of Experts</div>
        <div
          class="row justify-content-center top90px"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div class="col-xl-3 col-sm-4">
            <img
              src="/img/expert/dr.Riska-Melanie.png"
              class="img-fluid img-circle w100"
              alt="Reach"
            />
            <div class="white-card-profil">
              <h5 class="l text-uppercase akkurat">dr. Riska Melanie</h5>
              <p class="grey m">Doctor</p>
            </div>
          </div>

          <div class="col-xl-3 col-sm-4">
            <img
              src="/img/expert/dr.Evans-Suryani-Sibarani.png"
              class="img-fluid img-circle w100"
              alt="Reach"
            />
            <div class="white-card-profil">
              <h5 class="l text-uppercase akkurat">
                dr. Evans Suryani Sibarani
              </h5>
              <p class="grey m">Doctor</p>
            </div>
          </div>

          <div class="col-xl-3 col-sm-4">
            <img
              src="/img/expert/dr.Ajeng-Hana-Ajani-DJ.png"
              class="img-fluid img-circle w100"
              alt="Reach"
            />
            <div class="white-card-profil">
              <h5 class="l text-uppercase akkurat">dr. Ajeng Hana Ajani DJ</h5>
              <p class="grey m">Doctor</p>
            </div>
          </div>

          <div class="col-xl-3 col-sm-4">
            <img
              src="/img/expert/dr.Siti-Aisyah-Devitri.png"
              class="img-fluid img-circle w100"
              alt="Reach"
            />
            <div class="white-card-profil">
              <h5 class="l text-uppercase akkurat">dr. Siti Aisyah Devitri</h5>
              <p class="grey m">Doctor</p>
            </div>
          </div>

          <div class="col-xl-3 col-sm-4">
            <img
              src="/img/expert/dr.Dwi-Putri-Anandia.png"
              class="img-fluid img-circle w100"
              alt="Reach"
            />
            <div class="white-card-profil">
              <h5 class="l text-uppercase akkurat">dr. Dwi Putri Anandia</h5>
              <p class="grey m">Doctor</p>
            </div>
          </div>

          <div class="col-xl-3 col-sm-4">
            <img
              src="/img/expert/dr.Amanda-Rahmania.png"
              class="img-fluid img-circle w100"
              alt="Reach"
            />
            <div class="white-card-profil">
              <h5 class="l text-uppercase akkurat">dr. Amanda Rahmania</h5>
              <p class="grey m">Doctor</p>
            </div>
          </div>

          <div class="col-xl-3 col-sm-4">
            <img
              src="/img/expert/apt.Yanti-Rumiris-Napitupulu.png"
              class="img-fluid img-circle w100"
              alt="Reach"
            />
            <div class="white-card-profil">
              <h5 class="l text-uppercase akkurat">
                apt. Yanti Rumiris Napitupulu
              </h5>
              <p class="grey m">S.Farm</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div id="our-clinic" class="section6">
      <div class="container pb120px">
        <div class="sh-l font-bold text-uppercase mb60">Our Clinics</div>
        <div class="row" data-aos="fade-up" data-aos-duration="1000">
          <div class="col-xl-3 col-lg-3 col-sm-6">
            <div class="box360">
              <img
                src="/img/klinik2.jpg"
                class="img-fluid mb15 w100"
                alt="Reach"
              />
              <div class="white-card p-0">
                <h6 class="l akkurat text-uppercase mb15">Lippo Mall Puri</h6>
                <p class="m grey lb mb15">
                  Lippo Mall Puri LG 101 Jl. Puri Indah Raya Blok U1 CBD,
                  RT.3/RW.2, Kembangan Sel
                </p>
                <p class="mb20 grey">Operating hours: 9am - 9pm, Mon - Sun</p>
                <div class="row align-items-center">
                  <div class="col-5">
                    <a
                      href="https://wa.me/6281222346115"
                      target="_blank"
                      class="btn btn-grey w100 small"
                    >
                      Book Now
                    </a>
                  </div>
                  <div class="col-6">
                    <a
                      href="https://goo.gl/maps/ccFrditSjDFxMdea7"
                      class="direction-link grey mb15"
                    >
                      View Direction
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-lg-3 col-sm-6">
            <div class="box360">
              <img
                src="/img/klinik1.jpg"
                class="img-fluid mb15 w100"
                alt="Reach"
              />
              <div class="white-card p-0">
                <h6 class="l akkurat text-uppercase mb15">Setiabudi</h6>
                <p class="m grey lb mb15">
                  Setiabudi Building 2, Suite 104, Jl. H. R. Rasuna Said No.Kav
                  62, RT.6/RW.7, Kuningan, Karet Kuningan, South Jakarta City,
                  Jakarta 12920
                </p>
                <p class="mb15 grey">Operating hours 9am-6pm, Tue - Sun</p>
                <div class="row align-items-center">
                  <div class="col-5">
                    <a
                      href="https://wa.me/6281222346115"
                      target="_blank"
                      class="btn btn-grey w100 small"
                    >
                      Book Now
                    </a>
                  </div>
                  <div class="col-6">
                    <a
                      href="https://goo.gl/maps/To4vhncjaGvSAAms5"
                      class="direction-link grey mb15"
                    >
                      View Direction
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-lg-3 col-sm-6">
            <div class="box360">
              <img
                src="/img/klinik3.jpg"
                class="img-fluid mb15 w100"
                alt="Reach"
              />
              <div class="white-card p-0">
                <h6 class="l akkurat text-uppercase mb15">CITOS</h6>
                <p class="m grey lb mb15">
                  Cilandak Town Square, jl. T.B. Simatupang Kav.17 Cilandak,
                  Ground floor #B040, RT.2/RW.1, Cilandak Bar., Kec. Cilandak,
                  DKI Jakarta, Daerah Khusus Ibukota Jakarta 12430
                </p>
                <p class="mb15 grey">Operating hours: 9am - 6pm, Tue - Sun</p>
                <div class="row align-items-center">
                  <div class="col-5">
                    <a
                      href="https://wa.me/6281222346115"
                      target="_blank"
                      class="btn btn-grey w100 small"
                    >
                      Book Now
                    </a>
                  </div>
                  <div class="col-6">
                    <a
                      href="https://goo.gl/maps/UZ68DP7YEq91BY7c7"
                      class="direction-link grey mb15"
                    >
                      View Direction
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-lg-3 col-sm-6">
            <div class="box360">
              <img
                src="/img/klinik4.png"
                class="img-fluid mb15 w100"
                alt="Reach"
              />
              <div class="white-card p-0">
                <h6 class="l akkurat text-uppercase mb15">CIBUBUR</h6>
                <p class="m grey lb mb15">
                  Trans Studio Mall Cibubur, Jl. Alternatif Cibubur No.230 Lt LG-53, Harjamukti, Kec. Cimanggis, Kota Depok, Jawa Barat 16454
                </p>
                <p class="mb15 grey">Operating hours: 10am - 10pm, Mon - Sun</p>
                <div class="row align-items-center">
                  <div class="col-5">
                    <a
                      href="https://wa.link/3dmvpg"
                      target="_blank"
                      class="btn btn-grey w100 small"
                    >
                      Book Now
                    </a>
                  </div>
                  <div class="col-6">
                    <a
                      href="https://maps.app.goo.gl/qPSLYCx6LJ917xda6"
                      class="direction-link grey mb15"
                    >
                      View Direction
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div id="featured-in" class="section7">
      <div class="container" data-aos="fade-up" data-aos-duration="1000">
        <div class="headingxl text-center mb80 from-right">As Featured in</div>
      </div>
      <div class="pb120px">
        <div class="container" data-aos="fade-up" data-aos-duration="1000">
          <div class="row align-items-center justify-content-center">
            <div class="col-xl-3 col-lg-3 col-sm-4 text-center">
              <img
                src="/img/partner-4.png"
                class="img-fluid mb40"
                alt="Partner"
              />
            </div>
            <div class="col-xl-3 col-lg-3 col-sm-4 text-center">
              <img
                src="/img/partner-5.png"
                class="img-fluid mb40"
                alt="Partner"
              />
            </div>
            <div class="col-xl-3 col-lg-3 col-sm-4 text-center">
              <img
                src="/img/partner-6.png"
                class="img-fluid mb40"
                alt="Partner"
              />
            </div>
            <div class="col-xl-3 col-lg-3 col-sm-4 text-center">
              <img
                src="/img/partner-7.png"
                class="img-fluid mb40"
                alt="Partner"
              />
            </div>
            <div class="col-xl-3 col-lg-3 col-sm-4 text-center">
              <img
                src="/img/partner1.png"
                class="img-fluid mb40"
                alt="Partner"
              />
            </div>
            <div class="col-xl-3 col-lg-3 col-sm-4 text-center">
              <img
                src="/img/partner2.png"
                class="img-fluid mb40"
                alt="Partner"
              />
            </div>
            <div class="col-xl-3 col-lg-3 col-sm-4 text-center">
              <img
                src="/img/partner4.png"
                class="img-fluid mb40"
                alt="Partner"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div id="testimonial-client" class="section8">
      <div class="container">
        <div class="row" data-aos="fade-up" data-aos-duration="1000">
          <div class="col-xl-5 col-lg-4">
            <div class="headingm font-bold text-uppercase bottom30px">
              What they said <br />
              about us
            </div>
            <p class="mw300 grey mb40 l">
              We've had a lot of our Surface Friends come over. See for
              yourself!
            </p>
          </div>
          <div class="col-xl-7">
            <slick
              ref="sliderFor"
              :options="slickPatientDetail"
              class="slider slider-for"
            >
              <div id="testi-1">
                <div class="row">
                  <div class="col-xl-5 col-lg-5 col-sm-6">
                    <img
                      src="/img/YUNITA-IRAWAN.jpg"
                      class="img-fluid"
                      alt="Testi"
                    />
                  </div>
                  <div class="col-xl-7 col-lg-7 col-sm-6">
                    <div class="box-testi">
                      <h4 class="sh-s mb20">Yunita Irawan</h4>
                      <p class="s mw300">
                        Aku coba treatment H20 Glow Facial + PDT, suka banget!!
                        Baru kali ini facial tapi banyak pijitnya nyaman banget
                        aku jadinya. Seneng juga kliniknya nyaman banget!!
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div id="testi-2">
                <div class="row">
                  <div class="col-xl-5 col-lg-5 col-sm-6">
                    <img
                      src="img/sarah-andreas.jpg"
                      class="img-fluid"
                      alt="Testi"
                    />
                  </div>

                  <div class="col-xl-7 col-lg-7 col-sm-6">
                    <div class="box-testi">
                      <h4 class="sh-s mb20">Andreas Lukita & Sarah Ayu</h4>
                      <p class="s mw300">
                        Who doesn’t love spending time with best friend? Take
                        care your skin together with your best friend just like
                        Sarah and Andreas! They really love H20 Glow and
                        Hydraderm facial because their skin will always be fresh
                        and sparkling.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div id="testi-3">
                <div class="row">
                  <div class="col-xl-5 col-lg-5 col-sm-6">
                    <img
                      src="img/SANDRA-LUBIS.jpg"
                      class="img-fluid"
                      alt="Testi"
                    />
                  </div>
                  <div class="col-xl-7 col-lg-7 col-sm-6">
                    <div class="box-testi">
                      <h4 class="sh-s mb20">Sandra Lubis</h4>
                      <p class="s mw300">
                        Super seneng treatment di Surface Skin Habit, baru ini
                        nyobain tempat treatment yang vibenya enak, pelayanannya
                        the best! Dari treatment Hydraderm Facial yang aku coba
                        treatment nya bikin relax dan terbukti untuk kulitku
                        yang sensitif ga bikin muka jadi merah-merah malah jadi
                        kinclong! Fix bakalan balik lagi ke Surface
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div id="testi-4">
                <div class="row">
                  <div class="col-xl-5 col-lg-5 col-sm-6">
                    <img src="img/RADHINI.jpg" class="img-fluid" alt="Testi" />
                  </div>
                  <div class="col-xl-7 col-lg-7 col-sm-6">
                    <div class="box-testi">
                      <h4 class="sh-s mb20">Radhini</h4>
                      <p class="s mw300">
                        Hydraderm Facial is safe for pregnant women above
                        trimester 3, Radhini tried it and she said “aku suka
                        banget treatment nya super fresh! Love it! Ada banyak
                        sesi pijatnya yang buat aku makin relax!
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div id="testi-5">
                <div class="row">
                  <div class="col-xl-5 col-lg-5 col-sm-6">
                    <img
                      src="img/PRINKA-CASSEY.jpg"
                      class="img-fluid"
                      alt="Testi"
                    />
                  </div>

                  <div class="col-xl-7 col-lg-7 col-sm-6">
                    <div class="box-testi">
                      <h4 class="sh-s mb20">Prinka Cassey</h4>
                      <p class="s mw300">
                        Surface kliniknya gemes! Aku suka banget massage nya,
                        terus maskernya enak jasmine gitu. Aku suka banget
                        Hydraderm Facial karena ada serumnya jadi gak bikin muka
                        kering. Setelah itu aku PDT, hasilnya glowing gitu.
                        Pokoknya aku suka sih Hydraderm Facial + PDT ini.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div id="testi-6">
                <div class="row">
                  <div class="col-xl-5 col-lg-5 col-sm-6">
                    <img
                      src="img/PATRICIA-DEVINA.jpg"
                      class="img-fluid"
                      alt="Testi"
                    />
                  </div>

                  <div class="col-xl-7 col-lg-7 col-sm-6">
                    <div class="box-testi">
                      <h4 class="sh-s mb20">Patricia Devina</h4>
                      <p class="s mw300">
                        Pertama kali coba Surface Skin Habit dan happy banget
                        sama hasilnya!! Jadi aku treatment Hydraderm Facial +
                        PDT. cocok untuk kulit yang beruntusan. Karena proses
                        ekstraksi saat facial, biasanya kulit jadi merah-merah
                        setelah selesai facial, tapi pas aku coba Surface aku
                        malah bisa langsung keluar karena kulitku gak
                        merah-merah dan beruntusan ku berkurang banget setelah 3
                        hari dari hari perawatan
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div id="testi-7">
                <div class="row">
                  <div class="col-xl-5 col-lg-5 col-sm-6">
                    <img
                      src="img/NINA-PRATIWI.jpg"
                      class="img-fluid"
                      alt="Testi"
                    />
                  </div>
                  <div class="col-xl-7 col-lg-7 col-sm-6">
                    <div class="box-testi">
                      <h4 class="sh-s mb20">Nina Pratiwi</h4>
                      <p class="s mw300">
                        The best facial treatment ever! Aku cobain treatment H20
                        Glow, dan serasa langsung terangkat semua kesalahan di
                        wajah. Kulit langsung cerah dan seger. Plus sepanjang
                        treatment rileks banget. Mau #maindisurface lagi tolong!
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div id="testi-8">
                <div class="row">
                  <div class="col-xl-5 col-lg-5 col-sm-6">
                    <img
                      src="img/NAMIRA-MONDA.jpg"
                      class="img-fluid"
                      alt="Testi"
                    />
                  </div>
                  <div class="col-xl-7 col-lg-7 col-sm-6">
                    <div class="box-testi">
                      <h4 class="sh-s mb20">Namira Monda</h4>
                      <p class="s mw300">
                        Selama ini aku merasa skincare sendiri gak maksimal
                        hasilnya, udah pakai beberapa merk juga tetap gak puas.
                        Akhirnya aku putuskan untuk treatment di surface Skin
                        Habit biar bisa cek kulit aku dan bisa dapat perawatan
                        dari ahlinya. Dan Ternyata emang kulitku yang sering
                        kena makeup ini harus dibersihkan dulu dengan facial di
                        surface dan abis treatment aku merasa langsung glowing!
                        Sekarang tinggal maintain aja, dan aku happy banget!
                        Surface Skin Habit tempatnya nyaman, ramah-ramah dan
                        treatmentnya sambil relaksasi!
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div id="testi-9">
                <div class="row">
                  <div class="col-xl-5 col-lg-5 col-sm-6">
                    <img
                      src="img/NAMIRA-ADZANI.jpg"
                      class="img-fluid"
                      alt="Testi"
                    />
                  </div>

                  <div class="col-xl-7 col-lg-7 col-sm-6">
                    <div class="box-testi">
                      <h4 class="sh-s mb20">Namira Adzani</h4>
                      <p class="s mw300">
                        Seneng banget treatment di surface skin habit! Kliniknya
                        gemes banget, nyaman selama treatment berlangsung karena
                        susternya juga baik, informatif, dan bener2 relax sampai
                        ketiduran 💤 Apalagi ditambah massage-nya yang juara..
                        💯 Aku puas banget setelah hydraderm facial + pdt karena
                        muka aku jadi glowing & ngangkat kulit mati & komedo
                        tanpa sakit. Definitely will come back soon!
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div id="testi-10">
                <div class="row">
                  <div class="col-xl-5 col-lg-5 col-sm-6">
                    <img
                      src="img/NADIN-AMIZAH.jpg"
                      class="img-fluid"
                      alt="Testi"
                    />
                  </div>
                  <div class="col-xl-7 col-lg-7 col-sm-6">
                    <div class="box-testi">
                      <h4 class="sh-s mb20">Nadin Amizah</h4>
                      <p class="s mw300">
                        Setelah 2-3 kali aku coba hydraderm facial + PDT muka
                        aku udah ga bruntusan lagi, that’s a big change for my
                        skin. Kalau udah lama ga facial paling cuma beberapa
                        bumps yang muncul tapi bisa aku atasi sendiri dan untuk
                        kulitku aku lebih cocok untuk treatment hydraderm facial
                        aja tanpa PDT. Tapi will definitely come back when I
                        have the time for another hydraderm facial!
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div id="testi-11">
                <div class="row">
                  <div class="col-xl-5 col-lg-5 col-sm-6">
                    <img
                      src="img/MELODY-AMADEA.jpg"
                      class="img-fluid"
                      alt="Testi"
                    />
                  </div>

                  <div class="col-xl-7 col-lg-7 col-sm-6">
                    <div class="box-testi">
                      <h4 class="sh-s mb20">Melody Amadea</h4>
                      <p class="s mw300">
                        Kenapa aku ke Surface? Aku suka banget sama tempatnya.
                        First impression cozy banget, setelah treatment aku
                        ngerasain banget benefitnya apa lagi hydraderm, itu
                        treatment favorit aku karena cocok dan sangat terlihat
                        efeknya di kulitku. Setelah 2x treatment aja udah sangat
                        keliatan hasilnya. Kulitku glowing dan seger. Aku pengen
                        terus treatment disini!
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div id="testi-12">
                <div class="row">
                  <div class="col-xl-5 col-lg-5 col-sm-6">
                    <img src="img/MAIZURA.jpg" class="img-fluid" alt="Testi" />
                  </div>
                  <div class="col-xl-7 col-lg-7 col-sm-6">
                    <div class="box-testi">
                      <h4 class="sh-s mb20">Maizura</h4>
                      <p class="s mw300">
                        Me time @surfaceskinhabit! pertama kali kesini langsung
                        nyaman karena protokol kesehatan yang sangat terjamin.
                        I'm so satisfied with the treatments nd will definitely
                        come back for better skin!
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div id="testi-13">
                <div class="row">
                  <div class="col-xl-5 col-lg-5 col-sm-6">
                    <img
                      src="img/JIHAN-PUTRI.jpg"
                      class="img-fluid"
                      alt="Testi"
                    />
                  </div>
                  <div class="col-xl-7 col-lg-7 col-sm-6">
                    <div class="box-testi">
                      <h4 class="sh-s mb20">Jihan Putri</h4>
                      <p class="s mw300">
                        Jujur aku suka banget sama pelayanan di Surface! Aku
                        bukan sekedar pengen facial, tapi pengen rileks juga
                        karena beautician-nya itu tangannya enak banget jadi
                        pengen tidur dan bruntusan ku mudah-mudahan membaik
                        karena Surface
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div id="testi-14">
                <div class="row">
                  <div class="col-xl-5 col-lg-5 col-sm-6">
                    <img
                      src="img/HANI-KENISHA.jpg"
                      class="img-fluid"
                      alt="Testi"
                    />
                  </div>
                  <div class="col-xl-7 col-lg-7 col-sm-6">
                    <div class="box-testi">
                      <h4 class="sh-s mb20">Hani Kenisha</h4>
                      <p class="s mw300">
                        Aku coba treatment H20 Glow Facial + PDT, untuk
                        treatment overall memang terasa setelah 3 hari jadi
                        cerah banget! Karena aku abis dari Bali 1 minggu jadi i
                        can really see the difference
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div id="testi-15">
                <div class="row">
                  <div class="col-xl-5 col-lg-5 col-sm-6">
                    <img
                      src="img/GALIH-SOEDIRJO.jpg"
                      class="img-fluid"
                      alt="Testi"
                    />
                  </div>

                  <div class="col-xl-7 col-lg-7 col-sm-6">
                    <div class="box-testi">
                      <h4 class="sh-s mb20">Galih Soedirjo</h4>
                      <p class="s mw300">
                        Aku cobain treatment H20 Glow + PDT facial, aku ngerasa
                        banget muka jadi lebih cerah dan seger banget! Lalu
                        treatment ini bisa menutrisi dan bikin kulit jadi lebih
                        moist! Definitely bakalan balik lagi untuk
                        #maindisurface
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div id="testi-16">
                <div class="row">
                  <div class="col-xl-5 col-lg-5 col-sm-6">
                    <img
                      src="img/FADIL-JAIDI.jpg"
                      class="img-fluid"
                      alt="Testi"
                    />
                  </div>
                  <div class="col-xl-7 col-lg-7 col-sm-6">
                    <div class="box-testi">
                      <h4 class="sh-s mb20">Fadil Jaidi</h4>
                      <p class="s mw300">
                        Gak nyesel sama sekali treatment di Surface, tempatnya
                        super nyaman!!! Buat gw cowo yang gak paham sama
                        treatment, nanti akan dikasih tau sama dokternya
                        treatment apa yang cocok buat gue. Treatmentnya
                        bener-bener bikin relax! 100% mau balik lagi sih
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div id="testi-17">
                <div class="row">
                  <div class="col-xl-5 col-lg-5 col-sm-6">
                    <img
                      src="img/EVA-CELIA.jpg"
                      class="img-fluid"
                      alt="Testi"
                    />
                  </div>
                  <div class="col-xl-7 col-lg-7 col-sm-6">
                    <div class="box-testi">
                      <h4 class="sh-s mb20">Eva Celia</h4>
                      <p class="s mw300">
                        Eva really likes our Hydraderm Facial + PDT to light up
                        her skin because tight schedule of gigs make her skin
                        becomes tired. Thank you for stopping by, Eva!
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div id="testi-18">
                <div class="row">
                  <div class="col-xl-5 col-lg-5 col-sm-6">
                    <img
                      src="img/DESSY-ADITYA.jpg"
                      class="img-fluid"
                      alt="Testi"
                    />
                  </div>
                  <div class="col-xl-7 col-lg-7 col-sm-6">
                    <div class="box-testi">
                      <h4 class="sh-s mb20">Dessy Aditya</h4>
                      <p class="s mw300">
                        Seneng banget abis treatment H20 Glow Facial + PDT di
                        Surface Skin Habit! muka ku langsung glowing abis
                        treatment disini💛 fix akan ketagihan treatment disini!
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div id="testi-19">
                <div class="row">
                  <div class="col-xl-5 col-lg-5 col-sm-6">
                    <img
                      src="img/CLARISSA-PUTRI.jpg"
                      class="img-fluid"
                      alt="Testi"
                    />
                  </div>

                  <div class="col-xl-7 col-lg-7 col-sm-6">
                    <div class="box-testi">
                      <h4 class="sh-s mb20">Clarissa Putri</h4>
                      <p class="s mw300">
                        So far ini adalah tempat facial terbaik yang pernah aku
                        datengin. Dari tempatnya yang bersih, service yang ok
                        banget dan beautician yang ramah bikin aku nyaman banget
                        facial di Surface. Pengen racunin semua orang harus ke
                        Surface!! Harus cobain treatmentnya dengan service
                        terbaik ini! Dijamin gak akan nyesel!
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div id="testi-20">
                <div class="row">
                  <div class="col-xl-5 col-lg-5 col-sm-6">
                    <img
                      src="img/CINDY-PRICILLA.jpg"
                      class="img-fluid"
                      alt="Testi"
                    />
                  </div>

                  <div class="col-xl-7 col-lg-7 col-sm-6">
                    <div class="box-testi">
                      <h4 class="sh-s mb20">Cindy Pricilla</h4>
                      <p class="s mw300">
                        Akhirnya ke @surfaceskinhabit aku coba hydraderm facial
                        + PDT. step pertama ada welcome massage yang bikin super
                        nyaman, yang aku rasain treatmentnya bikin kulitku
                        selalu clean and bright. Gak sabar untuk #maindisurface
                        lagi
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div id="testi-21">
                <div class="row">
                  <div class="col-xl-5 col-lg-5 col-sm-6">
                    <img
                      src="img/CINDERCELLA.jpg"
                      class="img-fluid"
                      alt="Testi"
                    />
                  </div>
                  <div class="col-xl-7 col-lg-7 col-sm-6">
                    <div class="box-testi">
                      <h4 class="sh-s mb20">Cindercella</h4>
                      <p class="s mw300">
                        Aku facial untuk menghilangkan komedo-komedoku yang
                        membandel, pengerjaanya bener-bener bikin nyaman, di
                        cleansing 2 kali untuk memastikan muka kita bersih. lalu
                        yang paling aku seneng treatment H20 Glow ada
                        pengangkatan sel kulit mati jadi mukaku kelihatan
                        instantly glowing! lalu ada serum-serum yang juga
                        membantu untuk menutrisi kulitku. Suka banget treatment
                        di Surface Skin Habit!
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div id="testi-22">
                <div class="row">
                  <div class="col-xl-5 col-lg-5 col-sm-6">
                    <img
                      src="img/BAILA-FAURI.jpg"
                      class="img-fluid"
                      alt="Testi"
                    />
                  </div>
                  <div class="col-xl-7 col-lg-7 col-sm-6">
                    <div class="box-testi">
                      <h4 class="sh-s mb20">Baila Fauri</h4>
                      <p class="s mw300">
                        aku satisfied banget sama treatmentnya, so so so
                        relaxing, i was even surprised karena aku sampe bisa
                        ketiduran padahal aku gabisa tidur kalau lagi di facial.
                        Hasilnya juga as expected. The place is very comfy, and
                        the people made me feel welcomed jadi enak juga moodnya.
                        The beautician was very informative and baik juga.
                        Overall im very happy and satisfied sama Surface Skin
                        Habit
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div id="testi-23">
                <div class="row">
                  <div class="col-xl-5 col-lg-5 col-sm-6">
                    <img
                      src="img/ARDHINA-PUTRI.jpg"
                      class="img-fluid"
                      alt="Testi"
                    />
                  </div>

                  <div class="col-xl-7 col-lg-7 col-sm-6">
                    <div class="box-testi">
                      <h4 class="sh-s mb20">Ardhina Putri</h4>
                      <p class="s mw300">
                        aku suka dan cocok facial di surface! Muka jadi ga
                        kering lagi. Jadi lebih cerah rasanya!
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div id="testi-25">
                <div class="row">
                  <div class="col-xl-5 col-lg-5 col-sm-6">
                    <img
                      src="img/ANGGIS-DINDA.jpg"
                      class="img-fluid"
                      alt="Testi"
                    />
                  </div>
                  <div class="col-xl-7 col-lg-7 col-sm-6">
                    <div class="box-testi">
                      <h4 class="sh-s mb20">Anggis Dinda</h4>
                      <p class="s mw300">
                        Honest review soal experience H20 Glow Facial + PDT dari
                        aku itu setelah treatment ngerasa muka sangat bersih,
                        muka aku gak merah-merah kaya facial lainnya. Dalam 1x
                        treatment aku merasa muka aku lebih cerah terus
                        maskernya wangi. Baru kali ini ngerasain facial +
                        massage punggung dan tangan. Definitely recommended
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div id="testi-26">
                <div class="row">
                  <div class="col-xl-5 col-lg-5 col-sm-6">
                    <img
                      src="img/ANGGIE-ANG.jpg"
                      class="img-fluid"
                      alt="Testi"
                    />
                  </div>
                  <div class="col-xl-7 col-lg-7 col-sm-6">
                    <div class="box-testi">
                      <h4 class="sh-s mb20">Anggie Ang</h4>
                      <p class="s mw300">
                        Anggie Ang has tried our Hydraderm Facial with
                        Brightening serum to keep skin nourished & supple before
                        her routine as a TV Host which requires the daily usage
                        of makeup. And she said " I will definitely come back to
                        Surface Skin Habit because I really love it!"
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div id="testi-27">
                <div class="row">
                  <div class="col-xl-5 col-lg-5 col-sm-6">
                    <img
                      src="img/ANDREA-GUNAWAN.jpg"
                      class="img-fluid"
                      alt="Testi"
                    />
                  </div>

                  <div class="col-xl-7 col-lg-7 col-sm-6">
                    <div class="box-testi">
                      <h4 class="sh-s mb20">Andrea Gunawan</h4>
                      <p class="s mw300">
                        Finally i tried THE BEST facial treatment ever! It’s
                        called H20 Glow Facial + PDT. Sebelum treatment dikasih
                        hirup aromatherapy dulu yang bikin rileks, kayak lagi
                        gak ada beban hidup! Di Surface Skin Habit emang agak
                        ekstra jadi beauticiannya pakai APD lengkap, jadi gausah
                        parno kalau mau treatment. So happy! Apalagi setiap
                        treatmentnya ada massage sampai paling terakhir ada
                        pijat punggungnya. Definitely bakal balik lagi!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </slick>
          </div>
        </div>
      </div>

      <div class="pad-testi">
        <slick
          ref="sliderNav"
          :options="slickPatientList"
          class="slider slider-nav"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div id="nav-1">
            <div class="testi-nav">
              <img src="/img/YUNITA-IRAWAN.jpg" class="img-fluid" alt="Testi" />
              <h5 class="s">Yunita Irawan</h5>
            </div>
          </div>
          <div id="nav-2">
            <div class="testi-nav">
              <img src="/img/sarah-andreas.jpg" class="img-fluid" alt="Testi" />
              <h5 class="s">Andreas Lukita & Sarah Ayu</h5>
            </div>
          </div>
          <div id="nav-3">
            <div class="testi-nav">
              <img src="/img/SANDRA-LUBIS.jpg" class="img-fluid" alt="Testi" />
              <h5 class="s">Sandra Lubis</h5>
            </div>
          </div>
          <div id="nav-4">
            <div class="testi-nav">
              <img src="/img/RADHINI.jpg" class="img-fluid" alt="Testi" />
              <h5 class="s">Radhini</h5>
            </div>
          </div>
          <div id="nav-5">
            <div class="testi-nav">
              <img src="/img/PRINKA-CASSEY.jpg" class="img-fluid" alt="Testi" />
              <h5 class="s">Prinka Cassey</h5>
            </div>
          </div>
          <div id="nav-6">
            <div class="testi-nav">
              <img
                src="/img/PATRICIA-DEVINA.jpg"
                class="img-fluid"
                alt="Testi"
              />
              <h5 class="s">Patricia Devina</h5>
            </div>
          </div>
          <div id="nav-7">
            <div class="testi-nav">
              <img src="/img/NINA-PRATIWI.jpg" class="img-fluid" alt="Testi" />
              <h5 class="s">Nina Pratiwi</h5>
            </div>
          </div>
          <div id="nav-8">
            <div class="testi-nav">
              <img src="/img/NAMIRA-MONDA.jpg" class="img-fluid" alt="Testi" />
              <h5 class="s">Namira Monda</h5>
            </div>
          </div>
          <div id="nav-9">
            <div class="testi-nav">
              <img src="/img/NAMIRA-ADZANI.jpg" class="img-fluid" alt="Testi" />
              <h5 class="s">Namira Adzani</h5>
            </div>
          </div>
          <div id="nav-10">
            <div class="testi-nav">
              <img src="/img/NADIN-AMIZAH.jpg" class="img-fluid" alt="Testi" />
              <h5 class="s">Nadin Amizah</h5>
            </div>
          </div>
          <div id="nav-11">
            <div class="testi-nav">
              <img src="/img/MELODY-AMADEA.jpg" class="img-fluid" alt="Testi" />
              <h5 class="s">Melody Amadea</h5>
            </div>
          </div>
          <div id="nav-12">
            <div class="testi-nav">
              <img src="/img/MAIZURA.jpg" class="img-fluid" alt="Testi" />
              <h5 class="s">Maizura</h5>
            </div>
          </div>
          <div id="nav-13">
            <div class="testi-nav">
              <img src="/img/JIHAN-PUTRI.jpg" class="img-fluid" alt="Testi" />
              <h5 class="s">Jihan Putri</h5>
            </div>
          </div>
          <div id="nav-14">
            <div class="testi-nav">
              <img src="/img/HANI-KENISHA.jpg" class="img-fluid" alt="Testi" />
              <h5 class="s">Hani Kenisha</h5>
            </div>
          </div>
          <div id="nav-15">
            <div class="testi-nav">
              <img
                src="/img/GALIH-SOEDIRJO.jpg"
                class="img-fluid"
                alt="Testi"
              />
              <h5 class="s">Galih Soedirjo</h5>
            </div>
          </div>
          <div id="nav-16">
            <div class="testi-nav">
              <img src="/img/FADIL-JAIDI.jpg" class="img-fluid" alt="Testi" />
              <h5 class="s">Fadil Jaidi</h5>
            </div>
          </div>
          <div id="nav-17">
            <div class="testi-nav">
              <img src="/img/EVA-CELIA.jpg" class="img-fluid" alt="Testi" />
              <h5 class="s">Eva Celia</h5>
            </div>
          </div>
          <div id="nav-18">
            <div class="testi-nav">
              <img src="/img/DESSY-ADITYA.jpg" class="img-fluid" alt="Testi" />
              <h5 class="s">Dessy Aditya</h5>
            </div>
          </div>
          <div id="nav-19">
            <div class="testi-nav">
              <img
                src="/img/CLARISSA-PUTRI.jpg"
                class="img-fluid"
                alt="Testi"
              />
              <h5 class="s">Clarissa Putri</h5>
            </div>
          </div>
          <div id="nav-20">
            <div class="testi-nav">
              <img
                src="/img/CINDY-PRICILLA.jpg"
                class="img-fluid"
                alt="Testi"
              />
              <h5 class="s">Cindy Pricilla</h5>
            </div>
          </div>
          <div id="nav-21">
            <div class="testi-nav">
              <img src="/img/CINDERCELLA.jpg" class="img-fluid" alt="Testi" />
              <h5 class="s">Cindercella</h5>
            </div>
          </div>
          <div id="nav-22">
            <div class="testi-nav">
              <img src="/img/BAILA-FAURI.jpg" class="img-fluid" alt="Testi" />
              <h5 class="s">Baila Fauri</h5>
            </div>
          </div>
          <div id="nav-23">
            <div class="testi-nav">
              <img src="/img/ARDHINA-PUTRI.jpg" class="img-fluid" alt="Testi" />
              <h5 class="s">Ardhina Putri</h5>
            </div>
          </div>
          <div id="nav-24">
            <div class="testi-nav">
              <img src="/img/ANGGIS-DINDA.jpg" class="img-fluid" alt="Testi" />
              <h5 class="s">Anggis Dinda</h5>
            </div>
          </div>
          <div id="nav-25">
            <div class="testi-nav">
              <img src="/img/ANGGIE-ANG.jpg" class="img-fluid" alt="Testi" />
              <h5 class="s">Anggie Angy</h5>
            </div>
          </div>
          <div id="nav-26">
            <div class="testi-nav">
              <img
                src="/img/ANDREA-GUNAWAN.jpg"
                class="img-fluid"
                alt="Testi"
              />
              <h5 class="s">Andrea Gunawan</h5>
            </div>
          </div>
        </slick>
      </div>
    </div>

    <FAQ />
  </div>
</template>

<script>
import FAQ from "@/components/FAQ.vue";
import { directive } from "vue-awesome-swiper";
import Slick from "vue-slick";
import "slick-carousel/slick/slick.css";
import $ from "jquery";
import moment from "moment";

export default {
  name: "Home",
  metaInfo: {
    title: "Home"
  },
  components: {
    Slick,
    FAQ
  },
  directives: {
    swiper: directive
  },
  data() {
    return {
      experienceSwiperOptions: {
        slidesPerView: "auto",
        freeMode: false,
        centeredSlides: false,
        mousewheel: {
          sensitivity: 5
        },
        navigation: {
          nextEl: ".h-arrow.swiper-button-next",
          prevEl: ".h-arrow.swiper-button-prev"
        },
        breakpoint: {
          576: {
            slidesPerView: 1
          },
          768: {
            slidesPerView: 2,
            freeMode: false
          },
          1024: {
            slidesPerView: 2
          },
          1200: {
            slidesPerView: 3,
            freeMode: true
          }
        }
      },
      atfySwiperOptions: {
        slidesPerView: "auto",
        spaceBetween: 24,
        freeMode: false,
        centeredSlides: false,
        mousewheel: {
          sensitivity: 1
        },
        navigation: {
          nextEl: "#atfy-arrow.swiper-button-next",
          prevEl: "#atfy-arrow.swiper-button-prev"
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
            slidesPerView: 2
          },
          1200: {
            slidesPerView: 3,
            freeMode: true
          }
        }
      },
      slickPatientDetail: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        autoplay: true,
        autoplaySpeed: 2000,
        asNavFor: ".slider-nav"
      },
      slickPatientList: {
        slidesToShow: 7,
        slidesToScroll: 1,
        arrows: false,
        asNavFor: ".slider-for",
        dots: false,
        centerMode: true,
        focusOnSelect: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 5,
              slidesToScroll: 3
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 5,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      }
    };
  },
  mounted() {
    const slider = $(".slider-nav");

    slider.on("wheel", function(e) {
      e.preventDefault();
      if (e.originalEvent.deltaY < 0) {
        $(this).slick("slickNext");
      } else {
        $(this).slick("slickPrev");
      }
    });

    // mixpanel tracking
    this.trackMixPanelEvent("View Surface Home", {
      source: "web",
      timestamp: moment()
        .format("DD MMMM YYYY H:mm:ss")
        .toString(),
      user_id: this.$store.state.userData
        ? this.$store.state.userData.userId
        : null,
      login_status: this.$store.state.userData ? true : false
    });
  }
};
</script>

<style scoped>
.swiper-button-prev,
.swiper-button-next {
  background-image: none;
}
</style>
