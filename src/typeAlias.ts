// To create own type

type User = {
    name: string,
    email: string,
    isActive: boolean
}


const saveUser = (user: User): User => {
    console.table(user);
    return user
}

saveUser({
    name: "Shah",
    email: "sha@h.com",
    isActive: true
})