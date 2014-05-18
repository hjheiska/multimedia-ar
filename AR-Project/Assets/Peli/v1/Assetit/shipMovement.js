#pragma strict

var eaterObject: GameObject;


function Start () {
	var x = Random.Range(-20, 20);
	var y = Random.Range(-20, 20);
	var z = Random.Range(-20, 20);
	transform.position = Vector3(x, y + 10, z - 13);
}

function Update () {
	var x = Random.Range(-0.025, 0.025);
	var y = Random.Range(-0.025, 0.025);
	var z = Random.Range(-0.025, 0.025);
	var distance = Vector3.Distance(eaterObject.transform.position, transform.position);
	if(distance < 4) transform.transform.localScale  -= Vector3(0.1, 0.1, 0.1);

	transform.position.x += x;
	transform.position.y += y;
	transform.position.z += z;
	if(Mathf.Abs(transform.position.x) > 10
		|| Mathf.Abs(transform.position.y) > 10
		|| Mathf.Abs(transform.position.z) > 10
		|| transform.transform.localScale.x < 0) { 
			x = Random.Range(-20, 20);
			y = Random.Range(-20, 20);
			z = Random.Range(-20, 20);
			transform.position = Vector3(x, y + 10, z - 13);
			transform.localScale = Vector3(1, 1, 1);	
		}
}