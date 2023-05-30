import React from 'react';
import { css } from '@emotion/css'

const tower = css`
  background: black;
  border-radius: 100%;
  width: 70px;
  height: 70px;
  display: flex;
  justify-content: center;
`
const background = css`
  background: white;
  border-radius: 0 0 100% 100%;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const eye = css`
  width: 35px;
  height: 35px;
  border-radius: 0 100%;
  transform: scaleY(1.5) rotate(-45deg);
  background: white;
  overflow: hidden;
  border: 4px solid black;
`
const pupil = css`
  z-index: 1;
  background: black;
  width: 15px;
  height: 15px;
  transform-origin: center;
  transform: rotate(45deg) translateX(20px) rotate(45deg);
  border-radius: 0 100%;
  animation: look 3s alternate-reverse infinite ease-in-out;
  transform-origin: center;
  @keyframes look {
    0% {
      transform: rotate(45deg) scaleX(1.2) scaleY(0.7) translateX(2px) rotate(45deg);
    }
    50% { 
      transform: rotate(45deg) scaleX(1.7) scaleY(1) translateX(8px) rotate(45deg);
    }
    100% {
      transform: rotate(45deg) scaleX(1.2) scaleY(0.7) translateX(24px) rotate(45deg);
    }
  }
`

function Loading() {
  return (
    <div className={tower}>
      <div className={background}>
        <div className={eye}>
          <div className={pupil}/>
        </div>
      </div>
    </div>
  );
}

export default Loading;