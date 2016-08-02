var student = require('./student.js');
var teacher = require('./teacher.js');


function add(teacherName, students) {
	teacher.add(teacherName);
	students.forEach(function(item,index){
		student.add(item);
	});
}

exports.add = add
// module.exports = add

// exports.add = add  is the same with module.exports = add

//模块成为传统的模块实例  使用 exports.add
//模块成为特别的对象类型   使用 module.exports

// exports 是module.exports辅助方法