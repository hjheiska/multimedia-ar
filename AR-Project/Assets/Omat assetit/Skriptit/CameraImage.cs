	using UnityEngine;
using System.Collections;

public class CameraImage : MonoBehaviour {
	
	public int cameraNumber = 0;
	private WebCamTexture webcamTexture;
	
	void Start () {
		WebCamDevice[] devices = WebCamTexture.devices;
		if (devices.Length > cameraNumber) {
			webcamTexture = new WebCamTexture(devices[cameraNumber].name, 600, 337, 120);
			renderer.material.mainTexture = webcamTexture;
			webcamTexture.Play();
		} else {
			Debug.Log("no camera");
		}
	}
}