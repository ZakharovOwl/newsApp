import React, { useState } from "react";

const Trends = ({
  name,
  setName,
  loginStatus,
  setLoginStatus,
}) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const firstNameUserInputHandler = (e) => {
    setFirstName(e.target.value);
  };
  const lastNameUserInputHandler = (e) => {
    setLastName(e.target.value);
  };

  const sumbmitLogin = (e) => {
    e.preventDefault();
    if (firstName.length > 1 && lastName.length > 1) {
      setName(`${firstName} ${lastName}`);
      setLoginStatus(!loginStatus);
      localStorage.setItem(
        `dataName`,
        JSON.stringify([`${firstName} ${lastName}`, loginStatus])
      );
    } else {
      alert(`Введите First name и Last name (более 2 символов каждое)`);
    }
  };

  const bntOut = (e) => {
    e.preventDefault();
    setName(``);
    setLoginStatus(!loginStatus);
    localStorage.setItem(
      `dataName`,
      JSON.stringify([`${firstName} ${lastName}`, loginStatus])
    );
  };

  return (
    <div className="trends-wrapper">
      <form
        className={`login-form ${loginStatus ? "login-form-active" : ""}`}
        // className="form-tweet"
        onSubmit={sumbmitLogin}
        // onKeyDown={(e) => sumbmitEnter(e)}
      >
        <h2>Login</h2>
        <h3>First name</h3>
        <textarea
          className="textarea-login"
          // autoFocus={true}
          // value={textInput}
          onChange={firstNameUserInputHandler}
          cols="50"
          rows="5"
        ></textarea>
        <h3>Last name </h3>
        <textarea
          className="textarea-login"
          // autoFocus={true}
          // value={textInput}
          onChange={lastNameUserInputHandler}
          cols="50"
          rows="5"
        ></textarea>
        <button /* className="form-tweet-btn" */>Sign in</button>
      </form>
      <div className={`user ${!loginStatus ? "user-active" : ""}`}>
        <div className="user-name">
          <p className="text-user">User:</p>
          <p className="text-user-name">{name}</p>
        </div>
        <div onClick={bntOut} className="user-btn-out">
          Exit
        </div>
      </div>
    </div>
    /*  <div className='trends-wrapper'>
      <h4>Trends for you (block doesn't work)</h4>
      <h3>info about app</h3>
      <p>create/edit/delete tweet</p>
      <p>tweet's time</p>
      <p>filter tweets in "search block"</p>
      <p>update posts list(older/newest)</p>
      <p>save posts with localStorage</p>
    </div> */
  );
};

export default Trends;
