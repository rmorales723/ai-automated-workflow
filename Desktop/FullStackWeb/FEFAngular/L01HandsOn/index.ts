interface Person {
    firstName: string;
    lastName: string;
}

interface Contact {
    phoneNumber: number;
    email: string;
}

interface Message {
    sendMessage(): void;
}


class ContactCard implements Person, Contact, Message{
    phoneNumber: number;
    email: string;
    firstName: string;
    lastName: string;

    constructor(phoneNumber: number, firstName: string, lastName: string, email: string) {
        this.phoneNumber = phoneNumber;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    sendMessage(): void {
        console.log(" Name: " + this.firstName + ","  + " Phone Number:" + this.phoneNumber)
    }
}
let newPerson= new ContactCard(1234567890, "Henry", "", "");
newPerson.sendMessage();