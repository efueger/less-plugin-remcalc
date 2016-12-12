<p align="center"><img src="http://i.imgur.com/JJYWgLD.png" alt="ovh"/></p>
---
# less-plugin-remcalc

Simply adds `rem-base` and `rem-calc` functions to LESS.

## Installation

```
yarn install --dev less-plugin-rem-calc
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

### grunt-contrib-less

Register the plugin in your `Gruntfile.js`:

```js
    less: {
        options: {
            plugins: [
                require("less-plugin-remcalc")
            ]
        }
    }
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