using UnityEngine;
using System.Collections;

public class kiertaja : MonoBehaviour {


	
	// Update is called once per frame
	void Update () {
		transform.Rotate (new Vector3(15,0,35) * Time.deltaTime);
	}
}
