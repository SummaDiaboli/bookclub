const getUsers = (user: string, firstname: string) => {
    return `
    {
        ${user} {
            ${firstname}
            lastname
            email
            discussions {
                id
                created_at
                comments {
                    id
                }
                title
                text
            }
        }
    }
`
}

const signUpUser = (
    firstname: string,
    lastname: string,
    password: string,
    email: string
) => {
    return `mutation SignUpUser {
        insert_users(objects: {email: "${email}", firstname: "${firstname}", lastname: "${lastname}", password: "${password}"}) {
            returning {
              email
              firstname
              lastname
              id
            }
          }
    }`
}

const loginUser = (email: string, password: string) => {
    return `{
        users(where: {email: {_eq: "${email}"}, password: {_eq: "${password}"}}) {
            id
            firstname
            lastname
            email
          }
    }`
}

export { getUsers, signUpUser, loginUser }
