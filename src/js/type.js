
class Question {
  constructor(a, b, opt) {
    this.a = a
    this.b = b
    this.opt = opt

    this.c = eval([a, opt, b].join(''))
  }

  solve(value) {
    this.answer = value
  }

  get result() {
    return this.answer == this.answer
  }
}


export default {
  Question
}