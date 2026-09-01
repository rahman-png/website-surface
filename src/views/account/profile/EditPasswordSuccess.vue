<template>
  <div class="content-box cm">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 offset-lg-3">
          <div class="d-flex align-items-center justify-content-center">
            <div class="text-center">
              <img src="/img/woman-icon.svg" class="img-fluid mb30" />
              <div class="sh-xs mb30">
                Your password has been changed successfully.
              </div>
              <router-link to="/sign-in" class="btn btn-solid">
                Login to Surface
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "EditPasswordSuccess",
  metaInfo: {
    title: "Edit Password Success"
  }
};
</script>
