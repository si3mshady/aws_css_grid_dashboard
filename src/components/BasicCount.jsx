import React from 'react'
import './BasicCount.css'
import { TinyLine, TinyArea} from '@ant-design/plots';

// m = {"instanceid": instance_id, "metric": res, "reduced_metric": single_metric, "state": state}
export default function BasicCount({label, metrics, reduced_metric, running}) {
    console.log(reduced_metric)

    const data = [
        264, 417, 438, 887, 309, 397, 550, 575, 563, 430, 525
      ];
      
      const config = {
        height: 10,
        autoFit: true,
        data: metrics ? metrics: data,
        smooth: true,
        width: 200,
        lineWidth: 6,
      

        
    };

   
  return (

    <div style={{backgroundColor: running == "running" ? "#00FF41"  : "salmon"}}  className='container'>

        <h3>{label}</h3>

        <h2>{reduced_metric.toFixed(2)} % CPU</h2>


        <div className='graph'>
        <TinyLine  {...config} />
        </div>
     

    </div>
  )
}
