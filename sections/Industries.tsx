import Image from "next/image";
import Link from "next/link";
import industries from "../public/industries.webp";

const Industries = () => {
    return (
        <section className="bg-slate-900 overflow-y-hidden">
            <div className="relative">
                <Image alt="Industries for whom we design websites" title="Industries for whom we design websites" className="absolute inset-0 mix-blend-overlay object-cover w-full" loading="lazy" decoding="async" width="1600" height="1087" src={industries} blurDataURL={`/_next/image?url=${industries}&w=16&q=1`} placeholder="blur" />
            </div>
            <div className="py-16 md:py-24 bg-slate-900 text-slate-400 relative bg-opacity-60 backdrop-filter backdrop-blur-md">
                <div className="container">
                    <div className="max-w-2xl">
                        <h6 className="text-blue-500 font-semibold">Industries</h6>
                        <h4 className="mt-4 text-3xl md:text-4xl font-extrabold tracking-tight text-white">From Information Technology <br className="hidden md:block" />to Education.</h4>
                        <p className="mt-4 mb-6">Software development is complex, especially when you're trying to match a customized
                            solution to your industry. Fortunately, we've developed custom solutions for a variety
                            of industries - such as Information Technology, Finance, Education, Healthcare, etc.
                        </p>
                        <Link href="/contact-us" className="font-semibold text-blue-500 hover:text-blue-700">Start Discussion Now <span className="opacity-90 ml-1">→</span></Link>
                    </div>
                    <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                        <div>
                            <h4 className="font-semibold text-white">Information Technology</h4>
                            <p className="mt-2 text-sm">Increase your business productivity with custom software solutions for IT industry
                                from the leading software development company.
                            </p>
                        </div>
                        <div>
                            <h4 className="font-semibold text-white">Banking &amp; Finance</h4>
                            <p className="mt-2 text-sm">Drive more customer engagement &amp; improve your customer retention rate with our custom
                                software solutions.
                            </p>
                        </div>
                        <div>
                            <h4 className="font-semibold text-white">E-commerce</h4>
                            <p className="mt-2 text-sm">Save time, create a better user experience, increase efficiencies, reduce overheads &amp;
                                drive growth for your e-commerce with our custom solutions.
                            </p>
                        </div>
                        <div>
                            <h4 className="font-semibold text-white">Healthcare</h4>
                            <p className="mt-2 text-sm">Our custom software solutions enable healthcare organizations to effectively work
                                towards their goals while raising the level of care they provide.
                            </p>
                        </div>
                        <div>
                            <h4 className="font-semibold text-white">Logistics</h4>
                            <p className="mt-2 text-sm">We provide tailored solutions for your logistic needs. Experienced in custom software
                                development, web design &amp; web portal development.
                            </p>
                        </div>
                        <div>
                            <h4 className="font-semibold text-white">Education</h4>
                            <p className="mt-2 text-sm">We have helped institutions &amp; trainers find the right software to suit their needs. We
                                believe in going the extra mile to make sure our clients are happy.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Industries;