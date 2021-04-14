class AccountService {
  constructor(web3) {
    this.web3 = web3;
  }

  async getBalance(address) {
    const balance = await this.web3.eth.getBalance(address);

    return {
      address, balance, symbol: 'eth', units: 'wei',
    };
  }

  getAccounts() {
    return this.web3.eth.getAccounts();
  }
}

export default AccountService;
