// models/DecimalConverter.js
import Converter from "./Converter";

// Define a DecimalConverter class that extends the generic Converter
export default class DecimalConverter extends Converter {

  /**
   * Converts the stored value (inherited from Converter) to a decimal number.
   * @returns {number} The decimal representation of the value.
   */
  toDecimal() {
    return Number(this.value);
  }

  static fromDecimal(decimal) {
    return decimal.toString();
  }
}
