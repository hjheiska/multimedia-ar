#pragma strict

function Start () {

}

function Update () {

}
function OnCollisionEnter (collision : Collision) {
print(collision.gameObject.tag);
    	if(collision.gameObject.tag == "Player") {
    		var creature = GameObject.Find("animoitu_hahmo");
    		print(creature);
    		creature.rigidbody.velocity = Vector3.zero;
			creature.transform.position = Vector3(1, -1, 3);
    	}
    	else {
    		//Destroy(gameObject);
    	}
    }