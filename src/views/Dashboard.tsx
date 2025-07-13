import { Link } from "react-router-dom";
import logo from '../assets/logo.svg'
import { ChartBarIcon,ArrowUpTrayIcon, ClipboardDocumentIcon,ArrowTrendingUpIcon,Cog6ToothIcon, Bars3Icon,XMarkIcon } from "@heroicons/react/24/outline";
import { Dialog, DialogPanel } from '@headlessui/react'
import { useState } from "react";
const navigation = [
  { name: 'Dashboard', href: '#',icon:<ChartBarIcon className="text-sm m-5  p-2 rounded-[5px] hover:bg-gray-200"/> },
  { name: 'Upload', href: '#',icon:<ArrowUpTrayIcon className="text-sm m-5  p-2 rounded-[5px] hover:bg-gray-200"/> },
  { name: 'Expenses', href: '#',icon: <ClipboardDocumentIcon className="text-sm m-5  p-2 rounded-[5px] hover:bg-gray-200"/> },
  { name: 'Analytics', href: '#',icon: <ArrowTrendingUpIcon className="text-sm m-5  p-2 rounded-[5px] hover:bg-gray-200"/> },
  { name: 'Settings', href: '#', icon: <Cog6ToothIcon className="text-sm m-5  p-2 rounded-[5px] hover:bg-gray-200"/> },
]

const Dashboard = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    return (
        <div className="md:flex">
            <div className="md:flex-3 h-[100vh] invisible bg-[#f5f6fa] border border-gray-200 border-left fixed top-0 left-0 right-0 bottom-0 md:relative md:visible">
               <div className="m-5 h-[60px] mb-10"> 
                   <div className="inline mt-5 float-left items-center h-[50px] w-[50px] border rounded-[50%] border-gray-300">
                      <div className="h-[100%] w-[100%] grid items-center">
                      <p className="text-center text-lg">N</p>

                      </div>
                   </div>
                   <div className="md:hidden inline float-right mt-5">
                     <XMarkIcon className="size-9 text-white"/>
                   </div>
                   <div className="">

                   </div>
               </div>   
               <div className="">
                 <Link to="/dashboard">
                   <p className="text-sm m-5  p-2 rounded-[5px] hover:bg-gray-200 focus:bg-gray-300"><ChartBarIcon className="size-4 inline-block relative bottom-[2px] mr-1"/>Dashboard</p>
                 </Link>
               </div> 
                 <div className="">
                 <Link to="/dashboard">
                   <p className="text-sm m-5 p-2 rounded-[5px] hover:bg-gray-200"><ArrowUpTrayIcon className="size-4 inline-block relative bottom-[2px] mr-2"/>Upload</p>
                 </Link>
               </div> 
                 <div className="">
                 <Link to="/dashboard">
                   <p className="text-sm m-5  p-2 rounded-[5px] hover:bg-gray-200"><ClipboardDocumentIcon className="size-4 inline-block relative bottom-[2px] mr-2"/>Expenses</p>
                 </Link>
               </div> 
                 <div className="">
                 <Link to="/dashboard">
                   <p className="text-sm m-5 p-2 rounded-[5px] hover:bg-gray-200"><ArrowTrendingUpIcon className="size-4 inline-block relative bottom-[2px] mr-2"/>Analytics</p>
                 </Link>
               </div> 
               <div className="">
                 <Link to="/dashboard">
                   <p className="text-sm m-5 p-2 rounded-[5px] hover:bg-gray-200"><Cog6ToothIcon className="size-4 inline-block relative bottom-[2px] mr-2"/>Settings</p>
                 </Link>
               </div>
               
            </div>
            <div className="md:invisible bg-[#f5f6fa] grid items-center">
              
                <div className="">
                   <p className="p-5 text-lg font-medium inline float-left">Dashboard</p>
                      <Bars3Icon className="inline float-right size-6 border p-1 rounded-[5px] mt-5 mr-5" onClick={() => setMobileMenuOpen(true)}/>
                </div>


            </div>
            <div className="md:flex-9 h-[100vh]">

            </div>
                    <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  alt=""
                  src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                  className="h-8 w-auto"
                />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  <div>
                   <Link to="/dashboard">
                   <p className="text-sm m-5  p-2 rounded-[5px] hover:bg-gray-200 focus:bg-gray-300"><ChartBarIcon className="size-4 inline-block relative bottom-[2px] mr-1"/>Dashboard</p>
                 </Link>
               </div> 
                 <div className="">
                 <Link to="/dashboard">
                   <p className="text-sm m-5 p-2 rounded-[5px] hover:bg-gray-200"><ArrowUpTrayIcon className="size-4 inline-block relative bottom-[2px] mr-2"/>Upload</p>
                 </Link>
               </div> 
                 <div className="">
                 <Link to="/dashboard">
                   <p className="text-sm m-5  p-2 rounded-[5px] hover:bg-gray-200"><ClipboardDocumentIcon className="size-4 inline-block relative bottom-[2px] mr-2"/>Expenses</p>
                 </Link>
               </div> 
                 <div className="">
                 <Link to="/dashboard">
                   <p className="text-sm m-5 p-2 rounded-[5px] hover:bg-gray-200"><ArrowTrendingUpIcon className="size-4 inline-block relative bottom-[2px] mr-2"/>Analytics</p>
                 </Link>
               </div> 
               <div className="">
                 <Link to="/dashboard">
                   <p className="text-sm m-5 p-2 rounded-[5px] hover:bg-gray-200"><Cog6ToothIcon className="size-4 inline-block relative bottom-[2px] mr-2"/>Settings</p>
                 </Link>
               </div>
                </div>
                <div className="py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                  >
                    Log in
                  </a>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
        </div>
    )
}

export default Dashboard;

