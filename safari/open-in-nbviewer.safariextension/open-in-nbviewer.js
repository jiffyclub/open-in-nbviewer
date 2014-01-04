var open_in_nbviewer = function open_in_nbviewer() {
    var url_root = 'http://nbviewer.ipython.org/';
    var url = null;
    var gist_re = /^https?:\/\/gist\.github\.com\/(?:\w+\/)?([a-f0-9]+)$/;
    var github_re = /^https:\/\/(github\.com\/.*\/)blob\/(.*\.ipynb)$/;
    var https_re = /^https:\/\/(.*\.ipynb)$/;
    var http_re = /^http:\/\/(.*\.ipynb)$/;
    var loc = safari.application.activeBrowserWindow.activeTab.url;
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
        var new_tab = safari.application.activeBrowserWindow.openTab();
        tab.url = url;
    }
}

safari.application.addEventListener("nbviewer-toolbar", open_in_nbviewer, false);
