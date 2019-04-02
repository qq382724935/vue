<template>
  <a-menu class="menu-bg-color" :defaultSelectedKeys="['1']" :mode="mode" :theme="theme">
    <template v-for="menu in menuList">
      <a-menu-item v-if="menu.SubMenu.length===0" :key="menu.key">
        <router-link :to="menu.url">
          <a-icon :type="menu.iconType"/>
          <span>{{menu.name}}</span>
        </router-link>
      </a-menu-item>
      <a-sub-menu v-if="menu.SubMenu.length>0" :key="menu.key">
        <span slot="title">
          <a-icon :type="menu.iconType"/>
          <span>{{menu.name}}</span>
        </span>
        <template v-for="subMenu in menu.SubMenu">
          <a-menu-item v-if="subMenu.SubMenu.length===0" :key="subMenu.key">
            <router-link :to="subMenu.url">{{subMenu.name}}</router-link>
          </a-menu-item>
          <a-sub-menu v-if="subMenu.SubMenu.length>0" :key="subMenu.key" :title="subMenu.name">
            <template v-for="subMenu2 in subMenu.SubMenu">
              <a-menu-item :key="subMenu2.key">
                <router-link :to="subMenu2.url">{{subMenu2.name}}</router-link>
              </a-menu-item>
            </template>
          </a-sub-menu>
        </template>
      </a-sub-menu>
    </template>
  </a-menu>
</template>
<script>
export default {
  data() {
    return {
      mode: "vertical",
      theme: "dark",
      menuList: [
        { name: "主页", key: "1", iconType: "home", SubMenu: [], url: "/home" },
        {
          name: "景点分类",
          key: "9",
          iconType: "fullscreen-exit",
          SubMenu: [
            { name: "天空", key: "10", SubMenu: [], url: "/home/sky" },
            {
              name: "海景",
              key: "12",
              SubMenu: [
                {
                  name: "欧美海",
                  key: "13",
                  SubMenu: [],
                  url: "/home/ocsea"
                },
                {
                  name: "北美海",
                  key: "14",
                  SubMenu: [],
                  url: "/home/nasea"
                }
              ]
            },
            { name: "山水", key: "11", SubMenu: [], url: "/home/landscape" }
          ]
        },
        {
          name: "电影分类",
          key: "2",
          iconType: "appstore",
          SubMenu: [
            {
              name: "韩国电影",
              key: "3",
              SubMenu: [],
              url: "/home/koreanfilm"
            },
            {
              name: "美国电影",
              key: "4",
              SubMenu: [],
              url: "/home/usafilm"
            },
            {
              name: "英国电影",
              key: "5",
              SubMenu: [],
              url: "/home/britainfilm"
            },
            {
              name: "中国电影",
              key: "6",
              SubMenu: [
                {
                  name: "古代片",
                  key: "7",
                  SubMenu: [],
                  url: "/home/ancientfilm"
                },
                {
                  name: "现代片",
                  key: "8",
                  url: "/home/modernfilm",
                  SubMenu: []
                }
              ]
            }
          ]
        }
      ]
    };
  }
};
</script>

<style lang="scss">
.menu-bg-color {
  background-color: black;
}

body .ant-menu-dark,
body .ant-menu-dark .ant-menu-sub {
  background: black;
}
</style>
