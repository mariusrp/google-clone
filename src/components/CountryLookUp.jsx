'use client';
import { useEffect, useState } from 'react';
const API_KEY = process.env.REACT_APP_API_KEY;

export default function CountryLookUp() {
  const [country, setCountry] = useState('United States');
  useEffect(() => {
    fetch(`http://api.ipstack.com/json/?access_key=${API_KEY}`)
      .then((res) => res.json())
      .then((data) => {
        if (data && data.country_name) {
          setCountry(data.country_name);
        }
      });
  }, []);
  return <div>{country}</div>;
}
