import socialMedias from "../../data/social-networks.json";
import Image from 'next/image';
import SiteLogo from "../../public/atonis-logo-dark.svg";
import CompanyDetails from "../../data/company-details.json";
import Link from "next/link";

const Footer = (props:{}) => {
    return (
        <footer className="bg-footer-bg-900 relative">
            <div className="container py-16 text-slate-400">
                <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 md:gap-16">
                    <div className="xl:col-span-7">
                        <div className="flex justify-start mb-4">
                            <Link href="/" title="Demo site | Software Development Company" className="cursor-pointer">
                                <span className="sr-only">Demo site - Software Development Company</span>
                                <Image alt="Demo site - Software Development Company" title="Demo site - Software Development Company" className="h-7 w-auto sm:h-[2.5rem]" width="112.5" height="36" src={SiteLogo} blurDataURL={`/_next/image?url=${SiteLogo}&w=16&q=1`} placeholder="blur" />
                            </Link>
                        </div>
                        <p dangerouslySetInnerHTML={{ __html: CompanyDetails.slogan }}></p>
                    </div>
                    <div className="xl:col-span-3 text-sm leading-relaxed">
                        <h6 className="font-semibold text-slate-100 mb-2">Office Address</h6>
                        <p dangerouslySetInnerHTML={{ __html: CompanyDetails.address }}></p>
                    </div>
                    <div className="xl:col-span-2 text-sm leading-relaxed">
                        <h6 className="font-semibold text-slate-100 mb-2">Contact Us</h6>
                        <p dangerouslySetInnerHTML={{ __html: CompanyDetails.contact }}></p>
                    </div>
                </div>
            </div>
            <div className="container hidden lg:block mb-16 text-slate-400">
                <div className="grid grid-cols-4 gap-16">
                    <div>
                        <h6 className="text-white font-semibold tracking-wide mb-3">Services</h6>
                        <ul>
                            <li><Link href="/web-development" className="mb-2 inline-block hover:text-white">Web Development</Link></li>
                            <li><Link href="/ui-ux-design" className="mb-2 inline-block hover:text-white">UI/UX Design</Link></li>
                            <li><Link href="/software-development" className="mb-2 inline-block hover:text-white">Custom Software Development</Link></li>
                            <li><Link href="/mobile-app-development" className="mb-2 inline-block hover:text-white">Mobile App
                                Development</Link>
                            </li>
                            <li><Link href="/strategy-consulting" className="mb-2 inline-block hover:text-white">Strategy &amp;
                                Consulting</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h6 className="text-white font-semibold tracking-wide mb-3">Technologies</h6>
                        <ul>
                            <li><Link href="/programming-languages" className="mb-2 inline-block hover:text-white">Programming Languages</Link></li>
                            <li><Link href="/platforms-frameworks" className="mb-2 inline-block hover:text-white">Platforms &amp;
                                Frameworks</Link>
                            </li>
                            <li><Link href="/trending-technologies" className="mb-2 inline-block hover:text-white">Trending
                                Technologies</Link>
                            </li>
                            <li><Link href="/programming-languages#nodejs" className="mb-2 inline-block hover:text-white">Node.js
                                Development</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h6 className="text-white font-semibold tracking-wide mb-3">Trending Technologies</h6>
                        <ul>
                            <li><Link href="/trending-technologies#artificial-intelligence-AI" className="mb-2 inline-block hover:text-white">Artificial Intelligence (AI)</Link></li>
                            <li><Link href="/trending-technologies#machine-learning-ML" className="mb-2 inline-block hover:text-white">Machine
                                Learning (ML)</Link>
                            </li>
                            <li><Link href="/trending-technologies#IoT" className="mb-2 inline-block hover:text-white">Internet of
                                Things (IoT)</Link>
                            </li>
                            <li><Link href="/trending-technologies#jamstack" className="mb-2 inline-block hover:text-white">Jamstack
                                Development</Link>
                            </li>
                            <li><Link href="/trending-technologies#DevOps" className="mb-2 inline-block hover:text-white">DevOps
                                Consulting</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h6 className="text-white font-semibold tracking-wide mb-3">About Us</h6>
                        <ul>
                            <li><Link href="/about-us" className="mb-2 inline-block hover:text-white">Overview</Link></li>
                            <li><Link href="/about-us/testimonials" className="mb-2 inline-block hover:text-white">Awards &amp;
                                Recognitions</Link>
                            </li>
                            <li><Link href="/about-us/awards-recognitions" className="mb-2 inline-block hover:text-white">Client
                                Testimonials</Link>
                            </li>
                            <li><Link href="/about-us/our-story" className="mb-2 inline-block hover:text-white">Our Story</Link></li>
                            <li><Link href="/about-us/social-responsibilities" className="mb-2 inline-block hover:text-white">Social
                                Responsibilities</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="container text-slate-400 flex flex-col md:flex-row md:space-x-2 space-y-3 justify-between items-center mb-4">
                <div className="max-w-3xl">
                    <h6 className="text-white font-semibold mb-2">Subscribe to Our Newsletter</h6>
                    <p className="text-sm">Subscribe to our mailing list to get regular news, updates, tips, etc. We don&#39;t share your
                        information with anyone.
                    </p>
                </div>
                <div>
                    <form action="/subscribe" method="POST" className="flex w-full items-stretch"><label htmlFor="subscriber_email" className="sr-only">Email Id</label> <input type="email" name="subscriber_email" id="subscriber_email" className="rounded-l-xl shadow-xl border-0 w-60 py-3 px-3 md:px-6 text-slate-800 placeholder:text-slate-400" placeholder="Enter your email" /> <button type="submit" className="bg-accent-600 text-white rounded-r-xl shadow-xl px-3 md:px-6 text-sm font-semibold tracking-wide hover:bg-accent-700 transition-colors duration-300">Subscribe</button></form>
                </div>
            </div>
            <div className="bg-footer-bg-900">
                <div className="container py-12 pb-16 md:pb-12 text-slate-400 text-sm">
                    <div className="md:flex md:items-center md:justify-between md:gap-8 w-full">
                        <div className="text-center md:text-left "><span>© 2023 Demo site, All Rights Reserved.</span> <br className="sm:hidden" /> <Link href="/privacy-policy" className="ml-8 hover:text-white">Privacy Policy</Link> <Link href="/website-copyright" className="ml-8 hover:text-white">Copyright</Link> <Link href="/sitemap" className="ml-8 hover:text-white">Sitemap</Link></div>
                        <div className="mt-4 md:mt-0">
                            <ul className="flex justify-between">
                                {
                                    socialMedias.items.map((item,ind) => {
                                        return <li className="ml-5" key={ind}>
                                            <Link href={item.link} target="_blank" rel="noreferrer">{item.name}</Link>
                                        </li>
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;