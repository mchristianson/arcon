const shopArconCustom = window.shopArconCustom || (function (document, window, $) {
    const app = {
        init: () => {
            app.waitForElement('input#shipping_misc1')
                .then((ele) => {
                    ele.remove();
                })
            const $dropDown = $('<select name="shipping_misc1" style="padding: 3px;" required>')
                .append('<option></option>')
                .append('<option>Bingham AG Services</option>')
                .append('<option>Brad Hall Fuel</option>')
                .append('<option >Clean Fluid Solutions</option>')
                .append('<option>Fraley Propane</option>')
                .append('<option>Good2Go</option>')
                .append('<option>Hall Foundation</option>')
                .append('<option>HFI Management</option>')
                .append('<option>Just 4 Kids</option>')
                .append('<option>LP Propane</option>')
                .append('<option>Senergy Petroleum</option>')
                .append('<option>South Fork Housing</option>')
                .append('<option>South Fork Property Management</option>')
                .append('<option>Teton Petroleum Transport</option>');

            $('#shipping_misc1_container').append($dropDown);
        },
        waitForElement: (selector) => {
            return new Promise(resolve => {
                if (document.querySelector(selector)) {
                    return resolve(document.querySelector(selector));
                }

                const observer = new MutationObserver(mutations => {
                    if (document.querySelector(selector)) {
                        observer.disconnect();
                        resolve(document.querySelector(selector));
                    }
                });

                observer.observe(document.body, {
                    childList: true,
                    subtree: true
                });
            });
        }
    };
    return app;
}(document, window, jQuery));
shopArconCustom.init();
