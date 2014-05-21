#pragma strict
var boxFallSound : AudioClip;
private var played = false;

function Start () {
	 audio.clip = boxFallSound;
	 
		   
}

function Update () {
	if(transform.position.y < 0.2) {
		 if(!played) audio.Play();
		 played = true;
	}
}