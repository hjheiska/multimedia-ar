#pragma strict
var paintPrefab : GameObject;
var initialSpeed  : float;
var drag : float;
var yPosition : float;
var timeBetweenShots : float;

var blueMaterial : Material;
var redMaterial : Material;
var greenMaterial : Material;
var yellowMaterial : Material;
var permanentPaint : boolean;

private var lastTime : float;
private var currentTime : float;

function Start () {
	lastTime = Time.time;
}

function Update () {
	if(Input.GetKey ("joystick button 7"))  {
		var paintballs = GameObject.FindGameObjectsWithTag("paintball"); 
		for (var obj : GameObject in paintballs)  { 
			GameObject.Destroy(obj);
		} 
	}
	/*
	var color_v = Input.GetAxisRaw("alempitatti_v");
	var color_h = Input.GetAxisRaw("alempitatti_h");
	*/
	var buttonPressed = Input.GetKey ("joystick button 0")  
					|| Input.GetKey ("joystick button 1")
					|| Input.GetKey ("joystick button 2")
					|| Input.GetKey ("joystick button 3");
	
	currentTime = Time.time;
	if(currentTime - lastTime > timeBetweenShots
		&& buttonPressed) {
		
			/*
			if(color_v > 0 && color_h > 0) paintPrefab.renderer.material = blueMaterial;
			if(color_v > 0 && color_h < 0) paintPrefab.renderer.material = redMaterial;
			if(color_v < 0 && color_h > 0) paintPrefab.renderer.material = greenMaterial;
			if(color_v < 0 && color_h < 0) paintPrefab.renderer.material = whiteMaterial;
			*/
			if(Input.GetKey ("joystick button 0")) paintPrefab.renderer.material = greenMaterial;
			if(Input.GetKey ("joystick button 1")) paintPrefab.renderer.material = redMaterial;
			if(Input.GetKey ("joystick button 2")) paintPrefab.renderer.material = blueMaterial;
			if(Input.GetKey ("joystick button 3")) paintPrefab.renderer.material = yellowMaterial;
			
			paintPrefab.rigidbody.drag = drag;
		
		var clone = Instantiate(paintPrefab, transform.position + Vector3(0,yPosition,0), transform.rotation);
		
		clone.rigidbody.velocity = transform.TransformDirection( Vector3 (0, 0, initialSpeed));
		if(!permanentPaint) Destroy(clone, 10.0);
		lastTime = currentTime;
	}		
}