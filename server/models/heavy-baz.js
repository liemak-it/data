var faker = require('faker');
var props = require('../store/props');
var attr = props.attr;
var one = props.one;
var many = props.many;
var between = require('../utils/between');

module.exports = {
  name: attr('string', { defaultValue: function() { return faker.lorem.words(between(3, 7)); }}),
  description: attr('string', { defaultValue: function() { return faker.lorem.sentences(between(3, 7)); }}),
  heavy: one('heavy', { inverse: 'heavyBaz', defaultValue: false }),
  bazs: many('baz', { inverse: 'heavyBaz', defaultValue: 5 })
};
