#pragma strict

function Start () {

}

function Update () {
	if(transform.position.y < 0) {
		transform.localScale = Vector3(1, 36.71283, 1);
	}
}