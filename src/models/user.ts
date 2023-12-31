export interface UserSignUp {
    name: string,
    email: string,
    phone: string,
    password: string,
    password_confirmation: string,
}

export interface UserSignIn {
    email: string,
    password: string,
}

export interface UserResponse {
    isSuccesful: boolean | null,
    errors: object | null
}

export interface User {
    name: string,
    email: string,
    created_at: string,
    updated_at: string,
}