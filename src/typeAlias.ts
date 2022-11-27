// To create own type

type User = {
    readonly _id: number, //only read no write
    name: string,
    email: string,
    isActive: boolean,
    creditCardNumber?: number //optional
}


const saveUser = (user: User): User => {
    console.table(user);
    return user
}

saveUser({
    _id: 6549846478,
    name: "Shah",
    email: "sha@h.com",
    isActive: true
})

let newUser: User = {
    _id: 65487987,
    name: "Shah",
    email: "sh@h.com",
    isActive: false,
}

// newUser._id = 54531355; not allowed
newUser.email = "asd@pl.com"


// mix and match of type
type cardNumber = {
    cardNo: number
}

type cardDate = {
    cardDate: string
}


type cardDetails = cardNumber & cardDate & {
    cvv: number
}

let userCardDetail: cardDetails = {
    cardNo: 36235644895,
    cardDate: "22/10/2020",
    cvv: 544
}