import { NextPage } from 'next';
import ServicesHero from '../../sections/Services-Hero';
import data from "../../data/about-us.json";
import FooterCardSection from '../../sections/FooterCardSection';
import StickyTabsSection from '../../sections/StickyTabsSection';
import md from 'markdown-it';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import industries from '../../public/industries.webp';
import SectionDetailPanel from '../../components/SectionDetailPanel';


interface SectionWrapperProps {
    colCount?: 2 | 3;
    children: React.ReactNode;
    hideBorder?:boolean;
};
const SectionWrapperLoc = ({ colCount = 3, children,hideBorder=false }: SectionWrapperProps) => {
    return <section className={`bg-white py-16 md:py-24 ${!hideBorder ? 'border-b border-brand-50':''}`}>
        <div className="container">
            <div className={`grid grid-cols-1 ${colCount === 3 ? "lg:grid-cols-3" : "lg:grid-cols-2"} gap-y-8 gap-x-12`}>
                {
                    children
                }
            </div>
        </div>
    </section>
};

const ThumsUpIcon = () => {
    return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-5 h-5" role="img" aria-hidden="true">
        <path stroke-linecap="round" stroke-linejoin="round" d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z"></path>
    </svg>
};
const HelpIcon = () => {
    return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-5 h-5" role="img" aria-hidden="true">
        <path stroke-linecap="round" stroke-linejoin="round" d="M16.712 4.33a9.027 9.027 0 011.652 1.306c.51.51.944 1.064 1.306 1.652M16.712 4.33l-3.448 4.138m3.448-4.138a9.014 9.014 0 00-9.424 0M19.67 7.288l-4.138 3.448m4.138-3.448a9.014 9.014 0 010 9.424m-4.138-5.976a3.736 3.736 0 00-.88-1.388 3.737 3.737 0 00-1.388-.88m2.268 2.268a3.765 3.765 0 010 2.528m-2.268-4.796a3.765 3.765 0 00-2.528 0m4.796 4.796c-.181.506-.475.982-.88 1.388a3.736 3.736 0 01-1.388.88m2.268-2.268l4.138 3.448m0 0a9.027 9.027 0 01-1.306 1.652c-.51.51-1.064.944-1.652 1.306m0 0l-3.448-4.138m3.448 4.138a9.014 9.014 0 01-9.424 0m5.976-4.138a3.765 3.765 0 01-2.528 0m0 0a3.736 3.736 0 01-1.388-.88 3.737 3.737 0 01-.88-1.388m2.268 2.268L7.288 19.67m0 0a9.024 9.024 0 01-1.652-1.306 9.027 9.027 0 01-1.306-1.652m0 0l4.138-3.448M4.33 16.712a9.014 9.014 0 010-9.424m4.138 5.976a3.765 3.765 0 010-2.528m0 0c.181-.506.475-.982.88-1.388a3.736 3.736 0 011.388-.88m-2.268 2.268L4.33 7.288m6.406 1.18L7.288 4.33m0 0a9.024 9.024 0 00-1.652 1.306A9.025 9.025 0 004.33 7.288"></path>
    </svg>
};
const TeamIcon = () => {
    return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-5 h-5" role="img" aria-hidden="true">
        <path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"></path>
    </svg>
};

