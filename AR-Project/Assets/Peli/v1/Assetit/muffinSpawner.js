#pragma strict
var muffin : GameObject;
var amountOfMuffin: int;

function Start () {
	for(var x = 0; x < amountOfMuffin; x++) {
		Instantiate(muffin, Vector3 (0, 0, 0), transform.rotation);
	}
}

function Update () {

}