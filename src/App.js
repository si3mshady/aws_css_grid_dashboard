
import './App.css';
import Summary from './components/Summary';
import BasicCount from './components/BasicCount';
import axios from 'axios'
import {useState,useEffect} from 'react'

function App() {

  const [chartData, setChartData] = useState([])
  const [fetchData, setFetchData ] = useState(false)

 
  const get_data = async () => {
    const data = await axios.get('http://localhost:888/data')
  
    console.log(data.data)
    
    setChartData(data.data)
   
  
  }
  
 setInterval(() => {
  setFetchData(!fetchData)
 },30000)


useEffect(() => {

  get_data()


},[fetchData])


  // const lablels = ['Instances','Security Groups', 'RDS Instances', 'S3 Buckets','Load Balancers','EBS Volumes', 'Key Pairs',"Subnets", "Route Tables", "Secrets",
  // 'r53 Zones','r53 Records', 'EBS Snapshots', 'Running EC2', "Lambdas", 'VPCs', 'AMI','Cfn Stacks', 'EKS Cluster', "IGW", "VPC CCPeerings","Nat Gateways"]
  return (
    <div className='main_container'>

        <div className='main_container_inner'>

        <div className='level1'>

        {/* {[...Array(22).keys()].map((x) => (<BasicCount />))} */}
        {chartData.map((val,index) => (<BasicCount label={val.instanceid} metrics={val.metric} running={val.state} reduced_metric={val.reduced_metric} />))}
        {/* m = {"instanceid": instance_id, "metric": res, "reduced_metric": single_metric, "state": state} */}

        {/* <div className='summary'>
          <Summary />

        </div>

       
       <div className='summary2'>
       <Summary/>

       </div>
    */}
      
        </div>
       

        </div>
        


    </div>
  

  );
}

export default App;
