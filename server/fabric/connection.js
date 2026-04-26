
const { Gateway, Wallets } = require('fabric-network');

async function connect() {
  const wallet = await Wallets.newFileSystemWallet('./wallet');
  const gateway = new Gateway();
  await gateway.connect('connection.json', {
    wallet,
    identity: 'appUser',
    discovery: { enabled: true, asLocalhost: true }
  });
  const network = await gateway.getNetwork('mychannel');
  const contract = network.getContract('agri-chain');
  return { gateway, contract };
}

async function submitTransaction(fn, ...args) {
  const { gateway, contract } = await connect();
  const result = await contract.submitTransaction(fn, ...args);
  gateway.disconnect();
  return result.toString();
}

async function evaluateTransaction(fn, ...args) {
  const { gateway, contract } = await connect();
  const result = await contract.evaluateTransaction(fn, ...args);
  gateway.disconnect();
  return result.toString();
}

module.exports = { submitTransaction, evaluateTransaction };
