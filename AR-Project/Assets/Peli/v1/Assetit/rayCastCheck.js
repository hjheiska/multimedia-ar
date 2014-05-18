#pragma strict

function Start () {

}

function Update () {
	var hit : RaycastHit;
	if(Physics.Raycast (transform.position, transform.forward, hit)){ // If the player is very close behind the player and in view the enemy will detect the player
		if(hit.transform.tag == "Muffini") {
			
			var directionVector = hit.transform.position - transform.position;
			hit.transform.position -= directionVector.normalized;
		} 
	}
}