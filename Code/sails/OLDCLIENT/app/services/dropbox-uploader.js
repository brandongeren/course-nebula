import Ember from 'ember';

export default Ember.Service.extend({
accessToken: '',

	upload(file){
	var promise;

	promise = new Ember.RSVP.Promise((resolve, reject)=> {
		var reader = new FileReader();
		reader.readAsArrayBuffer(file);

		reader.onload = ({target:{result}})=> {
		  Ember.$.ajax({
			headers: {
				Authorization: `Bearer ${this.get('accessToken')}`
			},

			url: `https://content.dropboxapi.com/1/files_put/auto/${file.name}`,
			type: 'PUT',
			data: result,
			contentType: file.type,
			dataType: 'json',
			processData: false,
			crossDomain: true,
			crossOrigin: true,

			success: ({path, size})=> {
			resolve({
			name: file.name,
			path,
			size,
			type: file.type
		});
	 },

	 error: (reason)=>{
		reject(reason);
	 },

    xhr: ()=>{
		var xhr = new window.XMLHttpRequest();
		//Upload progress
		xhr.upload.addEventListener("progress", ({lengthComputable, loaded, total})=>{
			if (lengthComputable){
			var percentComplete = loaded / total;

			Ember.$('[data-uploader]').trigger({
				type:"uploadProgress",
				progress:percentComplete
			 });
		  }
      }, false);
		return xhr;
	  }
	 });

   };
 });

 return promise;
 },

  download(file){
    var promise;

    promise = new Ember.RSVP.Promise((resolve, reject)=> {
      var xhr = new XMLHttpRequest();

      xhr.open("GET", `https://content.dropboxapi.com/1/files/auto${file.get('path')}?access_token=${this.get('accessToken')}`, true);
      xhr.responseType = "arraybuffer";
      xhr.onload = ()=> {
        var blob = new Blob([xhr.response], {type: file.get('type')});
        var objectUrl = URL.createObjectURL(blob);
        resolve(objectUrl);
      };

      xhr.onerror = (reason)=> {
        reject(reason);
      };

      xhr.send();
    });

    return promise;
  }
});
