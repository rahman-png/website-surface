<template>
  <div id="account-page">
    <div id="m-mobile" class="container m-su">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb mb40">
          <li class="breadcrumb-item">
            <router-link to="/account" class="link-blue s">Account</router-link>
          </li>
          <li class="breadcrumb-item active s" aria-current="page">
            Login and Security
          </li>
        </ol>
      </nav>

      <div class="mw500 f100">
        <div class="headingm mb60">Login and Security</div>
      </div>

      <div class="row">
        <div class="col-lg-7">
          <div class="box-account mb40">
            <div class="d-flex align-items-center justify-content-between mb25">
              <p class="sh-xs">Basic Information</p>
              <router-link
                to="/account/profile/change-basic-info"
                class="wc-link"
              >
                <img src="/img/pencil-icon.svg" class="pencil-icon" />
                Edit details
              </router-link>
            </div>

            <div class="row">
              <div class="col-md-6">
                <div class="row btn-mm">
                  <div class="col-7">
                    <p class="m font-medium">Name</p>
                    <p class="m grey">
                      {{
                        $store.state.userData.firstname +
                          " " +
                          $store.state.userData.lastname
                      }}
                    </p>
                  </div>

                  <div class="col-5">
                    <p class="m font-medium">Gender</p>
                    <p class="m grey">
                      {{ $store.state.userData.gender | capitalize }}
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <p class="m font-medium">Date of birth</p>
                <p class="m grey">
                  {{ $store.state.userData.birthDate | date_only }}
                </p>
              </div>
            </div>
          </div>

          <div class="box-account mb40">
            <div
              class="d-flex align-items-center  justify-content-between mb25"
            >
              <p class="sh-xs">Contact Information</p>
              <router-link to="/account/profile/change-contact" class="wc-link">
                <img src="/img/pencil-icon.svg" class="pencil-icon" />
                Edit details
              </router-link>
            </div>

            <div class="row">
              <div class="col-md-12">
                <div class="row">
                  <div class="col-sm-5  btn-mm">
                    <p class="m font-medium">Email</p>
                    <p class="m grey">{{ $store.state.userData.email }}</p>
                  </div>

                  <div class="col-sm-7">
                    <p class="m font-medium">Phone</p>
                    <p class="m grey d-flex align-items-center">
                      <img src="/img/flag.png" class="" />
                      {{ $store.state.userData.phone }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="box-account bottom100px">
            <div
              class="d-flex align-items-center  justify-content-between mb25"
            >
              <p class="sh-xs">Security</p>
              <router-link
                to="/account/profile/change-password"
                class="wc-link"
              >
                <img src="/img/pencil-icon.svg" class="pencil-icon" />
                Change Password
              </router-link>
            </div>

            <div class="row">
              <div class="col-md-12">
                <p class="m font-medium">Password</p>
                <p class="m grey">***************</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Profile",
  metaInfo: {
    title: "Account"
  }
};
</script>
