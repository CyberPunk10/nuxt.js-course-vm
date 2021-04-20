// import { gql } from 'apollo-boost' // for EXAMPLE 1, 2
import { gql } from 'graphql-tag'

// Posts Queries
// export const GET_POSTS = gql`
//   query {
//     getPosts {
//       _id
//       title
//       description
//       imageUrl
//       categories
//       createdDate
//       likes
//       createdBy {
//         _id
//         username
//         email
//         joinDate
//         password
//       }
//     }
//   }
// `
// User Queries
// export const GET_CURRENT_USER = gql`
//   query {
//     getCurrentUser {
//       _id
//       username
//       email
//       password
//       avatar
//       joinDate
//       favorites {
//         _id
//         title
//         imageUrl
//       }
//     }
//   }
// `

// Posts Mutations


// User Mutations
// export const SIGNIN_USER = gql`
//   mutation signinUser($username: String!, $password: String!) {
//     signinUser(username: $username, password: $password) {
//       token
//     }
//   }
// `
// export const SIGNUP_USER = gql`
//   mutation signupUser($username: String!, $email: String!, $password: String!) {
//     signupUser(username: $username, email: $email, password: $password) {
//       token
//     }
//   }
// `
export const ADD_PROGRESS = gql`
  mutation addProgress($username: String!, $count: String!, $date: String!) {
    signupUser(username: $username, count: $count, date: $date) {
      # token
      
    }
  }
`
