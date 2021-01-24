import React from "react";

const FilterTweets = ({
  textInputFilter,
  setTextInputFilter,
  tweets,
  setTweets,
  tweetsFilter,
  setTweetsFilter,
}) => {
  //Function
  const userInputFilter = (e) => {
    setTextInputFilter(e.target.value.toLowerCase());
    e.preventDefault();
    let filterTweets = [];

    for (let i = 0; i < tweets.length; i++) {
      if (
        textInputFilter.length > 1 &&
        tweets[i].message.toLowerCase().includes(textInputFilter)
      ) {
        filterTweets.push(tweets[i]);
      }  else if (textInputFilter.length < 2) {
        filterTweets = tweets
      }
    }
    setTweetsFilter([...filterTweets]);
  };


  return (
    <form className="filter-tweets-wrapper">
      <h4>Search</h4>
      <textarea className="textarea-filter"
        value={textInputFilter}
        onChange={userInputFilter}
        cols="50"
        rows="5"
      ></textarea>
    </form>
  );
};

export default FilterTweets;
