import { NextPage } from 'next';
import ServicesHero from '../../sections/Services-Hero';
import data from "../../data/technologies.json";
import CardsColumnSection from '../../sections/CardsColumnSection';
import FooterCardSection from '../../sections/FooterCardSection';
import TagsHorizontalScrollAnimation from '../../components/TagsHorizontalScrollAnimation';

const Page: NextPage = () => {
    return (
        <>
            <ServicesHero data={data.hero} />
            {
                data.sections.map((item, ind) => {
                    return <CardsColumnSection data={item} key={ind}></CardsColumnSection>
                })
            }
            <section className='bg-brand-50 pt-4 pb-16'>
                <TagsHorizontalScrollAnimation></TagsHorizontalScrollAnimation>
            </section>
            <FooterCardSection heading={data.footerCard.heading} desc={data.footerCard.desc} action={data.footerCard.action} isWhiteBg={false} />
        </>
    );
};

export default Page;
