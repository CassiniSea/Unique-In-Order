var uniqueInOrder=function(iterable){
	return Array.from(iterable).join('').replace(/(.)\1+/g, '$1').split('').map(value => parseInt(value) ? parseInt(value) : value)
}

console.log(uniqueInOrder('AAAABBBCCDAABBB'))
console.log(uniqueInOrder([1, 2, 2, 3, 3]))