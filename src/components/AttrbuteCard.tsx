import { ReactNode } from "react";

type AttrbuteCardProps = {
    icon: ReactNode;
    tags?: string[];
    name: string;
    valueText?: string;
    smallText?: boolean;
};

export function AttrbuteCard({ icon, tags, name, valueText, smallText = false }: AttrbuteCardProps) {
    return (
        <div className={`bg-surface rounded-2xl p-5 flex flex-col items-center gap-4 text-center ${tags?.length ? 'lg:col-span-3' : 'lg:col-span-2'}`}>
            <div className="*:size-15">{icon}</div>
            <div className="flex flex-col items-center gap-3">
                <span className="text-xs">{name}</span>
                {valueText && (
                    <span className={`font-semibold ${smallText ? 'text-base' : 'text-2xl'}`}>{valueText}</span>
                )}
                {tags?.length && (
                    <div className="flex flex-wrap gap-1 justify-center">
                        {tags.map(tag => (
                            <span className="rounded-full py-1 px-2 bg-background text-primary text-[12px] 2xl:text-sm font-semibold" key={tag}>{tag}</span>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}