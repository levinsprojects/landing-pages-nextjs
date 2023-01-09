import { NextPage } from 'next';
import ServicesHero from '../../sections/Services-Hero';
import data from "../../data/services.json";
import ArticleDetailsSection from '../../sections/ArticleDetailsSection';
import FooterCardSection from '../../sections/FooterCardSection';
import SectionWrapper from '../../components/SectionWrapper';
import SectionDetailPanel from '../../components/SectionDetailPanel';
import GridColumn from '../../components/GridColumn';

const Page: NextPage = () => {
    return (
        <>
            <ServicesHero data={data.hero} />
            <SectionWrapper>
                <>
                    <SectionDetailPanel heading="Our Services" content={["At Atonis Technologies, we are committed to delivering high-quality software development services that help businesses of all sizes improve their operations and drive growth.","Our team of experienced developers are skilled in a variety of technologies and can work with you to create custom solutions that are tailored to your specific needs."]}></SectionDetailPanel>
                    <GridColumn gridCount={2} cards={data.cards}></GridColumn>
                    <p className='mt-10 text-slate-500 text-sm' dangerouslySetInnerHTML={{ __html: data.cardsDesc }}></p>
                </>
            </SectionWrapper>
            <ArticleDetailsSection data={data.content} />
            <FooterCardSection heading={data.footerCard.heading} desc={data.footerCard.desc} action={data.footerCard.action} isWhiteBg={true} />
        </>
    );
};

export default Page;