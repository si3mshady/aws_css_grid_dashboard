
import './App.css';
import Summary from './components/Summary';
import Summary2 from './components/Summary2';
import BasicCount from './components/BasicCount';


function App() {
  const lablels = ['Instances','Security Groups','Load Balancers','EBS Volumes','r53 Zones','r53 Reco']
  return (
    <div className='main_container'>

        <div className='main_container_inner'>

        <div className='level1'>

        {[...Array(22).keys()].map((x) => (<BasicCount />))}


        <div className='summary'>
          <Summary />

        </div>

       
     

   
      
        </div>
       
       




        





        </div>
        


    </div>
  

  );
}

export default App;
