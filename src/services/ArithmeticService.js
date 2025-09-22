export default class ArithmeticService {
  static addBinary(a, b) {
    return (parseInt(a, 2) + parseInt(b, 2)).toString(2);
  }

  static subtractBinary(a, b) {
    return (parseInt(a, 2) - parseInt(b, 2)).toString(2);
  }

  static multiplyBinary(a, b) {
    return (parseInt(a, 2) * parseInt(b, 2)).toString(2);
  }

  static divideBinary(a, b) {
    return Math.floor(parseInt(a, 2) / parseInt(b, 2)).toString(2);
  }

  static onesComplement(binary) {
    return binary.split("").map(b => (b === "0" ? "1" : "0")).join("");
  }

  static twosComplement(binary) {
    let ones = this.onesComplement(binary);
    return (parseInt(ones, 2) + 1).toString(2);
  }
}
