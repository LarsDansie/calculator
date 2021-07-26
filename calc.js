const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});



reader.question(`What would you like to calculate? "+ - / sqrt sqr cube": `, function(input){
	tokens = input.split(' ');
	
	mathSymbol = tokens[0];
	num1 = Number(tokens[1]);
	num2 = Number(tokens[2]);

	console.log('mathSymbole', mathSymbol);
	console.log('num1', num1);
	console.log('num2', num2);

	if (mathSymbol === "+"){
		console.log(num1 + num2);
	}

	if (mathSymbol === "-"){
		console.log(num1 - num2);
	}

	if (mathSymbol === "*"){
		console.log(num1 * num2);
	}

	if (mathSymbol === "/"){
		console.log(num1 / num2);
	}

	if (mathSymbol === "sqrt"){
		console.log(Math.sqrt(num1));
	}

	if (mathSymbol === "sqr"){
		console.log(num1 * num1)
	}

	if (mathSymbol === "cube"){
		console.log(num1 * num1 * num1)
	}
	// This line closes the connection to the command line interface.
	reader.close()

});
