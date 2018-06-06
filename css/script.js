
function init() {
	if(window['localStorage'].getItem('bossNum')==null){
		window['localStorage'].setItem('bossNum', 0);
	}
	//window['localStorage'].setItem('bossNum', 0);
	//window['localStorage'].removeItem('bossNum');
	//Parameters are APIName,APIVersion,CallBack function,API Root
	//do not forget to modify the URL below that contain your Project ID
	gapi.client.load('heroendpoint', 'v1', null, 'https://s3261107-assignment2.appspot.com/_ah/api');
	gapi.client.load('bossendpoint', 'v1', null, 'https://s3261107-assignment2.appspot.com/_ah/api');
	document.getElementById('listHero').onclick = function() {
		listHero();
	}
	document.getElementById('trainHero01').onclick = function() {
		trainHero(1);
	}
	document.getElementById('trainHero02').onclick = function() {
		trainHero(2);
	}
	document.getElementById('trainHero03').onclick = function() {
		trainHero(3);
	}
	document.getElementById('removeHero01').onclick = function() {
		removeHero(1);
		alert('Hero Dismissed!');
	}
	document.getElementById('removeHero02').onclick = function() {
		removeHero(2);
		alert('Hero Dismissed!');
	}
	document.getElementById('removeHero03').onclick = function() {
		removeHero(3);
		alert('Hero Dismissed!');
	}
	document.getElementById('addHero01').onclick = function() {
		recruitHero(1);
	}
	document.getElementById('addHero02').onclick = function() {
		recruitHero(2);
	}
	document.getElementById('addHero03').onclick = function() {
		recruitHero(3);
	}
	document.getElementById('challenge').onclick = function() {
		challengeBoss();
	}
}
//List Heroes function that will execute the listHero call
function listHero() {
	document.getElementById('hero01Div').style.display='inline';
	document.getElementById('hero02Div').style.display='inline';
	document.getElementById('hero03Div').style.display='inline';		
	document.getElementById('bossDiv').style.display='inline';
	document.getElementById('des01Div').innerHTML = "Loading......";
	document.getElementById('des02Div').innerHTML = "Loading......";
	document.getElementById('des03Div').innerHTML = "Loading......";
	document.getElementById('des04Div').innerHTML = "Loading......";
	document.getElementById('trainHero01').style.display='none';
	document.getElementById('removeHero01').style.display='none';
	document.getElementById('trainHero02').style.display='none';
	document.getElementById('removeHero02').style.display='none';
	document.getElementById('trainHero03').style.display='none';
	document.getElementById('removeHero03').style.display='none';
	document.getElementById('addHero01').style.display='none';
	document.getElementById('addHero02').style.display='none';
	document.getElementById('addHero03').style.display='none';
	gapi.client.heroendpoint.listHero().execute(function(resp) {
		if (!resp.code) {
			resp.items = resp.items || [];
			document.getElementById('des01Div').innerHTML = "";
			document.getElementById('des02Div').innerHTML = "";
			document.getElementById('des03Div').innerHTML = "";
			document.getElementById('addHero01').style.display='inline';
			document.getElementById('addHero02').style.display='inline';
			document.getElementById('addHero03').style.display='inline';
			//display hero's details in a table 
			for (var i=0;i<resp.items.length;i++){
				var result = "<table><tr><th>Name</th><td>" + resp.items[i].name + "</td></tr><tr><th>Race</th><td>" + resp.items[i].raceType + "</td></tr><tr><th>Class</th><td>" +  resp.items[i].classType +  "</td></tr><tr><th>Level</th><td>" + resp.items[i].level + "</td></tr><tr><th>Gender</th><td>" + resp.items[i].gender + "</td></tr><tr><th>Strength</th><td>" + resp.items[i].strength + "</td></tr><tr><th>Agility</th><td>" + resp.items[i].agility + "</td></tr><tr><th>Intelligence</th><td>" + resp.items[i].intelligence + "</td></tr><tr><th>Stamina</th><td>" + resp.items[i].stamina + "</td></tr></table>";                                     
				if(i==0){
					document.getElementById('des01Div').innerHTML = result;
					document.getElementById('trainHero01').style.display='inline';
					document.getElementById('removeHero01').style.display='inline';
					document.getElementById('addHero01').style.display='none';
				}
				if(i==1){
					document.getElementById('des02Div').innerHTML = result;
					document.getElementById('trainHero02').style.display='inline';
					document.getElementById('removeHero02').style.display='inline';
					document.getElementById('addHero02').style.display='none';
				}
				if(i==2){
					document.getElementById('des03Div').innerHTML = result;
					document.getElementById('trainHero03').style.display='inline';
					document.getElementById('removeHero03').style.display='inline';
					document.getElementById('addHero03').style.display='none';
				}
			}
		}
	});
	gapi.client.bossendpoint.listBoss().execute(function(resp) {
		if (!resp.code) {
			resp.items = resp.items || [];
			document.getElementById('des04Div').innerHTML = "";
			//display boss's details in a table 
			var result = "<table><tr><th>Name</th><td>" + resp.items[window['localStorage'].getItem('bossNum')].name + "</td></tr><tr><th>Class</th><td>" +  resp.items[window['localStorage'].getItem('bossNum')].classType +  "</td></tr><tr><th>Level</th><td>" + resp.items[window['localStorage'].getItem('bossNum')].level + "</td></tr><tr><th>Attack</th><td>" + resp.items[window['localStorage'].getItem('bossNum')].attack + "</td></tr><tr><th>Defense</th><td>" + resp.items[window['localStorage'].getItem('bossNum')].defense + "</td></tr><tr><th>Stamina</th><td>" + resp.items[window['localStorage'].getItem('bossNum')].stamina + "</td></tr></table>";                                     
			document.getElementById('des04Div').innerHTML = result;	
		}
	});
	document.getElementById('listHero').style.display='none';
}

