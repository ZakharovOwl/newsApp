import React, { useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";

//components
import Finance from "./components/Finance/Finance";
import NewsHabr from "./components/Habr/NewsHabr";
import MyTweets from "./components/MyTweets/MyTweets";
import Navbar from "./components/Navnar";
import NewsTutby from "./components/NewsTutBy/NewsTutby";
import Home from "./components/Home/Home";
//import dataTweets from "./dataTweets";

//styles
import "./styles/App.scss";

function App() {
  
  let dataTweets = localStorage.getItem("dataTweets");
  dataTweets = JSON.parse(dataTweets);
  let dataName = localStorage.getItem("dataName");
  dataName = JSON.parse(dataName);

  console.log(dataName[0]);

  
  const [loginStatus, setLoginStatus] = useState(true);
  const [textInput, setTextInput] = useState("What's happening?");
  const [data, setData] = useState(dataTweets || []);
  const [tweets, setTweets] = useState(data);
  const [textInputFilter, setTextInputFilter] = useState("");
  const [tweetsFilter, setTweetsFilter] = useState(data);
  const [name, setName] = useState(dataName[0] || '');

  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Navbar />
        <div className="content">
          <Route
            path="/mytweets"
            render={() => (
              <MyTweets
                data={data}
                setData={setData}
                name={name}
                setName={setName}
                textInput={textInput}
                setTextInput={setTextInput}
                tweets={tweets}
                setTweets={setTweets}
                textInputFilter={textInputFilter}
                setTextInputFilter={setTextInputFilter}
                tweetsFilter={tweetsFilter}
                setTweetsFilter={setTweetsFilter}
                loginStatus = {loginStatus}
                setLoginStatus = {setLoginStatus}
              />
            )}
          />
          <Route path="/home" render={() => <Home />} />
          <Route path="/newstutby" render={() => <NewsTutby />} />
          <Route path="/newshabr" render={() => <NewsHabr />} />
          <Route path="/finance" render={() => <Finance />} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
