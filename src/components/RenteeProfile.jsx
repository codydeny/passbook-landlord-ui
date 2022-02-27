import { Avatar } from '@mui/material'
import React from 'react'
import { Outlet, useParams, Routes, Route, Link } from 'react-router-dom'
import useStore from '../utlis/customHooks/useStore'
import PersonIcon from '@mui/icons-material/Person';

export default function RenteeProfile() {
const {id} = useParams()
const store = useStore()

  return (
    <div>
        <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"> 
            <div className="flex flex-col items-center pb-10">
            <div className="mb-4">
                <Avatar
                    circle
                    className="w-full h-full"
                    style={{ background: '#bfdbfe', color: '#3b82f6', width : '90px', height : '90px' }}
                >
                    <p className="text-6xl font-medium">A</p>
                </Avatar>
            </div>
              <h3 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Akshay Rawat</h3>
              <span className="text-sm text-gray-500 dark:text-gray-400">9027282482</span>
              <div className="flex mt-4 space-x-3 lg:mt-6">
                <a href="#" className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Request Rent</a>
                <a href="#" className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-gray-900 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-blue-300 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-800">Send Alert</a>
              </div>
            </div>
          </div>
    </div>
  )
}