function trainHero(num) {
	gapi.client.heroendpoint.listHero().execute(function(resp) {
		if (!resp.code) {
			resp.items = resp.items || [];
			var _QuoteID = resp.items[num-1].id;
			var _QuoteName = resp.items[num-1].name;
			var _QuoteRace = resp.items[num-1].raceType;
			var _QuoteClass = resp.items[num-1].classType;
			var _QuoteLevel = resp.items[num-1].level;
			var _QuoteGender = resp.items[num-1].gender;
			var _QuoteStrength = resp.items[num-1].strength;
			var _QuoteAgility = resp.items[num-1].agility;
			var _QuoteIntelligence = resp.items[num-1].intelligence;
			var _QuoteStamina = resp.items[num-1].stamina;
			//alert(_QuoteRace+","+_QuoteClass+","+_QuoteLevel);
			//Build the Request Object						
			var requestData = {};
			requestData.id = _QuoteID;
			requestData.name = _QuoteName;
			requestData.raceType = _QuoteRace;
			requestData.classType = _QuoteClass;
			requestData.gender = _QuoteGender;
			requestData.strength = _QuoteStrength;
			requestData.agility = _QuoteAgility;
			requestData.intelligence = _QuoteIntelligence;
			requestData.stamina = _QuoteStamina+1;
			requestData.level = _QuoteLevel;
			//max level 100
			if(requestData.level<100){
				//level up +1
				requestData.level +=1;
				//based on the race
				if(_QuoteRace == "Elf"){
					requestData.intelligence += 1;
				}
				if(_QuoteRace == "Dwarf"){
					requestData.stamina += 1;
				}
				if(_QuoteRace == "Orc"){
					requestData.strength += 1;
					requestData.stamina += 1;
				}
				if(_QuoteRace == "Halfling"){
					requestData.agility += 1;
				}
				//based on the class
				if(_QuoteClass =="Warrior"){
					requestData.strength += 1;
				}
				if(_QuoteClass =="Ranger"){
					requestData.agility += 1;
				}
				if(_QuoteClass =="Preist"){
					requestData.intelligence += 1;
				}
				if(_QuoteClass =="Mage"){
					requestData.intelligence += 1;
				}
				if(_QuoteClass =="Warlock"){
					requestData.intelligence += 1;
				}
				if(_QuoteClass =="Rouge"){
					requestData.agility += 1;
				}
				//based on gender
				if(_QuoteGender =="Male"){
				
				}
				//if this quote exists
				gapi.client.heroendpoint.updateHero(requestData).execute(function(resp) {
					if (!resp.code) {
						alert(_QuoteName+' has leveled up!');
						listHero();
					}
				});
			}
			else{
				alert(_QuoteName+' is in the maximum level');
			}
		}				
	});
}
function removeHero(num) {
	gapi.client.heroendpoint.listHero().execute(function(resp) {
		if (!resp.code) {
			resp.items = resp.items || [];
			var _QuoteID = resp.items[num-1].id;
			//alert(_QuoteID);
			//Build the Request Object						
			var requestData = {};
			requestData.id = _QuoteID;
			gapi.client.heroendpoint.removeHero(requestData).execute(function(resp) {
				if (!resp.code) {
					listHero();
				}
			});
		}				
	});
}

