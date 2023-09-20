'use strict';

const mogoose = require('mongoose');
const Customer = mogoose.model('Customer');

exports.get = async () => {
    var res = await Customer.find({});
    return res;
}

exports.create = async (data) => {
    var customer = new Customer(data);
    await customer.save();
}