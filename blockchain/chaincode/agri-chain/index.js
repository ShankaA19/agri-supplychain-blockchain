
'use strict';
const { Contract } = require('fabric-contract-api');

class AgriChain extends Contract {
  async createProduct(ctx, id, crop, farmer, quantity) {
    const product = { id, crop, farmer, quantity: parseInt(quantity), status: 'Harvested', history: [] };
    product.history.push({ status: 'Harvested', time: new Date().toISOString() });
    await ctx.stub.putState(id, Buffer.from(JSON.stringify(product)));
    return JSON.stringify(product);
  }

  async updateStatus(ctx, id, status) {
    const data = await ctx.stub.getState(id);
    if (!data || data.length === 0) throw new Error('Not found');
    const p = JSON.parse(data.toString());
    p.status = status;
    p.history.push({ status, time: new Date().toISOString() });
    await ctx.stub.putState(id, Buffer.from(JSON.stringify(p)));
    return JSON.stringify(p);
  }

  async getProduct(ctx, id) {
    const data = await ctx.stub.getState(id);
    return data.toString();
  }
}
module.exports = AgriChain;
