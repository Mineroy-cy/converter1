import Converter from "./Converter";

export default class DecimalConverter extends Converter {
  toDecimal() {
    return Number(this.value);
  }
//hello
  static toBinary(decimal) {
    return decimal.toString(2);
  }

  static toOctal(decimal) {
    return decimal.toString(8);
  }

  static toHex(decimal) {
    return decimal.toString(16).toUpperCase();
  }
}
