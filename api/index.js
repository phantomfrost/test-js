export default function handler(request, response) {
	const { Test } = "测试";
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
					<span style="font-size: 100px;">${Div_Name}</span>
			</body>
		</html>`;
	res.status(200).send(hpp_installhtml);
}
