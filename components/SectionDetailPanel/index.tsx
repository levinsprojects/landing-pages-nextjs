import Link from "next/link";

interface SectionDetailPanelProps {
    title?: string;
    heading: string[] | string;
    content: string[] | string;
    action?: {
        label: string;
        url: string;
    }
};

const SectionDetailPanel = ({ title, heading, content, action }: SectionDetailPanelProps) => {
    return <div className="max-w-2xl">
        {
            title && <h5 className="text-blue-600 font-semibold">{title}</h5>
        }
        <h4 className="mt-4 text-3xl md:text-4xl font-extrabold tracking-tight" dangerouslySetInnerHTML={{ __html: typeof (heading) == 'string' ? heading : heading?.join(`<br class="hidden md:block" />`) }}></h4>
        {
            typeof (content) == 'string' ? <p className="mt-4 mb-6">{content}</p> : content.map((item, ind) => {
                return <p key={ind} className={ind == 0 ? "mt-4" : "mt-3"} dangerouslySetInnerHTML={{ __html: item }}></p>
            })
        }
        {action && <Link href={action?.url} className="font-semibold text-blue-600 hover:text-blue-700 mt-6">{action?.label} <span className="opacity-90 ml-1">→</span></Link>}
    </div>
};

export default SectionDetailPanel;