import { Movement } from './Movement';

export class Chargeback extends Movement {
  getNetAmount() {
    return -Math.abs(this.amount);
  }

  getIcon() {
    return "⚠️";
  }

  getColor() {
    return "red";
  }

  getTypeName() {
    return "CHARGEBACK";
  }
}
