import Link from "next/link";

const ServicesSection = () => {
    return (
        <section className="bg-white py-16 md:py-24 border-b border-slate-100">
            <div className="container">
                <div className="max-w-2xl">
                    <h5 className="text-brand-600 font-semibold">Services</h5>
                    <h4 className="mt-4 text-3xl md:text-4xl font-extrabold tracking-tight">From Custom Development <br className="hidden md:block"/>to Software Testing.</h4>
                    <p className="mt-4 mb-6">Our <strong className="font-normal">software services</strong> are designed to help your business
                        run smoothly &amp; efficiently. We can tailor a package of services to suit your specific needs,
                        whether you need help with sales, marketing, accounting, or other business-related tasks.
                    </p>
                    <Link href="/contact-us" className="font-semibold text-brand-600 hover:text-blue-700">Contact Us Now <span className="opacity-90 ml-1">→</span></Link>
                </div>
                <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                    <div>
                        <h3 className="font-semibold"><Link href="/web-development" title="Web Development Services" className="hover:text-brand-600">Web Development</Link></h3>
                        <p className="mt-2 text-sm">We design &amp; develop fast, secure &amp; search-engine-friendly websites. We also develop web
                            apps that are scalable, secure, and user-friendly.
                        </p>
                    </div>
                    <div>
                        <h3 className="font-semibold"><Link href="/ui-ux-design" title="UI/UX Design Services" className="hover:text-brand-600">UI/UX Design</Link></h3>
                        <p className="mt-2 text-sm">With our design service, you will get the best UI/UX possible to optimize your website,
                            app and other digital products.
                        </p>
                    </div>
                    <div>
                        <h3 className="font-semibold"><Link href="/software-development" title="Software Development Services" className="hover:text-brand-600">Software Development</Link></h3>
                        <p className="mt-2 text-sm">We have a team of highly skilled &amp; experienced professionals who are capable of
                            developing <strong className="font-normal">custom software solutions</strong> that are tailored
                            to meet your unique needs.
                        </p>
                    </div>
                    <div>
                        <h3 className="font-semibold"><Link href="/mobile-app-development" title="Mobile App Development Services" className="hover:text-brand-600">Mobile App Development</Link></h3>
                        <p className="mt-2 text-sm">We work with our customers to ensure their vision is realized in a mobile-app that
                            delivers an excellent user experience.
                        </p>
                    </div>
                    <div>
                        <h3 className="font-semibold"><Link href="/strategy-consulting" title="Strategy &amp; Consulting Services" className="hover:text-brand-600">Strategy &amp; Consulting</Link></h3>
                        <p className="mt-2 text-sm">We help entrepreneurs &amp; businesses grow by providing them with technology &amp; UX strategy,
                            data analytics, Website/Software Audit, and Cybersecurity.
                        </p>
                    </div>
                    <div>
                        <h3 className="font-semibold">Cloud Migration</h3>
                        <p className="mt-2 text-sm">Migration can be challenging and complex, but it can also offer significant benefits in
                            terms of scalability, cost savings, and increased agility.
                        </p>
                    </div>
                    <div>
                        <h3 className="font-semibold">DevOps Consulting</h3>
                        <p className="mt-2 text-sm">While there is no one-size-fits-all approach to DevOps, our consultants have extensive
                            experience helping organizations of all sizes adopt DevOps practices successfully.
                        </p>
                    </div>
                    <div>
                        <h3 className="font-semibold">Data Analytics</h3>
                        <p className="mt-2 text-sm">We provide the most comprehensive business analysis so that you can make confident
                            decisions and take your company to the next level.
                        </p>
                    </div>
                    <div>
                        <h3 className="font-semibold"><Link href="/quality-assurance-software-testing" title="Strategy &amp; Consulting Services" className="hover:text-brand-600">Quality Assurance &amp; Testing</Link></h3>
                        <p className="mt-2 text-sm">With our testing &amp; QA services, our team of professionals take your project from
                            conception to completion, ensuring that your software product is a success when it hits
                            the market.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;