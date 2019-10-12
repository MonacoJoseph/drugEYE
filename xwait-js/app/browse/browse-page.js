const BrowseViewModel = require("./browse-view-model");
const http = require('tns-core-modules/http');

function onNavigatingTo(args) {
    //const component = args.object;
    //component.bindingContext;
}

function closeModal(args) {
    const view = args.object;
    console.dir(args);

    http.request({
        url: "http://35.231.209.3/checkOut",
        method: "GET"
    }).then((res) => {
        console.log(res['content']);
        resp = res['content'];
    }, (e) => {
        console.log(e);
    });
    view.closeModal();
}

exports.closeModal = closeModal;
exports.onNavigatingTo = onNavigatingTo;
