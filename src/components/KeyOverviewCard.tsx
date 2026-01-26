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
        <div className="p-5 rounded-2xl bg-surface lg:col-span-6 *:px-2">
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
        <div className="flex items-end justify-between mt-8">
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
            {/* <figure className="size-27 bg-[radial-gradient(circle_closest-side,transparent_100%,var(--surface)_0),conic-gradient(#e15759_0,#e15759_16.7%,#59a14f_0,#59a14f_66.7%,#edc949_0,#edc949_100%)]" /> */}
            <svg width="112" height="116" viewBox="0 0 112 116" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="57.9849" cy="57.6123" r="31.2828" fill="#504F9D" />
                <g filter="url(#filter0_d_171_1462)">
                    <path d="M104.537 57.6124C104.537 64.962 102.796 72.2072 99.4583 78.755C96.1203 85.3029 91.2794 90.9674 85.3316 95.2849C79.3839 99.6024 72.4983 102.45 65.2385 103.596C57.9787 104.741 50.5508 104.151 43.5628 101.874L57.9848 57.6124H104.537Z" fill="#7F7ECD" />
                </g>
                <circle cx="57.9849" cy="57.6123" r="31.2828" fill="#B30000" />
                <g filter="url(#filter1_d_171_1462)">
                    <path d="M104.537 57.6124C104.537 64.962 102.796 72.2072 99.4583 78.755C96.1203 85.3029 91.2794 90.9674 85.3316 95.2849C79.3839 99.6024 72.4983 102.45 65.2385 103.596C57.9787 104.741 50.5508 104.151 43.5628 101.874L57.9848 57.6124H104.537Z" fill="#C46C00" />
                </g>
                <g filter="url(#filter2_d_171_1462)">
                    <path d="M41.2979 108.969C29.0697 104.996 18.6604 96.7902 11.9423 85.8273C5.22423 74.8645 2.63833 61.8642 4.64969 49.165C6.66106 36.4657 13.1377 24.9008 22.9147 16.5505C32.6916 8.20018 45.1273 3.61243 57.9849 3.61243V57.6124L41.2979 108.969Z" fill="#259017" />
                </g>
                <defs>
                    <filter id="filter0_d_171_1462" x="37.9765" y="50.1642" width="72.1463" height="57.724" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                        <feOffset dy="-1.86207" />
                        <feGaussianBlur stdDeviation="2.7931" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.13 0" />
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_171_1462" />
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_171_1462" result="shape" />
                    </filter>
                    <filter id="filter1_d_171_1462" x="37.9765" y="50.1642" width="72.1463" height="57.724" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                        <feOffset dy="-1.86207" />
                        <feGaussianBlur stdDeviation="2.7931" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.13 0" />
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_171_1462" />
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_171_1462" result="shape" />
                    </filter>
                    <filter id="filter2_d_171_1462" x="3.57628e-05" y="1.3113e-05" width="64.2041" height="115.561" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                        <feOffset dx="1.11724" dy="1.48966" />
                        <feGaussianBlur stdDeviation="2.55103" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_171_1462" />
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_171_1462" result="shape" />
                    </filter>
                </defs>
            </svg>

        </div>
    )
}

export function WhenToAct({ intermediate, short, medium, long }: { intermediate: number, short: number, medium: number, long: number }) {
    return (
        <div className="space-y-1 mt-10">
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
        <div className={`flex p-2 items-center justify-between ${icon ? 'mt-10' : 'mt-5'}`}>
            {text}
            {icon && <div className={color}>{icon}</div>}
        </div>
    )
}