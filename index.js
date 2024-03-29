const express = require("express");
const cors = require("cors");
const Axios = require("axios");
const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());

app.post("/compile", (req, res) => {
	//getting the required data from the request
	let code = req.body.code;
	let language = req.body.language;
	let input = req.body.input;

	if (language === "java") {
		language = "java"
	}

	let data = ({
		"code": code,
		"language": language,
		"input": input
	});
	let config = {
		method: 'post',
		url: 'https://codexweb.netlify.app/.netlify/functions/enforceCode',
		headers: {
			'Content-Type': 'application/json'
		},
		data: data
	};
	//calling the code compilation API
	Axios(config)
		.then((response) => {
			res.send(response.data)
		}).catch((error) => {
			console.log(error);
		});
})

if (process.env.NODE_ENV === "production") {
	app.use(express.static('client/build'));
}

app.listen(PORT, () => {
	console.log(`Server listening on port ${PORT}`);
});
