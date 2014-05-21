#pragma strict
var nextLevel = "";
var levelEndSound : AudioClip;
private var played = false;

private var timerStarted : float;

function Start () {
	 audio.clip = levelEndSound;
}

function Update () {
	print(timerStarted);
	if(Time.time - timerStarted > 3 && played) {
			Application.LoadLevel (nextLevel); 
		}
}

function OnTriggerEnter (collision : Collider) {
	
	
	if(collision.gameObject.tag == "Player"){
		
		if(!played) {
			 audio.Play();
			 timerStarted = Time.time;
		} 
		played = true;
	}
}