<template>
  <main>
    <PxHeader :links="links"></PxHeader>
    <router-view
      class="container px-5 sm:px-20 py-20 flex justify-center"
    ></router-view>
  </main>
</template>

<script>
import PxHeader from "@/components/PxHeader.vue";

export default {
  components: {
    PxHeader
  },

  data() {
    return {
      links: [
        {
          title: "BTC",
          to: { name: "coid-detail", params: { id: "bitcoin" } }
        },
        {
          title: "ETH",
          to: { name: "coid-detail", params: { id: "ethereum" } }
        },
        {
          title: "XRP",
          to: { name: "coid-detail", params: { id: "ripple" } }
        }
      ]
    };
  }
};
</script>

<style></style>
