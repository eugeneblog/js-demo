// Array.from() 从一个类数组或可迭代对象中创建一个新的数组实例

Array.from('foo')
// -> ['f', 'o', 'o']

Array.from([1,2,3], x => x + x)
// -> [2, 4, 6]

// Array.concat() 方法用于合并两个或多个数组。此方法不会更改现有数组，而是返回一个新的数组
var array1 = ['a','b','c']
var array2 = ['1','2','3']
var newArr = array1.concat(array2)

// Array.entries() 方法返回一个新的Array Iterator对象，该对象包含数组每个索引键/值
var arr1 = ['a','b','c']
var iterator1 = arr1.entries()

// Array.every()方法测试数组的所有元素是否都通过了指定函数的测试,返回boole值
function isBelowThreshold(currentValue) {
	return currentValue < 40
}
var arr1 = [1, 30, 39, 29, 10, 13]
arr1.every(isBelowThreshold)

// Array.fill() 方法用一个固定的值填充一个数组中从起始索引到终止索引内的全部元素，不包括终止索引
var fillArr = [1,2,3,4,5,6]
fillArr.fill(1,3,5) // 用1替换3-5之内的索引元素

// Array.filter() 方法创建一个新数组，其包含通过所提供函数实现的测试的所有元素,返回一个新的通过测试的元素的集合的数组，如果没有通过测试则返回空数组
var words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present']

const result = words.filter(word => word.length > 6)

// Array.find() 方法返回数组中满足提供的测试函数的第一个元素的值
var findArr = [5, 12, 8, 130, 44]
var found = findArr.find(function(ele) {
	return ele > 10
})
// -> 12

// Array.findIndex() 方法返回数组中满足提供的测试函数的第一个元素的索引，否则返回-1
var findIndexArr = [5, 12, 8, 130, 44]
function isLargeNumber(ele) {
	return ele > 13
}
findIndexArr.findIndex(isLargeNumber)
// -> 3

// Array.reduce() 方法对数组中的每个元素执行一个由您提供的reduce函数（升序执行），并将其结果汇总为单个返回值
const reduceArr = [1,2,3,4,5]
const reducer = (accumulator, currentValue) => accumulator + currentValue
reduceArr.reduce(reducer) // 1+2+3+4+5
// -> 15


// Array.flat(depth) 方法会递归到指定深度将所有子数组连接，并返回一个新数组,depth默认值为1,infinity展开所有嵌套数组
var flatArr1 = [1, 2, [3, 4]]
flatArr1.flat()
// -> [1,2,3,4]
var flatArr2 = [1, 2, [3, 4, [5, 6]]]
flatArr2.flat(2)
// -> [1,2,3,4,5,6]
flatArr2.flat(infinity)
// -> [1,2,3,4,5,6]
var flatArr3 = [1,2,,3,4] // flat方法会移除数组中所有空项
flatArr3.flat()
// -> [1,2,3,4]

// Array.includes() 方法用来判断一个数组是否包含一个指定的值，根据情况，如果包含则返回true，否则返回false
var incArr = [1,2,3]
console.log(incArr.includes(2))
// -> true

// Array.join() 方法将一个数组的所有元素连接成一个字符串并返回这个字符串
var elements = ['Fire', 'Wind', 'Rain']
console.log(elements.join(','))

// 数组去重合并
function combine() {
	let arr = [].concat.apply([], arguments)
	return Array.from(new Set(arr))
}
// 使用reduce和concat递归 实现flat函数,使多维数组扁平化
var arr1 = [1,[2,[3,[4,[5,[6,7]]]]]]

function _flatFunc(flatArr, dep=1) {
	//  如果dep为0,直接返回原始数组
	if (Number.isNaN(Number(dep)) || Number(dep) < 1) return flatArr

	var curDep = 1
	function recursionFun(flatArray, dep, curDep) {
		// 如果currentValue 是数组并且传入参数是Infinity或者默认值小于dep，就执行递归调用，用concat连接结果
		return flatArray.reduce(
			(accumulator,currentValue) => (
	         Array.isArray(currentValue) && (dep === Infinity || curDep < dep)
	         ? accumulator.concat(_flatFunc(currentValue, dep, curDep + 1))
	         : accumulator.concat(currentValue)
	      	), []
      	)
	}
	return recursionFun(flatArray, dep, curDep)
}

_flatFunc(arr1)
// -> [1,2,[3,[4,[5,[6,7]]]]]

_flatFunc(arr1, Infinity)
// -> //[1,2,3,4,5,6,7]

// 使用数组的toString方法遍历多维数组
arr1.toString().split(',').map(item => +item)
// ->[1,2,3,4,5,6,7]  转换成了字符串，后面map转换一下数字















