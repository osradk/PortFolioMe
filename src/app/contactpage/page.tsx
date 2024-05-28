import Contact from '@/components/Contact';

import Navbar from '@/components/Navbar';


const page = () => {
  return (
    <div>
        
        <Navbar />          
<div className='pt-[200px]'>


      <h1 className='text-center text-2xl text-cyan-800 py-8'>
        I’m excited to learn about your project. <br />Ready to get started?
</h1>
</div>
<div className='relativ bottom-0 '>
      <Contact />  </div> 
    </div>
  )
}

export default page
