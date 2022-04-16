<template>
  <div id="app">
    <Nav />
    <div id="body" class="bg-secondary p-2">
      <keepAlive>
        <Transition name="fade">
          <router-view />
        </Transition>
      </keepAlive>
    </div>
  </div>
</template>

<script>
import Nav from "./components/navbar.vue";

export default {
  name: "App",
  components: {
    Nav,
  },
};
</script>

<style>
#body {
  height: calc(100vh - 80px);
}

.fade-enter-active,
.fade-leave-active {
  transition: transform 0.3s ease;
}

.fade-enter,
.fade-leave-to {
  transform: scale(0);
}
.fade-leave,
.fade-enter-to {
  transform: scale(0);
}
</style>
