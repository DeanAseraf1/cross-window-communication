var postMessage = '';
function postText(value){
console.log("IFrame Sender: " + value);
	parent.postMessage(value, "*");

}


const scriptsInEvents = {

	async EventSheet1_Event1_Act2(runtime, localVars)
	{
		postText(runtime.globalVars.postMessage);
	}

};

self.C3.ScriptsInEvents = scriptsInEvents;

