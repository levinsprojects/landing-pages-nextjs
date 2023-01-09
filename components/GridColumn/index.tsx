import Link from "next/link";

interface ActionCardProps{
    label:string;
    url:string;
};

const ActionCard = ({ label, url }: ActionCardProps) => {
    return <div className="flex items-end justify-end">
        <Link href={url} className="inline-flex justify-center py-3 px-6 bg-accent-600 text-sm font-semibold text-white rounded-lg hover:bg-accent-700">{label} <span className="opacity-75 ml-2">→</span></Link>
    </div>;
};

interface CardProps{
    heading:{
        label:string;
        url?:string;
    };
    content:string[]|string;
};

const Card = ({ heading , content }: CardProps) => {
    return <div>
        <h2 className="font-semibold">
            {
                heading?.url ? <Link href={heading.url} className="hover:text-accent-600">{heading.label}</Link> : heading.label
            }
        </h2>
        {
            typeof (content) == 'string' ? <p className="mt-3 text-sm">{content}</p> : content.map((item,ind)=>{
                return <p key={ind} className="mt-3 text-sm">{item}</p>
            })
        }
    </div>
};

interface GridColumnProps{
    needUpperDevider?:boolean;
    gridCount?:2|3;
    cards: CardProps[];
    action?: ActionCardProps;
};

const GridColumn = ({ needUpperDevider, gridCount = 3, cards, action }: GridColumnProps) => {
    return <div className={`${needUpperDevider ? 'mt-10 border-t border-slate-200 ':''}grid grid-cols-1 md:grid-cols-2 ${gridCount === 3 ? "lg:grid-cols-3 lg:gap-12 " : "md:gap-16 "}gap-8 pt-10`}>
        {
            cards.map((card,ind)=>{
                return <Card key={ind} heading={card.heading} content={card.content}></Card>
            })
        }
        {
            action && <ActionCard label={action.label} url={action.url}></ActionCard>
        }
    </div>
};

export default GridColumn;