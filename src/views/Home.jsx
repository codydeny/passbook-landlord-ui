import React from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import LayersIcon from '@mui/icons-material/Layers';
import { Link } from 'react-router-dom';
import {useStore} from '../utlis/customHooks/useStore';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import IconButton from '@mui/material/IconButton';
import ReplayIcon from '@mui/icons-material/Replay';
import { Divider } from '@mui/material';
import TotalRentees from '../components/TotalRentees';
import InProgressRentees from '../components/InProgressRentees';
import Onboarding from '../components/onboarding/Onboarding';
import AgreementTerms from '../components/AgreementTerms';

export default function Home() {
    const store = useStore()
    const [isNewStates, setIsNewStates] = React.useState()
    const [step, setStep] = React.useState(1);
    const [data, setData] = React.useState({})
    const [newAdded, setNewAdded] = React.useState(false)

    const handleInProgressRenteeAdd = (e)=> {
        e.preventDefault()
        let object = {}
        let formData = new FormData(e.target);
        formData.forEach(function(value, key){
            object[key] = value;
        });
        console.log(object['mobileNumber'])
        setData(object)
       // store.addInProgressRentee(object['mobileNumber'])
        setStep(2)
    }

    const handleInProgressAmountAdd = (e)=> {
        e.preventDefault()
        let object = {}
        let formData = new FormData(e.target);
        formData.forEach(function(value, key){
            object[key] = value;
        });
        setData({
            ...data,
            'rentPerMonth' : object['rentPerMonth']
        })
        store.addInProgressRentee(data['mobileNumber'])
        setStep(1)
        setNewAdded(true)
    }


    return (
        <div className="max-w-xl">

           {/* <AgreementTerms/> */}

        {step===1 && newAdded && <div id="toast-default" class="my-5 flex items-center w-full max-w-lg p-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800" role="alert">
        <div class="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-blue-500 bg-blue-100 rounded-lg dark:bg-blue-800 dark:text-blue-200">
        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clip-rule="evenodd"></path></svg>
        </div>
        <div class="ml-3 text-sm font-normal">Added New Upcoming Tenent.</div>
        <button onClick={(e)=> {
            e.preventDefault()
            setNewAdded(false)
        }} type="button" class="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700" data-collapse-toggle="toast-default" aria-label="Close">
        <span class="sr-only">Close</span>
        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </button>
        </div>}

           <p className="mb-5">Add Rentees <ArrowForwardIcon /></p>

            {step == 1 && <form onSubmit={handleInProgressRenteeAdd} className="mb-5">
              <div class="mb-6">
                <label for="mobileNumber" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Mobile Number</label>
                <input type="number" onChange={(e)=> {
                    e.preventDefault()
                    setNewAdded(false)
                }} id="mobileNumber" name='mobileNumber' class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Rentee's Mobile" required />
              </div>
              <button type="submit" class="cursor-pointer text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Next <ArrowForwardIcon/> </button>
            </form>}
            {step === 2 && <form onSubmit={handleInProgressAmountAdd} className="mb-5">
              <div class="mb-6">
                <label for="rentPerMonth" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">How Much Rent They Have To Pay/Month?</label>
                <input type="number" id="rentPerMonth" name='rentPerMonth' class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Rent Amount" required />
              </div>
              <button type="submit" class="cursor-pointer text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
            </form>}
            <Divider className="my-5"/>
            <InProgressRentees />
            <TotalRentees/>

        </div>
    )
}
