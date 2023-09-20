'use strict';

const mogoose = require('mongoose');
const Customer = mogoose.model('Customer');

exports.create = async (data) => {
    var customer = new Customer(data);
    await customer.save();
}