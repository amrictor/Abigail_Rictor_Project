import { css } from '@emotion/css'

export const wrapper = css`
  border: 3px solid black;
  margin: 5px;
  padding: 5px;
  font-family: serif;
  font-size: 18px;
  & svg {
    margin-right: 3px;
    font-size: 22px;
  }
`
// export const identity = css`
//   display: flex;
//   justify-content: space-between;
// `
// export const name = css`
//   text-transform: uppercase;
//   font-weight: bold;
//   font-size: 22px;
//   margin-bottom: 5px;
// `
// export const lifespan = css`
// font-size: 14px;
// display: flex;
// align-items: center; 
// // font-style: italic;

// `

// export const inline = css`
//   & svg {
//     margin-right: 3px;
//     font-size: 16px;
//   }
//   font-size: 14px;
//   display: flex;
//   align-items: center; 
//   font-style: italic;
// `

// export const traits = css`
//   text-transform: none;  
//   font-style: italic;
//   text-align: right;
// `

// export const realm = css`
//   display: flex;
//   align-items: center;
//   justify-content: right;
// `
// export const summary = css`
//   margin-top: 10px;
//   display: flex;
//   justify-content: space-between;
//   & a {
//     min-width: 85px;
//   }
// `