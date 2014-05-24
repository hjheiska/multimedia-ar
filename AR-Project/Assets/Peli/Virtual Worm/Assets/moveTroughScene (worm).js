#pragma strict
var scale = 1.0f;


function Start () {

}

function Update () {
	
	var v = Input.GetAxisRaw("ylempitatti_v");
	var h = Input.GetAxisRaw("ylempitatti_h");
	
	var cameraObject = GameObject.Find("CameraLeft");
	var originalRotation = transform.rotation;
	
	if(Mathf.Abs(h) > 0 || Mathf.Abs(v) > 0) {

		transform.rotation = cameraObject.transform.rotation;
		
		transform.localPosition -= transform.right * h * scale;
		transform.localPosition -= transform.forward * v * scale;
		transform.rotation = originalRotation;
	}
	
	
		
	
	var landingObject = GameObject.Find("paintLandingArea");
	var itemArea = GameObject.Find("itemArea");
	var cameraOrientationCube = GameObject.Find("cameraOrientationCube");
	var cameraLeft = GameObject.Find("CameraLeft");
	
	var v2 = Input.GetAxisRaw("alempitatti_v");
	var h2 = Input.GetAxisRaw("alempitatti_h");
;
	if(landingObject != null) {
		var distance = Vector3.Distance(landingObject.transform.position, transform.position);
		if(Mathf.Abs(h2) > 0 || Mathf.Abs(v2) > 0) {
			transform.position += cameraLeft.transform.forward * distance;
			cameraOrientationCube.transform.Rotate(Vector3.up* h2 * scale * 10); //rotation.y += 0.05f;
			transform.Rotate(Vector3.up * h2 * scale * 10);//.y += 0.05f;
			transform.position -= cameraLeft.transform.forward * distance;
			/*
			transform.position += transform.forward * distance;
			cameraOrientationCube.transform.Rotate(Vector3.forward* v2); //rotation.y += 0.05f;
			transform.Rotate(Vector3.forward * v2);//.y += 0.05f;
			transform.position -= transform.forward * distance;
			*/
		}
	}
	else if(itemArea != null) {
		if(Mathf.Abs(h2) > 0 || Mathf.Abs(v2) > 0) {
			itemArea.transform.Rotate(Vector3.up* h2 * scale * 10);
		}
		
		if(Input.GetKey ("joystick button 7"))  {
			transform.position = Vector3(0, 10, -13);
		}
	}
	else {
		
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