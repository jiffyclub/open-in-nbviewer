javascript:date = new Date();
url_root = 'http://nbviewer.ipython.org/';
url = null;
gist_re = /^https?:\/\/gist\.github\.com\/(?:\w+\/)?([a-f0-9]+)$/;
github_re = /^https:\/\/(github\.com\/.*\/)blob\/(.*\.ipynb)$/;
https_re = /^https:\/\/(.*\.ipynb)$/;
http_re = /^http:\/\/(.*\.ipynb)$/;
loc = location.href;
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
    url = url_root + 'url/' + path[1];}
if (url) {void(window.open(url, 'nbviewer' + date.getTime()));}
