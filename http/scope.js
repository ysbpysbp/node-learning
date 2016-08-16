var globalVarible = 'This is global variable';

(function globalFunction() {
	var localVariable = 'This is local variable'

	console.log('Visit global/local variable')
	console.log(globalVarible)
	console.log(localVariable)

	globalVarible = 'This is changed variable'

	console.log(globalVarible)

	function localFuncation() {
		var innerLocalVariable = 'This is inner local function'
		
		console.log(globalVarible)
		console.log(localVariable)
		console.log(innerLocalVariable)
	}
	localFuncation();
})();