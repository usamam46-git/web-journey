import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setName, setEmail, setImage } from './App/user';

const App = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [showResults, setShowResults] = useState(false);
  const [removeResults, setRemoveResults] = useState(false);

  const handleNameChange = (e) => dispatch(setName(e.target.value));
  const handleEmailChange = (e) => dispatch(setEmail(e.target.value));
  const handleImageChange = (e) => dispatch(setImage(e.target.value));

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowResults(true);
  };

  return (
    <form
      className="App"
      onSubmit={handleSubmit}
      style={{
        maxWidth: '400px',
        margin: '50px auto',
        padding: '30px',
        paddingRight: '40px',
        borderRadius: '12px',
        boxShadow: '0px 4px 12px rgba(0,0,0,0.1)',
        fontFamily: 'Arial, sans-serif',
        backgroundColor: '#f9f9f9',
      }}
    >
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>User Form</h2>

      <input
        type="text"
        placeholder="Name"
        value={user.name}
        onChange={handleNameChange}
        style={{
          width: '100%',
          padding: '10px',
          marginBottom: '12px',
          borderRadius: '8px',
          border: '1px solid #ccc',
          fontSize: '14px',
        }}
      />
      <input
        type="email"
        placeholder="Email"
        value={user.email}
        onChange={handleEmailChange}
        style={{
          width: '100%',
          padding: '10px',
          marginBottom: '12px',
          borderRadius: '8px',
          border: '1px solid #ccc',
          fontSize: '14px',
        }}
      />
      <input
        type="text"
        placeholder="Image URL"
        value={user.image}
        onChange={handleImageChange}
        style={{
          width: '100%',
          padding: '10px',
          marginBottom: '12px',
          borderRadius: '8px',
          border: '1px solid #ccc',
          fontSize: '14px',
        }}
      />

      <button
        type="submit"
        style={{
          width: '100%',
          padding: '12px',
          borderRadius: '8px',
          border: 'none',
          backgroundColor: '#4CAF50',
          color: 'white',
          fontSize: '16px',
          cursor: 'pointer',
          transition: 'background 0.3s',
        }}
        onMouseOver={(e) => (e.target.style.backgroundColor = '#45a049')}
        onMouseOut={(e) => (e.target.style.backgroundColor = '#4CAF50')}
      >
        Submit
      </button>
      <button
        type="button"
        onClick={() => {
          setRemoveResults(true);
          setShowResults(false);
          dispatch(setName(''));
          dispatch(setEmail(''));
          dispatch(setImage(''));
        if (removeResults) setRemoveResults(false);
        }}
        style={{
          width: '100%',
          padding: '12px',
          borderRadius: '8px',
          border: 'none',
          backgroundColor: '#f44336',
          color: 'white',
          fontSize: '16px',
          cursor: 'pointer',
          transition: 'background 0.3s',
          marginTop: '12px',
        }}
        onMouseOver={(e) => (e.target.style.backgroundColor = '#6e1210ff')}
        onMouseOut={(e) => (e.target.style.backgroundColor = '#3f0d09ff')}
      >
        Reset
      </button>

      {showResults && (
        <div
          style={{
            marginTop: '20px',
            padding: '15px',
            borderRadius: '10px',
            backgroundColor: '#fff',
            boxShadow: '0px 3px 8px rgba(0,0,0,0.1)',
            textAlign: 'center',
          }}
        >
          <h3>User Information</h3>
          <p>
            <strong>Name:</strong> {user.name}
          </p>
          <p>
            <strong>Email:</strong> {user.email}
          </p>
          {user.image && (
            <img
              src={user.image}
              alt="User"
              style={{
                marginTop: '10px',
                width: '100px',
                height: '100px',
                objectFit: 'cover',
                borderRadius: '50%',
                border: '2px solid #ddd',
              }}
            />
          )}
        </div>
      )}
    </form>
  );
};

export default App;
