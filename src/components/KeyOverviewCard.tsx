import Link from "next/link";
import { ReactNode } from "react";

type KeyOverviewCardProps = {
    name: string;
    icon: ReactNode;
    link?: string;
    children: ReactNode;
}

export function KeyOverviewCard({ name, icon, link, children }: KeyOverviewCardProps) {
    return (
        <div className="p-5 rounded-2xl bg-surface space-y-10 lg:col-span-6 *:px-2">
            <div className="flex items-center justify-between">
                <div className="flex gap-3 items-center">
                    <span className="text-primary">{icon}</span>
                    <span className="font-semibold text-xl">{name}</span>
                </div>
                {link && (
                    <Link href={link} title='see more'>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 12L10 8L6 4" stroke="white" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </Link>
                )}
            </div>
            {children}
        </div>
    )
}

export function ConditionRating({ red, amber, green }: { red: number, amber: number, green: number }) {
    return (
        <div className="flex items-end justify-between">
            <div className="flex gap-10">
                <div className="space-y-1">
                    <div className="font-semibold text-my-red">Red</div>
                    <div className="font-semibold text-2xl">{red}</div>
                </div>
                <div className="space-y-1">
                    <div className="font-semibold text-my-amber">Amber</div>
                    <div className="font-semibold text-2xl">{amber}</div>
                </div>
                <div className="space-y-1">
                    <div className="font-semibold text-my-green">Green</div>
                    <div className="font-semibold text-2xl">{green}</div>
                </div>
            </div>
            <figure className="size-27 bg-[radial-gradient(circle_closest-side,transparent_100%,var(--surface)_0),conic-gradient(#e15759_0,#e15759_16.7%,#59a14f_0,#59a14f_66.7%,#edc949_0,#edc949_100%)]" />
        </div>
    )
}

export function WhenToAct({ intermediate, short, medium, long }: { intermediate: number, short: number, medium: number, long: number }) {
    return (
        <div className="space-y-1">
            <div
                className='rounded-full py-0.5 px-5 font-semibold bg-my-red'
                style={{ width: `${intermediate}0%` }}
            >
                Intermediate
            </div>
            <div
                className='rounded-full py-0.5 px-5 font-semibold bg-my-amber'
                style={{ width: `${short}0%` }}
            >
                Short
            </div>
            <div
                className='rounded-full py-0.5 px-5 font-semibold bg-my-khaki'
                style={{ width: `${medium}0%` }}
            >
                Medium
            </div>
            <div
                className='rounded-full py-0.5 px-5 font-semibold bg-my-green'
                style={{ width: `${long}0%` }}
            >
                Long
            </div>
        </div>
    )
}

export function Summary({ text, icon, color }: { text: string, color?: string; icon?: ReactNode }) {
    return (
        <div className="flex p-2 items-center justify-between">
            {text}
            {icon && <div className={color}>{icon}</div>}
        </div>
    )
}