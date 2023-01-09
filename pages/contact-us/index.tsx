import { NextPage } from 'next';
import ContactForm from '../../components/ContactForm';
import data from "../../data/contact-us.json";
import md from 'markdown-it';

const Page: NextPage = () => {
    return (
        <>
            <section  className="border-b border-slate-100 overflow-hidden">
                <div  className="absolute inset-0 -z-10 mx-0 max-w-none overflow-hidden">
                    <div  className="absolute left-12 md:left-1/2 top-0 ml-0 md:ml-[-38rem] h-full w-[40rem] lg:w-full">
                        <div className="absolute inset-0 bg-gradient-to-r from-brand-400 to-brand-100 [mask-image:radial-gradient(farthest-side_at_top,white,transparent)]">
                            <svg aria-hidden="true" role="img"  className="absolute inset-0 h-[200%] w-full fill-black/40 stroke-black/50 mix-blend-overlay">
                                <defs>
                                    <pattern id=":ST394:" width="72" height="56" patternUnits="userSpaceOnUse" x="0" y="0">
                                        <path d="M.5 56V.5H72" fill="none"></path>
                                    </pattern>
                                </defs>
                                <rect width="100%" height="100%" strokeWidth="0" fill="url(#:ST394:)"></rect>
                                <svg x="0" y="0"  className="overflow-visible">
                                    <rect strokeWidth="0" width="73" height="57" x="288" y="168"></rect>
                                    <rect strokeWidth="0" width="73" height="57" x="144" y="56"></rect>
                                    <rect strokeWidth="0" width="73" height="57" x="504" y="168"></rect>
                                    <rect strokeWidth="0" width="73" height="57" x="720" y="336"></rect>
                                </svg>
                            </svg>
                        </div>
                    </div>
                </div>
                <div  className="bg-slate-50 bg-opacity-60 relative">
                    <div  className="container md:flex items-center gap-8 pt-28 md:pt-40 pb-20">
                        <div  className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
                            <div  className="order-2 lg:order-1">
                                <h1  className="font-semibold text-brand-600">{data.heading}</h1>
                                <p  className="font-extrabold text-2xl md:text-3xl text-slate-900 tracking-tight md:leading-[2.5rem] mt-2">
                                    {
                                        data.subHeading.map((text,ind)=>{
                                            return <>{ind!==0&& <br/>}{text}</>;
                                        })
                                    }
                                </p>
                                {
                                    data.desc.map((content,ind)=>{
                                        return <p className='mt-5' key={ind}>{content}</p>
                                    })
                                }
                            </div>
                            <div  className="bg-white p-8 md:p-10 shadow-2xl shadow-slate-900/10 rounded-xl order-1 lg:order-2">
                                <ContactForm/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-white py-16 md:py-24">
                <div className="container">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-10 text-sm">
                        <div className="">
                            <div className="bg-brand-50 text-brand-600 border border-brand-100 flex flex-shrink-0 w-12 h-12 items-center justify-center rounded-lg">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5" role="img" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"></path>
                                </svg>
                            </div>
                            <h5 className="mb-3 mt-4 font-semibold text-base">{data.companie.address.heading}</h5>
                            <div dangerouslySetInnerHTML={{ __html: md().render(data.companie.address.desc)}}></div>
                        </div>
                        <div>
                            <div className="bg-brand-50 text-brand-600 border border-brand-100 flex flex-shrink-0 w-12 h-12 items-center justify-center rounded-lg">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5" role="img" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z"></path>
                                </svg>
                            </div>
                            <h5 className="mb-3 mt-4 font-semibold text-base">{data.companie.sales.heading}</h5>
                            <div className='prose prose-p:m-0' dangerouslySetInnerHTML={{ __html: md().render(data.companie.sales.desc) }}></div>
                        </div>
                        <div>
                            <div className="bg-brand-50 text-brand-600 border border-brand-100 flex flex-shrink-0 w-12 h-12 items-center justify-center rounded-lg">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5" role="img" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M16.712 4.33a9.027 9.027 0 011.652 1.306c.51.51.944 1.064 1.306 1.652M16.712 4.33l-3.448 4.138m3.448-4.138a9.014 9.014 0 00-9.424 0M19.67 7.288l-4.138 3.448m4.138-3.448a9.014 9.014 0 010 9.424m-4.138-5.976a3.736 3.736 0 00-.88-1.388 3.737 3.737 0 00-1.388-.88m2.268 2.268a3.765 3.765 0 010 2.528m-2.268-4.796a3.765 3.765 0 00-2.528 0m4.796 4.796c-.181.506-.475.982-.88 1.388a3.736 3.736 0 01-1.388.88m2.268-2.268l4.138 3.448m0 0a9.027 9.027 0 01-1.306 1.652c-.51.51-1.064.944-1.652 1.306m0 0l-3.448-4.138m3.448 4.138a9.014 9.014 0 01-9.424 0m5.976-4.138a3.765 3.765 0 01-2.528 0m0 0a3.736 3.736 0 01-1.388-.88 3.737 3.737 0 01-.88-1.388m2.268 2.268L7.288 19.67m0 0a9.024 9.024 0 01-1.652-1.306 9.027 9.027 0 01-1.306-1.652m0 0l4.138-3.448M4.33 16.712a9.014 9.014 0 010-9.424m4.138 5.976a3.765 3.765 0 010-2.528m0 0c.181-.506.475-.982.88-1.388a3.736 3.736 0 011.388-.88m-2.268 2.268L4.33 7.288m6.406 1.18L7.288 4.33m0 0a9.024 9.024 0 00-1.652 1.306A9.025 9.025 0 004.33 7.288"></path>
                                </svg>
                            </div>
                            <h5 className="mb-3 mt-4 font-semibold text-base">{data.companie.support.heading}</h5>
                            <div className='prose prose-p:m-0' dangerouslySetInnerHTML={{ __html: md().render(data.companie.support.desc) }}></div>
                        </div>
                        <div>
                            <div className="bg-brand-50 text-brand-600 border border-brand-100 flex flex-shrink-0 w-12 h-12 items-center justify-center rounded-lg">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5" role="img" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75"></path>
                                </svg>
                            </div>
                            <h5 className="mb-3 mt-4 font-semibold text-base">{data.companie.career.heading}</h5>
                            <div className='prose prose-p:m-0' dangerouslySetInnerHTML={{ __html: md().render(data.companie.career.desc) }}></div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Page;
