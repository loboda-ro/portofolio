export const ProjectComponent = () => {
    return (
        <div className="flex items-center justify-center min-h-screen overflow-hidden">
            
            <div className="relative rounded-2xl border border-white/20 backdrop-blur-sm shadow-2xl max-w-5xl w-full p-1 bg-opacity-0 overflow-hidden">
                <div className="relative rounded-xl border border-white/20 backdrop-blur-lg shadow-xl overflow-hidden" style={{height: '85vh'}}>
                    <div className="relative backdrop-blur-sm bg-black/10 px-8 py-16 md:px-16 md:py-19 h-full">
                        <div className="text-left">
                            <h1 className="text-5xl md:text-5xl font-bold lg:text-6xl leading-tight text-neutral-200/100 mb-16 drop-shadow-[0_0_20px_rgba(255,255,255,0.4)]">
                                Build tools for auto insurance,<br />
                                voice AI & <span className="font-normal text-neutral-500/100 font-display text-8xl italic bg-gradient-to-t from-gray-400 to-white bg-clip-text text-transparent">agents.</span>
                            </h1>
                            <div className="space-y-2 text-lg md:text-xl">
                                <p className="text-neutral-200/100 font-medium">
                                    Based in Miami, FL
                                </p>
                                <p className="text-gray-400">
                                    Previously built startup for auto collision shops & raised $40,000.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}