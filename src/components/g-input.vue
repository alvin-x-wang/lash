<template>
  <div class="g-input">
    <div class="g-input__wrap">
      <p class="g-input__label">{{label}}</p>
      <input class="g-input__input" ref="input" >
    </div>
    <p class="g-input__warning">ERROR MESSAGE</p>
  </div>
</template>

<script>
export default {
  name: 'g-input',

  props: {
    label: String,
    max: [String, Number],
    value: [String, Number]
  },

  model: {
    prop: 'value',
    event: 'change'
  },

  data() {
    return {
      _max: null,
      counter: 0
    }
  },

  mounted() {
    this.counter = this.value
    this._max = this.max || -1
  }
}
</script>

<style lang="scss" scoped>
.g-input {
  display: inline-block;
  vertical-align: top;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;

  .g-input__warning {
    color: red;
    font-size: 12px;
    line-height: 18px;
    padding: 0px 8px;
    width: 100%;
  }

  .g-input__wrap {
    border: 1px solid #EDEDED;
    padding: 4px 8px;
    display: inline-block;
    width: 100%;

    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;

    &.g-input__label {
      font-size: 12px;
      line-height: 12px;
    }

    input {
      border: none;

      font-size: 14px;
      color: #333;

      padding: 0px;
      line-height: 18px;
      border: none;
      width: 100%;
    }

    &.g-input__input {
      border: none;
      outline: none;

      font-size: 14px;
      padding: 0px;
    }
  }

}
</style>
