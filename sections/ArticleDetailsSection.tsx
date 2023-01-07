import Link from "next/link";

const ArticleDetailsSection = ({ data }:{data: {articleName:string, headings:{heading:string,hash:string}[] , article:string }}) => {
    const { articleName , headings , article } = data;
    return (
        <section className="bg-white py-12 lg:py-24" id={headings[0].hash.replace('#','')}>
            <div className="container">
                <div className="relative grid lg:grid-cols-6">
                    <div className="hidden lg:block col-span-2">
                        <div className="sticky top-32">
                            <h4 className="mb-8 text-lg">{articleName}</h4>
                            <ul className="list-disc list-inside marker:text-blue-600 font-medium">
                                {
                                    headings.map((item,ind)=>{
                                        return <li key={ind} className="mb-6"><Link href={item.hash} className="hover:text-blue-600" scroll={false}>{item.heading}</Link></li>
                                    })
                                }
                            </ul>
                            <Link href="/contact-us" className="inline-flex justify-center py-3 px-6 bg-blue-50 text-sm font-semibold text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white mt-10">Contact Us Now
                                <span className="opacity-75 ml-2">→</span></Link>
                        </div>
                    </div>
                    <div className="max-w-4xl col-span-4 prose prose-slate prose-h3:text-2xl prose-h3:font-bold prose-h4:text-2xl prose-h4:font-bold" dangerouslySetInnerHTML={{__html:article}}></div>
                </div>
            </div>
        </section>
    );
};

export default ArticleDetailsSection;