const Page: NextPage = () => {

    return (
        <>
            <ServicesHero data={data.hero} />
            <StickyTabsSection tabs={data.stickyTabs}></StickyTabsSection>
            <section className="bg-white py-12 lg:py-24 border-b border-slate-100">
                <div className="container">
                    <div className="max-w-3xl mx-auto prose prose-a:no-underline prose-a:text-brand-600 prose-a:font-normal" dangerouslySetInnerHTML={{ __html: md().render(data.mainContent) }}></div>
                </div>
            </section>
            <SectionWrapperLoc>
                <>
                    <div className="lg:row-span-2">
                        <h4 className="text-3xl md:text-4xl font-extrabold tracking-tight">
                            {
                                data.ourStorySection.heading.map((text, ind) => {
                                    return <>
                                        {ind !== 0 && <br className="hidden md:block"></br>}{text}
                                    </>
                                })
                            }
                        </h4>
                        <div className="mt-4 mb-6 leading-7">
                            <p>{data.ourStorySection.desc}</p>
                        </div>
                        <Link
                            className="font-semibold text-accent-600 hover:text-accent-700"
                            href={data.ourStorySection.action.url}
                        >
                            {data.ourStorySection.action.label} <span className="opacity-90 ml-1">→</span>
                        </Link>
                    </div>
                    {
                        data.ourStorySection.points.map((point, ind) => {
                            return <div key={ind}>
                                <h5 className="font-semibold text-lg">{point.heading}</h5>
                                <p className="mt-2 text-sm">{point.desc}</p>
                            </div>
                        })
                    }
                </>
            </SectionWrapperLoc>
            <section className="bg-secondary-700 overflow-y-hidden">
                <div className="relative">
                    <Image alt="Industries for whom we design websites" title="Industries for whom we design websites" className="absolute inset-0 mix-blend-overlay object-cover w-full" loading="lazy" decoding="async" width="1600" height="1087" src={industries} blurDataURL={`/_next/image?url=${industries}&w=16&q=1`} placeholder="blur" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 relative ">
                    <div className="bg-footer-bg-900 text-brand-100 bg-opacity-60 backdrop-filter backdrop-blur py-16 md:py-24 px-6 xl:px-40">
                        <h6 className="text-bold text-white text-xl">{data.visionSection[0].heading}</h6>
                        <div className="mt-4 italic text-lg lg:text-xl font-serif font-medium">{data.visionSection[0].desc}</div>
                    </div>
                    <div className="bg-[#3c1228] text-brand-100 bg-opacity-60 backdrop-filter backdrop-blur py-16 md:py-24 px-6 xl:px-40">
                        <h6 className="text-bold text-white text-xl">{data.visionSection[1].heading}</h6>
                        <div className="mt-4">
                            <ul className="italic text-lg font-serif font-medium list-disc ml-5">
                                {
                                    (data.visionSection[1].desc as string[])?.map((point,ind)=>{
                                        return <li key={ind}>{point}</li> 
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <section className="overflow-hidden">
                <div className="relative">
                    <div className="absolute w-[40rem] left-1/3 top-0 rotate-45">
                        <div className="h-16 bg-accent-600 rounded-full"></div>
                        <div className="h-16 bg-blue-300 rounded-full "></div>
                        <div className="h-12 bg-yellow-200 rounded-full "></div>
                        <div className="h-12 bg-yellow-400 rounded-full "></div>
                        <div className="h-16 bg-pink-300 rounded-full "></div>
                        <div className="h-16 bg-pink-600 rounded-full "></div>
                    </div>
                </div>
                <div className="bg-slate-100 relative bg-opacity-80 py-16 md:py-24 backdrop-filter backdrop-blur-3xl">
                    <div className="container">
                        <SectionDetailPanel action={data.quotesSection.action} heading={data.quotesSection.heading} content={data.quotesSection.desc}></SectionDetailPanel>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mt-12 font-serif italic font-medium">
                            {
                                data.quotesSection.cards.map((card, ind) => {
                                    return <div key={ind} className="bg-white rounded-xl shadow-xl shadow-slate-200 p-8 lg:p-10">
                                        <figure>
                                            <blockquote className="text-lg mb-2">{card.quote}</blockquote>
                                            <figcaption className="text-slate-400 text-sm">– {card.quote}</figcaption>
                                        </figure>
                                    </div>
                                })
                            }
                        </div>
                    </div>
                </div>
            </section>
            <SectionWrapperLoc>
                <>
                    <div className="lg:row-span-2">
                        <h4 className="text-3xl font-extrabold tracking-tight">{data.digitalSolutionSection.heading}</h4>
                        <div className="mt-4 mb-6 leading-7">
                            <p>{data.digitalSolutionSection.desc}</p>
                        </div>
                    </div>
                    {
                        data.digitalSolutionSection.cards.map((card,ind)=>{
                            return <div key={ind}>
                                <div className="bg-brand-50 text-brand-600 border border-brand-100 flex flex-shrink-0 w-12 h-12 items-center justify-center rounded-lg">
                                    {
                                        card.icon === 'thumbs-up' ? <ThumsUpIcon/> :
                                            card.icon === 'help' ? <HelpIcon/> : 
                                                <TeamIcon/>
                                    }
                                </div>
                                <h5 className="font-semibold text-base mt-4">{card.heading}</h5>
                                <p className="mt-3 text-sm">{card.desc}</p>
                            </div>
                        })
                    }
                </>
            </SectionWrapperLoc>
            <SectionWrapperLoc colCount={2} hideBorder={true}>
                <>
                    <div>
                        <h5 className="text-3xl font-extrabold tracking-tight max-w-xl">{data.principlesSection.heading}</h5>
                        {
                            data.principlesSection.desc.map((content,ind)=>{
                                return <p className="mt-4" key={ind}>{content}</p>
                            })
                        }
                    </div>
                    <div className="text-slate-400">
                        {
                            data.principlesSection.points.map((point,ind)=>{
                                return <div key={ind} className={ind!==0?"mt-6":""}>
                                    <h5 className="text-lg font-semibold">{point.heading}</h5>
                                    <p className="mt-1">{ point.desc }</p>
                                </div>
                            })
                        }
                    </div>
                </>
            </SectionWrapperLoc>
            <FooterCardSection heading={data.footerCard.heading} desc={data.footerCard.desc} action={data.footerCard.action} isWhiteBg={true} />
        </>
    );
};

export default Page;
