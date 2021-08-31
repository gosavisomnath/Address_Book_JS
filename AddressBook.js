class Contact
{
    //Creating a method constructor 
    constructor(...params)
    {
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
    get firstName() { return this._firstName;}
    set firstName(firstName) {
        let firstNameRegex = RegExp('^[A-Z]{1}[a-z]{3,}$');
        if(firstNameRegex.test(firstName))
            this._firstName = firstName;
        else throw 'First Name Should contain one upper case and min 3 characters';    
    }

    get lastName() { return this._lastName;}
    set lastName(lastName) {
        let lastNAmeRegex = RegExp('^[A-Z]{1}[a-z]{3,}$');
        if(lastNAmeRegex.test(lastName))
            this._lastName = lastName;
        else throw 'Last Name Should contain one upper case and min 3 characters';    
    }

    get address() { return this._address;}
    set address(address) {
        let addressRegex = RegExp('^[A-Za-z\\s\\-]{4,}$');
        if(addressRegex.test(address))
            this._address = address;
        else throw 'Address Should contain at least 4 characters';    
    }

    get city() { return this._city;}
    set city(city) {
        let cityRegex = RegExp('^[A-Za-z]{4,}$');
        if(cityRegex.test(city))
            this._city = city;
        else throw 'City Name Should contain at least 4 characters';    
    }

    get state() { return this._state;}
    set state(state) {
        let stateRegex = RegExp('^[A-Za-z]{4,}$');
        if(stateRegex.test(state))
            this._state = state;
        else throw 'State Name Should contain at least 4 characters';  
    }

    get zip() { return this._zip;}
    set zip(zip) {
        let zipRegex = RegExp('^[0-9]{6}$');
        if(zipRegex.test(zip))
            this._zip = zip;
        else throw 'Zip code Should contain exact 6 digits'; 
    }

    get phoneNo() { return this._phoneNo;}
    set phoneNo(phoneNo) {
        let phoneNoRegex = RegExp('^[6-9]{1}[0-9]{9}$');
        if(phoneNoRegex.test(phoneNo))
            this._phoneNo = phoneNo;
        else throw 'Phone Number Should contain exact 10 digits'; 
    }

    get email() { return this._email;}
    set email(email) {
        let emailRegex = RegExp('^[a-z\\+\\-\\_\\.a-z0-9]{3,}\\@[a-z]*\\.[a-z]{1,3}$');
        if(emailRegex.test(email))
            this._email = email;
        else throw 'Email should be in the proper format'; 
    }

    //to string method
    toString(){
        return "[ First Name: "+this.firstName+", Last Name: "+this.lastName+", Address: "+this.address+
                ", City: "+this.city+", State: "+this.state+", Zip : "+this.zip+", Phone No: "+
                this.phoneNo+", Email: "+this.email+" ]";

    }
}

//Creating object
let contact1 = new Contact("soma", "Gosavi", "Hadapsar", "Pune", "Maharashtra",411028,123456789, "soma@gmail.com")

//calling the object here
console.log(contact1.toString());
try {
    contact1.firstName = "Vikas";
    console.log(contact1.firstName);  
} catch (error) {
   console.log(error); 
}