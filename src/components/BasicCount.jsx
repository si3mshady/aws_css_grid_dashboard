import React from 'react'
import './BasicCount.css'
import { TinyLine, TinyArea} from '@ant-design/plots';


export default function BasicCount({label, metrics, color}) {

    const data = [
        264, 417, 438, 887, 309, 397, 550, 575, 563, 430, 525
      ];
      
      const config = {
        height: 10,
        autoFit: true,
        data: metrics ? metrics: data,
        smooth: true,
      };


  return (
    <div  className='container'>

        <h3>{label}</h3>
        <h1>87</h1>
        <TinyLine {...config} />

    </div>
  )
}
