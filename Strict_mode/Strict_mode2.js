//Dùng Freeze sẽ không sửa đc
'use strict'
const student = Object.freeze({
    fullName: "Nguyen Van A",
});
student.fullName = "Nguyen Van B";
const stu = {}
Object.defineProperty(stu, 'name', {
    value: 'Tuna',
    writable:false//có thể thay đổi
    // writable:false//ko thể thay đổi
})
stu.name = 'nguyen Van B'//ko thể thay đổi
console.log(stu);
console.log(student);
