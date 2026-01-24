import { ReactNode } from "react";

type AttrbuteCardProps = {
    icon: ReactNode;
    tags?: string[];
    name: string;
    valueText?: string;
    smallText: boolean;
};

export function AttrbuteCard({ icon, tags, name, valueText, smallText = true }: AttrbuteCardProps) {
    return (
        <div className="bg-surface rounded-2xl p-5 flex flex-col items-center gap-4 text-center">
            {icon}
            <div className="flex flex-col items-center gap-3">
                <span className="text-xs">{name}</span>
                {valueText && (
                    <span className={`font-semibold ${smallText ? 'text-sm' : 'text-2xl'}`}>{valueText}</span>
                )}
                {tags?.length && (
                    <div className="">
                        {tags.map(tag => (
                            <span className="rounded-full py-1 px-2 bg-background text-primary text-sm font-semibold">{tag}</span>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}