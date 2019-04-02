<template>
  <div class="home">
    <a-layout id="components-layout-demo-custom-trigger" style="min-height: 100vh">
      <a-layout-sider
        :trigger="null"
        collapsible
        v-model="collapsed"
        :style="{ backgroundColor: 'black' }"
      >
        <div class="logo"/>
        <app-page-menu></app-page-menu>
      </a-layout-sider>
      <a-layout>
        <app-page-header @collapseddata="setCollpased"></app-page-header>
        <a-layout-content>
          <a-breadcrumb :style="{ margin: '16px' }">
            <a-breadcrumb-item>Home</a-breadcrumb-item>
            <a-breadcrumb-item>List</a-breadcrumb-item>
            <a-breadcrumb-item>App</a-breadcrumb-item>
          </a-breadcrumb>
          <hr>
          <div :style="{ background: '#fff',margin: '16px', minHeight: '280px'}">
            <router-view></router-view>
          </div>
        </a-layout-content>
      </a-layout>
    </a-layout>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import PageMenu from "../../src/components/menu/PageMenu.vue";
import PageHeader from "../../src/components/header/PageHeader.vue";
@Component({
  components: {
    appPageMenu: PageMenu,
    appPageHeader: PageHeader
  }
})
export default class Home extends Vue {
  collapsed = false;
  setCollpased(data) {
    this.collapsed = data;
  }
}
</script>

<style>
#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}

#components-layout-demo-custom-trigger .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}
</style>



