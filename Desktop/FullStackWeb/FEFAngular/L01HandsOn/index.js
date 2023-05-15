"use strict";
class ContactCard {
    constructor(phoneNumber, firstName, lastName, email) {
        this.phoneNumber = phoneNumber;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    sendMessage() {
        console.log(" Name: " + this.firstName + "," + " Phone Number:" + this.phoneNumber);
    }
}
let newPerson = new ContactCard(1234567890, "Henry", "", "");
newPerson.sendMessage();