function recruitHero() {
	window.location.href = "heroes.php";	
}

function switchPic(x,urlName){
	//alert("test");
	x.style="background: url("+urlName+")";
}

function addHero(h1,h2,h3,h4,h5,h6,h7,h8,h9){
	//alert(h0+","+h2+","+h9); 
	var requestData = {};
	//requestData.id = h0;
	requestData.name = h1;
	requestData.raceType = h2;
	requestData.classType = h3;
	requestData.level = h4;
	requestData.gender = h5;
	requestData.strength = h6;
	requestData.agility = h7;
	requestData.intelligence = h8;
	requestData.stamina = h9;
	gapi.client.heroendpoint.insertHero(requestData).execute(function(resp) {
		if (!resp.code) {
			alert('Hero Recruited!');
			listHero();
		}
	});
	return true;
}

function challengeBoss(){
	//caculate the total damage from all heroes
	var totalAttack = 0;
	//caculate the total survival abilities from all heroes
	var totalSurvivalRate = 0;
	//get all heroes user has
	gapi.client.heroendpoint.listHero().execute(function(resp) {
		if (!resp.code) {
			resp.items = resp.items || [];
			//3 heroes
			for (var i=0;i<resp.items.length;i++){
				var _QuoteName = resp.items[i].name;
				var _QuoteRace = resp.items[i].raceType;
				var _QuoteClass = resp.items[i].classType;
				var _QuoteLevel = resp.items[i].level;
				var _QuoteGender = resp.items[i].gender;
				var _QuoteStrength = resp.items[i].strength;
				var _QuoteAgility = resp.items[i].agility;
				var _QuoteIntelligence = resp.items[i].intelligence;
				var _QuoteStamina = resp.items[i].stamina;
				//caculate totalAtk
				if(_QuoteClass=="Warrior"){
					totalAttack += _QuoteStrength;
				}
				if(_QuoteClass=="Ranger"||_QuoteClass=="Rouge"){
					totalAttack += _QuoteAgility;
				}
				if(_QuoteClass=="Mage"||_QuoteClass=="Warlock"){
					totalAttack += _QuoteIntelligence;
				}
				//caculate totalSR
				totalSurvivalRate += _QuoteStamina+_QuoteAgility/4;
				if(_QuoteClass=="Preist"){
					totalSurvivalRate += _QuoteIntelligence*2;
				}
				if(i==0){
					//Build the Request Object						
					var hero_01 = {};
					hero_01.name = _QuoteName;
					hero_01.raceType = _QuoteRace;
					hero_01.classType = _QuoteClass;
					hero_01.level = _QuoteLevel;
					hero_01.gender = _QuoteGender;
					hero_01.strength = _QuoteStrength;
					hero_01.agility = _QuoteAgility;
					hero_01.intelligence = _QuoteIntelligence;
					hero_01.stamina = _QuoteStamina;
				}
				if(i==1){
					//Build the Request Object						
					var hero_02 = {};
					hero_02.name = _QuoteName;
					hero_02.raceType = _QuoteRace;
					hero_02.classType = _QuoteClass;
					hero_02.level = _QuoteLevel;
					hero_02.gender = _QuoteGender;
					hero_02.strength = _QuoteStrength;
					hero_02.agility = _QuoteAgility;
					hero_02.intelligence = _QuoteIntelligence;
					hero_02.stamina = _QuoteStamina;
				}
				if(i==2){
					//Build the Request Object						
					var hero_03 = {};
					hero_03.name = _QuoteName;
					hero_03.raceType = _QuoteRace;
					hero_03.classType = _QuoteClass;
					hero_03.level = _QuoteLevel;
					hero_03.gender = _QuoteGender;
					hero_03.strength = _QuoteStrength;
					hero_03.agility = _QuoteAgility;
					hero_03.intelligence = _QuoteIntelligence;
					hero_03.stamina = _QuoteStamina;
				}
			}
		}
		//get the current boss
		gapi.client.bossendpoint.listBoss().execute(function(resp) {
			if (!resp.code) {
				resp.items = resp.items || [];
				var _QuoteName = resp.items[window['localStorage'].getItem('bossNum')].name;
				var _QuoteClass = resp.items[window['localStorage'].getItem('bossNum')].classType;
				var _QuoteLevel = resp.items[window['localStorage'].getItem('bossNum')].level;
				var _QuoteAtk = resp.items[window['localStorage'].getItem('bossNum')].attack;
				var _QuoteDef = resp.items[window['localStorage'].getItem('bossNum')].defense;
				var _QuoteStamina = resp.items[window['localStorage'].getItem('bossNum')].stamina;
				var boss = {};
				boss.name = _QuoteName;
				boss.classType = _QuoteClass;
				boss.level = _QuoteLevel;
				boss.attack = _QuoteAtk;
				boss.defense = _QuoteDef;
				boss.stamina = _QuoteStamina;

				//test: alert("ATK: "+totalAttack+"; SR: "+totalSurvivalRate);
				//boss VS heroes
				var timeToKillBoss = (boss.stamina+boss.defense/2)/totalAttack;
				var timeToGetKilled = totalSurvivalRate/boss.attack;
				//test: alert(timeToKillBoss+":"+timeToGetKilled);
				var winningRate = timeToGetKilled/(timeToKillBoss+timeToGetKilled);
				alert("Your team has "+parseInt(winningRate*100)+"% chance"+" to defeat this boss.");
				//your team win!
				if(Math.random()<=winningRate){
					alert("Your team won!");
					//team members level up!
					for (var i=1;i<=3;i++){
						trainHero(i);
					}
					//new boss appears!
					var bossNum = parseInt(window['localStorage'].getItem('bossNum'))+1;
					window['localStorage'].setItem('bossNum', bossNum);
					alert("A new boss is waiting for your team to challenge!");
					listHero();
				}
				//your team lose
				else{
					alert("Your team lost the fight!");
					window['localStorage'].setItem('bossNum', 0);
					if(typeof hero_01 !== "undefined"){
						var dieRate = 1-hero_01.level/50;
						//hero die!
						if(Math.random()<=dieRate){
							removeHero(1);
							alert("Bad news: one of your heroes, "+hero_01.name+" is dead in this fight");
						}
						if(typeof hero_02 !== "undefined"){
							var dieRate = 1-hero_02.level/100;
							//hero die!
							if(Math.random()<=dieRate){
								removeHero(2);
								alert("Bad news: one of your heroes, "+hero_02.name+" is dead in this fight");
							}
							if(typeof hero_03 !== "undefined"){
								var dieRate = 1-hero_03.level/100;
								//hero die!
								if(Math.random()<=dieRate){
									removeHero(3);
									alert("Bad news: one of your heroes, "+hero_03.name+" is dead in this fight");
								}
							}
						}
					}
					alert("You have to challenge from the 1st boss now!");
					listHero();
				}
			}
		});
	});
	
}
