
// Import any other script files here, e.g.:
// import * as myModule from "./mymodule.js";

var data = '';
var textInstace = '';

runOnStartup(async runtime =>
{
	// Code to run on the loading screen.
	// Note layouts, objects etc. are not yet available.
	
	runtime.addEventListener("beforeprojectstart", () => OnBeforeProjectStart(runtime));
	window.addEventListener(
  	"message",
  	(event) => {
	data = event.data;
	console.log("IFrame reciver data: " + data);
	textInstace.text = data;
  	},
  	false
);
});

async function OnBeforeProjectStart(runtime)
{
	// Code to run just before 'On start of layout' on
	// the first layout. Loading has finished and initial
	// instances are created and available to use here.
	
	runtime.addEventListener("tick", () => Tick(runtime));
	textInstace = runtime.objects.Text.getFirstInstance();
}

function Tick(runtime)
{
	// Code to run every tick
}
