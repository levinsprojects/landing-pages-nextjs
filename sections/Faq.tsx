import Link from "next/link";
import TagsHorizontalScrollAnimation from "../components/TagsHorizontalScrollAnimation";

const Faq = () => {
    return (
        <section className="bg-gradient-to-b from-slate-100/80 to-slate-100 py-16 md:py-24 pt-8 md:pt-8">
            <div className="container grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div>
                    <h3 className="text-blue-600 font-semibold">Software Development Company</h3>
                    <h6 className="mt-4 text-3xl md:text-4xl font-extrabold tracking-tight">Frequently Asked Questions</h6>
                    <p className="mt-4 mb-6">We create custom software solutions for your business, analyze data and design and develop
                        your website.
                    </p>
                    <div className="mt-12">
                        <dl className="leading-relaxed text-sm">
                            <dt className="text-slate-900 font-semibold text-left text-base flex justify-between w-full items-center cursor-pointer">Why should I consider Salt for my next software project?
                                <span className="transition-transform duration-300 transform rotate-180">⌃</span>
                            </dt>
                            <dd className="mt-3">Because we have 30+ technology talent that can assist you with application development at any
                                stage of the project. We have worked our partnerships of 2 months to 5 years to make companies
                                competitive. Our about us page will show you who we are and what we believe in.
                            </dd>
                            <dd className="mt-3">Do check our <Link href="https://clutch.co/profile/salt-technologies?utm_source=salttechno.com&amp;utm_medium=referral&amp;utm_campaign=faqs" target="_blank" rel="noreferrer" className="text-blue-600 underline">clutch profile &amp; reviews</Link> from our existing customers. Most of the feedback on our web development processes comes from
                                telephonic conversations executed by independent personnel from Clutch.
                            </dd>
                            <dd className="mt-3">Then, you could <Link href="/contact-us" className="text-blue-600 underline">contact us</Link> &amp; schedule
                                a free call about your requirements to see if we have a partnership in near future.
                            </dd>
                            <dt className="text-slate-900 font-semibold text-left text-base flex justify-between w-full items-center cursor-pointer mt-8">What's your experience in working on digital transformation projects?
                                <span className="transition-transform duration-300 transform rotate-90">⌃</span>
                            </dt>
                            <dt className="text-slate-900 font-semibold text-left text-base flex justify-between w-full items-center cursor-pointer mt-8">Can I rely on your development team that will deliver custom web applications within my
                                timelines?
                                <span className="transition-transform duration-300 transform rotate-90">⌃</span>
                            </dt>
                            <dt className="text-slate-900 font-semibold text-left text-base flex justify-between w-full items-center cursor-pointer mt-8">Do you offer custom application development for my industry?
                                <span className="transition-transform duration-300 transform rotate-90">⌃</span>
                            </dt>
                            <dt className="text-slate-900 font-semibold text-left text-base flex justify-between w-full items-center cursor-pointer mt-8">What about the support?
                                <span className="transition-transform duration-300 transform rotate-90">⌃</span>
                            </dt>
                            <dt className="text-slate-900 font-semibold text-left text-base flex justify-between w-full items-center cursor-pointer mt-8">How does your pricing work?
                                <span className="transition-transform duration-300 transform rotate-90">⌃</span>
                            </dt>
                        </dl>
                    </div>
                </div>
                <div>
                    <h6 className="font-semibold text-lg">Latest Articles:</h6>
                    <div className="bg-white rounded-xl shadow-lg flex flex-col md:flex-row items-stretch mt-4">
                        <Link href="/blog/WordPress-vs-Jamstack-for-business-website" className="inline-block shrink-0 w-full md:w-60 h-52 rounded-t-xl md:rounded-l-xl md:rounded-tr-none">
                            </Link>
                        <div className="p-6">
                            <h4 className="font-semibold leading-normal mb-3">WordPress vs. Jamstack: Which is the Best Choice for Building a Business Website?</h4>
                            <p className="mt-3 text-sm mb-4 line-clamp-2">Both have their own unique strengths and weaknesses, and the right choice for your business
                                will depend on your specific needs and goals.
                            </p>
                            <Link href="/blog/WordPress-vs-Jamstack-for-business-website" className="text-sm font-semibold text-blue-600 hover:text-blue-800">Read Post <span className="opacity-90 ml-2">→</span></Link>
                        </div>
                    </div>
                    <div className="bg-white rounded-xl shadow-lg flex flex-col md:flex-row items-stretch mt-8">
                        <Link href="/blog/build-successful-lead-generation-strategy" className="inline-block shrink-0 w-full md:w-60 h-52 rounded-t-xl md:rounded-l-xl md:rounded-tr-none"></Link>
                        <div className="p-6">
                            <h4 className="font-semibold leading-normal mb-3">How to create a successful lead generation strategy in 2021</h4>
                            <p className="mt-3 text-sm mb-4 line-clamp-2">People these days are surrounded by marketing messages and ads. They don’t have so
                                much...
                            </p>
                            <Link href="/blog/build-successful-lead-generation-strategy" className="text-sm font-semibold text-blue-600 hover:text-blue-800">Read Post <span className="opacity-90 ml-2">→</span></Link>
                        </div>
                    </div>
                    <h6 className="font-semibold text-lg mt-10">Downloadable Resources:</h6>
                    <div className="mt-4 grid md:grid-cols-2 gap-6">
                        <div className="bg-slate-900/95 text-slate-400 p-8 rounded-lg shadow-lg bg-triangles bg-cover bg-center bg-blend-multiply">
                            <h5 className="text-white font-semibold">Is your website Smart?</h5>
                            <p className="text-sm mt-3 mb-6">We have prepared a checklists of 12 basic points that make website smart.</p>
                            <Link href="/resources/download-smart-website-checklist" className="text-sm font-semibold inline-block bg-slate-200 text-slate-800 py-2 px-4 rounded-lg shadow-lg hover:bg-white">Download Now <span className="opacity-90 ml-2">→</span></Link>
                        </div>
                        <div className="bg-slate-900/95 text-slate-400 p-8 rounded-lg shadow-lg bg-triangles bg-cover bg-center bg-blend-multiply">
                            <h5 className="text-white font-semibold">Is your website optimized?</h5>
                            <p className="text-sm mt-3 mb-6">We have prepared a checklists of 12 basic points that make optimize your website.</p>
                            <Link href="/resources/download-optimized-website-checklist" className="text-sm font-semibold inline-block bg-slate-200 text-slate-800 py-2 px-4 rounded-lg shadow-lg hover:bg-white">Download Now <span className="opacity-90 ml-2">→</span></Link>
                        </div>
                    </div>
                </div>
            </div>
            <TagsHorizontalScrollAnimation></TagsHorizontalScrollAnimation>
        </section>
    );
};

export default Faq;