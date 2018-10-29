if(!window.Save_Image_To_Download){
    window.Save_Image_To_Download = {};
	
	chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {	
		if (request.action == 'imagedownload') {
			if(document.querySelector("[Save_Image_To_Download*='true']")) {
				var responseObj={"message_received":true}
				sendResponse(responseObj);
				
				var a = document.createElement("a");
				document.body.appendChild(a);
				a.id = "save_image_to_download_anchor"; 
				a.style = "display: none"; 
				a.href = request.dataURI;
				a.download = request.filename;
				a.click();				
				setTimeout(function(){
					a.ownerDocument.body.removeChild(a); 
				}, 100);
				
				document.querySelector("[Save_Image_To_Download*='true']").removeAttribute("Save_Image_To_Download");				
			}
		}
	});
	
	document.addEventListener("mousedown", function(event){
		if(event.button == 2) {
			event.target.setAttribute("Save_Image_To_Download","true");
		}
	}, true);	
	
}