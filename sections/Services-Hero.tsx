import Link from "next/link";

const ServicesHero = ({data}:{data:{name:string,heading:string,desc:string}}) => {
    return (
        <section className="border-b border-slate-100 overflow-hidden">
            <div className="absolute inset-0 -z-10 mx-0 max-w-none overflow-hidden">
                <div className="absolute left-12 md:left-1/2 top-0 ml-0 md:ml-[-38rem] h-full w-[40rem] lg:w-full">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-100 [mask-image:radial-gradient(farthest-side_at_top,white,transparent)]">
                        <svg aria-hidden="true" role="img" className="absolute inset-0 h-[200%] w-full fill-black/40 stroke-black/50 mix-blend-overlay">
                            <defs>
                                <pattern id=":ST394:" width="72" height="56" patternUnits="userSpaceOnUse" x="0" y="0">
                                    <path d="M.5 56V.5H72" fill="none"></path>
                                </pattern>
                            </defs>
                            <rect width="100%" height="100%" strokeWidth="0" fill="url(#:ST394:)"></rect>
                            <svg x="0" y="0" className="overflow-visible">
                                <rect strokeWidth="0" width="73" height="57" x="288" y="168"></rect>
                                <rect strokeWidth="0" width="73" height="57" x="144" y="56"></rect>
                                <rect strokeWidth="0" width="73" height="57" x="504" y="168"></rect>
                                <rect strokeWidth="0" width="73" height="57" x="720" y="336"></rect>
                            </svg>
                        </svg>
                    </div>
                </div>
            </div>
            <div className="bg-slate-50 bg-opacity-70 relative">
                <div className="container md:flex items-center gap-8 pt-20 pb-8">
                    <div className="py-16 md:w-2/3 m-auto md:text-center">
                        <h1 className="font-semibold text-blue-600">{data.name}</h1>
                        <p className="font-extrabold text-3xl md:text-4xl text-slate-900 tracking-tight md:leading-[3.5rem] mt-2">{data.heading}</p>
                        <p className="mt-5">{data.desc}</p>
                        <div className="mt-8 m-auto"><Link href="/contact-us" className="inline-flex justify-center py-3 px-6 bg-blue-600 text-sm font-semibold text-white rounded-lg hover:bg-blue-700">Contact Us Now
                            <span className="opacity-75 ml-2">→</span></Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServicesHero;