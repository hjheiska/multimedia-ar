﻿#pragma strict
var originalX = 0f;
var originalY = 0f;
var originalZ = 0f;
	
function Start () {
	transform.localPosition.x = -0.89f;
	//transform.localPosition.y = 19f;
	//transform.localPosition.z = 40;
	
	originalX = transform.position.x;
	originalY = transform.position.y;
	originalZ = transform.position.z;

}

function Update () {

	if(Input.GetKey ("i") || Input.GetKey ("joystick button 0")) {
		transform.localPosition.y += 1;
		originalY += 1;
	}
	if(Input.GetKey ("k") || Input.GetKey ("joystick button 3")) {
		transform.localPosition.y -= 1;
		originalY -= 1;
	}
	if(Input.GetKey ("j") || Input.GetKey ("joystick button 1")) {
		transform.localPosition.x += 1;
		originalX += 1;
	}
	if(Input.GetKey ("l") || Input.GetKey ("joystick button 2")) {
		transform.localPosition.x -= 1;
		originalX -= 1;
	}
	
}

function OnGUI () {

	var difference = originalX - transform.position.x;
	var object = GameObject.Find("RightEyeCameraImage");
	
	var x = Mathf.Round(originalX * 100f) / 100f;
	var y = Mathf.Round(originalY * 100f) / 100f;
	var z = Mathf.Round(originalZ * 100f) / 100f;
	
	GUI.Box (Rect (10,50,90,90), "X:" + x + "\n\rY:" + y + "\n\rZ:" + z);

	
}