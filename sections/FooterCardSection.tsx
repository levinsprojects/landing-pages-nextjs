import Link from "next/link";

interface FooterCardSectionProps {
    heading:string;
    desc:string;
    action:{
        label:string;
        url:string;
    };
    isWhiteBg?:boolean;
    cardType?: 'chess' |'triangles';
}

const FooterCardSection = ({ heading, desc, action, isWhiteBg, cardType ='triangles' }: FooterCardSectionProps) => {
    return (
        <section className={isWhiteBg ? "cta-bg-white":"cta-bg"}>
            <div className="container">
                <div className={`${(cardType == 'triangles') ? "max-w-5xl text-blue-100" : "relative text-blue-200 max-w-4xl"} mx-auto bg-secondary-600 rounded-xl shadow-2xl md:text-center`}>
                    {
                        cardType == "chess" && <div className="absolute inset-0 rounded-xl transition duration-300 [mask-image:linear-gradient(white,transparent)] ">
                            <svg aria-hidden="true" className="absolute inset-x-0 inset-y-[-30%] h-[160%] w-full fill-white/[0.06] stroke-white/10 bg-gradient-to-r from-secondary-400 to-brand-100">
                                <defs>
                                    <pattern id=":R5ahd6:" width="72" height="56" patternUnits="userSpaceOnUse" x="50%" y="-6">
                                        <path d="M.5 56V.5H72" fill="none"></path>
                                    </pattern>
                                </defs>
                                <rect width="100%" height="100%" strokeWidth="0" fill="url(#:R5ahd6:)"></rect>
                                <svg x="50%" y="-6" className="overflow-visible">
                                    <rect strokeWidth="0" width="73" height="57" x="288" y="112"></rect>
                                    <rect strokeWidth="0" width="73" height="57" x="-144" y="112"></rect>
                                    <rect strokeWidth="0" width="73" height="57" x="72" y="168"></rect>
                                    <rect strokeWidth="0" width="73" height="57" x="-288" y="224"></rect>
                                </svg>
                            </svg>
                        </div>
                    }
                    <div className={`${(cardType == 'triangles') ? "bg-triangles" :"relative"} rounded-xl bg-center`}>
                        <div className="px-10 md:px-24 py-16 bg-gradient-to-b from-secondary-700/60 to-secondary-700/95 rounded-xl">
                            <h5 className="text-white font-extrabold text-3xl tracking-tight">{heading}</h5>
                            <p className="mt-4">{desc}</p>
                            <Link href={action.url} className="mt-10 inline-flex bg-white px-3 py-3 rounded-xl text-slate-800 font-semibold text-sm shadow-lg shadow-secondary-600 items-center hover:bg-footer-bg-900 hover:text-white mix-blend-hard-light">
                                <span className="inline-block px-3 mr-2">{action.label}</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FooterCardSection;