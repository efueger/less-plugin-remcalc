<p align="center"><img src="http://i.imgur.com/JJYWgLD.png" alt="ovh"/></p>
[![Build Status](https://travis-ci.org/ovh-ux/less-plugin-remcalc.svg?branch=master)](https://travis-ci.org/ovh-ux/less-plugin-remcalc)
---
# less-plugin-remcalc

Simply adds `rem-base` and `rem-calc` functions to LESS.

## Installation

```
yarn install --dev "https://github.com/ovh-ux/less-plugin-remcalc.git#0.1.0"
```

## Usage

### lessc

On the command line:

```
lessc file.less --remcalc
```

### node

```js
var remcalc = require('less-plugin-remcalc');

less.render(data, { plugins: [remcalc] }).then(...);
```

### grunt (grunt-contrib-less)

Register the plugin in your `Gruntfile.js`:

```js
less: {
    options: {
        plugins: [
            require('less-plugin-remcalc')
        ]
    }
}
```

### webpack (less-loader)

```js
var remcalcPlugin = require('less-plugin-remcalc');

module.exports = {
  ...
  lessLoader: {
    lessPlugins: [
      remcalcPlugin
    ]
  }
};
```

## Examples

### Basic

```less
.card {
  min-width: rem-calc(64px);
}

.card {
  min-width: rem-calc(64);
}
```

### Overriding the rem base

Default base is `16px` but you can override it at any time (here with `12px`):

```less
.card {
  padding: rem-calc(20px, 12px);
}
```

You can also act globally on the rem base, using:

```less
@rem-base: rem-base(10px); // will globally override the rem base.

.card {
  min-width: rem-calc(20px); // is now equivalent to rem-calc(20px, 10px);
}
```

## License

BSD 3-Clause
