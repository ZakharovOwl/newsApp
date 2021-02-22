import React, { useState, useEffect } from "react";

//redux
import {useDispatch, useSelector} from "react-redux";
import { loadCurrency } from "../../actions/currencyAction";


const Finance = () => {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(loadCurrency())
  },[])
  const currency = useSelector(state => state.currency.currencyAll.data);
  console.log(currency);
  return (
    <div>
      <h1>Finance</h1>
    </div>
  );
};

export default Finance;
