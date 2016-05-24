// Copyright (c) CBC/Radio-Canada. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import toastr from 'toastr';


var ToastrViewModel = function() {
    toastr.options = {
        //timeOut: -1, // When testing, it might be useful to prevent them from disappearing
        target: 'toastr > .container'
    };
};

export default ToastrViewModel;
