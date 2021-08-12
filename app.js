var institute = "SAIMS";

var students = [
    {
        name: "Muhammad Yahiya",
        contact: 03130126325,
        age: 17,
        institute: institute,
        result: 1
    },
    {
        name: "Muhammad Asif",
        contact: 03130126326,
        age: 18,
        institute: institute,
        result: 1
    },
    {
        name: "Muhammad Ali",
        contact: 03130126327,
        age: 19,
        institute: institute,
        result: 1
    },
    {
        name: "Muhammad Ali Mughal",
        contact: 03130126324,
        age: 20,
        institute: institute,
        result: 1
    },
    {
        name: "Muhammad Sabir",
        contact: 03130126323,
        age: 21,
        institute: institute,
        result: 1
    },
    {
        name: "Muhammad Usama",
        contact: 03130126322,
        age: 22,
        institute: institute,
        result: 0
    },
    {
        name: "Muhammad Haris",
        contact: 03130126321,
        age: 23,
        institute: institute,
        result: 0
    },
    {
        name: "Muhammad Aqeel",
        contact: 03130126320,
        age: 24,
        institute: institute,
        result: 0
    },
    {
        name: "Muhammad Ghafoor",
        contact: 03130126312,
        age: 25,
        institute: institute,
        result: 0
    },
    {
        name: "Basit Ahmed",
        contact: 03130126313,
        age: 26,
        institute: institute,
        result: 0
    },



]


for (var i = 0; i < students.length; i++) {
    students[i].rollNo = "00" + (i + 1)

}



var inp = document.getElementById('roll');
var dName = document.getElementById('studentName')
var dResult = document.getElementById('studentResult')

function searchRes() {


    for ( j = 0; j < students.length; j++ ){

        if(  students[j].rollNo == inp.value ){


          if(students[j].result) {
            dName.innerHTML = students[j].name
            dResult.innerHTML =  "Pass"
         }
         else{
               dName.innerHTML = students[j].name
               dResult.innerHTML =  "Fail"
         }
        }
      }


}
