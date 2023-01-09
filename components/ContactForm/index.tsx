import { useState } from "react";

const ContactForm = () => {
    const [ fName , setFName ] = useState<string>();
    const [ lName , setLName ] = useState<string>();
    const [ companyName , setCompanyName ] = useState<string>();
    const [ email , setEmail ] = useState<string>();
    const [ phNumber , setPhNumber ] = useState<string>();
    const [ message , setMessage ] = useState<string>();

    const inpClass = "!w-full !rounded-lg !shadow-inner !border !border-slate-200 !mt-1 !focus:ring-1 !focus:ring-slate-200 !focus:border-slate-200 !focus:outline-none !px-4 !py-3"

    return <form className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 font-medium">
        <div className="relative">
            <label htmlFor="firstName" className="block text-slate-600">First Name</label> 
            <input value={fName} onChange={(event) => { setFName(event.target.value)}} type="text" id="firstName" className={inpClass}/> 
        </div>
        <div className="relative">
            <label htmlFor="lastName" className="block text-slate-600">Last Name</label> 
            <input value={lName} onChange={(event) => { setLName(event.target.value) }} type="text" id="lastName" className={inpClass}/> 
        </div>
        <div className="md:col-span-2 relative">
            <label htmlFor="companyName" className="block text-slate-600">Company Name<span className="text-slate-400 text-sm align-top ml-1">*</span></label> 
            <input value={companyName} onChange={(event) => { setCompanyName(event.target.value) }} type="text" id="companyName" className={inpClass}/> 
        </div>
        <div className="relative">
            <label htmlFor="email" className="block text-slate-600">Email<span className="text-slate-400 text-sm align-top ml-1">*</span></label> 
            <input value={email} onChange={(event) => { setEmail(event.target.value) }} type="email" id="email" className={`${inpClass} placeholder:text-slate-300`} placeholder="Enter your work email address"/>
        </div>
        <div>
            <label htmlFor="phone" className="block text-slate-600">Phone Number</label> 
            <input value={phNumber} onChange={(event) => { setPhNumber(event.target.value) }} type="text" id="phone" className={inpClass}/>
        </div>
        <div className="md:col-span-2 flex flex-col">
            <label htmlFor="message" className="block text-slate-600">Message</label> 
            <textarea value={message} onChange={(event) => { setMessage(event.target.value) }} id="message" className={`${inpClass} resize-none placeholder:text-slate-300`} rows={5} placeholder="Tell us about your project or the challenges you are facing."></textarea>
        </div>
        <div className="md:col-span-2 mt-3">
            <button type="submit" className="bg-accent-600 px-12 py-3 text-white rounded-lg shadow-xl hover:bg-accent-700 transition-colors duration-200 font-semibold w-full disabled:opacity-50 disabled:cursor-not-allowed antialiased">Submit</button>
        </div>
        <div className="md:col-span-2">
            <p className="text-sm text-slate-400 antialiased">All projects are secured by NDA &amp; the Intellectual Property (IP) is your's.</p>
        </div>
    </form>
};

export default ContactForm;