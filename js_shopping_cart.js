

add_quatity = document.querySelectorAll(".add-quantity");
total_price_product = document.querySelectorAll(".total-price-product");
substraction_quantity = document.querySelectorAll(".substraction-quantity");
reset_quatity = document.querySelectorAll(".reset-quatity");

for (let i = 0; i < add_quatity.length; i++) {
	let x = add_quatity[i];
	x.addEventListener("click", function () {

		let y = parseInt(x.nextElementSibling.childNodes[1].childNodes[0].textContent) + 1;
		x.nextElementSibling.childNodes[1].childNodes[0].textContent = y;
		price_total_product = parseInt(z.previousElementSibling.childNodes[5].childNodes[1].childNodes[0].textContent) * y;
		x.nextElementSibling.nextElementSibling.nextElementSibling.childNodes[1].childNodes[0].textContent = price_total_product;

		let sum = 0;
		for (let j = 0; j < total_price_product.length; j++) {
			sum = parseInt(total_price_product[j].children[0].children[0].textContent) + sum;
		}
		total_price = document.getElementsByClassName("sum-total");
		total_price[0].innerText = sum;

	});

}

for (let i = 0; i < substraction_quantity.length; i++) {
	let x = substraction_quantity[i];
	x.addEventListener("click", function () {
		console.log(substraction_quantity);
		let yy = x.previousElementSibling.childNodes[1].childNodes[0].textContent;
		if (yy == 1) {
			x.previousElementSibling.childNodes[1].childNodes[0].textContent = yy;
			price_total_product = parseInt(x.previousElementSibling.previousElementSibling.previousElementSibling.childNodes[5].childNodes[1].childNodes[0].textContent) * yy;
			x.nextElementSibling.childNodes[1].childNodes[0].textContent = price_total_product;
		}
		else {
			yy = parseInt(yy) - 1;
			x.previousElementSibling.childNodes[1].childNodes[0].textContent = yy;
			price_total_product = parseInt(zz.previousElementSibling.previousElementSibling.previousElementSibling.childNodes[5].childNodes[1].childNodes[0].textContent) * yy;
			x.nextElementSibling.childNodes[1].childNodes[0].textContent = price_total_product;
		}
		let sum = 0;
		for (let j = 0; j < total_price_product.length; j++) {
			sum = parseInt(total_price_product[j].children[0].children[0].textContent) + sum;
		}
		total_price = document.getElementsByClassName("sum-total");
		total_price[0].innerText = sum;
	});

}


for (let i = 0; i < reset_quatity.length; i++) {
	let x = reset_quatity[i];
	x.addEventListener("click", function () {
		x.nextElementSibling.nextElementSibling.nextElementSibling.childNodes[1].childNodes[0].textContent = 1;
		x.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.childNodes[1].childNodes[0].textContent = zzz.nextElementSibling.childNodes[5].childNodes[1].childNodes[0].textContent

		let sum = 0;
		for (let j = 0; j < total_price_product.length; j++) {
			sum = parseInt(total_price_product[j].children[0].children[0].textContent) + sum;
		}
		total_price = document.getElementsByClassName("sum-total");
		total_price[0].innerText = sum;
	});

}