(function (window) {
    window.NF || (window.NF = {});

    window.NF.submitFormByPost = function (url, params) {
        var tempForm = document.createElement("form");
        tempForm.action = url;
        tempForm.method = "post";
        tempForm.style.display = "none";
        for (var x in params) {
            var opt = document.createElement("input");
            opt.name = x;
            opt.value = params[x]; 
            tempForm.appendChild(opt);
        }
        document.body.appendChild(tempForm);
        tempForm.submit();
    };

    window.NF.submitFormByGet = function (url, params) {
        var tempForm = document.createElement("form");
        tempForm.action = url;
        tempForm.method = "get";
        tempForm.style.display = "none";
        for (var x in params) {
            var opt = document.createElement("input");
            opt.name = x;
            opt.value = params[x]; 
            tempForm.appendChild(opt);
        }
        document.body.appendChild(tempForm);
        tempForm.submit();
    };

    window.NF.getFormByPost = function (url, params) {
        var tempForm = document.createElement("form");
        tempForm.action = url;
        tempForm.method = "post";
        tempForm.style.display = "none";
        for (var x in params) {
            var opt = document.createElement("input");
            opt.name = x;
            opt.value = params[x];
            tempForm.appendChild(opt);
        }
        document.body.appendChild(tempForm);
        return tempForm;
    };

    window.NF.getFormByGet = function (url, params) {
        var tempForm = document.createElement("form");
        tempForm.action = url;
        tempForm.method = "get";
        tempForm.style.display = "none";
        for (var x in params) {
            var opt = document.createElement("input");
            opt.name = x;
            opt.value = params[x];
            tempForm.appendChild(opt);
        }
        document.body.appendChild(tempForm);
        return tempForm;
    };
})(window);