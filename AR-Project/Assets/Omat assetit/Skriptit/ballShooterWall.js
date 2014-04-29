#pragma strict

var projectile : Rigidbody;
var speed = 4;
var lastTime : float;

function Start () {
	lastTime = Time.time;
}

function Update () {

	var currentTime = Time.time;
	if(currentTime - lastTime > 0.1) { 
		var x =  transform.position.x + Random.Range(-15, 15);
		var y =  transform.position.y + Random.Range(0, 1);
		var z =  transform.position.z;
		var ballPosition = Vector3 (x, y, z - 10);
		var clone = Instantiate(projectile, ballPosition, transform.rotation);
		clone.velocity = transform.TransformDirection( Vector3 (0, 0, speed));
		Destroy (clone.gameObject, 30);
	lastTime = currentTime;	
	}
}