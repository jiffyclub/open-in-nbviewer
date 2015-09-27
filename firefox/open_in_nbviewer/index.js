var self = require('sdk/self');
var buttons = require('sdk/ui/button/action');
var tabs = require("sdk/tabs");
var openInNb = require("open_in_nbviewer");

var button = buttons.ActionButton({
  id: "open-in-nbviewer",
  label: "Open in Nbviewer",
  icon: {
    "32": "./ipynb_icon_32x32.png",
    "64": "./ipynb_icon_64x64.png"
  },
  onClick: function() {
    var nbviewerURL = openInNb.nbviewerURL(tabs.activeTab.url);

    if (nbviewerURL) {
        tabs.open(nbviewerURL);
    }
  }
});

