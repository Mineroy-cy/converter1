import BinaryConverter from "../models/BinaryConverter";
import DecimalConverter from "../models/DecimalConverter";
import OctalConverter from "../models/OctalConverter";
import HexConverter from "../models/HexConverter";
import BCDConverter from "../models/BCDConverter";

export default class ConversionService {
  static convert(value, fromBase, toBase) {
    let decimalValue;

    switch (fromBase) {
      case "binary":
        decimalValue = new BinaryConverter(value).toDecimal();
        break;
      case "decimal":
        decimalValue = new DecimalConverter(value).toDecimal();
        break;
      case "octal":
        decimalValue = new OctalConverter(value).toDecimal();
        break;
      case "hex":
        decimalValue = new HexConverter(value).toDecimal();
        break;
      case "bcd":
        decimalValue = new BCDConverter(value).toDecimal();
        break;
      default:
        throw new Error("Unsupported base");
    }

    switch (toBase) {
      case "binary":
        return BinaryConverter.fromDecimal(decimalValue);
      case "decimal":
        return decimalValue.toString();
      case "octal":
        return OctalConverter.fromDecimal(decimalValue);
      case "hex":
        return HexConverter.fromDecimal(decimalValue);
      case "bcd":
        return BCDConverter.fromDecimal(decimalValue);
      default:
        throw new Error("Unsupported base");
    }
  }
}
