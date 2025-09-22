import Converter from "./Converter";

export default class OctalConverter extends Converter {
  toDecimal() {
    return parseInt(this.value, 8);
  }

  static fromDecimal(decimal) {
    return decimal.toString(8);
  }
}
