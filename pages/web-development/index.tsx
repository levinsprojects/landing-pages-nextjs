import { NextPage } from 'next';
import ServicesHero from '../../sections/Services-Hero';
import data from "../../data/web-development.json";
import CardsGroup from '../../sections/CardsGroup';

const Page: NextPage = () => {
    return (
        <>
            <ServicesHero data={data.hero}/>
            <CardsGroup />
            <CardsGroup />
            <CardsGroup />
            <CardsGroup />
        </>
    );
};

export default Page;
