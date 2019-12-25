<template>
  <div class="setColor">
    <span
      v-for="color of colors"
      @click="handleClick(color)"
      :key="color"
      :style="{ backgroundColor: color }"
    />
  </div>
</template>

<script>
import { ipcRenderer } from "electron";
export default {
  name: "SetColor",
  data() {
    return {
      colors: ["red", "orange", "white", "green", "blue"]
    };
  },
  methods: {
    handleClick(color) {
      // eslint-disable-next-line no-console
      console.log(color)
      ipcRenderer.send("megColor", color);
    }
  }
};
</script>

<style scoped>
.setColor {
  display: flex;
  height: 100%;
  justify-content: space-around;
  align-items: center;
}
.setColor > span {
  border: 1px solid #555;
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
</style>
