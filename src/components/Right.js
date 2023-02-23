import React,{useState} from 'react'
import axios from 'axios';
import { StepperContext } from '../contexts/StepperContext'
import Stepper from './Stepper'
import StepperControl from './StepperControl'
import Account from '../components/steps/Account'
import Details from '../components/steps/Details'
import Final from '../components/steps/Final'

function Right() {


 

  const [currentStep , setCurrentStep ]= useState(1);
  const [userData , setUserData] = useState('');
  const [finalData , setFinalData] = useState([]);
  const [data, setData] = useState("");


  const steps=[
    'Account information',
    'Tersonal details',
    'Complete'
  ];

  const displaySteps = (step)=>{
    switch(step){
      case 1:
        return <Account/>
      case 2:
        return <Details/>
      case 3:
        return <Final/>
      default:
    }
  }

  const handleClick = (direction)=>{
    let newStep = currentStep;
    direction === "next" ? newStep++ : newStep--;
    newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
    // Make a POST request to your API endpoint
        axios.post('https://notaryapp-staging.herokuapp.com/plugin/submitApptDetails', {
          data: data
        })
        .then(response => {
          console.log(response);
          // Handle successful response from API
        })
        .catch(error => {
          console.log(error);
          // Handle error from API
        });

  }

  return (
    <div className='md:w-1/2 mx-auto shadow-xl rounded-2xl pb-2 bg-white'>
      {/* Stepper */}
      <div className='container horizantal mt-5'>
      <Stepper
        steps={steps}
        currentStep={currentStep}
      />

      {/* Dusplay Components */}
      <div className='my-10 p-10'>
        <StepperContext.Provider value={{
          userData,
          setUserData,
          finalData,
          setFinalData
        }}>
          {displaySteps(currentStep)}
        </StepperContext.Provider>
      </div>
      </div>



      {/* Navigation cNTROLS */}
      <StepperControl
        handleClick={handleClick}
        currentStep={currentStep}
        steps={steps}
      />
    </div>
  )
}

export default Right
