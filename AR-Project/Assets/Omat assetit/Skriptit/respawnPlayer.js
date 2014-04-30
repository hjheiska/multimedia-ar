#pragma strict

function Start () {

}

function Update () {
	if(transform.position.y < -100) {
		rigidbody.velocity = Vector3.zero;
		transform.position = Vector3(-5, -1, 3);
	}
}