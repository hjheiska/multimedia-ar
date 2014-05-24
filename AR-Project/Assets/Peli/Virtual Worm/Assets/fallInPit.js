#pragma strict
var player : GameObject;
private var x : float;
private var y : float;
private var z : float;

var cube : GameObject;
private var x2 : float;
private var y2 : float;
private var z2 : float;

function Awake () {
	x = player.transform.position.x;
	y = player.transform.position.y;
	z = player.transform.position.z;
	x2 = cube.transform.position.x;
	y2 = cube.transform.position.y;
	z2 = cube.transform.position.z;
}

function Update () {

}

function OnTriggerEnter (collision : Collider) {
	
	
	if(collision.gameObject.tag == "Player"){
		collision.gameObject.transform.position.x = x;
		collision.gameObject.transform.position.y = y;
		collision.gameObject.transform.position.z = z;
		cube.transform.position.x = x2;
		cube.transform.position.y = y2;
		cube.transform.position.z = z2;
		
		 // Application.LoadLevel("mainScene");
	}
}