window.printHelper = {

    registerAfterPrint: function (dotnetRef) {
        window.onafterprint = function () {
            dotnetRef.invokeMethodAsync("OnAfterPrint");
        };
    },

    print: function () {

        setTimeout(function () {

            requestAnimationFrame(function () {

                window.print();

            });

        }, 1000);
    }
};