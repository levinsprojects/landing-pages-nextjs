const SectionWrapper = ({ children }: { children:JSX.Element}) => {
    return <section className={"bg-white py-12 lg:py-24 border-b border-slate-100"}>
        <div className="container">
            {
                children
            }
        </div>
    </section>
};

export default SectionWrapper;