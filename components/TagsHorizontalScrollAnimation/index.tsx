// interface TagsHorizontalScrollAnimationProps {
//     tags: string[];
// };

const TagsHorizontalScrollAnimation = (/*{ tags }: TagsHorizontalScrollAnimationProps*/) => {
    return (
        <div className="pt-16">
            <div className="max-w-2xl mx-auto overflow-hidden py-6 relative">
                <div className="max-w-none">
                    <div className="flex space-x-4 st-loop-tags">
                        <span className="st-tag">Javascript</span> 
                        <span className="st-tag">HTML</span> 
                        <span className="st-tag">CSS</span> 
                        <span className="st-tag">PHP</span> 
                        <span className="st-tag">Python</span> 
                        <span className="st-tag">Node.js</span> 
                        <span className="st-tag">.NET</span> 
                        <span className="st-tag">C#</span> 
                        <span className="st-tag">MySQL</span> 
                        <span className="st-tag">Javascript</span> 
                        <span className="st-tag">HTML</span> 
                        <span className="st-tag">CSS</span>
                    </div>
                    <div className="mt-6 flex space-x-4 st-loop-tags-reverse" >
                        <span className="st-tag">StrategyConsulting</span> 
                        <span className="st-tag">DigitalMarketing</span> 
                        <span className="st-tag">SoftwareTesting</span> 
                        <span className="st-tag">Applications</span> 
                        <span className="st-tag">Portals</span> 
                        <span className="st-tag">DataAnalytics</span> 
                        <span className="st-tag">DevOps</span> 
                        <span className="st-tag">Websites</span> 
                        <span className="st-tag">UI/UX</span> 
                        <span className="st-tag">Software</span>
                    </div>
                    <div className="mt-6 flex space-x-4 st-loop-tags" >
                        <span className="st-tag">CRM</span> 
                        <span className="st-tag">ERP</span> 
                        <span className="st-tag">Ecommerce</span> 
                        <span className="st-tag">MVP</span> 
                        <span className="st-tag">Transformation</span> 
                        <span className="st-tag">PowerBI</span> 
                        <span className="st-tag">MachineLearning</span> 
                        <span className="st-tag">ArtificialIntelligence</span>
                    </div>
                    <div className="mt-6 flex space-x-4 st-loop-tags-reverse">
                        <span className="st-tag">WordPress</span> 
                        <span className="st-tag">Next.js</span> 
                        <span className="st-tag">Express.js</span> 
                        <span className="st-tag">React</span> 
                        <span className="st-tag">Angular</span> 
                        <span className="st-tag">Gatsby.js</span> 
                        <span className="st-tag">AWS</span> 
                        <span className="st-tag">Firebase</span> 
                        <span className="st-tag">GoogleCloud</span>
                    </div>
                </div>
                <div className="st-fade-over"></div>
            </div>
        </div>
    );
};

export default TagsHorizontalScrollAnimation;