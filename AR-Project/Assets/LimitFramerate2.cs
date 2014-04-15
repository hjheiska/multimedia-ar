using UnityEngine;
using System.Collections;
using System.Threading;

public class LimitFramerate2 : MonoBehaviour {
	float oldTime = 0.0F;
	float theDeltaTime= 0.0F;
	float curTime= 0.0F;
	float timeTaken = 0.0F;
	public int frameRate = 1;
	
	// Use this for initialization
	void Start () {
		theDeltaTime = (1.0F /frameRate);
		oldTime = Time.realtimeSinceStartup;
	}
	
	
	// Update is called once per frame
	void LateUpdate () {
		curTime = Time.realtimeSinceStartup;
		timeTaken = (curTime - oldTime);
		if(timeTaken < theDeltaTime){
			Thread.Sleep((int)(1000*(theDeltaTime - timeTaken)));
		}
		
		
		oldTime = Time.realtimeSinceStartup;
	}
}