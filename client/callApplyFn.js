(function(window){
	Function.prototype.myCall = function(context) {
		var context = context || window

		context.fn = this

		var args  = [...arguments].splice(1)

		var result = context.fn(...args)

		delete context.fn

		return result
	}

	Function.prototype.myApply = function(context, args) {
		var context = context || window

		context.fn = this

		var result

		if (arguments[1]) {
			result = context.fn(...arguments[1])
		} else {
			result = context.fn()
		}

		delete context.fn

		return result
	}

	Function.prototype.myBind = function(context) {

		if (typeof this !== 'function') {
			throw new TypeError('error')
		}
		var _this = this
		var args = [...arguments].slice(1)

		return function F() {
			if (this instanceof F) {
				return new _this(...args, ...arguments)
			}

			return _this.apply(context, args.concat(...arguments))
		}
	}

	var module = {
		x: 42,
		getX: function() {
			return this.x
		}
	}

	var unboundGetX = module.getX
	console.log(unboundGetX())

	var boundGetX = unboundGetX.bind(module)
	console.log(boundGetX())

})(window)