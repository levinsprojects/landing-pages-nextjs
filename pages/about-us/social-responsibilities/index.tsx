import { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import ServicesHero from '../../../sections/Services-Hero';
import data from "../../../data/social-responsibilities.json";
import FooterCardSection from '../../../sections/FooterCardSection';
import StickyTabsSection from '../../../sections/StickyTabsSection';
import md from 'markdown-it';
import React from 'react';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Image from 'next/image';
import farmersImg from '../../../public/we-support-farmers-soldiers.jpg';

const directory = path.join(process.cwd(), '/data/');

export const getStaticProps: GetStaticProps<{ content: string, companyData: any }> = async (
    context
) => {

    try {
        const storyPath = fs.readFileSync(
            directory + `social-responsibilities-content.md`,
            'utf8'
        );

        const { data: companyData, content } = matter(storyPath);

        return {
            props: { content, companyData },
        };
    } catch (e) {
        return {
            notFound: true,
        };
    }
};

interface CardProps{
    isImage?:boolean;
    url:string;
    heading:string;
    desc:string;
};
const Card = ({ isImage, heading, desc, url }: CardProps) => {
    return <div className="bg-white rounded-xl shadow-xl">
        {
            isImage ? <Image
                alt={heading}
                loading="lazy" 
                width="420"
                height="255"
                className='rounded-t-xl w-full h-64 object-cover'
                src={`/${url}`} 
                blurDataURL={`/_next/image?url=${url}&w=16&q=1`} 
                placeholder="blur"
            ></Image> : <video 
                src={`/${url}`} className="w-full h-64 object-cover rounded-t-xl" webkit-playsinline="true" playsInline={true} loop={true} autoPlay={true}
            ></video>
        }
        <div className="p-8">
            <h4 className="text-lg">{heading}</h4>
            <p className="mt-4">{desc}</p>
        </div>
    </div>
};

const Page = ({ content, companyData }: InferGetStaticPropsType<typeof getStaticProps>) => {

    return (
        <>
            <ServicesHero data={data.hero} />
            <StickyTabsSection tabs={data.stickyTabs}></StickyTabsSection>
            <section className="bg-white py-12 lg:py-24 border-b border-slate-100">
                <div className="container">
                    <div className="max-w-3xl mx-auto prose" dangerouslySetInnerHTML={{ __html: md().render(content) }}></div>
                </div>
            </section>
            <section className="bg-white py-12 lg:py-24 border-b border-slate-100">
                <div className="container">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
                        <div>
                            <Image alt="We support Farmers &amp; Soldiers" title="We support Farmers &amp; Soldiers" loading="lazy" className="rounded-xl shadow-xl" src={farmersImg} blurDataURL={`/_next/image?url=${farmersImg}&w=16&q=1`} placeholder="blur" />
                        </div>
                        <div>
                            <h2 className="text-3xl">{data.patriotismSection.heading}</h2>
                            <h3 className="mt-2 text-slate-500 text-lg">{data.patriotismSection.subHeading}</h3>
                            {
                                data.patriotismSection.desc.map((text,ind)=>{
                                    return <p className={ind===0?"mt-6":"mt-3"} key={ind}>{text}</p>
                                })
                            }
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-slate-100 py-12 lg:py-24 border-b border-slate-100">
                <div className="container">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {
                            data.cards.map((card)=>{
                                return <Card
                                    heading={card.heading}
                                    isImage={card.isImage}
                                    desc={card.desc}
                                    url={card.source}
                                ></Card>
                            })
                        }
                    </div>
                </div>
            </section>
        </>
    );
};

export default Page;
