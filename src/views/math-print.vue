<template>
  <div class="math-page">
    <div class="row header">
      <div class="col title">
        口算训练
      </div>
      <div class="col score-table fit-content" style="text-align: right;">
        <div class="score">
          成绩：
        </div>
        <div class="time">
          用时：
        </div>
      </div>
    </div>

    <div class="row questions" v-for="(row, i) of questionGroups" :key="`row_${i}`">
      <div class="col question" v-if="row && row.length >= 1">{{row[0].desc}}</div>
      <div class="col question" v-if="row && row.length >= 2">{{row[1].desc}}</div>
      <div class="col question" v-if="row && row.length >= 3">{{row[2].desc}}</div>
      <div class="col question" v-if="row && row.length >= 4">{{row[3].desc}}</div>
      <div class="col question" v-if="row && row.length == 5">{{row[4].desc}}</div>
    </div>
  </div>
</template>

<script>
  import {Question} from '@/js/type'
  import {Generator} from '@/js/gs-math'

  const generator = new Generator()

  export default {
    name: "math-print",

    data() {
      return {
        questions: []
      }
    },

    mounted() {
      const limit = this.$route.query['limit'] || 20
      for (let i = 0; i < 100; i++) {
        this.questions.push(generator.generateTwoFactor(limit))
      }
    },
      computed: {
        questionGroups() {
            if (this.questions && this.questions.length) {
                let questionGroup = []
                for (let i = 0; i < this.questions.length; i += 5) {

                    const endPos = this.questions.length > (i + 5) ? (i + 5) : this.questions.length
                    let _questions = this.questions.slice(i, endPos)

                    questionGroup.push(_questions)
                }

                return questionGroup
            }
            return []
        }
      }
  }
</script>

<style lang="scss" scoped>
.math-page {
  padding: 12px;

  width: 1024px;

  .header {
    margin-bottom: 24px;

    .title {
      font-size: 24px;
    }

    .score-table {
      border: 1px solid #999;

      .score {
        border-bottom: 1px solid #999;
        width: 120px;
        text-align: left;
        padding: 0px 12px;
      }

      .time {
        width: 120px;
        text-align: left;
        padding: 0px 12px;
      }
    }
  }

  .question {
    font-size: 18px;
    padding: 12px 0px;
  }
}
</style>
