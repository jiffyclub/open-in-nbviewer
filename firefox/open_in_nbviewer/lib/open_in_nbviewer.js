function nbviewerURL(currentURL) {
    var url_root = 'http://nbviewer.ipython.org/';
    var url = null;
    var gist_re = /^https?:\/\/gist\.github\.com\/(?:\w+\/)?([a-f0-9]+)$/;
    var github_re = /^https:\/\/(github\.com\/.*\/)blob\/(.*\.ipynb)$/;
    var https_re = /^https:\/\/(.*\.ipynb)$/;
    var http_re = /^http:\/\/(.*\.ipynb)$/;
    var path;

    if (gist_re.test(currentURL)) {
        gist = gist_re.exec(currentURL);
        url = url_root + gist[1];
    } else if (github_re.test(currentURL)) {
        path = github_re.exec(currentURL);
        url = url_root + 'urls/raw.' + path[1] + path[2];
    } else if (https_re.test(currentURL)) {
        path = https_re.exec(currentURL);
        url = url_root + 'urls/' + path[1];
    } else if (http_re.test(currentURL)) {
        path = http_re.exec(currentURL);
        url = url_root + 'url/' + path[1];
    }

    return url;
}

exports.nbviewerURL = nbviewerURL;
