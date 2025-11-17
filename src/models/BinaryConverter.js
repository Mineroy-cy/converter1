// models/BinaryConverter.js
import Converter from "./Converter";
import { baseToDecimal, decimalToBase } from "../utils/fractionParser";

export default class BinaryConverter extends Converter {
  toDecimal() {
    return baseToDecimal(this.value, 2);
  }

  static fromDecimal(decimal) {
    return decimalToBase(decimal, 2);
  }
}
