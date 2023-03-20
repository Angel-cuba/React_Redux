export const GET_USERS = 'GET_USERS'
export const USER_COMMENT = 'USER_COMMENT'
export const POSTS_BY_USER_ID = 'POSTS_BY_USER_ID'

export const LOADING = 'LOADING'
export const STOP_LOADING = 'STOP_LOADING'
export const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS'
export const GET_USERS_FAILURE = 'GET_USERS_FAILURE'


export interface User {
  id: number
  name: string
  username: string
  email: string
  website: string
  phone: string
  address: {
    street: string
    suite: string
    city: string
    zipcode: string
    geo: {
      lat: string
      lng: string
    }
  }
  company: {
    name: string
    catchPhrase: string
    bs: string
  }
}