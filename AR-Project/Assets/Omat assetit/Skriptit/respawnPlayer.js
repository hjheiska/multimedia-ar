#pragma strict

function Start () {

}

function Update () {
	if(transform.position.y < -10) {
		rigidbody.velocity = Vector3.zero;
		transform.position = Vector3(1, -1, 3);
	}
}