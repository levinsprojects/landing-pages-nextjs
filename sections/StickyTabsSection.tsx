import Link from "next/link";
import { useRouter } from 'next/router';

const StickyTabsSection = ({ tabs }: { tabs: { label: string, url:string, disabled?:boolean }[]}) => {

    const router = useRouter();

    const isSelectedUrl = (tab:any)=>{
        return router.pathname === tab.url;
    }

    return (
        <section className="bg-[#f9f2f7] hidden lg:block border-b sticky z-30 top-[85px] border-brand-100">
            <ul className="container lg:grid lg:grid-cols-2 text-center text-sm">
                {
                    tabs.map((tab,ind)=>{
                        return !tab.disabled && <li key={ind} className={`border-l border-b ${(tabs.length - 1 === ind) ? 'border-r' : ''} md:border-b-0 border-brand-100/50`}>
                            <Link
                                className={`py-3 md:py-5 block text-slate-500 hover:text-slate-800 ${isSelectedUrl(tab) ? "font-bold" :"hover:font-bold font-normal"}`}
                                href={tab.url}
                            >{tab.label}</Link>
                        </li>
                    })
                }
            </ul>
        </section>
    );
};

export default StickyTabsSection;