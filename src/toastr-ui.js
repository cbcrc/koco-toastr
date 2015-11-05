// Copyright (c) CBC/Radio-Canada. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

define(['toastr'],
    function(toastr) {
        'use strict';

        var ToastrViewModel = function() {
            toastr.options = {
                //timeOut: -1, // When testing, it might be useful to prevent them from disappearing
                target: 'toastr > .container'
            };
        };

        return ToastrViewModel;
    });
