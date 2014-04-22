    var boxAgainstFloor : AudioClip;

    var impactSoundThreshold = 0.5; // tweak this value
    
    function OnCollisionStay (collision : Collision) {
    	PlayCollisionSound(collision);
    }
     
    function OnCollisionEnter (collision : Collision) {
    	PlayCollisionSound(collision);
    }
     
    function PlayCollisionSound (collision : Collision) {
     	
     	if (collision.relativeVelocity.magnitude > impactSoundThreshold) {
		   audio.clip = boxAgainstFloor; 
		   
		     // calculate the volume (anything above 4*Threshold = full volume)
		    var volume = 0.3; //Mathf.InverseLerp(impactSoundThreshold, impactSoundThreshold*4, collision.relativeVelocity.magnitude);
		     
		    // play the audio
		    audio.volume = volume;
		    audio.Play();
    	}
    }