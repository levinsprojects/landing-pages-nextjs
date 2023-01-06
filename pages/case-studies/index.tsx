import { NextPage } from 'next';
import ServicesHero from '../../sections/Services-Hero';
import data from "../../data/case-studies.json";
import ArticleDetailsSection from '../../sections/ArticleDetailsSection';

const Page: NextPage = () => {
    return (
        <>
            <ServicesHero data={data.hero} />
            <ArticleDetailsSection data={data.content} />
        </>
    );
};

export default Page;
