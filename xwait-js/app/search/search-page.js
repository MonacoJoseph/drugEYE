const SearchViewModel = require("./search-view-model");

function onNavigatingTo(args) {
    const component = args.object;
    component.bindingContext = new SearchViewModel();
}

function closeModal(args) {
    const view = args.object;
    //console.dir(view)
    console.dir(args);
    view.closeModal();
}

exports.closeModal = closeModal;
exports.onNavigatingTo = onNavigatingTo;
