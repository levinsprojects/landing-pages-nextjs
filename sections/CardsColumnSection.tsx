import GridColumn from "../components/GridColumn";
import SectionDetailPanel from "../components/SectionDetailPanel";

const CardsColumnSection = ({data}:{data:any}) => {
    const {
        sectionAddress,
        moreDetail,
        needUpperDevider,
        gridCount,
        cards,
        cardAction
    } = data;
    const {
        title, heading, content, action
    } = sectionAddress;
    return <section  className="bg-white pb-16 md:pb-24 pt-16">
        <div  className="container">
            <SectionDetailPanel className={"text-xl font-bold text-slate-900"} title={title} heading={heading} content={content} action={action}></SectionDetailPanel>
            <GridColumn needUpperDevider={needUpperDevider} gridCount={gridCount} cards={cards} action={cardAction}></GridColumn>
            {
                moreDetail && <p className='mt-10 text-slate-500 leading-7 text-sm' dangerouslySetInnerHTML={{ __html: moreDetail }}></p>
            }
        </div>
    </section>
};

export default CardsColumnSection;