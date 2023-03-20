const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'ac02899cfemsh11ec5e3dd27b9e3p1a351ejsneab9abefe60e',
		'X-RapidAPI-Host': 'anime-quotes1.p.rapidapi.com'
	}
};

fetch('https://anime-quotes1.p.rapidapi.com/api/quotes/character?name=Goku', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));

