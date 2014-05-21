#pragma strict

function Start () {

}

function Update () {

}

function OnTriggerEnter (collision : Collider) {
	
	
	if(collision.gameObject.tag == "Player"){
		 Application.LoadLevel(Application.loadedLevel);
	}
}