import { useEffect, useState } from 'react';

export default function(value){

    const [data, setData] = useState()

    useEffect(()=>{
        if(value.length === 2){
            fetch(`https://disease.sh/v3/covid-19/countries/${value}`)
            .then(stream => stream.json())
            .then(data => setData(data))
        }
      }, [value])
      return data
}