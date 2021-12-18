const show = document.querySelector('#show');
const show_link = document.querySelector('.show__link');
const bitcon = document.querySelector('#bitcoin');
const ether = document.querySelector('#ether');
const doge = document.querySelector('#doge');

const url =
	'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin&vs_currencies=usd';

fetch(url)
	.then((resp) => resp.json())
	.then(function (data) {
		bitcon.innerText = `${data['bitcoin']['usd']} $`;
		ether.innerText = `${data['ethereum']['usd']} $`;
		doge.innerText = `${data['dogecoin']['usd']} $`;
	})
	.catch(function (error) {
		console.log(error);
	});

show.addEventListener('click', () => {
	show_link.classList.toggle('show--active');
});
