// models/OctalConverter.js
import Converter from "./Converter";
import { baseToDecimal, decimalToBase } from "../utils/fractionParser";

export default class OctalConverter extends Converter {
  toDecimal() {
    return baseToDecimal(this.value, 8);
  }

  static fromDecimal(decimal) {
    return decimalToBase(decimal, 8);
  }
}
