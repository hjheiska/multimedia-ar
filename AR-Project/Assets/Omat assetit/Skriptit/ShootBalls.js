#pragma strict

var projectile : Rigidbody;
var speed = 4;
var lastTime : float;

function Start () {
	lastTime = Time.time;
}

function Update () {

if ( Input.GetButton ("Fire1")) {
	
	var currentTime = Time.time;
	if(currentTime - lastTime > 0.01) { 
		var clone = Instantiate(projectile, transform.position, transform.rotation);
		clone.velocity = transform.TransformDirection( Vector3 (0, 0, speed));
		Destroy (clone.gameObject, 30);
	lastTime = currentTime;	
	}

}}