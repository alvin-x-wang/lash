
export class TwoFactorQuestion {
  constructor(a, op, b) {
    this.a = a
    this.op = op
    this.b = b

    this.equals = eval(`${a} ${op} ${b}`)
    this.answer = undefined
  }

  get desc() {
    return `${this.a} ${this.op} ${this.b} = `
  }

  get isScored() {
    return this.equals == this.answer
  }
}

export class Generator {
  constructor(limit=10, ops=['+', '-'], factors=2) {
    this.limit = limit
    this.ops = ops
    this.factors = factors
  }

  generateTwoFactor(limit=this.limit) {

    let op = this.ops[0]
    if (this.ops.length > 1) {
      const opIndex = parseInt(Math.random() * this.ops.length)
      op = this.ops[opIndex]
    }

    let num1 = parseInt(Math.random() * limit) + 1
    let num2 = parseInt(Math.random() * limit) + 1

    if (op == '-') {
      const _num1 = Math.max(num1, num2)
      const _num2 = Math.min(num1, num2)
      return new TwoFactorQuestion(_num1, op, _num2)
    }

    num2 = parseInt(Math.random() * (limit - num1)) + 1
    return new TwoFactorQuestion(num1, op, num2)
  }
}


export default {

}
