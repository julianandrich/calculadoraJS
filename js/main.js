window.addEventListener("load", () => {
	// Escuchamos cuando se carga el documento

	// Creamos 2 cosntantes y nos caurdamos los elementos que necesitamos
	const display = document.querySelector(
		".calculator-display"
	);
	const keypaddButtons =
		document.getElementsByClassName(
			"keypad-button"
		);

	// Creamos otra constante para convertir el HTMLCollection a Array
	const keypaddButtonsArray = Array.from(
		keypaddButtons
	);

	// Iteramos por nuestro nuevo array de botones
	keypaddButtonsArray.forEach((button) => {
		// A cada botón le agregamos un listener
		button.addEventListener("click", () => {
			calculadora(button, display);
		});
	});
});

const calculadora = (button, display) => {
	switch (button.innerHTML) {
		case "C":
			borrar(display);
			break;

		case "=":
			calcular(display);
			break;

		default:
			actualizar(display, button);
			break;
	}
};

const calcular = (display) => {
	display.innerHTML = eval(display.innerHTML); // Tomar el string, resolverlo y guardarlo en el innerHTML del display
};

const actualizar = (display, button) => {
	if (display.innerHTML == 0) {
		display.innerHTML = "";
	}
	display.innerHTML += button.innerHTML;
};

const borrar = (display) => {
	display.innerHTML = 0;
};
