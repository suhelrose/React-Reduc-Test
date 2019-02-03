import axios from 'axios';

export const ListClient = function()
{
	let url ='http://www.omdbapi.com/?i=tt3896198&apikey=b5984ad5';
	let retData = {type:'LIST_CLIENT', 
		ClientDetails: new Promise((resolve,reject)=>{
			axios({url:url,method:'get'}).then(response=>{
				resolve(response.data);
			})			
		})
	}
	return retData;
}
