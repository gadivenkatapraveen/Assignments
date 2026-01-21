let abc : string
const countryOfOrigin = Symbol();
interface Product {
productName: string;
ProductPrice: number;
[countryOfOrigin]: string;
eligibleForReturn: boolean;
}
let productDetails: Product = {
productName: 'OnePlus 12',
ProductPrice: 60000,
[countryOfOrigin]: 'China',
eligibleForReturn: false
}

console.log(productDetails);

//------------------------------------------------------------------------------------------------------------------------

interface empDetails {
    empId: number ,
    empName: string,
    havingVisa: boolean,
    address: {
        city: string,
        zipCode: number,
        state: string,
        country: string
    }
}

let empinfo:empDetails = {
    empId: 101,
    empName: "John Doe",
    havingVisa: true,
    address: {
        city: "New York",
        zipCode: 10001,
        state: "NY",
        country: "USA"
    }
};

let empinfo:empDetails = {
    empId: 102,
    empName: "chris ronald",
    havingVisa: false,
    address: {
        city: "montreal",
        zipCode: 10042,
        state: "CA",
        country: "CANADA"
    }
}

console.log(empinfo)

export{}