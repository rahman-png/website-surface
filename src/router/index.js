import Vue from "vue";
import VueRouter from "vue-router";
import store from "@/store/index";
import VueBodyClass from "vue-body-class";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "root",
    redirect: "/home"
  },
  {
    path: "/home",
    name: "Home",
    component: () => import("../views/Home.vue")
  },
  {
    path: "/auth",
    name: "Auth",
    component: () => import("../views/Auth.vue"),
    meta: {
      guest: true
    }
  },
  {
    path: "/promotion",
    name: "Promotion",
    component: () => import("../views/Promotion.vue")
  },
  {
    path: "/comming-soon",
    name: "CommingSoon",
    component: () => import("../views/CommingSoon.vue")
  },
  {
    path: "/skin-habit",
    name: "SkinHabit",
    component: () => import("../views/SkinHabit.vue")
  },
  {
    path: "/surfaceplus",
    name: "SurfacePlus",
    component: () => import("../views/SurfacePlus.vue"),
    meta: {
      bodyClass: "hide-xo"
    }
  },
  {
    path: "/surfaceplus/ingredients",
    name: "Ingredient",
    component: () => import("../views/Ingredient.vue")
  },
  {
    path: "/product",
    name: "Product",
    component: () => import("../views/product/Product.vue")
  },
  {
    path: "/product/:id",
    name: "ProductDetail",
    component: () => import("../views/product/ProductDetail.vue")
  },
  {
    path: "/blog",
    name: "Blog",
    component: () => import("../views/blog/Blog.vue")
  },
  {
    path: "/blog/:id",
    name: "BlogDetail",
    component: () => import("../views/blog/BlogDetail.vue")
  },
  {
    path: "/blog-search",
    name: "BlogSearch",
    component: () => import("../views/blog/BlogSearch.vue")
  },
  {
    path: "/sign-up",
    name: "SignUp",
    component: () => import("../views/SignUp.vue")
  },
  {
    path: "/sign-in",
    name: "SignIn",
    component: () => import("../views/SignIn.vue")
  },
  {
    path: "/forgot-password",
    name: "ForgotPassword",
    component: () => import("../views/ForgotPassword.vue")
  },
  {
    path: "/reset-password/:token",
    name: "ResetPassword",
    component: () => import("../views/ResetPassword.vue")
  },
  {
    path: "/account-verify/:id",
    name: "Verified",
    component: () => import("../views/Verified.vue")
  },
  {
    path: "/term-of-service",
    name: "TermOfService",
    component: () => import("../views/TermOfService.vue")
  },
  {
    path: "/privacy-policy",
    name: "PrivacyPolicy",
    component: () => import("../views/PrivacyPolicy.vue")
  },
  {
    path: "/account",
    name: "Account",
    component: () => import("../views/account/Information.vue"),
    meta: {
      authRequired: true
    }
  },
  {
    path: "/account/profile",
    name: "Profile",
    component: () => import("../views/account/profile/Data.vue"),
    meta: {
      authRequired: true
    }
  },
  {
    path: "/account/profile/change-basic-info",
    name: "ProfileInfo",
    component: () => import("../views/account/profile/EditBasicInfo.vue"),
    meta: {
      authRequired: true
    }
  },
  {
    path: "/account/profile/change-contact",
    name: "ProfileContact",
    component: () => import("../views/account/profile/EditContact.vue"),
    meta: {
      authRequired: true
    }
  },
  {
    path: "/account/profile/change-password",
    name: "ProfilePassword",
    component: () => import("../views/account/profile/EditPassword.vue"),
    meta: {
      authRequired: true
    }
  },
  {
    path: "/account/profile/change-password-success",
    name: "ProfilePasswordSuccess",
    component: () => import("../views/account/profile/EditPasswordSuccess.vue")
  },
  {
    path: "/account/address",
    name: "Saved",
    component: () => import("../views/account/address/Saved.vue"),
    meta: {
      authRequired: true
    }
  },
  {
    path: "/account/address/:id/edit",
    name: "EditAddress",
    component: () => import("../views/account/address/Form.vue"),
    meta: {
      authRequired: true
    }
  },
  {
    path: "/account/order",
    name: "Order",
    component: () => import("../views/account/order/List.vue"),
    meta: {
      authRequired: true
    }
  },
  {
    path: "/account/order/:id",
    name: "OrderDetail",
    component: () => import("../views/account/order/Detail.vue"),
    meta: {
      authRequired: true
    }
  },
  {
    path: "/account/prescriptions",
    name: "Prescription",
    component: () => import("../views/account/prescription/List.vue"),
    meta: {
      authRequired: true
    }
  },
  {
    path: "/cart",
    name: "Cart",
    component: () => import("../views/checkout/Cart.vue"),
    meta: {
      authRequired: true
    }
  },
  {
    path: "/checkout",
    name: "Checkout",
    component: () => import("../views/checkout/Checkout.vue"),
    meta: {
      authRequired: true
    }
  },
  {
    path: "/survey/:surveyId/:productId",
    name: "Survey",
    component: () => import("../views/survey/Survey.vue"),
    meta: {
      authRequired: true
    }
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  linkActiveClass: "active",
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 };
  }
});

const vueBodyClass = new VueBodyClass(routes);

router.beforeEach((to, from, next) => {
  vueBodyClass.guard(to, next);
  if (to.matched.some(record => record.meta.authRequired)) {
    if (store.state.userData == null) {
      next("/sign-in");
    }
  }
  if (to.matched.some(record => record.meta.guest)) {
    if (store.state.userData !== null) {
      next("/account");
    }
  }
  next();
});

export default router;
