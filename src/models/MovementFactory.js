import { 
  IncomeMovement, 
  ExpenseMovement, 
  TransferMovement, 
  RefundMovement,
  Chargeback
} from './Movement';

export function createMovement(data) {
  switch (data.type) {
    case 'INCOME':
      return new IncomeMovement(data);

    case 'EXPENSE':
      return new ExpenseMovement(data);

    case 'TRANSFER':
      return new TransferMovement(data);

    case 'REFUND':
      return new RefundMovement(data);

    case 'CHARGEBACK':
      return new Chargeback(data);

    default:
      throw new Error(`Tipo de movimiento desconocido: ${data.type}`);
  }
}
