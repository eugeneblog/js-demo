
// map的作用是生成一个新数组，遍历原数组，将每个元素拿出来变换 append到新的数组中
[1, 2, 3].map((v) => v + 1)

// flatMap 和 map的作用几乎相同， 但是对于多维数组来说，会将原数组降维	
[1, [2], 3].flatMap((v) + 1)
// -> [2, '21', 4]

// 数组降维还可以这样做 Reduce 作用是数组中的值组合起来，最终得到一个值
const flattenDeep = (arr) => Array.isArray(arr)
	? arr.reduce( (a, b) => [...a, ...flattenDeep(b)], [])
	: [arr]

flattenDeep([1, [[2], [3, [4]], 5]])

function a() {
	console.log(1)
}

function b() {
	console.log(2)
}

[a, b].reduce((a, b) => a(b()))
// -> 2 1
