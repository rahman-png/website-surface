<template>
  <div id="menu-home" class="container">
    <div class="navigation">
      <router-link class="logo" to="/">
        <img src="/img/logo-text.svg" alt="Logo" />
      </router-link>
      <ul class="menubar">
        <li class="nav-item">
          <router-link class="nav-link" to="/home">
            Home
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/skin-habit">
            Skin Habit
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/surfaceplus">
            Surface+
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/blog">
            Blog
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/auth">
            Account
          </router-link>
        </li>
        <li class="nav-item">
          <button
            class="nav-link button"
            @click="$store.commit('SHOW_MODAL_DOWNLOAD', true)"
          >
            Download our app
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Menu"
};
</script>
