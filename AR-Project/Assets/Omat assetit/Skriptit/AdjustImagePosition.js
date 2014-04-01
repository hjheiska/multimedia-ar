#pragma strict

function Start () {
	transform.position.x = 8;
}

function Update () {
	if(Input.GetKey ("i")) {
		transform.position.y += 0.1;
	}
	if(Input.GetKey ("k")) {
		transform.position.y -= 0.1;
	}
	if(Input.GetKey ("j")) {
		transform.position.x += 0.1;
	}
	if(Input.GetKey ("l")) {
		transform.position.x -= 0.1;
	}
	
}