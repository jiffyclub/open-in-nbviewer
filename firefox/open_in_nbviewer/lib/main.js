var widgets = require("widget");
var tabs = require("tabs");
var openInNb = require("open_in_nbviewer");

var widget = widgets.Widget({
  id: "open-in-nbviewer",
  label: "Open current page in nbviewer",
  contentURL: "http://nbviewer.ipython.org/static/ico/ipynb_icon_16x16.png",
  onClick: function() {
    var nbviewerURL = openInNb.nbviewerURL(tabs.activeTab.url);

    if (nbviewerURL) {
        tabs.open(nbviewerURL);
    }
  }
});
