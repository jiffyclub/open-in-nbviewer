// (c) 2012 Matt Davis.
//
// Icon taken from http://nbviewer.ipython.org/static/ico/ipynb_icon_16x16.png
// nbviewer is licensed under the Apache License v2.0
//
// Licensed under an MIT-style license that can be found in LICSENSE.txt.

// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
    var url_root = 'http://nbviewer.ipython.org/';
    var url = null;
    var gist_re = /^https?:\/\/gist\.github\.com\/(?:\w+\/)?([a-f0-9]+)$/;
    var github_re = /^https:\/\/(github\.com\/.*\/)blob\/(.*\.ipynb)$/;
    var https_re = /^https:\/\/(.*\.ipynb)$/;
    var http_re = /^http:\/\/(.*\.ipynb)$/;
    var loc = tab.url;
    var path;

    if (gist_re.test(loc)) {
        gist = gist_re.exec(loc);
        url = url_root + gist[1];
    } else if (github_re.test(loc)) {
        path = github_re.exec(loc);
        url = url_root + 'urls/raw.' + path[1] + path[2];
    } else if (https_re.test(loc)) {
        path = https_re.exec(loc);
        url = url_root + 'urls/' + path[1];
    } else if (http_re.test(loc)) {
        path = http_re.exec(loc);
        url = url_root + 'url/' + path[1];
    }

    if (url) {
        chrome.tabs.create({'url': url});
    }
});
