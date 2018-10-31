function downloadImage(info, tab) {
	var url = info['srcUrl'];
	var filename = url.substring(url.lastIndexOf('/')+1);
	
	//try to change location of file
	var foldername = "imagsedsf/"
	if(chrome.downloads){
		chrome.downloads.download({ url: url, filename: foldername + filename });
	}
	else{
		function getBase64ImageData(url,filename) {
			var img = new Image();
			img.setAttribute('crossOrigin', 'anonymous');
			img.onload = function () {
				var canvas = document.createElement("canvas");
				canvas.width = this.naturalWidth;
				canvas.height = this.naturalHeight;
				var ctx = canvas.getContext("2d");
				ctx.drawImage(this, 0, 0);
				var dataURI = canvas.toDataURL("image/png");

				chrome.tabs.query({currentWindow: true, active: true}, function(tabs) {
					var tab=tabs[0];
					chrome.tabs.sendMessage(tab.id, {'action' : 'imagedownload',url:url,filename:filename,dataURI:dataURI},
						function (response) {
							if (chrome.runtime.lastError) {
								//console.log(chrome.runtime.lastError.message);
							} else {
								//OK
							}
						}
					);
				} );

			};
			img.src = url;
		}
		getBase64ImageData(url,filename);
	}
}
chrome.contextMenus.create({"title": "Save Image to Downloads…", "contexts":["image"], "onclick": downloadImage});
