<template>
  <div class="home">
    <div class="home-navigators">
      <div class="breadcumb-wrap">
        LASH.
      </div>

      <div class="navigators-wrap">
        <ul>
          <li :class="getMenuClass('math')">
            <a href="/math">MATH</a>
          </li>
          <li :class="getMenuClass('writes')">
            <a href="/writes">WRITES</a>
          </li>
        </ul>
      </div>
    </div>

    <div class='home-container'>
      <transition>
        <router-view></router-view>
      </transition>
    </div>

  </div>
</template>

<script>

export default {
  name: 'home',

  methods: {
    getMenuClass(menu) {
      return ['navigator-item', {'active': this.activeMenu == menu}]
    }
  },

  computed: {
    activeMenu() {
      return this.$store.state.activeMenu
    }
  }
}
</script>

<style lang="scss" scoped>

  .home {
    color: #666;
  }

  .home-navigators {
    box-sizing: border-box;

    position: fixed;
    top: 0px;
    bottom: 0px;
    left: 0px;
    width: 140px;

    z-index: 100;

    .breadcumb-wrap {
      position: absolute;
      top: 0px;
      left: 0px;
      right: 0px;
      padding: 18px;

      font-weight: 700;
    }

    .navigators-wrap {
      position: absolute;
      bottom: 0px;
      left: 0px;
      right: 0px;
      padding: 18px;

      .navigator-item {
        padding: 8px 0px;

        &.active {
          font-weight: 700;
        }
      }
    }
  }

  .home-container {
    position: absolute;
    left: 120px;
    top: 0px;
    right: 0px;
    bottom: 0px;
    padding: 18px;


    .global-actions {
      position: absolute;
      top: 18px;
      right: 18px;
    }
  }
</style>
