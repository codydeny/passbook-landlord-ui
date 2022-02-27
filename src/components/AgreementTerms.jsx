import ArrowForward from '@mui/icons-material/ArrowForward'
import Verified from '@mui/icons-material/Verified'
import { Alert } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import useStore from '../utlis/customHooks/useStore'

export default function AgreementTerms() {
    const [step, setStep] = React.useState(1)
    const [provider, setProvider] = React.useState('NONE')
    const [terms, setTerms] = React.useState({})
    let store = useStore()

    const handleNext = (e) => {
        e.preventDefault()
        let obj  = Object.fromEntries(new FormData(e.target))
        setTerms({...terms, ...obj})
    }

    const handleAgreementGeneration = (e)=> {
        e.preventDefault()
        let extras  = {
            "owner_id": "OWN6919544070",
            "property_id": "PROP2974098221",
            "tenant_count": 1,
            "tenant_ids": ['TEN1090027641'],
            "manager_id": "manager_id"
          }

        store.createLease(e, {...terms, ...extras})
    }
  return (
    <div>

    {step === 1 && <div class="p-4 max-w-xl ">
        <form class="space-y-6" onSubmit={(e)=> {
            handleNext(e)
            setStep(2)
        }}>
        <h3 class="text-xl font-medium text-gray-900 dark:text-white">Rent Agreements</h3>

        <div>
        <label for="rent_amount" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Monthly Rent</label>
        <input type="number" name="rent_amount" id="rent_amount" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="₹ 15000" required="" />
        </div>

        <div>
        <label for="deposit_amount" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Pre Deposit Amount</label>
        <input type="number" name="deposit_amount" id="deposit_amount" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="₹ 100000" required="" />
        </div>

        <div>
        <label for="maintenance_amount" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Maintaince Amount</label>
        <input type="number" name="maintenance_amount" id="maintenance_amount" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="₹ 5000" required="" />
        </div>

        <button type="submit" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Next <ArrowForward sx={{fontSize : '19px'}}/> </button>
        </form>
    </div>}

    {step === 2 && <div class="p-4 max-w-sm">
        <form class="space-y-6"  onSubmit={(e)=> {
             handleNext(e)
            setStep(3)
        }}>
        <h3 class="text-xl font-medium text-gray-900 dark:text-white">Lease Terms</h3>

        <div>
        <label for="agreement_from" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Lease Start</label>
        <input type="date" name="agreement_from" id="agreement_from" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="" required="" />
        </div>

        <div>
        <label for="agreement_till" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Lease End</label>
        <input type="date" name="agreement_till" id="agreement_till" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="" required="" />
        </div>

        <div>
        <label for="penalty" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Penalty For Missing Rent</label>
        <input type="number" name="penalty" id="penalty" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="₹ 1000" required="" />
        </div>

        <button type="submit" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"> Next <ArrowForward sx={{fontSize : '19px'}}/> </button>
        </form>
    </div>}

    {step === 3 && <div class="p-4 max-w-sm ">
        <form class="space-y-6"  onSubmit={(e)=> {
             handleNext(e)
             handleAgreementGeneration(e)
            setStep(4)
        }}>
        <h3 class="text-xl font-medium text-gray-900 dark:text-white">Add Your Property</h3>

        <div>
        <label for="propertyAddress" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Property Address</label>
        <input type="text" name="propertyAddress" id="propertyAddress" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Near Ramraj Chawk" required="" />
        </div>

        <div>
        <label for="propertyName" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Property Name</label>
        <input type="text" name="propertyName" id="propertyName" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Rajeev Kunj" required="" />
        </div>
        
        {/* <div>
            <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300" for="user_avatar">Upload Property Photo</label>
            <input class="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="user_avatar_help" id="user_avatar" type="file" />
            <div class="mt-1 text-sm text-gray-500 dark:text-gray-300" id="user_avatar_help">Optionally upload a property photo</div>
        </div> */}

        <button type="submit" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Send Rent Agreement  </button>
        </form>
    </div>}


     {step === 4 && <div className="container text-center my-5">
              <Verified sx={{fontSize : '96px'}} className="text-green-500 my-5"/>
              <p className='text-sm text-gray-500 mb-5'>Rent agreement sent. Send them below link to accept.</p>
              <a href="https://passbook-rentee-ui.netlify.app/agreement/1" className=""rel="noopener noreferrer" target="_blank">{`https://passbook-rentee-ui.netlify.app/agreement/${1}`}</a> <br/>
              <Link to="/" class="w-full mt-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Home <ArrowForward sx={{fontSize : '19px'}}/> </Link>
          </div>}

    </div>
  )
}
