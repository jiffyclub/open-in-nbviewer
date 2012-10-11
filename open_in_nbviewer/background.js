// (c) 2012 Matt Davis.
//
// Icon taken from http://nbviewer.ipython.org/static/ico/ipynb_icon_16x16.png
// nbviewer is licensed under the Apache License v2.0
//
// Licensed under an MIT-style license that can be found in LICSENSE.txt.

// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
    url_root = 'http://nbviewer.ipython.org/';
    url = null;

    gist = tab.url.match(/^https?:\/\/gist.github.com\/([0-9]+)$/);
    if (gist) {
        url = url_root + gist[1];
    } else {
        path = tab.url.match(/^https?:\/\/(.*\.ipynb)$/);

        if (path) {
            url = url_root + 'url/' + path[1];
        }
    }

    if (url) {
        chrome.tabs.create({'url': url});
    }
});
