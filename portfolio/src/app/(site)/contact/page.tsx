import React from 'react'
import Form from '@/components/Form'
import PageHeader from '@/components/Page_Header'
import Contact_Header from '@/components/Contact_Header'

const page:React.FC =() => {
  return (
    <div className='h-full w-full flex items-center gap-[2rem]'>
      <div className='flex-[0.3]'><PageHeader/></div>

  <div className='flex-1 flex flex-col gap-[3rem]'>
    <div>
    <Contact_Header email="contact.muhammadmubashir@gmail.com"/>
    </div>
  <Form/>
  </div>
      
      
      </div>
  )
}

export default page