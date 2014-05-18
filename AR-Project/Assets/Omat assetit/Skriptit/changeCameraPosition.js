#pragma strict
var scale = 1.0f;


function Start () {

}

function Update () {
	
	var v = Input.GetAxisRaw("d-padi_v");
	var h = Input.GetAxisRaw("d-padi_h");
	
	if(h > 0) {
		transform.localPosition.x -= 0.4 * scale;
	}
	if(h < 0) {
		transform.localPosition.x += 0.4 * scale;
	}
	if(v > 0) {
		transform.localPosition.z -= 0.4 * scale;
	}
	if(v < 0) {
		transform.localPosition.z += 0.4 * scale;
	}
	var heightChange = Input.GetAxisRaw("etuliipasimet");

	if (Mathf.Abs (heightChange) > 0.1) {
		transform.position.y += heightChange  * scale;
	}
	
	/*
	if(Input.GetKey ("a")) {
		transform.position.x += 0.1;
	}
	if(Input.GetKey ("d")) {
		transform.position.x -= 0.1;
	}
	if(Input.GetKey ("w")) {
		transform.position.z += 0.1;
	}
	if(Input.GetKey ("s")) {
		transform.position.z -= 0.1;
	}
	
	if(Input.GetKey ("z")) {
		transform.position.y += 0.1;
	}
	if(Input.GetKey ("x")) {
		transform.position.y -= 0.1;
	}
	if(Input.GetKey ("q")) {
		transform.localScale.x += 0.1;
	}
	
	if(Input.GetKey ("e")) {
		transform.localScale.x -= 0.1;
	}
	
	if(Input.GetKey ("r")) {
		transform.localScale.z += 0.1;
	}
	if(Input.GetKey ("f")) {
		transform.localScale.z -= 0.1;
	}
	*/
	
}