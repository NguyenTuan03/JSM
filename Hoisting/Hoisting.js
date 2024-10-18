let fullName = "Nguyen Anh Tuan";
{
    let fullName = "Nguyen Van B"
    {
        console.log(fullName); //Nguyen Van B
        
    }
}
// Hoisting với biến let sẽ tìm cái gần nhất để lấy giá trị


const counter1 = makeCounter();
console.log(counter1()); // 1

function makeCounter() {
    let counter = 0;
    return increase;
    function increase() {//hàm này sẽ đưa lên trên đầu phạm vi của nó
        return ++counter;
    }
}