import Converter from "./Converter";

export default class BinaryConverter extends Converter {
  toDecimal() {
    return parseInt(this.value, 2);
  }

  static fromDecimal(decimal) {
    return decimal.toString(2);
  }
}
