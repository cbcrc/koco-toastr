(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(['exports', 'toastr'], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require('toastr'));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.toastr);
        global.toastrUi = mod.exports;
    }
})(this, function (exports, _toastr) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _toastr2 = _interopRequireDefault(_toastr);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    var ToastrViewModel = function ToastrViewModel() {
        _toastr2.default.options = {
            //timeOut: -1, // When testing, it might be useful to prevent them from disappearing
            target: 'toastr > .container'
        };
    }; // Copyright (c) CBC/Radio-Canada. All rights reserved.
    // Licensed under the MIT license. See LICENSE file in the project root for full license information.

    exports.default = ToastrViewModel;
});