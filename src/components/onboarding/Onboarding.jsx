import ArrowForward from '@mui/icons-material/ArrowForward'
import Verified from '@mui/icons-material/Verified'
import { Alert } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import upi from "./upi.png"

export default function Onboarding() {
    const [step, setStep] = React.useState(1)
    const [provider, setProvider] = React.useState('NONE')
  return (
    <div>

    {step === 1 && <div class="p-4 max-w-xl bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700">
        <form class="space-y-6" onSubmit={(e)=> {
            e.preventDefault()
            setStep(2)
        }}>
        <h3 class="text-xl font-medium text-gray-900 dark:text-white">Welcome Back, Rahul</h3>
        <div>
        <label for="moileNumber" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your Mobile Number</label>
        <input type="number" name="moileNumber" id="moileNumber" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="9027245324" required="" />
        </div>
        <button type="submit" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Next <ArrowForward sx={{fontSize : '19px'}}/> </button>
        </form>
    </div>}



    {step === 2 && <div class="p-4 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700">
            <form class="space-y-6"  onSubmit={(e)=> {
                e.preventDefault()
                setStep(3)
            }}>
            <h3 class="text-xl font-medium text-gray-900 dark:text-white">Payments Info</h3>
            <div className="p-4 max-w-sm bg-white rounded-lg border shadow-md sm:p-6 dark:bg-gray-800 dark:border-gray-700">
                <h3 className="mb-3 text-base font-semibold text-gray-900 lg:text-xl dark:text-white">
                  Connect your bank account
                </h3>
                <p className="text-sm font-normal text-gray-500 dark:text-gray-400">Connect with one of our available providers.</p>
                <ul className="my-4 space-y-3">
                  <li>
                    <a href="#" onClick={(e)=> {
                        e.preventDefault()
                        setProvider('upi')
                    }} className={
                        provider === 'upi' ? 'flex items-center p-3 text-base font-bold text-gray-900 bg-gray-50 rounded-lg hover:bg-gray-100 group hover:shadow  dark:bg-gray-500 dark:text-white' 
                        : 'flex items-center p-3 text-base font-bold text-gray-900 bg-gray-50 rounded-lg hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white'
                    }>
                      <img src={upi} alt="upi" className="w-5 h-5 mr-3" />
                      <span className="flex-1 ml-3 whitespace-nowrap">UPI</span>
                      <span className="inline-flex items-center justify-center px-2 py-0.5 ml-3 text-xs font-medium text-gray-500 bg-gray-200 rounded dark:bg-gray-700 dark:text-gray-400">Popular</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="flex items-center p-3 text-base font-bold text-gray-900 bg-gray-50 rounded-lg hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
                      <svg className="h-5" viewBox="0 0 292 292" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M145.7 291.66C226.146 291.66 291.36 226.446 291.36 146C291.36 65.5541 226.146 0.339844 145.7 0.339844C65.2542 0.339844 0.0400391 65.5541 0.0400391 146C0.0400391 226.446 65.2542 291.66 145.7 291.66Z" fill="#3259A5" /><path d="M195.94 155.5C191.49 179.08 170.8 196.91 145.93 196.91C117.81 196.91 95.0204 174.12 95.0204 146C95.0204 117.88 117.81 95.0897 145.93 95.0897C170.8 95.0897 191.49 112.93 195.94 136.5H247.31C242.52 84.7197 198.96 44.1797 145.93 44.1797C89.6904 44.1797 44.1104 89.7697 44.1104 146C44.1104 202.24 89.7004 247.82 145.93 247.82C198.96 247.82 242.52 207.28 247.31 155.5H195.94Z" fill="white" /></svg>
                      <span className="flex-1 ml-3 whitespace-nowrap">Others </span>
                      <span className="inline-flex items-center justify-center px-2 py-0.5 ml-3 text-xs font-medium text-gray-500 bg-gray-200 rounded dark:bg-gray-700 dark:text-gray-400">Coming Soon</span>
                    </a>
                  </li>
                </ul>
                <div>
                  <a href="#" className="inline-flex items-center text-xs font-normal text-gray-500 hover:underline dark:text-gray-400">
                    <svg className="mr-2 w-3 h-3" aria-hidden="true" focusable="false" data-prefix="far" data-icon="question-circle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 448c-110.532 0-200-89.431-200-200 0-110.495 89.472-200 200-200 110.491 0 200 89.471 200 200 0 110.53-89.431 200-200 200zm107.244-255.2c0 67.052-72.421 68.084-72.421 92.863V300c0 6.627-5.373 12-12 12h-45.647c-6.627 0-12-5.373-12-12v-8.659c0-35.745 27.1-50.034 47.579-61.516 17.561-9.845 28.324-16.541 28.324-29.579 0-17.246-21.999-28.693-39.784-28.693-23.189 0-33.894 10.977-48.942 29.969-4.057 5.12-11.46 6.071-16.666 2.124l-27.824-21.098c-5.107-3.872-6.251-11.066-2.644-16.363C184.846 131.491 214.94 112 261.794 112c49.071 0 101.45 38.304 101.45 88.8zM298 368c0 23.159-18.841 42-42 42s-42-18.841-42-42 18.841-42 42-42 42 18.841 42 42z" /></svg>
                    Why do I need to connect with my Account?</a>
                </div>
              </div>

            {provider === 'upi' && <div>
            <label for="propertyAddress" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">UPI Address</label>
            <input type="text" name="propertyAddress" id="propertyAddress" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="902345123@oksbi" required="" />
            </div>}


            <button type="submit" disabled={provider === 'NONE'} class={
                provider === 'NONE' ? 'w-full text-white bg-gray-400  focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gray-600 ' : 
                'w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
            }> Connect</button>
            </form>
        </div>}


        {step === 3 && <div className="container text-center my-5">
              <Verified sx={{fontSize : '96px'}} className="text-green-500 my-5"/>
              <p className='text-sm text-gray-500 mb-5'>Bank Linked Successfully</p>
              <Link to="/" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Home <ArrowForward sx={{fontSize : '19px'}}/> </Link>
          </div>}

    </div>
  )
}
