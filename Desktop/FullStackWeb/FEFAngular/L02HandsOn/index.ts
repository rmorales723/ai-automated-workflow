// interface Person {
//     firstName: string;
//     lastName: string;
//     birthday: Date;
//     }

import { arrayToObjectNotation } from "@chakra-ui/utils";

//     class Entry implements Person{

//         firstName: string;
//         lastName: string;
//         birthday: Date;

//     constructor (firstName: string, lastName: string, birthday: Date){
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.birthday = birthday;

//     }
//     }
//     let newPerson = new Entry ("Albert", "Einstein", new Date("5/14/1879"));
//     console.log("firstName:" + newPerson.firstName + " lastName:" + newPerson.lastName + " birthday:" + newPerson.birthday)

let Numbers:Array<string> = ['twelve',
'one-hundred',
'sixteen',
'forty-four',
'seventy-three',
'three-million'];

function sortArray<S>(array: S[]):S[]{
    return array.sort();
}

console.log('the array before it is sorted: ' + Numbers);
console.log('the array after it has been sorted: ' + sortArray(Numbers))



