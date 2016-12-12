'use strict';

var functions = function (less) {
  var registry = less.functions.functionRegistry;
  var Dimension = less.tree.Dimension;

  return {
    'rem-base': function (base) {
      if (!base) {
        return less.data['rem-base'] || new Dimension(16, 'px');
      }
      base = new Dimension(registry.get('unit')(base).value, 'px');
      less.data['rem-base'] = base;

      return base;
    },
    'rem-calc': function (value, base) {
      base = base || registry.get('rem-base')();
      var baseUnit = registry.get('get-unit')(base).value.backupUnit;
      base = registry.get('unit')(base).value;

      if (baseUnit === '%') {
        base = (base / 100) * 16;
      }

      if (baseUnit === 'rem') {
        base *= 16;
      }

      if (baseUnit === 'em') {
        base *= 16;
      }

      if (!value) {
        return new Dimension(0);
      }

      var calculus = parseFloat((value.value / base).toFixed(3));

      return new Dimension(calculus, 'rem');
    },
  };
};

var index = {
  install: function (less) {
    less.functions.functionRegistry.addMultiple(functions(less));
  },
};

module.exports = index;
