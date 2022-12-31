import { NextPage } from 'next';
import ServicesHero from '../../sections/Services-Hero';
import data from "../../data/web-development.json";
import CardsColumnSection from '../../sections/CardsColumnSection';

const Page: NextPage = () => {
    return (
        <>
            <ServicesHero data={data.hero}/>
            {
                data.sections.map((item,ind)=>{
                    return <CardsColumnSection data={item} key={ind}></CardsColumnSection>
                })
            }
        </>
    );
};

export default Page;
