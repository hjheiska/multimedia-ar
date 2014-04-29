#pragma strict

function Start () {

}

function Update () {

}
function OnCollisionEnter (collision : Collision) {

    	if(collision.gameObject.tag == "Player") {
    		var creature = GameObject.Find("animoitu_hahmo");
    		creature.rigidbody.velocity = Vector3.zero;
			creature.transform.position = Vector3(-5, -3, 3);
			Destroy(gameObject);
    	}
    	else {
    		Destroy(gameObject);
    	}
    }