import Link from "next/link";

const CaseStudies = () => {
    return (
        <section className="bg-white py-16 md:py-24 border-b ">
            <div className="container">
                <div className="max-w-2xl">
                    <h4 className="text-3xl md:text-4xl font-extrabold tracking-tight">Case Studies</h4>
                    <p className="mt-4 mb-6">Our case studies showcase some of the work we have done for our clients. Each case study
                        provides an overview of the project, the challenges we faced, and the solutions we
                        delivered. Our case studies show that we are a reliable &amp; experienced <strong className="font-normal">software development company</strong> that can provide custom software solutions that meet your specific needs.
                    </p>
                    <Link href="/contact-us" className="font-semibold text-accent-600 hover:text-accent-700">Start Discussion Now <span className="opacity-90 ml-1">→</span></Link>
                </div>
                <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
                    <div className="rounded-xl">
                        <div className="p-8 md:p-12 flex flex-col bg-gradient-to-r from-brand-50 to-brand-100 h-full rounded-xl bg-opacity-90 backdrop-filter backdrop-blur-2xl">
                            <h5 className="font-bold text-lg">Restructured the company's positioning by overhauling UI and UX</h5>
                            <div className="mt-5 text-sm">
                                <p>we worked with a company that was struggling to attract and retain customers due to a
                                    poorly designed user interface and user experience.
                                </p>
                                <p className="mt-3">Our team of software developers and designers conducted a thorough analysis of the
                                    company's existing platform and identified areas for improvement. We then overhauled the
                                    UI and UX of the platform, streamlining navigation and improving the overall aesthetics
                                    and functionality.
                                </p>
                                <p className="mt-3">The result was a more intuitive and enjoyable experience for users, which
                                    led to an increase in customer engagement and satisfaction. The company's positioning in
                                    the market also improved, as the updated platform helped them stand out from competitors
                                    and attract new business.
                                </p>
                            </div>
                            <div className="grid grid-cols-3 gap-8 mt-8 md:mt-12 mb-8 text-sm font-medium">
                                <div><span className="block text-2xl font-extrabold text-slate-900">100%</span> <span>UX Rehaul</span></div>
                                <div><span className="block text-2xl font-extrabold text-slate-900">60+</span> <span>Quality Leads /month</span></div>
                                <div><span className="block text-2xl font-extrabold text-slate-900">500%</span> <span>Improved Pagespeed</span></div>
                            </div>
                            <Link href="/case-studies" className="font-semibold text-sm text-accent-600 hover:text-accent-700 mt-auto">Read Other Case Studies <span className="opacity-90 ml-1">→</span></Link>
                        </div>
                    </div>
                    <div className="rounded-xl">
                        <div className="p-8 md:p-12 flex flex-col bg-gradient-to-r from-brand-50 to-brand-100 h-full rounded-xl">
                            <h5 className="font-bold text-lg">Website Redesign for Tech Consulting &amp; Solutions Firm</h5>
                            <div className="mt-5 text-sm">
                                <p>When a tech consulting and solutions firm approached us for help with their website,
                                    they were struggling to effectively communicate their value proposition and services to
                                    potential clients. Their outdated design and cluttered layout made it difficult for
                                    users to find the
                                    information they were looking for.
                                </p>
                                <p className="mt-3">Our team of web designers and developers worked closely with the company to
                                    understand their business goals and target audience. We then redesigned their website
                                    from the ground up, creating a clean and modern look that was easy to navigate.
                                </p>
                                <p className="mt-3">The new website effectively highlighted the company's expertise and offerings, leading
                                    to an increase in leads and sales. The tech consulting firm was thrilled with the
                                    results of the redesign and saw a significant return on their investment in the new
                                    website.
                                </p>
                            </div>
                            <div className="mt-auto">
                                <div className="grid grid-cols-3 gap-8 mt-8 md:mt-12 mb-8 text-sm font-medium">
                                    <div><span className="block text-2xl font-extrabold text-slate-900">300%</span> <span>More Visitors</span></div>
                                    <div><span className="block text-2xl font-extrabold text-slate-900">500+</span> <span>Pages Redesigned</span></div>
                                    <div><span className="block text-2xl font-extrabold text-slate-900">2X</span> <span>Faster Website Speed</span></div>
                                </div>
                                <Link href="/case-studies" className="font-semibold text-sm text-accent-600 hover:text-accent-700">Read Other Case Studies <span className="opacity-90 ml-1">→</span></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CaseStudies;