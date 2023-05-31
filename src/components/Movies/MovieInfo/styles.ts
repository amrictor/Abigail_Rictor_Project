import { css } from '@emotion/css'

export const wrapper = css`
  border: 3px solid black;
  margin: 5px;
  padding: 5px;
  font-family: serif;
  font-size: 18px;
  display: flex;
  justify-content: space-between;
  & svg {
    margin-right: 3px;
    font-size: 22px;
  }
`
export const name = css`
  text-transform: uppercase;
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 5px;
`

const getScoreColor = (score: number) => {
  if (score > 85) return '#02d61b';
  if (score > 70) return '#ff9100';
  return '#ff002f';
}
export const score = (score: number) => css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 40px;
  font-family: sans-serif;
  font-weight: bold;
  margin-right: 10px;
  color: ${getScoreColor(score)};

`
