//Dùng Freeze sẽ không sửa đc
const student = Object.freeze({
    fullName: "Nguyen Van A",
});
student.fullName = "Nguyen Van B";
const stu = {}
Object.defineProperty(stu, 'name', {
    value: 'Tuna',
    writable:false
})
stu.name = 'nguyen Van B'
console.log(stu);
console.log(student);
