<template>
  <button
    v-on:click="buttonClick"
    class="bg-transparent border-2 rounded-lg p-1 border-green-700 hover:bg-green-500 text-green-700 font-semibold"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "PxButton",
  methods: {
    buttonClick() {
      this.$emit("click");
    }
  }
};
</script>
