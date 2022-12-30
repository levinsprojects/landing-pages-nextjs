import Link from "next/link";

const Hero = () => {
    return <section className="border-b border-slate-100 overflow-hidden">
        <div className="absolute inset-0 -z-10 mx-0 max-w-none overflow-hidden">
            <div className="absolute left-12 md:left-1/2 top-0 ml-0 md:ml-[-38rem] h-full w-[40rem] lg:w-full">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-100 [mask-image:radial-gradient(farthest-side_at_top,white,transparent)]">
                    <svg aria-hidden="true" role="img" className="absolute inset-0 h-[200%] w-full fill-black/40 stroke-black/50 mix-blend-overlay">
                        <defs>
                            <pattern id=":ST394:" width="72" height="56" patternUnits="userSpaceOnUse" x="0" y="0">
                                <path d="M.5 56V.5H72" fill="none"></path>
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" strokeWidth="0" fill="url(#:ST394:)"></rect>
                        <svg x="0" y="0" className="overflow-visible">
                            <rect strokeWidth="0" width="73" height="57" x="288" y="224"></rect>
                            <rect strokeWidth="0" width="73" height="57" x="144" y="56"></rect>
                            <rect strokeWidth="0" width="73" height="57" x="504" y="168"></rect>
                            <rect strokeWidth="0" width="73" height="57" x="720" y="336"></rect>
                            <rect strokeWidth="0" width="73" height="57" x="864" y="112"></rect>
                        </svg>
                    </svg>
                </div>
            </div>
        </div>
        <div className="bg-slate-50 bg-opacity-60 relative pt-[84px]">
            <div className="container md:flex items-center gap-8 pt-12 md:pt-20 pb-8">
                <div className="py-10 md:py-16 md:w-1/2">
                    <h1 className="font-semibold text-blue-600">Software Development Company</h1>
                    <p className="font-extrabold text-3xl md:text-5xl text-slate-900 tracking-tight md:leading-[3.5rem] mt-5">Transform your business with a digital solution.</p>
                    <p className="mt-5">We understand that every business is unique and has its own specific needs. This is why
                        we offer custom software solutions that are tailor-made to fit your business perfectly.
                    </p>
                    <div className="mt-8 flex gap-6"><Link href="/services" className="inline-flex justify-center py-3 px-6 bg-white text-sm font-semibold text-slate-600 border border-slate-200 rounded-lg hover:bg-slate-100">Explore Our Services
                        <span className="opacity-75 ml-2">→</span></Link>
                    </div>
                </div>
                <div className="md:py-16 md:w-1/2">
                    <div className="bg-white p-8 shadow-2xl shadow-slate-900/10 rounded-xl max-w-sm float-right w-full mb-16">
                        <p>Hello,</p>
                        <p className="font-medium text-lg text-slate-600 mt-3 tracking-tight">Got Questions?</p>
                        <h6 className="font-extrabold text-xl md:text-2xl text-slate-800 mt-1 tracking-tight">Talk to our Experts.</h6>
                        <p className="mt-4">Our team can help you with everything from design &amp; development to marketing &amp; data
                            analytics.
                        </p>
                        <Link href="/contact-us" className="inline-flex justify-center py-3 px-6 bg-blue-600 text-sm font-semibold text-white rounded-lg hover:bg-blue-700 mt-6">Contact Us
                            <span className="opacity-75 ml-2">→</span></Link>
                    </div>
                </div>
            </div>
            <div className="container grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 text-sm pb-16 pt-4">
                <div className="flex">
                    <div className="bg-blue-50 text-blue-600 border border-blue-100 flex flex-shrink-0 w-12 h-12 items-center justify-center rounded-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-5 h-5" role="img" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"></path>
                        </svg>
                    </div>
                    <div className="ml-6">
                        <h5 className="font-semibold text-base">Experienced &amp; Passionate Team</h5>
                        <p className="mt-3">Our developers have a wealth of experience in building high-quality applications. We
                            are passionate about helping our clients succeed.
                        </p>
                    </div>
                </div>
                <div className="flex">
                    <div className="bg-blue-50 text-blue-600 border border-blue-100 flex flex-shrink-0 w-12 h-12 items-center justify-center rounded-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-5 h-5" role="img" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z"></path>
                        </svg>
                    </div>
                    <div className="ml-6">
                        <h5 className="font-semibold text-base">Trusted &amp; Agile Process</h5>
                        <p className="mt-3">We follow agile methodology for software &amp; web development that has been tried, tested
                            &amp; backed by experts.
                        </p>
                    </div>
                </div>
                <div className="flex">
                    <div className="bg-blue-50 text-blue-600 border border-blue-100 flex flex-shrink-0 w-12 h-12 items-center justify-center rounded-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-5 h-5" role="img" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.712 4.33a9.027 9.027 0 011.652 1.306c.51.51.944 1.064 1.306 1.652M16.712 4.33l-3.448 4.138m3.448-4.138a9.014 9.014 0 00-9.424 0M19.67 7.288l-4.138 3.448m4.138-3.448a9.014 9.014 0 010 9.424m-4.138-5.976a3.736 3.736 0 00-.88-1.388 3.737 3.737 0 00-1.388-.88m2.268 2.268a3.765 3.765 0 010 2.528m-2.268-4.796a3.765 3.765 0 00-2.528 0m4.796 4.796c-.181.506-.475.982-.88 1.388a3.736 3.736 0 01-1.388.88m2.268-2.268l4.138 3.448m0 0a9.027 9.027 0 01-1.306 1.652c-.51.51-1.064.944-1.652 1.306m0 0l-3.448-4.138m3.448 4.138a9.014 9.014 0 01-9.424 0m5.976-4.138a3.765 3.765 0 01-2.528 0m0 0a3.736 3.736 0 01-1.388-.88 3.737 3.737 0 01-.88-1.388m2.268 2.268L7.288 19.67m0 0a9.024 9.024 0 01-1.652-1.306 9.027 9.027 0 01-1.306-1.652m0 0l4.138-3.448M4.33 16.712a9.014 9.014 0 010-9.424m4.138 5.976a3.765 3.765 0 010-2.528m0 0c.181-.506.475-.982.88-1.388a3.736 3.736 0 011.388-.88m-2.268 2.268L4.33 7.288m6.406 1.18L7.288 4.33m0 0a9.024 9.024 0 00-1.652 1.306A9.025 9.025 0 004.33 7.288"></path>
                        </svg>
                    </div>
                    <div className="ml-6">
                        <h5 className="font-semibold text-base">Quick &amp; Helpful Support</h5>
                        <p className="mt-3">We pride ourselves on responding to our customer's requests in the most expeditious
                            possible time.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
};

export default Hero;