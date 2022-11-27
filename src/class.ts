class Customer {
    name: string
    email: string
    contactNo?: number
    constructor(name: string, email: string, no?: number) {
        this.name = name,
            this.email = email,
            this.contactNo = no
    }
}


const shah = new Customer("shah", "sh@g.com")