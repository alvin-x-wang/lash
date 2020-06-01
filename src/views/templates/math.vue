<template>
  <div class="math-page">

    <div class="row head">
      <div class="col" style="text-align: left">
        &nbsp;
      </div>
      <div class="col timer">
        <p style="display: inline-block">TIMER {{seconds}} s</p>
        <div class="timer-action" >PAUSE</div>
      </div>
      <div class="col" style="text-align: right">
        <div class="questions">

          <a class="summary" :href="`/print?limit=${limit}`" target="_blank" >PRINT PAPER</a>

          <div class="dividor-v"></div>

          <a class="summary" @click="showSettings = !showSettings">SETTINGS</a>
          
          <div class="dividor-v"></div>

          <a class="summary" @click="showQuestions = !showQuestions">
            QUESTION {{questions.length}}
          </a>

          <div class="popover" v-show="showQuestions">
            <ul class="items">
              <li class="item" v-for="(q, i) of questions" :key="`q_${i}`">
                <div class="row">
                  <div class="col">
                    {{q.desc}} {{q.answer}}
                  </div>
                  <div class="col" style="text-align: right; ">
                    <span v-if="q.isScored"><i class="iconfont iconcheck" /></span>
                    <span v-else><i class="iconfont iconclose" /></span>
                  </div>
                  <div class="col" style="text-align: right">对/错</div>
                </div>
              </li>
            </ul>

            <button class="btn-primary" @click="onClear">CLEAR</button>
          </div>

          <div class="popover" v-show="showSettings">
            <div class="input" style="position: relative; border: 1px solid #EDEDED; padding: 8px 12px; text-align: left">
              <p class="label" style="font-size: 12px; ">TIME LIMIT / minutes</p>
              <input style="border: none; font-size: 14px;">
            </div>
            <div class="input" style="position: relative; border: 1px solid #EDEDED; padding: 8px 12px; text-align: left">
              <p class="label" style="font-size: 12px; ">MAX. NUMBER</p>
              <input style="border: none; font-size: 14px;" v-model="limit">
            </div>

            <button class="btn-primary" @click="onClear">CONFIRM</button> 
          </div>
        </div>
      </div>
    </div>


    <div class="question" v-if="question">
      {{question.desc}} <input v-model="question.answer" ref="answer" @keydown.enter="getNextQuestion">
    </div>

    <div class="keyboard">
      <div class="key" @click="onKey(0)">0</div>
      <div class="key" @click="onKey(1)">1</div>
      <div class="key" @click="onKey(2)">2</div>
      <div class="key" @click="onKey(3)">3</div>
      <div class="key" @click="onKey(4)">4</div>
      <div class="key" @click="onKey(5)">5</div>
      <div class="key" @click="onKey(6)">6</div>
      <div class="key" @click="onKey(7)">7</div>
      <div class="key" @click="onKey(8)">8</div>
      <div class="key" @click="onKey(9)">9</div>
      <div class="key-del" @click="onDelete">DEL</div>
    </div>
  </div>
</template>

<script>
import {Question} from '@/js/type'
import {Generator} from '@/js/gs-math'

const generator = new Generator()

export default {
  name: 'math',

  data() {
    return {
      timer: null,
      seconds: 0,

      question: null,
      questions: [],

      showQuestions: false,
      showSettings: false,

      limit: 20
    }
  },

  mounted() {
    this.$store.commit('setActiveMenu', 'math')
  
    this.timer = setInterval(() => {
      this.seconds++
    }, 1000)

    this.question = generator.generateTwoFactor(this.limit)

    this.$nextTick(() => {
      this.$refs.answer.focus()
    })
  },

  methods: {
    getNextQuestion() {
      if (this.question) {
        this.questions.push(this.question)
      }

      this.question = generator.generateTwoFactor(this.limit)
    },

    onKey(value) {
      console.log('debug: value: ', value, ', ', this.question.answer)
      this.question.answer = parseInt(`${this.question.answer || ''}${value}`)

      this.$refs.answer.focus()
    },

    onDelete() {
      if (this.question.answer) {
        let _answer = this.question.answer + ''
        _answer = _answer.substring(0, _answer.length - 1)

        if (_answer != '') {
          this.question.answer = parseInt(_answer)
        } else {
          this.question.answer = undefined
        }
      }

      this.$refs.answer.focus()
    },

      onClear() {
        this.questions = []
          this.showQuestions = false
      }
  }
}
</script>

<style lang="scss" scoped>
  .math-page {
    text-align: center;
  }

  .timer {
    .timer-action {
      display: none;
      cursor: pointer;
      opacity: 0;
    }

    &:hover {
      .timer-action {
        display: inline-block;
        opacity: 100;
      }
    }
  }

  .question {
    font-size: 72px;
    // background-color: #EDEDED;
    display: inline-block;
    margin: 100px auto;
    padding: 24px 48px;
    // border-radius: 8px;

    input {
      font-size: inherit;
      width: 140px;
      border: none;
      border-bottom: 3px solid #EDEDED;
      padding: 12px;
    }
  }

  .keyboard {
    .key, .key-del {
      font-size: 24px;
      line-height: 2em;
      text-align: center;
      width: 48px;
      display: inline-block;

      border-radius: 4px;

      cursor: pointer;

      &:hover {
        background-color: #EDEDED;
      }

      &:active {
        background-color: #CCCCCC;
      }
    }

    .key-del {
      padding: 0px 12px;
    }
  }

  .questions {
    position: relative;

    .summary {
      font-size: 14px;
      // line-height: 2em;
    }

    .popover {
      position: absolute;
      top: 20px;
      right: -20px;
      padding: 0px 20px;

      background-color: #fff;
      height: 200px;

      width: 320px;

      .items {
        max-height: 200px;
        overflow-y: auto;
        text-align: left;
        margin: 12px 0px;

        .item {
          font-size: 14px;
          padding: 4px;
        }
      }

      .btn-primary {
        background-color: #DDD;
        border: none;
        color: #FFF;
        width: 100%;
        font-size: 16px;
        padding: 8px 12px;

        cursor: pointer;

        &:active {
          background-color: #CCC;
        }
      }
    }
  }

  .link {
    &:hover {
      font-weight: 700;
    }
  }

  .dividor-v {
    margin: 0px 10px;
    width: 1px;
    background-color: #EDEDED;
    display: inline-block;
    height: 12px;
  }
</style>
