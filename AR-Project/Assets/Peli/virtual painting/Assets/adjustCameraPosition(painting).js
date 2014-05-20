#pragma strict
private var originalX = 0f;
private var originalY = 0f;
private var originalZ = 0f;
	
function Start () {
	transform.localPosition.x = 12f;
	transform.localPosition.y = 2.6f - 10.75f;
	/*
	transform.localPosition.x = 8.1f;
	transform.localPosition.y = 4.4f - 10.75f;
	
	*/
	//transform.localPosition.z = 40;
	
	
	originalX = transform.position.x;
	originalY = transform.position.y;
	originalZ = transform.position.z;

}

function Update () {

	if(Input.GetKey ("i") || Input.GetAxisRaw("d-padi_v") < 0) {
		transform.localPosition.y += 0.3;
		originalY += 0.3;
	}
	if(Input.GetKey ("k") || Input.GetAxisRaw("d-padi_v") > 0) {
		transform.localPosition.y -= 0.3;
		originalY -= 0.3;
	}
	if(Input.GetKey ("j") || Input.GetAxisRaw("d-padi_h") > 0) {
		transform.localPosition.x += 0.3;
		originalX += 0.3;
	}
	if(Input.GetKey ("l") || Input.GetAxisRaw("d-padi_h") < 0) {
		transform.localPosition.x -= 0.3;
		originalX -= 0.3;
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