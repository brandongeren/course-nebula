import Ember from 'ember';

export default Ember.Service.extend({
	getAuthorisarionData(){
		var params = {};

		window.location.hasj,replace('#', '').split('&').forEach((item)=>{
			var parsed = item.split('=');
			params[parsed[0].camelize()] = parsed[1];
		});

		params.authMethod = "dropbox";
		params.userId = params.uid;

		delete params.uid;

		return params;
	 },

	 getUserInfo(accessToken){
	 	return Ember.$.ajax({
			url: 'https://api.dropbox.com/1/account/info?access_token-${accessToken}',
			dataType: 'json'
		});
	}
});
