const CardsGroup = () => {
    return (
        <section className="bg-white py-16 md:py-24">
            <div className="container">
                <div className="max-w-2xl">
                    <h2 className="text-xl font-bold text-slate-900">Website Design &amp; Development</h2>
                    <p className="mt-3 text-sm leading-7 text-slate-500">We create modern, sustainable websites that are designed to help you reach your goals.</p>
                </div>
                <div className="mt-10 border-t border-slate-200 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 pt-10 text-sm">
                    <div>
                        <h4 className="font-semibold text-base">Lightning Fast Page Speed</h4>
                        <p className="mt-3">We develop websites that load quickly to provide a better experience for your customers.
                            Website speed is critical for search engine ranking &amp; conversion rate as-well.
                        </p>
                    </div>
                    <div>
                        <h4 className="font-semibold text-base">High Level of Security</h4>
                        <p className="mt-3"><strong className="font-normal">Developing a website</strong> with us will keep your information
                            safe &amp; secure, making you more confident in marketing your product or service.
                        </p>
                    </div>
                    <div>
                        <h4 className="font-semibold text-base">Search Engine Friendly</h4>
                        <p className="mt-3">Our <strong className="font-normal">website developers</strong> will provide you with a website
                            that is search engine friendly, resulting in higher rankings on Google and other search engines.
                        </p>
                    </div>
                    <div>
                        <h4 className="font-semibold text-base">Tailored UX Strategy</h4>
                        <p className="mt-3">Every business is different and has different needs. We build tailored UX strategy for
                            your website to achieve your business goals.
                        </p>
                    </div>
                    <div>
                        <h4 className="font-semibold text-base">Fully Responsive Web-Design</h4>
                        <p className="mt-3">With our website design &amp; development service, your website will be optimized to provide
                            an optimal viewing experience on the widest range of devices possible.
                        </p>
                    </div>
                    <div>
                        <h4 className="font-semibold text-base">User Behavior Analysis</h4>
                        <p className="mt-3">Our analysis of user behavior allows you to improve conversion rates &amp; the overall
                            effectiveness of your marketing campaigns.
                        </p>
                    </div>
                    <div>
                        <h4 className="font-semibold text-base">Easy-to-use CMS</h4>
                        <p className="mt-3">Everyone who's ever struggled to update their website knows how time-consuming it can
                            be. That's why we use CMS like <strong className="font-normal">WordPress</strong>, where you
                            can update content easily &amp; quickly.
                        </p>
                    </div>
                    <div>
                        <h4 className="font-semibold text-base">Engaging CTAs</h4>
                        <p className="mt-3">If a website visitor can't find what they need, or you don't have the right
                            call-to-action, you're missing out on potential customers. We can help with that.
                        </p>
                    </div>
                    <div>
                        <h4 className="font-semibold text-base">Custom Content Strategy</h4>
                        <p className="mt-3">We take a look at your goals and objectives to determine the best course of action.
                            Then, we develop a content strategy that is tailored to your needs.
                        </p>
                    </div>
                    <div>
                        <h4 className="font-semibold text-base">Regular Backups</h4>
                        <p className="mt-3">When you hire us for <strong className="font-normal">website design &amp; development</strong>,
                            you get more than just a site. You get peace of mind. With our regular backups, you'll
                            never have to worry about losing your data.
                        </p>
                    </div>
                    <div>
                        <h4 className="font-semibold text-base">Contact Forms that work</h4>
                        <p className="mt-3">Your contact form deserves to work as smart as you do. Over the last decade we have been
                            helping clients generate new business from contact forms on their website.
                        </p>
                    </div>
                    <div className="flex items-end justify-end"><a href="/contact-us" className="inline-flex justify-center py-3 px-6 bg-blue-600 text-sm font-semibold text-white rounded-lg hover:bg-blue-700">Contact Us Now
                        <span className="opacity-75 ml-2">→</span></a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CardsGroup;