import React, { useEffect, useState } from 'react';

//get data from localStorage
const getData = (key, intialValue) => {
  //fetch data from localStorage
  const fetchingData = JSON.parse(localStorage.getItem(key));

  //checking if there's a data on localStorage
  if (fetchingData) return fetchingData;

  //checking if intialValue a function or another type of data
  if (intialValue instanceof Function) return intialValue();

  return intialValue;
};

function UseLocalStorage(key, intialValue) {
  const [value, setValue] = useState(() => getData(key, intialValue));

  //save value on localStotage
  useEffect(() => {
    //save data on localStorage
    localStorage.setItem(key, JSON.stringify(value));
  }, [value]);

  return [value, setValue];
}

export default UseLocalStorage;
