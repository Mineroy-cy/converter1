import Converter from "./Converter";

export default class BCDConverter extends Converter {
  toDecimal() {
    return parseInt(this.value.replace(/\s+/g, ""), 2);
  }

  static fromDecimal(decimal) {
    return decimal
      .toString()
      .split("")
      .map(digit => Number(digit).toString(2).padStart(4, "0"))
      .join(" ");
  }
}
