#pragma strict
var gameObject1 : GameObject;
var gameObject2 : GameObject;
var gameObject3 : GameObject;
var gameObject4 : GameObject;

function Start () {
	gameObject2.active = false;
	gameObject3.active = false;
	gameObject4.active = false;
}

function Update () {
	if(Input.GetKey ("joystick button 0")) {hideAllObjects();gameObject1.active = true;}
	if(Input.GetKey ("joystick button 1")) {hideAllObjects();gameObject2.active = true;}
	if(Input.GetKey ("joystick button 2")) {hideAllObjects();gameObject3.active = true;}
	if(Input.GetKey ("joystick button 3")) {hideAllObjects();gameObject4.active = true;}
}

function hideAllObjects() {
	gameObject1.active = false;
	gameObject2.active = false;
	gameObject3.active = false;
	gameObject4.active = false;
	
}