export interface LoginData 
{
    username : string ;
    password : string ;
    role ?: string
}

export const user1 : LoginData = {
 username : "standard_user" ,
    password : "secret_sauce" ,
    role : "QA"

}
export const userInvalid : LoginData =
{
    username : "Invalid_username",
    password : "Invalid_pass"
}
