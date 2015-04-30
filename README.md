# koco-toastr
Toastr wrapper for use in a [KOCO](https://github.com/cbcrc/generator-koco) project. It includes styles to match the bootstrap aesthetic. 

## Installation

```bash
bower install koco-toastr
```

## Usage with KOCO

This is a shared module that is used in many other modules. It includes the toastr library as a bower dependency. The convention is to configure an alias in the `require.configs.js` with the name `bootstrap-toastr` like so:

```javascript
paths: {
  ...
  'bootstrap-toastr': 'bower_components/koco-toastr/src/koco-toastr-ui',
  'toastr': 'bower_components/toastr/toastr',
  ...
}
```

You will also need to import the styles into `less/styles.less`:

```
// Components
@import "../bower_components/koco-toastr/src/koco-toastr.less";
@import "../bower_components/toastr/toastr.less";
...

```