import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useReducer } from 'react'
import { initialState,reducer } from './components/reducer'
export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (state.email && state.password) {
      dispatch({ type: 'submit' });
    }
  };

  const handleReset = () => {
    dispatch({ type: 'reset' });
  };

  return (
    <div className="form-container">
      <h2>User Form</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter Email"
          value={state.email}
          onChange={(e) => dispatch({ type: 'email', payload: e.target.value })}
          required
        />
        <input
          type="password"
          placeholder="Enter Password"
          value={state.password}
          onChange={(e) => dispatch({ type: 'password', payload: e.target.value })}
          required
        />
        <div className="buttons">
          <button type="submit">Submit</button>
          <button type="button" onClick={handleReset}>Reset</button>
        </div>
      </form>

      {!state.submitted ? (
        <div className="no-data">No details found</div>
      ) : (
        <div className="user-details">
          <div>User Email: {state.email}</div>
          <div>User Password: {state.password}</div>
        </div>
      )}
    </div>
  );
}
