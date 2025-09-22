import Converter from "./Converter";

export default class HexConverter extends Converter {
  toDecimal() {
    return parseInt(this.value, 16);
  }

  static fromDecimal(decimal) {
    return decimal.toString(16).toUpperCase();
  }
}
