import Link from "next/link";

const GetProposalSection = () => {
    return (
        <section className="cta-bg">
            <div className="container">
                <div className="max-w-5xl mx-auto bg-blue-600 text-blue-100 rounded-xl shadow-2xl md:text-center">
                    <div className="bg-triangles rounded-xl bg-center">
                        <div className="px-10 md:px-24 py-16 bg-gradient-to-b from-blue-600/60 to-blue-600/95 rounded-xl">
                            <h5 className="text-white font-extrabold text-3xl tracking-tight">Schedule a free consultation with one of our experts.</h5>
                            <p className="mt-4">Start-ups, SME's &amp; Enterprises are all in need of a reliable <strong className="font-normal">software development partner</strong>. We'll work with you to ensure you find the right solution for your business and
                                deliver it on time.
                            </p>
                            <Link href="/contact-us" className="mt-10 inline-flex bg-white px-3 py-3 rounded-xl text-slate-800 font-semibold text-sm shadow-lg shadow-blue-600 items-center hover:bg-slate-900 hover:text-white mix-blend-hard-light"><span className="inline-block px-3 mr-2">Get a Proposal</span></Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GetProposalSection;