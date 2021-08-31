console.log("Welcome to The Address Book JS Program ")
var prompt = require('prompt-sync')();

let addressBookArray = new Array();


//Creating class
class Contact {
    
    //Creating a method constructor 
    constructor(...params) {
        this.firstName = params[0];
        this.lastName = params[1];
        this.address = params[2];
        this.city = params[3];
        this.state = params[4];
        this.zip = params[5];
        this.phoneNo = params[6];
        this.email = params[7];
    }
    //generating getters and setters and checking validation
    get firstName() { return this._firstName; }
    set firstName(firstName) {
        let firstNameRegex = RegExp('^[A-Z]{1}[a-z]{3,}$');
        if (firstNameRegex.test(firstName))
            this._firstName = firstName;
        else throw 'First Name Should contain one upper case and min 3 characters';
    }

    get lastName() { return this._lastName; }
    set lastName(lastName) {
        let lastNAmeRegex = RegExp('^[A-Z]{1}[a-z]{3,}$');
        if (lastNAmeRegex.test(lastName))
            this._lastName = lastName;
        else throw 'Last Name Should contain one upper case and min 3 characters';
    }

    get address() { return this._address; }
    set address(address) {
        let addressRegex = RegExp('^[A-Za-z\\s\\-]{4,}$');
        if (addressRegex.test(address))
            this._address = address;
        else throw 'Address Should contain at least 4 characters';
    }

    get city() { return this._city; }
    set city(city) {
        let cityRegex = RegExp('^[A-Za-z]{4,}$');
        if (cityRegex.test(city))
            this._city = city;
        else throw 'City Name Should contain at least 4 characters';
    }

    get state() { return this._state; }
    set state(state) {
        let stateRegex = RegExp('^[A-Za-z]{4,}$');
        if (stateRegex.test(state))
            this._state = state;
        else throw 'State Name Should contain at least 4 characters';
    }

    get zip() { return this._zip; }
    set zip(zip) {
        let zipRegex = RegExp('^[0-9]{6}$');
        if (zipRegex.test(zip))
            this._zip = zip;
        else throw 'Zip code Should contain exact 6 digits';
    }

    get phoneNo() { return this._phoneNo; }
    set phoneNo(phoneNo) {
        let phoneNoRegex = RegExp('^[6-9]{1}[0-9]{9}$');
        if (phoneNoRegex.test(phoneNo))
            this._phoneNo = phoneNo;
        else throw 'Phone Number Should contain exact 10 digits';
    }

    get email() { return this._email; }
    set email(email) {
        let emailRegex = RegExp('^[a-z\\+\\-\\_\\.a-z0-9]{3,}\\@[a-z]*\\.[a-z]{1,3}$');
        if (emailRegex.test(email))
            this._email = email;
        else throw 'Email should be in the proper format';
    }

    //to string method
    toString() {
        return "[ First Name: " + this.firstName + ", Last Name: " + this.lastName + ", Address: " + this.address +
            ", City: " + this.city + ", State: " + this.state + ", Zip : " + this.zip + ", Phone No: " +
            this.phoneNo + ", Email: " + this.email + " ]";

    }
}

/**
  * function  add contact used to add the contact details
  * @returns 
  */
function addContact() {
    let firstName = prompt("Enter Firstname: ");
    let lastName = prompt("Enter Lastname: ");
    //checking the duplicate contact
    if (addressBookArray.find((contact) => (contact.firstName + " " + contact.lastName) == (firstName + " " + lastName))) {
        console.log("Given contact  is already present in addressbook.");
        return;
    }
    let address = prompt("Enter Address: ");
    let city = prompt("Enter City name: ");
    let state = prompt("Enter State name: ");
    let zip = prompt("Enter zip: ");
    let phoneNumber = prompt("Enter Phone number: ");
    let emailId = prompt("Enter email id: ");
    try {
        let contact = new Contact(firstName, lastName, address, city, state, zip, phoneNumber, emailId);
        addressBookArray.push(contact);
        console.log("Contact is added. ");
    } catch (Exception) {
        console.log(Exception);
    }
}

