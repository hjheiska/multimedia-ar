#pragma strict
var boxAgainstCreature : AudioClip;
var bouncingSound : AudioClip;
var idlingSound : AudioClip;
var audio1 : AudioSource; 
var audio2 : AudioSource;
var audio3 : AudioSource;
private var controller : ThirdPersonController;
function Start () {
	/*
	QualitySettings.vSyncCount = 0;
	Application.targetFrameRate = 30;
	*/
	var aSources = GetComponents(AudioSource);
    audio1 = aSources[0];
    audio2 = aSources[1];
    audio3 = aSources[2];
    audio1.clip = boxAgainstCreature; 
    audio1.volume = 0.3;
    audio2.clip = bouncingSound;
    audio2.volume = 0.4;
    audio3.clip = idlingSound;
	audio3.volume = 0.4;
	
	controller = GetComponent(ThirdPersonController);
}

function Update () {
	//shootRandomBall();
}

    // this script pushes all rigidbodies that the character touches
    var pushPower = 2.0;
     
function OnControllerColliderHit (hit : ControllerColliderHit)
    {
    var body : Rigidbody = hit.collider.attachedRigidbody;
     
    // no rigidbody
    if (body == null || body.isKinematic) { return; }
     
    // We dont want to push objects below us
    if (hit.moveDirection.y < -0.3) { return; }
     
    // Calculate push direction from move direction,
    // we only push objects to the sides never up and down
    var pushDir = Vector3 (hit.moveDirection.x, 0, hit.moveDirection.z);
     
    // If you know how fast your character is trying to move,
    // then you can also multiply the push velocity by that.
     
    // Apply the push
    if(body.tag == "pushable") {
    body.velocity = pushDir * pushPower;
   	}
   	// play animation
   	if (controller._animation){
    	controller._animation.Play(controller.pushAnimation.name); 
    }
	if(!audio1.isPlaying) audio1.Play();
	
}
    
function playBouncingSound() {
	if(!audio2.isPlaying) { 
		audio2.Play(); 
	}
}  

function playIdlingSound() {
	if(!audio3.isPlaying) { 
		audio3.Play();
		
		} 
}  
function stopIdlingSound() {

	audio3.Stop();
}
var speed = 4;
var lastTime : float;
var projectile : Rigidbody;

function shootRandomBall() {
	
	var currentTime = Time.time;
	if(currentTime - lastTime > 2) { 
		var x = (Random.Range(-10,10));
		var y = (Random.Range(10,10));
		var z = (Random.Range(-10,10));
		var ballPosition = Vector3(x,y,z);
		
		
		var directionTowardsPlayer = Vector3.Normalize(transform.position - ballPosition);
		directionTowardsPlayer = -directionTowardsPlayer;
		directionTowardsPlayer.y = 0;
		var clone = Instantiate(projectile, ballPosition,  Quaternion.identity);
		
		
		
		
		clone.velocity = transform.TransformDirection( directionTowardsPlayer * 10);
		
		Destroy (clone.gameObject, 5);
	lastTime = currentTime;	
	}
}
    