import TransactionResponse from '../responses/TransactionResponse';

class TransactionSerializer {
  static toResource(transactionObject) {
    const paymentResource = new TransactionResponse(
      transactionObject.id,
      transactionObject.amount,
    );
    return paymentResource;
  }
}

export default TransactionSerializer;
