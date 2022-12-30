import { NextPage } from 'next';
import ServicesHero from '../../sections/Services-Hero';
import data from "../../data/growth-marketing.json";
import ArticleDetailsSection from '../../sections/ArticleDetailsSection';
import FooterCardSection from '../../sections/FooterCardSection';

const Page: NextPage = () => {
    return (
        <>
            <ServicesHero data={data.hero} />
            <ArticleDetailsSection data={data.content} />
            <FooterCardSection heading={data.footerCard.heading} desc={data.footerCard.desc} action={data.footerCard.action} isWhiteBg={true} cardType={'chess'} />
        </>
    );
};

export default Page;
