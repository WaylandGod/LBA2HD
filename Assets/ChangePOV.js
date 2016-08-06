#pragma strict

var ThePlayer : GameObject;
var FirstPersonCam : GameObject;
var ThirdPersonCam : GameObject;
var check;


function Start () {
	ThirdPersonCam.gameObject.active = false;
	FirstPersonCam.gameObject.active = true;
	check = true;
}

function Update () {
	if(Input.GetKeyDown(KeyCode.R)){
		if(check){
			FirstPersonCam.gameObject.active = false;
			ThirdPersonCam.gameObject.active = true;
		}
		else{
			FirstPersonCam.gameObject.active = true;
			ThirdPersonCam.gameObject.active = false;
		}

		check = !check;
	}
}