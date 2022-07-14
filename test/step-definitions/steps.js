const { Given, When, Then } = require('@cucumber/cucumber');
var assert = require('assert');

Given('the user is on login page', function () {
    var a = 'shivanshu'
    assert(a.length > 0)
});