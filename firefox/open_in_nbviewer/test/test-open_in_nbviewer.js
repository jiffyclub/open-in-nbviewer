var openInNb = require("open_in_nbviewer");

exports["test gist1"] = function(assert) {
    var gistURL = "https://gist.github.com/5165431";
    var nbURL = "http://nbviewer.ipython.org/5165431";
    assert.ok(openInNb.nbviewerURL(gistURL) === nbURL, "gist1 URL works");
};

exports["test gist2"] = function(assert) {
    var gistURL = "https://gist.github.com/jiffyclub/5165431";
    var nbURL = "http://nbviewer.ipython.org/5165431";
    assert.ok(openInNb.nbviewerURL(gistURL) === nbURL, "gist2 URL works");
};

exports["test gist3"] = function(assert) {
    var gistURL = "https://gist.github.com/jiffyclub/5a1b6c5d4e3f1";
    var nbURL = "http://nbviewer.ipython.org/5a1b6c5d4e3f1";
    assert.ok(openInNb.nbviewerURL(gistURL) === nbURL, "gist3 URL works");
};

exports["test gist4"] = function(assert) {
    var gistURL = "https://gist.github.com/jiffyclub/5a1b6c5d4e3f1g";
    assert.ok(openInNb.nbviewerURL(gistURL) === null, "gist4 URL works");
};

exports["test github"] = function(assert) {
    var httpURL = "https://github.com/jiffyclub/ipythonblocks/blob/master/demos/Firework.ipynb";
    var nbURL = "http://nbviewer.ipython.org/urls/raw.github.com/jiffyclub/ipythonblocks/master/demos/Firework.ipynb";
    assert.ok(openInNb.nbviewerURL(httpURL) === nbURL, "http URL works");
};

exports["test http"] = function(assert) {
    var httpURL = "http://notarealurl.com/notebook.ipynb";
    var nbURL = "http://nbviewer.ipython.org/url/notarealurl.com/notebook.ipynb";
    assert.ok(openInNb.nbviewerURL(httpURL) === nbURL, "http URL works");
};

exports["test https"] = function(assert) {
    var httpsURL = "https://notarealurl.com/notebook.ipynb";
    var nbURL = "http://nbviewer.ipython.org/urls/notarealurl.com/notebook.ipynb";
    assert.ok(openInNb.nbviewerURL(httpsURL) === nbURL, "https URL works");
};

exports["test invalid"] = function(assert) {
    var badURL = "http://ipython.org";
    assert.ok(openInNb.nbviewerURL(badURL) === null, "invalid URL works");
};

require("test").run(exports);
