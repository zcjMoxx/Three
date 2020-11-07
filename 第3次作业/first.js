console.log("hello world");
//lv0.1
function sum(arr) {
    return eval(arr.join("+"));
  };
  console.log(sum([ 1, 5, 6, 7, "8", 10 ]))
  //lv0.2
var str = "can-enter-volunteer-organization";
let a = str.replace('-enter-volunteer-organization' , 'EnterVolunteerOrganization')
console.log(a);
//lv1.1
let arr1 = ["myfirstactivity","today activity","yourActivity","activitys"]
arr1.push("activity")
console.log(arr1);
//lv1.2
let arr2 = [ [1,2] , 3,[4,[5,[6]] , 7] ]
function even(arr2){
  let b = arr.flat(Infinity);
  console.log(b);
}
even(arr2);
//lv2.1
let arr3 = [{id:10,name:'kc'},{id:8,name:'hy'},{id:15,name:'pipi'},{id:2,name:'mama'}]
  function compare(property){
    return function(a,b){
        var value1 = a[property];
        var value2 = b[property];
        return value1 - value2;
    }
}
console.log(arr3.sort(compare('id')))
//lv2.2