const CompanyTech = () => {
    return (
        <section className="overflow-hidden">
            <div className="relative">
                <div className="absolute w-[40rem] left-1/3 top-0 rotate-45">
                    <div className="h-16 bg-blue-600 rounded-full"></div>
                    <div className="h-16 bg-blue-300 rounded-full "></div>
                    <div className="h-12 bg-yellow-200 rounded-full "></div>
                    <div className="h-12 bg-yellow-400 rounded-full "></div>
                    <div className="h-16 bg-pink-300 rounded-full "></div>
                    <div className="h-16 bg-pink-600 rounded-full "></div>
                </div>
            </div>
            <div className="bg-slate-100 relative bg-opacity-80 py-16 md:py-24 backdrop-filter backdrop-blur-3xl">
                <div className="container grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="">
                        <h6 className="text-blue-600 font-semibold">Salt Technologies</h6>
                        <h4 className="mt-4 text-3xl md:text-4xl font-extrabold tracking-tight">Small Yet Mighty. <br className="hidden md:block" />And Growing.</h4>
                        <div className="mt-4 mb-6 leading-7">
                            <p>We are a custom software <strong className="font-normal">design &amp; development company</strong>
                                located in the heart of India's own little "Silicon Valley", Pune. Our team of experienced
                                developers, designers, and business analysts work to design and deploy custom software
                                solutions for businesses across the globe.
                            </p>
                            <p className="mt-4">Salt Technologies was founded in 2012 as a single person company with a vision to
                                build the best software solutions possible. Today, we are more than 30 engineers &amp;
                                designers who are passionate about using technology to solve difficult business
                                problems.
                            </p>
                        </div>
                        <a href="/about-us/our-story" className="font-semibold text-blue-600 hover:text-blue-800">Read Our Story <span className="opacity-90 ml-1">→</span></a>
                        <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-6 text-sm">
                            <div><span className="text-3xl font-extrabold text-slate-900 tracking-tight block mb-1">500+</span> <span>Projects Delivered</span></div>
                            <div><span className="text-3xl font-extrabold text-slate-900 tracking-tight block mb-1">300+</span> <span>Customers Served</span></div>
                            <div><span className="text-3xl font-extrabold text-slate-900 tracking-tight block mb-1">10+</span> <span>Years in Business</span></div>
                            <div><span className="text-3xl font-extrabold text-slate-900 tracking-tight block mb-1">82%</span> <span>Retainer Customers</span></div>
                        </div>
                    </div>
                    <div className="bg-white rounded-xl shadow-2xl shadow-slate-900/10 border p-8 md:p-12 md:ml-16">
                        <div className="md:flex justify-between items-start">
                            <div>
                                <h5 className="text-blue-600 font-semibold">Starting services at just</h5>
                                <p className="mt-2 text-slate-900 tracking-tight leading-none"><span className="font-normal text-[2.5rem]">$</span><span className="font-extrabold text-[2.5rem]">22</span> <span className="ml-2 text-sm font-semibold align-top">per hour</span></p>
                            </div>
                            <a href="/contact-us" className="inline-flex justify-center py-2 px-4 bg-slate-900 text-sm font-semibold text-white rounded-lg hover:bg-slate-700 mt-6 md:mt-0">Contact Us
                                <span className="opacity-90 ml-2">→</span></a>
                        </div>
                        <p className="mt-3 text-sm">We know how expensive it can be to find an experienced developer. That is why our
                            services start at just $22 per hour.
                        </p>
                        <hr className="my-10" />
                        <div className="flex">
                            <div className="bg-blue-50 text-blue-600 border border-blue-100 flex flex-shrink-0 w-10 h-10 items-center justify-center rounded-lg">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5" role="img" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>
                            </div>
                            <div className="ml-6 text-sm leading-6">
                                <h5 className="font-semibold inline">Flexible Engagement Model</h5>
                                <p className="inline">— that can be adapted to fit your budget and timeline.</p>
                            </div>
                        </div>
                        <div className="flex mt-8">
                            <div className="bg-blue-50 text-blue-600 border border-blue-100 flex flex-shrink-0 w-10 h-10 items-center justify-center rounded-lg">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5" role="img" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3"></path>
                                </svg>
                            </div>
                            <div className="ml-6 text-sm leading-6">
                                <h5 className="font-semibold inline">Agile Project Management</h5>
                                <p className="inline">— helps us deliver software products faster and more efficiently.</p>
                            </div>
                        </div>
                        <div className="flex mt-8">
                            <div className="bg-blue-50 text-blue-600 border border-blue-100 flex flex-shrink-0 w-10 h-10 items-center justify-center rounded-lg">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5" role="img" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75"></path>
                                </svg>
                            </div>
                            <div className="ml-6 text-sm leading-6">
                                <h5 className="font-semibold inline">Progressive, Consistent Delivery</h5>
                                <p className="inline">— makes sure that new features are delivered on regular basis to keep your users
                                    engaged.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CompanyTech;