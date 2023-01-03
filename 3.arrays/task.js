// function compareArrays(arr1, arr2) {
//   if (arr1.length === arr2.length) {
//     for (let i = 0; i < arr1.length; i++) {
//       if (arr1[i] === arr2[i]) {
//         return true;
//       } else {
//         return false;
//       }
//     }
//   } else {
//     return false;
//   }
// }

const compareArrays = (arr1, arr2) => arr1.length === arr2.length && arr1.every((n,i) => n === arr2[i]);

function getUsersNamesInAgeRange(users, gender) {
let avg = 0;
if (users.length !== 0) {
  users.filter(user => user.gender === gender).reduce((acc, item, index, arr)=> {
    acc+=item.age;
    if (index === arr.length - 1){
        avg = acc / arr.length;
          return;
          }
          return acc;
        },0);
    } else {
    return 0;
    }
  return avg;
}
