// bien global 
var message = " Học ve scope "

    console.log(message)
// bien global 2
var message = " Học ve scope 2 "

function logger(){
   console.log(message)
}

logger()

// hàm global
function log(){
   console.log("IN RA LOG")
}

function logger(){
   log()
}

logger()

// code block
{
   const age = 18
}
console.log(age)

// local scope
function logger(){
      var fullName = "Son Dang"
      console.log(fullName)
   }
    logger()
// local scope 2
function logger(){
   function logger2(){
      console.log("LOG 2")
   }
   logger2()
}
 logger()

 // các hàm luôn tạo ra một phạm vi mới 
  function logger(first, last){
   console.log(first,last)
  }
   logger('Son', 'Dang')
   logger('Nam', 'Hoai')
   logger('Dung', 'Nguyen')

// các hàm có thể truy cập các biến được khai báo bên trong phạm vi của nó và bên ngoài nó
const fullName = "Long Nguyen"
function logger(first, last){
   console.log(first,last)
   const age = 20
   console.log(age, fullName)
  }
   logger('Son', 'Dang')
   logger('Nam', 'Hoai')
   logger('Dung', 'Nguyen')
   // VD thêm bên ngoài 
   function logger(){
      const age = 18
      
       function logger2(){
      console.log(age)
        }
   logger2()
}
 logger()

 // cách thức một biến được truy cập
 const age = 18
 {
   const age = 16
   {
      {
         const age = 14
         {
            const age = 12
            console.log(age)
         }
      }
   }
 }


 //khi nào thì biến xóa khỏi bộ nhớ
 // khi thoát khỏi khối mã
{
   const age = 16
   console.log(age)
}
 function logger() {
   const rand = Math. random()
   console. log( rand)
}
   logger()
   // trường hợp đặc biệt
 function makeCouter(){
   let counter = 0
    function increase(){
      return ++counter
    }
    return increase
 }
  const increase1 = makeCouter()
   console.log(increase1())
   console.log(increase1())
   console.log(increase1())