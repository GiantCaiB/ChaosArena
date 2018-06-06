<!DOCTYPE html>
<html>
<head>
	<title>Chaos Arena</title>
	<link href="css/style.css" rel="stylesheet" type="text/css" />	
	<script type="text/javascript" src="css/script.js"></script>
	<script src="https://apis.google.com/js/client.js?onload=init"></script>
</head>
<body action="javascript:void(0);">
<div id='header'>
</div>
<div id="mainDiv">
	<div id="headDiv">
			<input id="listHero" type="submit" value="" onmouseover="switchPic(this,'/css/play_btn.png')" onmouseout="switchPic(this,'/css/play_btn1.png')">
	</div>
	<div id="hero01Div" style="display:none">
  		<div id="avatarDiv"> <input id="addHero01" type="submit" value="" style="display:none" onmouseover="switchPic(this,'/css/add_btn.png')" onmouseout="switchPic(this,'/css/add_btn1.png')"></div>
  		<div id="des01Div">
		 
		</div>
  		<div id="button01Div"><input id="trainHero01" type="submit" value="" style="display:none" onmouseover="switchPic(this,'/css/train_btn.png')" onmouseout="switchPic(this,'/css/train_btn1.png')"></div>
		<div id="button02Div"><input id="removeHero01" type="submit" value="" style="display:none" onmouseover="switchPic(this,'/css/dismiss_btn.png')" onmouseout="switchPic(this,'/css/dismiss_btn1.png')"></div>
	</div>
	<div id="hero02Div" style="display:none">
		<div id="avatarDiv"><input id="addHero02" type="submit" value="" style="display:none" onmouseover="switchPic(this,'/css/add_btn.png')" onmouseout="switchPic(this,'/css/add_btn1.png')"></div>
		<div id="des02Div">
			
		</div>
		<div id="button01Div"><input id="trainHero02" type="submit" value="" style="display:none" onmouseover="switchPic(this,'/css/train_btn.png')" onmouseout="switchPic(this,'/css/train_btn1.png')"></div>
		<div id="button02Div"><input id="removeHero02" type="submit" value="" style="display:none" onmouseover="switchPic(this,'/css/dismiss_btn.png')" onmouseout="switchPic(this,'/css/dismiss_btn1.png')"></div>
	</div>
	<div id="hero03Div" style="display:none">
		<div id="avatarDiv"><input id="addHero03" type="submit" value="" style="display:none" onmouseover="switchPic(this,'/css/add_btn.png')" onmouseout="switchPic(this,'/css/add_btn1.png')"></div>
		<div id="des03Div">
			
		</div>
		<div id="button01Div"><input id="trainHero03" type="submit" value="" style="display:none" onmouseover="switchPic(this,'/css/train_btn.png')" onmouseout="switchPic(this,'/css/train_btn1.png')"></div>
		<div id="button02Div"><input id="removeHero03" type="submit" value="" style="display:none" onmouseover="switchPic(this,'/css/dismiss_btn.png')" onmouseout="switchPic(this,'/css/dismiss_btn1.png')"></div>
	</div>
	<div id="bossDiv" style="display:none">
	<div id="avatarDiv"></div>
	<div id="des04Div">
	</div>
	<div id="button03Div"><input id="challenge" type="submit" value="" onmouseover="switchPic(this,'/css/cha_btn.png')" onmouseout="switchPic(this,'/css/cha_btn1.png')"></div>
	</div>

</body>
</html>
