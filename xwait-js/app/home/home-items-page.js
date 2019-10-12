const HomeItemsViewModel = require("./home-items-view-model");
const http = require('tns-core-modules/http');
//import {EventData,Observable} from "data/observable";

let resp = 0;
function onNavigatingTo(args) {
    const component = args.object;
    component.bindingContext = new HomeItemsViewModel();
}

const Page = require("tns-core-modules/ui/page").Page;
const Label = require("tns-core-modules/ui/label").Label;
const Button = require("tns-core-modules/ui/button").Button;
const StackLayout = require("tns-core-modules/ui/layouts/stack-layout").StackLayout;

function onTap(args) {
    let date = Date.now();
    console.dir(date);

    http.request({
        url: "http://35.231.209.3/",
        method: "GET"
    }).then((res) => {
        console.log(res['content']);
        resp = res['content'];
    }, (e) => {
        console.log(e);
    });

    
    const view = args.object;
    view.bindingContext = { hello: resp };
    const context = null;
    const closeCallback = null;
    const fullscreen = true;
    view.showModal("browse/browse-page", view.navigationContext, closeCallback, fullscreen);
}

function createPage() {
    // Creating of the page content
    const stack = new StackLayout();
    const label = new Label();
    const button = new Button();

    label.text = `You are number ${getCurrentCount()} in line!`;
    button.text = "Check out!";
    button.on(Button.tapEvent, (args) => onNavigatingTo(args), this);
    stack.addChild(label);
    stack.addChild(button);

    const page = new Page();
    // A page can have only one single root view set via the content property (in this case a StackLayout)
    page.content = stack;

    return page;
}

function getCurrentCount() {
    return resp;
}


exports.onTap = onTap;
exports.getCurrentCount = getCurrentCount;
//exports.createPage = createPage;
exports.onNavigatingTo = onNavigatingTo;
