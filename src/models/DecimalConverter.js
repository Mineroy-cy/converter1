// models/DecimalConverter.js
import Converter from "./Converter";

export default class DecimalConverter extends Converter {
  toDecimal() {
    return Number(this.value);
  }

  static fromDecimal(decimal) {
    return decimal.toString();
  }
}
