import { NextPage } from 'next';
import ServicesHero from '../../sections/Services-Hero';
import data from "../../data/ui-ux-design.json";
import CardsGroup from '../../sections/CardsGroup';
import GetProposalSection from '../../sections/GetProposal';

const Page: NextPage = () => {
    return (
        <>
            <ServicesHero data={data.hero} />
            <CardsGroup />
            <CardsGroup />
            <CardsGroup />
            <CardsGroup />
            <GetProposalSection />
        </>
    );
};

export default Page;
