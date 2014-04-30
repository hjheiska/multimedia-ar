#pragma strict

function Awake () {
	// 0 for no sync, 1 for panel refresh rate, 2 for 1/2 panel rate
	//QualitySettings.vSyncCount = 0;
	//Application.targetFrameRate = 1;
}
/*
function OnGUI () {
	var object = GameObject.Find("RightEyeCameraImage");
	
	var script = GameObject.Find("OVRCameraController");
	var script2: OVRCameraController = script.GetComponent(OVRCameraController);
	print(script2.LensCorrection);
	var x = object.transform.position.x;
	var y = object.transform.position.y;
	var z = object.transform.position.z;
	x = Mathf.Round(x * 100f) / 100f;
	y = Mathf.Round(y * 100f) / 100f;
	z = Mathf.Round(z * 100f) / 100f;
	
	
	GUI.Box (Rect (10,10,200,90), x + ":" + y + ":" + z);

	
}
*/

function Start () {

}

function Update () {

}