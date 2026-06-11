window.printHelper = {
    registerAfterPrint: function (dotnetRef) {
        window.onafterprint = function () {
            dotnetRef.invokeMethodAsync("OnAfterPrint");
        };
    },

    print: function () {
        window.print();
    }
};