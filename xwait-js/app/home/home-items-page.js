const HomeItemsViewModel = require("./home-items-view-model");

let day = 0;
let month = 0;
let year = 0;

function onNavigatingTo(args) {
    const component = args.object;
    component.bindingContext = new HomeItemsViewModel();
}

function onItemTap(args) {
    const view = args.view;
    const page = view.page;
    const tappedItem = view.bindingContext;

    page.frame.navigate({
        moduleName: "home/home-item-detail/home-item-detail-page",
        context: tappedItem,
        animated: true,
        transition: {
            name: "slide",
            duration: 200,
            curve: "ease"
        }
    });
}

function onDatePickerLoaded(args) {
    const datePicker = args.object;
    datePicker.minDate = new Date("2019", "10", "12");
    datePicker.on("dateChange", (args) => {
        console.dir(args);
    });
    datePicker.on("dayChange", (args) => {
        console.dir(args.value);
        day = args.value;
    });
    datePicker.on("monthChange", (args) => {
        console.dir(args.value);
        month = args.value;
    });
    datePicker.on("yearChange", (args) => {
        console.dir(args.value);
        year = args.year
    });
}

exports.onItemTap = onItemTap;
exports.onNavigatingTo = onNavigatingTo;
exports.onDatePickerLoaded = onDatePickerLoaded;
