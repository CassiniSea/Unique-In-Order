var uniqueInOrder = function(iterable){
	return Array.from(iterable).join('').replace(/(.)\1+/g, '$1').split('').map(value => parseInt(value) ? parseInt(value) : value)
}

var uniqueInOrder2 = function(iterable){
	return [...iterable].filter((a, i) => a !== iterable[i - 1])
}

console.log(uniqueInOrder('AAAABBBCCDAABBB'))
console.log(uniqueInOrder([1, 2, 2, 3, 3]))