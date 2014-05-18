#pragma strict
var paint1 : Rigidbody;
var paint2 : Rigidbody;
var speed = 4.0f;
var lastTime : float;

function Start () {
	lastTime = Time.time;
}

function Update () {
	var shootBalls = Input.GetAxisRaw("shootBalls");
	
	var projectile : Rigidbody;
	
		var currentTime = Time.time;
		if(currentTime - lastTime > 0.01) { 
			if ( shootBalls > 0) projectile = paint1;
			if ( shootBalls < 0) projectile = paint2;	
			
			var clone = Instantiate(projectile, transform.position + Vector3(0,0.1,0), transform.rotation);
			 Destroy(clone, 30);
			clone.velocity = transform.TransformDirection( Vector3 (0, 0, speed));
			lastTime = currentTime;	
		}

	
}