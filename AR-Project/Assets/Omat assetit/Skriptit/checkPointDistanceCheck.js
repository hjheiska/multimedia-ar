#pragma strict
 var other :Transform;
 var levelToLoad ="";
function Start () {

}

function Update() {
	var a = Vector2(other.position.x, other.position.z);
	var b = Vector2(transform.position.x, transform.position.z);
    var dist = Vector2.Distance(a, b);  

    if(dist < 2) {
    	if(levelToLoad != "") {
    	  Application.LoadLevel (levelToLoad); 
    	}
    }

}