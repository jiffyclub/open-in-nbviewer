javascript:date=new Date();
url_root='http://nbviewer.ipython.org/';
url=null;
if (location.href.search(/^https?:\/\/gist\.github\.com\/(?:\w+\/)?[a-f0-9]+$/) !== -1) {
gist = location.href.match(/^https?:\/\/gist\.github\.com\/(?:\w+\/)?([a-f0-9]+)$/);
url = url_root + gist[1];
} else if (location.href.search(/^https:\/\/.*\.ipynb$/) !== -1) {
path = location.href.match(/^https:\/\/(.*\.ipynb)$/);
url = url_root + 'urls/' + path[1];
} else if (location.href.search(/^http:\/\/.*\.ipynb$/) !== -1) {
path = location.href.match(/^http:\/\/(.*\.ipynb)$/);
url = url_root + 'url/' + path[1];}
if (url) {
void(window.open(url, 'nbviewer' + date.getTime()));}
