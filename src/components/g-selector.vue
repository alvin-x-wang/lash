<template>
  <div class="g-input">
    <div class="g-input__wrap">
      <p class="g-input__label">{{label}}</p>

      <div class="g-input__value">
        <span v-if="v">{{v}}</span>
        <span v-else style="color: #CCC">{{placeholder}}</span>
        <a class="g-input__action iconfont iconarrow-down" @click="showOption = !showOption"></a>
      </div>
    </div>

    <div :class="['g-input__options', {'g-input__options_enable': showOption}]">
      <ul class="options">
        <li class="option" @click="onSelect('hjmd')">
          asdfasdf
        </li>
        <li class="option" @click="onSelect('ashetydf')">
          asdfasdf
        </li>
        <li class="option" @click="onSelect('afvadfv')">
          asdfasdf
        </li>
        <li class="option" @click="onSelect('cvxqewr')">
          asdfasdf
        </li>
        <li class="option" @click="onSelect('vadf')">
          asdfasdf
        </li>
        <li class="option" @click="onSelect('asdf we')">
          asdfasdf
        </li>
      </ul>
    </div>

    <!-- <p class="g-input__warning">ERROR MESSAGE</p> -->
  </div>
</template>

<script>
export default {
  name: 'g-selector',

  props: {
    label: String,
    options: Array,

    value: String,
    placeholder: {
      type: String,
      default: 'PLEASE SELECT'
    }
  },

  model: {
    prop: 'value',
    event: 'change'
  },

  data() {
    return {
      v: null,
      showOption: false
    }
  },

  methods: {
    onSelect(v) {
      this.v = v
      this.showOption = false
      this.$emit('change', v)

      this.$emit('onChange', v)
    }
  }
}
</script>

<style lang="scss" scoped>
.g-input {
  position: relative;
  display: inline-block;

  vertical-align: top;

  .g-input__warning {
    color: red;
    font-size: 12px;
    line-height: 18px;
    padding: 0px 8px;
  }

  .g-input__wrap {
    border: 1px solid #EDEDED;
    padding: 4px 8px;
    display: inline-block;
    position: relative;

    &.g-input__label {
      font-size: 12px;
      line-height: 12px;
    }

    input {
      border: none;

      font-size: 14px;
      color: #333;
    }

    &.g-input__input {
      border: none;
      outline: none;

      font-size: 14px;
      padding: 0px;
    }

    .g-input__value {
      position: relative;

      .g-input__action {
        position: absolute;
        right: 0px;

      }
    }
  }

  .g-input__options {
    position: absolute;
    left: 0px;
    top: 46px;
    right: 0px;

    height: 0px;
    overflow: hidden;
    background-color: #FFF;

    transition: height 1s;

    &.g-input__options_enable {
      height: auto;
    }

    .options {
      border: 1px solid #EDEDED;

      .option {
        padding: 4px 8px;
        cursor: pointer;

        &:hover {
          background-color: #EDEDED;
        }
      }
    }
  }
}
</style>
