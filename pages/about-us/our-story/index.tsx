import { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import ServicesHero from '../../../sections/Services-Hero';
import data from "../../../data/our-story.json";
import FooterCardSection from '../../../sections/FooterCardSection';
import StickyTabsSection from '../../../sections/StickyTabsSection';
import md from 'markdown-it';
import React from 'react';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const directory = path.join(process.cwd(), '/data/');

export const getStaticProps: GetStaticProps<{ content: string, companyData:any }> = async (
    context
) => {

    try {
        const storyPath = fs.readFileSync(
            directory + `our-story-content.md`,
            'utf8'
        );

        const { data: companyData ,content } = matter(storyPath);

        return {
            props: { content, companyData },
        };
    } catch (e) {
        return {
            notFound: true,
        };
    }
};

const Page = ({ content, companyData }: InferGetStaticPropsType<typeof getStaticProps>) => {

    return (
        <>
            <ServicesHero data={data.hero} />
            <StickyTabsSection tabs={data.stickyTabs}></StickyTabsSection>
            <section className="bg-white py-12 lg:py-24">
                <div className="container">
                    <div className="max-w-3xl mx-auto prose" dangerouslySetInnerHTML={{ __html: md().render(content) }}></div>
                    <address className='not-italic max-w-3xl mx-auto mt-10'>
                        <p>Thanking you,</p>
                        <p className=' font-bold'>{companyData.ceo}</p>
                        <p>Founder & CEO,</p>
                        <p>{companyData.company}</p>
                    </address>
                </div>
            </section>
            <FooterCardSection heading={data.footerCard.heading} desc={data.footerCard.desc} action={data.footerCard.action} isWhiteBg={true} />
        </>
    );
};

export default Page;
