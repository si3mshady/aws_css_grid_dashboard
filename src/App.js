
import './App.css';
import Summary from './components/Summary';
import BasicCount from './components/BasicCount';


function App() {
  const lablels = ['Instances','Security Groups', 'RDS Instances', 'S3 Buckets','Load Balancers','EBS Volumes', 'Key Pairs',"Subnets", "Route Tables", "Secrets",
  'r53 Zones','r53 Records', 'EBS Snapshots', 'Running EC2', "Lambdas", 'VPCs', 'AMI','Cfn Stacks', 'EKS Cluster', "IGW", "VPC CCPeerings","Nat Gateways"]
  return (
    <div className='main_container'>

        <div className='main_container_inner'>

        <div className='level1'>

        {/* {[...Array(22).keys()].map((x) => (<BasicCount />))} */}
        {lablels.map((label,index) => (<BasicCount label={label} />))}


        <div className='summary'>
          <Summary />

        </div>

       
       <div className='summary2'>
       <Summary/>

       </div>
   
      
        </div>
       

        </div>
        


    </div>
  

  );
}

export default App;
