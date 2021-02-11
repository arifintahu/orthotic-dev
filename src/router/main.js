const route = [

  {
    path: "/",
    name: "Home",
    component: require("@/views/Home.vue").default
  },
  {
    path: "/assesment",
    name: "Assesment",
    component: require("@/views/Assesment.vue").default
  },
  {
    path: "/design",
    name: "Design",
    component: require("@/views/Design.vue").default
  },

]

export default route;