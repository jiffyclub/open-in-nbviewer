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
    var path;

    if (tab.url.search(/^https?:\/\/gist\.github\.com\/(?:\w+\/)?[a-f0-9]+$/) !== -1) {
        gist = tab.url.match(/^https?:\/\/gist\.github\.com\/(?:\w+\/)?([a-f0-9]+)$/);
        url = url_root + gist[1];

    } else if (tab.url.search(/^https:\/\/.*\.ipynb$/) !== -1) {
        path = tab.url.match(/^https:\/\/(.*\.ipynb)$/);
        url = url_root + 'urls/' + path[1];

    } else if (tab.url.search(/^http:\/\/.*\.ipynb$/) !== -1) {
        path = tab.url.match(/^http:\/\/(.*\.ipynb)$/);
        url = url_root + 'url/' + path[1];
    }

    if (url) {
        chrome.tabs.create({'url': url});
    }
});
