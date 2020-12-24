<template>
  <div>
    <PxAssetsTable :assets="assets"></PxAssetsTable>
  </div>
</template>

<script>
import PxAssetsTable from "@/components/PxAssetsTable";
import api from "@/api";

export default {
  name: "Home",
  components: {
    PxAssetsTable
  },

  created() {
    this.isLoading = true;
    api
      .getAssets()
      .then(assets => (this.assets = assets))
      .finally(() => (this.isLoading = false));
  },

  data() {
    return {
      assets: [],
      isLoading: false
    };
  }
};
</script>

<style lang="scss" scoped></style>
