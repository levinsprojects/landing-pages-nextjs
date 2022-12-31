import { NextPage } from 'next';
import ServicesHero from '../../sections/Services-Hero';
import data from "../../data/software-development.json";
import CardsColumnSection from '../../sections/CardsColumnSection';
import FooterCardSection from '../../sections/FooterCardSection';

const Page: NextPage = () => {
    return (
        <>
            <ServicesHero data={data.hero} />
            {
                data.sections.map((item, ind) => {
                    return <CardsColumnSection data={item} key={ind}></CardsColumnSection>
                })
            }
            <FooterCardSection heading={data.footerCard.heading} desc={data.footerCard.desc} action={data.footerCard.action} isWhiteBg={true} />
        </>
    );
};

export default Page;
