
javascript:date=new Date();
url_root='http://nbviewer.ipython.org/';
url=null;
gist = location.href.match(/^https?:\/\/gist\.github\.com\/(?:\w+\/)?([a-f0-9]+)$/);
if (gist != null) {
	url = url_root + gist[1];
}
else {
	path = location.href.match(/^https:\/\/(github\.com\/.*\/)blob\/(.*\.ipynb)$/);
	console.log(path);
	if (path != null) {
		path = path[1] + path[2]; 
		url = url_root + 'urls/raw.' + path;
	}

	else {

		path = location.href.match(/^https:\/\/(.*\.ipynb)$/);

		if (path != null) {
			url = url_root + 'urls/' + path[1];
		}		
	
		else {
			path = location.href.match(/^http:\/\/(.*\.ipynb)$/);
		
			if (path != null) {
				url = url_root + 'url/' + path[1];
			}
		}
	}
}

if (url) {
	void(window.open(url, 'nbviewer' + date.getTime()));
}
