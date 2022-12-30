const Solutions = () => {
    return (<section className="bg-white py-16 md:py-24 border-b border-slate-100">
        <div className="container">
            <div className="max-w-2xl">
                <h5 className="text-blue-600 font-semibold">Solutions</h5>
                <h4 className="mt-4 text-3xl md:text-4xl font-extrabold tracking-tight">From Business Websites <br className="hidden md:block"/>to ERP software.</h4>
                <p className="mt-4 mb-6">We provide a wide range of <strong className="font-normal">software solutions</strong> for businesses,
                    from small websites to large ERP systems. We have a team of experienced developers who can
                    create customised solutions to meet your specific needs.
                </p>
                <a href="/contact-us" className="font-semibold text-blue-600 hover:text-blue-700">Start Discussion Now <span className="opacity-90 ml-1">→</span></a>
            </div>
            <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                <div>
                    <h3 className="font-semibold">Business Website</h3>
                    <p className="mt-2 text-sm">At our agency, we have a team of experienced designers &amp; developers who can create a
                        custom website for your business that meets all important web criteria.
                    </p>
                </div>
                <div>
                    <h3 className="font-semibold">CRM Application</h3>
                    <p className="mt-2 text-sm">If you are looking for a CRM development solution, we can offer you a comprehensive
                        package that will take care of all your needs.
                    </p>
                </div>
                <div>
                    <h3 className="font-semibold">Product MVP</h3>
                    <p className="mt-2 text-sm">We have a team of experts who can bring your product to life with all essential features
                        that can be tested in the real world before investing too much money &amp; time into
                        development.
                    </p>
                </div>
                <div>
                    <h3 className="font-semibold">SaaS Application</h3>
                    <p className="mt-2 text-sm">Our team is composed of developers &amp; UI/UX designers with experience in designing,
                        developing and deploying SaaS applications for companies in diverse industries.
                    </p>
                </div>
                <div>
                    <h3 className="font-semibold">Custom Web Portal</h3>
                    <p className="mt-2 text-sm">We develop custom web portal platforms that are secure, functional and tailored to your
                        business needs. Choose from a wide range of features, no matter what your business
                        needs.
                    </p>
                </div>
                <div>
                    <h3 className="font-semibold">ERP System</h3>
                    <p className="mt-2 text-sm">We have a team of experienced ERP consultants &amp; developers who can successfully
                        implement ERP systems in a variety of industries.
                    </p>
                </div>
            </div>
        </div>
    </section>
    );
};

export default Solutions;