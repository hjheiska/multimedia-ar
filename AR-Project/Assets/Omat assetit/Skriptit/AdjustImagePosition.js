#pragma strict
var originalX = 0f;
var originalY = 0f;
var originalZ = 0f;
	
function Start () {
	transform.position.x = 4;
	originalX = transform.position.x;
	originalY = transform.position.y;
	originalZ = transform.position.z;

}

function Update () {
	if(Input.GetKey ("i")) {
		transform.position.y += 0.1;
		originalY += 0.1;
	}
	if(Input.GetKey ("k")) {
		transform.position.y -= 0.1;
		originalY -= 0.1;
	}
	if(Input.GetKey ("j")) {
		transform.position.x += 0.1;
		originalX += 0.1;
	}
	if(Input.GetKey ("l")) {
		transform.position.x -= 0.1;
		originalX -= 0.1;
	}
	
}

function OnGUI () {

	var difference = originalX - transform.position.x;
	var object = GameObject.Find("RightEyeCameraImage");
	
	var x = Mathf.Round(originalX * 100f) / 100f;
	var y = Mathf.Round(originalY * 100f) / 100f;
	var z = Mathf.Round(originalZ * 100f) / 100f;
	
	GUI.Box (Rect (10,50,90,90), "X:" + x + "\n\rY:" + y + "\n\rZ:" + z);

	
}