window.onload = function() {
	const Test = "测试"
	let xue_html=`
<!doctype html>
<html lang="zh">
	<head>
		<meta charset="UTF-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"> 
		<meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" name="viewport" />
		<title>${Test}</title>
	</head>
	<body>
		<div>
			<span>Div_Name:</span>
			<span style="font-size: 100px;">${process.env.Div_Name}</span>
	</body>
</html>
	`
	return new Response(hpp_installhtml,{headers: { "content-type": "text/html;charset=UTF-8" }});
}
