import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { reducer, initialState } from './components/reducer';
import { useReducer } from 'react';
import "./App.css"


export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className={`app-container ${state.theme}`}>
      <h1>Current Theme: {state.theme}</h1>
      <button onClick={() => dispatch({ type: 'TOGGLE_THEME' })}>
        Toggle Theme
      </button>
    </div>
  );
}
