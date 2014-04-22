#pragma strict
 var other :Transform;
 var levelToLoad ="";
function Start () {

}

function Update() {
    var dist = Vector3.Distance(other.position, transform.position);  
    
    if(dist <2) {
    	if(levelToLoad != "") {
    	  Application.LoadLevel (levelToLoad); 
    	}
    }

}