import React, { useEffect, useState } from "react";
import Image from 'next/image';
import SiteLogo from "../../public/atonis-logo-light.svg";
import Link from "next/link";

type HeaderProps = {

}

const Header: React.FC<HeaderProps> = () => {

    const [isStickyHeaderMode,setStickyHeaderMode] = useState(false);

    useEffect(()=>{
        const checkAndSetHeaderMode = () => {
            setStickyHeaderMode( ((window?.scrollY||0)>400) );
        };
        window.addEventListener('scroll', checkAndSetHeaderMode,true);
        return ()=>{
            window.removeEventListener('scroll', checkAndSetHeaderMode, true);
        };
    },[]);

    return (
        <header className={`${!isStickyHeaderMode ? "z-50 top-0 left-0 w-full absolute" : "z-50 top-0 left-0 w-full bg-white fixed border-b border-slate-100 "}`}>
            <div className="container">
                <div className="flex justify-between items-center relative md:space-x-10 py-4 md:py-6 text-sm font-semibold">
                    <div className="flex justify-start">
                        <Link href="/" title="Demo site | Software Development Company" className="cursor-pointer">
                            <span className="sr-only">Demo site - Software Development Company</span>
                            <Image alt="Demo site - Software Development Company" title="Demo site - Software Development Company" className="h-7 w-auto sm:h-[2.5rem]" width="112.5" height="36" src={SiteLogo} blurDataURL={`/_next/image?url=${SiteLogo}&w=16&q=1`} placeholder="blur" />
                        </Link>
                    </div>
                    <nav className="hidden md:flex space-x-10 items-center">
                        <ul className="flex items-center space-x-4">
                            <li className="relative group">
                                <Link href="/services" className="py-6 px-4 hover:text-brand-600">
                                    Services <span className="inline-block rotate-180 ml-1 text-lg leading-4 opacity-75">⌃</span>
                                </Link>
                                <div className="hidden group-hover:block fixed z-0 h-screen w-full bg-footer-bg-900/25 left-0 top-[84px] pointer-events-none transition-colors duration-300"></div>
                                <div className="submenu hidden group-hover:block bg-white fixed w-full left-0 mt-5 shadow-2xl shadow-slate-900/10 z-10">
                                    <div className="p-8">
                                        <div className="container grid grid-cols-4 gap-12">
                                            <div className="relative">
                                                <div className="bg-brand-50 text-brand-600 border border-brand-100 flex flex-shrink-0 w-12 h-12 items-center justify-center rounded-lg mb-3">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.6" stroke="currentColor" className="w-5 h-5" role="img" aria-hidden="true">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"></path>
                                                    </svg>
                                                </div>
                                                <Link href="/web-development" className="text-[0.95rem] text-slate-900 peer before:absolute before:-inset-3 before:rounded-xl">
                                                    Web Development</Link>
                                                <ul className="mt-2 font-normal text-slate-500 list-disc pl-4 flex-col space-y-2">
                                                    <li>Web Application Development</li>
                                                    <li>Enterprise Website Development</li>
                                                    <li>Jamstack Development</li>
                                                    <li>E-commerce Development</li>
                                                    <li>Website Support &amp; Maintenance</li>
                                                </ul>
                                                <div className="absolute -z-10 -inset-4 rounded-2xl bg-[#fff4f8] opacity-0 peer-hover:opacity-100 transition-opacity duration-300 "></div>
                                            </div>
                                            <div className="relative">
                                                <div className="bg-brand-50 text-brand-600 border border-brand-100 flex flex-shrink-0 w-12 h-12 items-center justify-center rounded-lg mb-3">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-5 h-5" role="img" aria-hidden="true">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"></path>
                                                    </svg>
                                                </div>
                                                <Link href="/ui-ux-design" className="text-[0.95rem] text-slate-900 peer before:absolute before:-inset-3 before:rounded-xl">
                                                    UI/UX Design</Link>
                                                <ul className="mt-2 font-normal text-slate-500 list-disc pl-4 flex-col space-y-2">
                                                    <li>Application UX Design</li>
                                                    <li>Website UI/UX Design</li>
                                                    <li>Web Portal UI/UX Design</li>
                                                    <li>SaaS Product UX Design</li>
                                                    <li>Mobile App UX Design</li>
                                                </ul>
                                                <div className="absolute -z-10 -inset-4 rounded-2xl bg-[#fff4f8] opacity-0 peer-hover:opacity-100 transition-opacity duration-300 "></div>
                                            </div>
                                            <div className="relative">
                                                <div className="bg-brand-50 text-brand-600 border border-brand-100 flex flex-shrink-0 w-12 h-12 items-center justify-center rounded-lg mb-3">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-5 h-5" role="img" aria-hidden="true">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z"></path>
                                                    </svg>
                                                </div>
                                                <Link href="/software-development" className="text-[0.95rem] text-slate-900 peer before:absolute before:-inset-3 before:rounded-xl">
                                                    Software Development</Link>
                                                <ul className="mt-2 font-normal text-slate-500 list-disc pl-4 flex-col space-y-2">
                                                    <li>Custom Software Development</li>
                                                    <li>Development Team Augmentation</li>
                                                    <li>Software Support &amp; Maintenance</li>
                                                    <li>Digital Transformation</li>
                                                    <li>Legacy System Modernization</li>
                                                </ul>
                                                <div className="absolute -z-10 -inset-4 rounded-2xl bg-[#fff4f8] opacity-0 peer-hover:opacity-100 transition-opacity duration-300 "></div>
                                            </div>
                                            <div className="relative">
                                                <div className="bg-brand-50 text-brand-600 border border-brand-100 flex flex-shrink-0 w-12 h-12 items-center justify-center rounded-lg mb-3">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-5 h-5" role="img" aria-hidden="true">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"></path>
                                                    </svg>
                                                </div>
                                                <Link href="/mobile-app-development" className="text-[0.95rem] text-slate-900 peer before:absolute before:-inset-3 before:rounded-xl">
                                                    Mobile App Development</Link>
                                                <ul className="mt-2 font-normal text-slate-500 list-disc pl-4 flex-col space-y-2">
                                                    <li>Native iOS App Development</li>
                                                    <li>Android App Development</li>
                                                    <li>PWA Development</li>
                                                    <li>Hybrid App Development</li>
                                                </ul>
                                                <div className="absolute -z-10 -inset-4 rounded-2xl bg-[#fff4f8] opacity-0 peer-hover:opacity-100 transition-opacity duration-300 "></div>
                                            </div>
                                            <div className="relative">
                                                <div className="bg-brand-50 text-brand-600 border border-brand-100 flex flex-shrink-0 w-12 h-12 items-center justify-center rounded-lg mb-3">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-5 h-5" role="img" aria-hidden="true">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"></path>
                                                    </svg>
                                                </div>
                                                <Link href="/strategy-consulting" className="text-[0.95rem] text-slate-900 peer before:absolute before:-inset-3 before:rounded-xl">
                                                    Strategy &amp; Consulting</Link>
                                                <ul className="mt-2 font-normal text-slate-500 list-disc pl-4 flex-col space-y-2">
                                                    <li>UX Analysis &amp; Strategy</li>
                                                    <li>Website Audit &amp; Consulting</li>
                                                    <li>DevOps Consulting</li>
                                                    <li>Data Analytics</li>
                                                    <li>Cybersecurity</li>
                                                </ul>
                                                <div className="absolute -z-10 -inset-4 rounded-2xl bg-[#fff4f8] opacity-0 peer-hover:opacity-100 transition-opacity duration-300 "></div>
                                            </div>
                                            <div className="relative">
                                                <div className="bg-brand-50 text-brand-600 border border-brand-100 flex flex-shrink-0 w-12 h-12 items-center justify-center rounded-lg mb-3">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-5 h-5" role="img" aria-hidden="true">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"></path>
                                                    </svg>
                                                </div>
                                                <Link href="/growth-marketing" className="text-[0.95rem] text-slate-900 peer before:absolute before:-inset-3 before:rounded-xl">
                                                    Growth Marketing</Link>
                                                <ul className="mt-2 font-normal text-slate-500 list-disc pl-4 flex-col space-y-2">
                                                    <li>Search engine optimization (SEO)</li>
                                                    <li>Content marketing</li>
                                                    <li>Pay-per-click (PPC) Advertising</li>
                                                    <li>Social Media Marketing</li>
                                                    <li>Email Marketing</li>
                                                </ul>
                                                <div className="absolute -z-10 -inset-4 rounded-2xl bg-[#fff4f8] opacity-0 peer-hover:opacity-100 transition-opacity duration-300 "></div>
                                            </div>
                                            <div className="relative">
                                                <div className="bg-brand-50 text-brand-600 border border-brand-100 flex flex-shrink-0 w-12 h-12 items-center justify-center rounded-lg mb-3">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-5 h-5" role="img" aria-hidden="true">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"></path>
                                                    </svg>
                                                </div>
                                                <Link href="/quality-assurance-software-testing" className="text-[0.95rem] text-slate-900 peer before:absolute before:-inset-3 before:rounded-xl">
                                                    Quality Assurance &amp; Testing</Link>
                                                <ul className="mt-2 font-normal text-slate-500 list-disc pl-4 flex-col space-y-2">
                                                    <li>Manual Software Testing</li>
                                                    <li>Automated Testing</li>
                                                    <li>Performance Testing</li>
                                                    <li>Hire Software Testers</li>
                                                </ul>
                                                <div className="absolute -z-10 -inset-4 rounded-2xl bg-[#fff4f8] opacity-0 peer-hover:opacity-100 transition-opacity duration-300 "></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-brand-50 py-5">
                                        <div className="container flex">
                                            <Link href="/services" className="hover:text-brand-600">
                                                View All Services <span className="opacity-75 ml-2">→</span></Link>
                                            <Link href="/blog" className="hover:text-brand-600 ml-10">
                                                Read Our Blog <span className="opacity-75 ml-2">→</span></Link>
                                            <Link href="/contact-us" className="ml-auto hover:text-brand-600">
                                                Contact Us Now <span className="opacity-75 ml-2">→</span></Link>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="relative group">
                                <Link href="/technologies" className="py-6 px-4 hover:text-brand-600">
                                    Technologies
                                    <span className="inline-block rotate-180 ml-1 text-lg leading-4 opacity-75">⌃</span></Link>
                                <div className="hidden group-hover:block fixed z-0 h-screen w-full bg-footer-bg-900/25 left-0 top-[84px] pointer-events-none transition-colors duration-300"></div>
                                <div className="submenu p-8 hidden group-hover:block bg-white fixed w-full left-0 mt-5 shadow-2xl shadow-slate-900/10 z-10">
                                    <div className="container grid grid-cols-2 gap-12">
                                        <div>
                                            <h4 className="font-semibold uppercase tracking-wide text-slate-500 inline-block mb-3">
                                                <Link href="/programming-languages" className="text-accent-600 hover:text-accent-700">
                                                    Programming Languages <span className="opacity-75 ml-2">→</span></Link>
                                            </h4>
                                            <ul className="grid grid-cols-2 gap-x-8 gap-y-5 text-slate-500 font-normal">
                                                <li>
                                                    <Link href="/programming-languages#PHP" className="py-1 text-slate-900 text-[0.95rem] inline-block hover:text-brand-600 font-semibold">
                                                        PHP</Link>
                                                    <p>A popular and widely-used server-side scripting language.</p>
                                                </li>
                                                <li>
                                                    <Link href="/programming-languages#python" className="py-1 text-slate-900 text-[0.95rem] inline-block hover:text-brand-600 font-semibold">
                                                        Python</Link>
                                                    <p>A programming language that lets you work quickly and integrate systems more
                                                        effectively.
                                                    </p>
                                                </li>
                                                <li>
                                                    <Link href="/programming-languages#javascript" className="py-1 text-slate-900 text-[0.95rem] inline-block hover:text-brand-600 font-semibold">
                                                        Javascript</Link>
                                                    <p>A popular and versatile programming language for building interactive web apps.</p>
                                                </li>
                                                <li>
                                                    <Link href="/programming-languages#nodejs" className="py-1 text-slate-900 text-[0.95rem] inline-block hover:text-brand-600 font-semibold">
                                                        Node.js</Link>
                                                    <p>A JavaScript runtime built on Chrome&#39;s V8 JavaScript engine.</p>
                                                </li>
                                                <li>
                                                    <Link href="/programming-languages#java" className="py-1 text-slate-900 text-[0.95rem] inline-block hover:text-brand-600 font-semibold">
                                                        Java</Link>
                                                    <p>A popular and widely-used programming language for robust &amp; scalable apps.</p>
                                                </li>
                                                <li>
                                                    <Link href="/programming-languages#dotnet" className="py-1 text-slate-900 text-[0.95rem] inline-block hover:text-brand-600 font-semibold">
                                                        .NET</Link>
                                                    <p>An open source developer platform, created by Microsoft, for building many different
                                                        types of apps.
                                                    </p>
                                                </li>
                                                <li>
                                                    <Link href="/programming-languages#ruby" className="py-1 text-slate-900 text-[0.95rem] inline-block hover:text-brand-600 font-semibold">
                                                        Ruby</Link>
                                                    <p>A dynamic, open source programming language with a focus on simplicity and productivity.</p>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="grid grid-cols-2 gap-8">
                                            <div>
                                                <h4 className="font-semibold uppercase tracking-wide text-slate-500 inline-block mb-3">
                                                    <Link href="/platforms-frameworks" className="text-accent-600 hover:text-accent-700">
                                                        Platforms &amp; Frameworks <span className="opacity-75 ml-2">→</span></Link>
                                                </h4>
                                                <ul className="flex flex-col space-y-2 text-[0.95rem] text-slate-900 font-medium">
                                                    <li>
                                                        <Link href="/platforms-frameworks#WordPress" className="py-1 inline-block hover:text-brand-600">
                                                            WordPress</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/platforms-frameworks#laravel" className="py-1 inline-block hover:text-brand-600">
                                                            Laravel</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/platforms-frameworks#expressjs" className="py-1 inline-block hover:text-brand-600">
                                                            Express.js</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/platforms-frameworks#nextjs" className="py-1 inline-block hover:text-brand-600">
                                                            Next.js</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/platforms-frameworks#shopify" className="py-1 inline-block hover:text-brand-600">
                                                            Shopify</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/platforms-frameworks#dotnetcore" className="py-1 inline-block hover:text-brand-600">
                                                            .NET Core</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/platforms-frameworks#django" className="py-1 inline-block hover:text-brand-600">
                                                            Django</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/platforms-frameworks#AWS" className="py-1 inline-block hover:text-brand-600">
                                                            AWS</Link>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="">
                                                <h4 className="font-semibold uppercase tracking-wide text-slate-500 inline-block mb-3">
                                                    <Link href="/trending-technologies" className="text-accent-600 hover:text-accent-700">
                                                        Trending <span className="opacity-75 ml-2">→</span></Link>
                                                </h4>
                                                <ul className="flex flex-col space-y-2 text-[0.95rem] text-slate-900 font-medium">
                                                    <li>
                                                        <Link href="/trending-technologies#artificial-intelligence-AI" className="py-1 inline-block hover:text-brand-600">
                                                            Artificial Intelligence (AI)</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/trending-technologies#machine-learning-ML" className="py-1 inline-block hover:text-brand-600">
                                                            Machine Learning (ML)</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/trending-technologies#IoT" className="py-1 inline-block hover:text-brand-600">
                                                            Internet of Things (IoT)</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/trending-technologies#blockchain" className="py-1 inline-block hover:text-brand-600">
                                                            Blockchain</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/trending-technologies#DevOps" className="py-1 inline-block hover:text-brand-600">
                                                            DevOps</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/trending-technologies#jamstack" className="py-1 inline-block hover:text-brand-600">
                                                            Jamstack</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/trending-technologies#headless-cms" className="py-1 inline-block hover:text-brand-600">
                                                            Headless
                                                            CMS</Link>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="col-span-2">
                                                <h5 className="font-medium text-base tracking-wide text-slate-800 inline-block mb-3">Looking for something else?</h5>
                                                <p className="text-slate-500 font-normal">Demo site can help you with all of your software development needs. Don&#39;t miss out
                                                    on the opportunity to work with the best software development company in India.
                                                </p>
                                                <Link href="/contact-us" className="text-brand-600 font-semibold inline-block hover:text-slate-900 mt-3">
                                                    <span className="flex items-center space-x-2 text-sm"><span>Contact Us <span className="opacity-75 ml-2">→</span></span></span></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="relative group">
                                <Link href="/case-studies" className="py-6 px-4 hover:text-brand-600">
                                    Case Studies</Link>
                            </li>
                            <li className="relative group">
                                <Link href="/resources" className="py-6 px-4 hover:text-brand-600">
                                    Resources</Link>
                            </li>
                            <li className="relative group">
                                <Link href="/about-us" className="py-6 px-4 hover:text-brand-600">
                                    About Us
                                    <span className="inline-block rotate-180 ml-1 text-lg leading-4 opacity-75">⌃</span></Link>
                                <div className="submenu hidden group-hover:block bg-white absolute w-[28rem] left-3 mt-4 rounded-xl shadow-2xl shadow-slate-900/10 z-10">
                                    <div className="p-8">
                                        <div className="mb-8 relative flex space-x-4">
                                            <div className="bg-brand-50 text-brand-600 border border-brand-100 flex flex-shrink-0 w-12 h-12 items-center justify-center rounded-lg">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-5 h-5" role="img" aria-hidden="true">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z"></path>
                                                </svg>
                                            </div>
                                            <div>
                                                <Link href="/about-us/testimonials" data-sveltekit-reload="" className="text-slate-900 text-[0.92rem] inline-block before:absolute before:-inset-3 before:rounded-xl peer">
                                                    Client
                                                    Testimonials</Link>
                                                <p className="mt-1 font-normal text-slate-500">Check out what our clients say about us.
                                                    That might help you understand us better.
                                                </p>
                                                <div className="absolute -z-10 -inset-4 rounded-2xl bg-[#fff4f8] opacity-0 peer-hover:opacity-100 transition-opacity duration-300 "></div>
                                            </div>
                                        </div>
                                        <div className="mb-8 relative flex space-x-4">
                                            <div className="bg-brand-50 text-brand-600 border border-brand-100 flex flex-shrink-0 w-12 h-12 items-center justify-center rounded-lg">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" role="img" aria-hidden="true" strokeWidth="1.75" stroke="currentColor" className="w-5 h-5">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 012.916.52 6.003 6.003 0 01-5.395 4.972m0 0a6.726 6.726 0 01-2.749 1.35m0 0a6.772 6.772 0 01-3.044 0"></path>
                                                </svg>
                                            </div>
                                            <div>
                                                <Link href="/about-us/awards-recognitions" className="text-slate-900 text-[0.92rem] inline-block before:absolute before:-inset-3 before:rounded-xl peer">
                                                    Awards
                                                    &amp; Recognitions</Link>
                                                <p className="mt-1 font-normal text-slate-500">Check our special mentions, anecdotes,
                                                    and awards that we received worldwide.
                                                </p>
                                                <div className="absolute -z-10 -inset-4 rounded-2xl bg-[#fff4f8] opacity-0 peer-hover:opacity-100 transition-opacity duration-300 "></div>
                                            </div>
                                        </div>
                                        <div className="mb-8 relative flex space-x-4">
                                            <div className="bg-brand-50 text-brand-600 border border-brand-100 flex flex-shrink-0 w-12 h-12 items-center justify-center rounded-lg">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-5 h-5" role="img" aria-hidden="true">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605"></path>
                                                </svg>
                                            </div>
                                            <div>
                                                <Link href="/about-us/our-story" className="text-slate-900 text-[0.92rem] inline-block before:absolute before:-inset-3 before:rounded-xl peer">
                                                    Our
                                                    Story</Link>
                                                <p className="mt-1 font-normal text-slate-500">Learn about how we started, what
                                                    challenges we faced &amp; the story behind our name.
                                                </p>
                                                <div className="absolute -z-10 -inset-4 rounded-2xl bg-[#fff4f8] opacity-0 peer-hover:opacity-100 transition-opacity duration-300 "></div>
                                            </div>
                                        </div>
                                        <div className="relative flex space-x-4">
                                            <div className="bg-brand-50 text-brand-600 border border-brand-100 flex flex-shrink-0 w-12 h-12 items-center justify-center rounded-lg">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-5 h-5" role="img" aria-hidden="true">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.05 4.575a1.575 1.575 0 10-3.15 0v3m3.15-3v-1.5a1.575 1.575 0 013.15 0v1.5m-3.15 0l.075 5.925m3.075.75V4.575m0 0a1.575 1.575 0 013.15 0V15M6.9 7.575a1.575 1.575 0 10-3.15 0v8.175a6.75 6.75 0 006.75 6.75h2.018a5.25 5.25 0 003.712-1.538l1.732-1.732a5.25 5.25 0 001.538-3.712l.003-2.024a.668.668 0 01.198-.471 1.575 1.575 0 10-2.228-2.228 3.818 3.818 0 00-1.12 2.687M6.9 7.575V12m6.27 4.318A4.49 4.49 0 0116.35 15m.002 0h-.002"></path>
                                                </svg>
                                            </div>
                                            <div>
                                                <Link href="/about-us/social-responsibilities" className="text-slate-900 text-[0.92rem] inline-block before:absolute before:-inset-3 before:rounded-xl peer">
                                                    Social
                                                    Responsibilities</Link>
                                                <p className="mt-1 font-normal text-slate-500">Check what we do to give back to society
                                                    and the latest activities, offers, etc.
                                                </p>
                                                <div className="absolute -z-10 -inset-4 rounded-2xl bg-[#fff4f8] opacity-0 peer-hover:opacity-100 transition-opacity duration-300 "></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-brand-50 py-5 px-8 rounded-b-xl">
                                        <Link href="/about-us" className="text-slate-900 hover:text-brand-600">
                                            About Us Overview <span className="opacity-75 ml-2">→</span></Link>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </nav>
                    <nav className="hidden md:flex items-center">
                        <Link href="/contact-us" className="hover:text-brand-600">
                            Contact Us <span className="opacity-75 ml-2">→</span></Link>
                    </nav>
                    <button className="md:hidden">
                        <span className="sr-only">Menu</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;