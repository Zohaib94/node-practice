class ISICCardResponse {
  constructor(number = '', cvv = '', expiry = '', id = '') {
    this.number = number;
    this.cvv = cvv;
    this.expiry = expiry;
    this.id = id;
  }
}

export default ISICCardResponse;
