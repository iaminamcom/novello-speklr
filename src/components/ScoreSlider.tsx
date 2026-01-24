export function ScoreSlider({ score }: { score: number }) {
    return (
        <div className="relative pt-20 px-2" aria-hidden>
            <div className="bg-linear-to-r from-my-red via-my-amber to-my-green absolute top-0 left-0 text-[44px] font-bold -translate-x-1/2 transition-all duration-300 font-myriad"
                style={{
                    left: `${score}0%`,
                    backgroundPosition: `${score}0% 0%`,
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundSize: '1000% 100%'
                }}>
                {score}
            </div>

            <div className="bg-linear-to-r from-my-red via-my-amber to-my-green relative h-2 rounded">
                <div className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 size-6 rounded-full 
                   bg-linear-to-r from-my-red via-my-amber to-my-green overflow-hidden shadow-2xl"
                    style={{ left: `${score}0%`, backgroundPosition: `${score}0% 0%`, backgroundSize: '1000% 100%' }}
                >
                    <div className="backdrop-blur-[1px] size-full"></div>
                </div>
            </div>
        </div>
    )
}