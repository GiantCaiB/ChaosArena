<?php 
	session_start();
	require_once 'php/google-api-php-client/vendor/autoload.php';
?>
<!DOCTYPE html>
<html>
<head>
	<title>Heroes of Chaos Arena</title>
	<meta charset='UTF-8'>
	<link href='https://fonts.googleapis.com/css?family=Cabin' rel='stylesheet' type='text/css'>
	<link rel='stylesheet' type='text/css' href='/css/style.css'>
	<script type="text/javascript" src="css/script.js"></script>
	<script src="https://apis.google.com/js/client.js?onload=init"></script>
</head>
<body>
	<div id='header'>
	</div>
	<script>
		//alert("page2:"+window['localStorage'].getItem('slotNum')); 
	</script>

	<div class='content'>
	<?php
		$client = new Google_Client();
		$client->useApplicationDefaultCredentials();
		$client->addScope(Google_Service_Bigquery::BIGQUERY);
		$bigquery = new Google_Service_Bigquery($client);
		$projectId = 's3261107-ccs2017-go';

		$request = new Google_Service_Bigquery_QueryRequest();
		$str = '';
		
		$request->setQuery("SELECT * FROM [heroes.default_heroes] LIMIT 30");
		
		$response = $bigquery->jobs->query($projectId, $request);
		$rows = $response->getRows();
		$str = "<table>".
		"<tr>" .
		"<th>ID</th>" .
		"<th>Name</th>" .
		"<th>Race</th>" .
		"<th>Class</th>" .
		"<th>Level</th>" .
		"<th>Gender</th>" .
		"<th>Strength</th>" .
		"<th>Agility</th>" .
		"<th>Intelligence</th>" .
		"<th>Stamina</th>" .
		"<th>Operations</th>" .
		"</tr>";
		
		foreach ($rows as $row)
		{
			$str .= "<tr>";
			$hero=array();
			foreach ($row['f'] as $field)
			{
				$str .= "<td>" . $field['v'] ."</td>";
				array_push($hero,$field['v']);
			}
			$str .= "<td>	<a onclick='addHero(\"".$hero[1]."\",\"".$hero[2]."\",\"".$hero[3]."\",\"".$hero[4]."\",\"".$hero[5]."\",\"".$hero[6]."\",\"".$hero[7]."\",\"".$hero[8]."\",\"".$hero[9]."\")' href='http://s3261107-ccs2017-go.appspot.com/'>Recruit</a>
			</td>"."</tr>";
		}
		$str .= '</table></div>';
		echo $str;
	?>
	</div>
</body>
</html>