/**
* To find person by name from address book array and edit the Contact 
*/
function editContact(firstName) {
    let contact;
    for (let i = 0; i < addressBookArray.length; i++) {
        if (addressBookArray[i].firstName === firstName)
            contact = addressBookArray[i];
        if (contact != null) {
            let input = 1;
            while (input != 9) {
                console.log("\nChoose to edit: \n1. First Name \n2. Last Name \n3. Address \n4. City \n5. State");
                console.log("6. Zipcode \n7. Phone Number \n8. Email \n9. View Edited Details & Exit");
                input = prompt("Enter Your Choice: ");
                input = parseInt(input);
                switch (input) {
                    case 1: let fname = prompt("Enter the firstname: ");
                        contact.firstName = fname;
                        break;
                    case 2: let lname = prompt("Enter the last Name: ");
                        contact.lastName = lname;
                        break;
                    case 3: let address_edit = prompt("Enter the address: ");
                        contact.address = address_edit;
                        break;
                    case 4: let city_edit = prompt("Enter the city: ");
                        contact.city = city_edit;
                        break;
                    case 5: let state_edit = prompt("Enter the state: ");
                        contact.state = state_edit;
                        break;
                    case 6: let zip_edit = prompt("Enter the pincode: ");
                        contact.zip = zip_edit;
                        break;
                    case 7: let phone_edit = prompt("Enter the phone number: ");
                        contact.phoneNumber = phone_edit;
                        break;
                    case 8: let mail_edit = prompt("Enter the email: ");
                        contact.email = mail_edit;
                        break;
                    case 9: console.log("\n", contact);
                        break;
                    default: console.log("Choose Correct Choice");

                }
            }
        }
    }
}
/**
* deleting contact
*/
function deleteContact() {
    //checking contacts are there or not
    if (addressBookArray.length == 0) {
        console.log("No contacts in the list");
    }
    //taking input from user
    let name = prompt("Enter contact firstname you want to delete: ");
    //finding the person contact in addressBook
    let found = addressBookArray.find((contact) => contact.firstName == name);
    if (found == undefined) {
        console.log("No such contact in Addressbook.");
    } else {
        addressBookArray = addressBookArray.filter((contacts) => contacts.firstName != name);
        console.log("Contact is deleleted from Addressbook.")
    }
}
/**
* Ability to search Person in a particular City or State 
*/
function searchByCityOrState(searchCityOrState, choice){
    let contacts = new Array();
    if(choice == 1){
        contacts = addressBookArray.filter(contact => contact.city === searchCityOrState)
    }
    if(choice == 2){
        contacts = addressBookArray.filter(contact => contact.state === searchCityOrState)
    }
    console.log("Contact: ",contacts);
}

let choice = 0;
do {
    console.log("Press: \n1) Add Contact \n2) Edit Contact \n3) View Contact \n4)Delete Contact\n5)Number Of Contacts\n6)Search person by city or state\n7)Exit:");
    choice = Number(prompt("Enter your choice: "));
    if (choice == 1) {
        addContact();
    }
    if (choice == 2) {
        if (addressBookArray.length == 0) {
            console.log("No contacts in Addressbook.");
        }
        let userData = prompt("Enter the contact firstname which you want to edit: ");
        editContact(userData);
    }
    if (choice == 3) {
        for (let i = 0; i < addressBookArray.length; i++)
            console.log(addressBookArray[i].toString(), "\n");
    }
    if (choice == 4) {
        deleteContact();
    }
    if(choice == 5){
        console.log("Number of Contacts are: "+addressBookArray.reduce(contact=>contact + 1, 0));
    }
    if(choice == 6){
        console.log("1) Search By City  2) Search By State");
        //Asking user to enter the choice
        let ch = Number(prompt("Enter your choice: "));
        switch (ch){
            case 1: let city = prompt("Enter the city name: ");
                    ///calling the function  searchByCityOrState
                    searchByCityOrState(city, 1);
                    break;
            case 2: let state = prompt("Enter the state name: ");
                    searchByCityOrState(state, 2);
                    break;
        }
    }
} while (choice != 7);