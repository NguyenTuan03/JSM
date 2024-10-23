const student = {
    name: 'tuan',
    profile: {
        age: 18,
        location: 'HCM'
    }
}
const stu_profile = student.profile;
student.profile.location = 'Nha Trang'
console.log(stu_profile.location);
