module.exports = function solveEquation(equation) {
  	equation = equation.split(' ');
	let a = +equation[0];
	let arr = [];
	function getarg(elem1,elem2){
  		let arr = [];
  		arr.push(equation[elem1]);
  		arr.push(equation[elem2]);
  		return arr.join("");
	}
	let b = +getarg(3,4);
	let c = +getarg(7,8);
	let d = b*b - 4*a*c;
	let answer = [];
	if (d>0){
		answer.push(Math.round((-b-Math.sqrt(d))/(2*a)));
		answer.push(Math.round((-b+Math.sqrt(d))/(2*a)));
	} else if (d==0){
 		answer.push(Math.round((-b)/(2*a)));
	} else {
		 breack;
	}
	return answer.sort((a, b) =>  a - b);
}
