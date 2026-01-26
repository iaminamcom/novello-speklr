'use client';

import { useState } from "react";
import { Icon } from "../Icon";

type JobCardProps = {
    draft: boolean;
    name: string;
    referenceId: string;
    user: string;
    postedBy: string;
    documents: number;
    notes: string;
    date: string;
    serviceType: string;
    additionalService: string;
    keyCollection: string;
    propertyUrl: string;
    areaOfConcern: string;
}
export function JobCard({ draft = true, name, referenceId, user, postedBy, documents, notes, date, serviceType, additionalService, keyCollection, propertyUrl, areaOfConcern }: JobCardProps) {
    const [open, setOpen] = useState(false);

    return (
        <div className={`bg-surface rounded-[20px] p-5 space-y-4 relative border-2 ${draft ? 'border-primary' : 'border-transparent'}`}>
            {draft && (
                <span className="py-1 px-2 rounded-full bg-primary text-surface absolute top-0 left-0 -translate-3 flex items-center gap-1 font-semibold text-xs">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                        <path d="M13.3333 4L6 11.3333L2.66667 8" stroke="#181E20" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Draft
                </span>
            )}
            <div className="flex items-center justify-between text-primary">
                <h2 className="font-semibold text-xl">{name}</h2>
                <span className="">{referenceId}</span>
            </div>
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-1">
                    <Icon width={16} height={16} id="jobs-person" />
                    <span>{user}</span>
                    <span>//</span>
                    <Icon width={16} height={16} id="jobs-home" />
                    <span>{postedBy}</span>
                </div>
                <div className="">
                    Documents ({documents}) // Notes: {notes} // {date}
                </div>
            </div>
            <button onClick={() => setOpen(!open)} className="w-full pt-1 border-t-2 border-surface-elevated flex items-center justify-between">
                <span className="text-sm font-semibold">{open ? 'View less details' : 'View more details'}</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className={open ? '' : 'rotate-180'}>
                    <path d="M15 12.5L10 7.5L5 12.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </button>
            <div className={`grid gap-2.5 overflow-hidden grid-cols-2 bg-surface-elevated rounded-[20px] px-5 [interpolate-size:allow-keywords]   transition-[height_0.5s_ease-in-out] mt-4 ${open ? 'h-auto py-5' : 'h-0'}`}>
                <div className="col-span-1 bg-surface rounded-lg p-5">
                    <div className="w-[calc(100%-3rem)] space-y-2">
                        <h3 className="font-semibold">Service Details:</h3>
                        <p className="wrap-break-word">{serviceType}</p>
                    </div>
                </div>
                <div className="col-span-1 bg-surface rounded-lg p-5">
                    <div className="w-[calc(100%-3rem)] space-y-2">
                        <h3 className="font-semibold">Additional Services:</h3>
                        <p className="wrap-break-word">{additionalService}</p>
                    </div>
                </div>
                <div className="col-span-1 flex justify-between bg-surface rounded-lg p-5">
                    <div className="w-[calc(100%-3rem)] space-y-2">
                        <h3 className="font-semibold">Key collection:</h3>
                        <p className="wrap-break-word">{keyCollection}</p>
                    </div>
                    <Icon id='jobs-arrow-right-top' />
                </div>
                <div className="col-span-1 flex justify-between bg-surface rounded-lg p-5">
                    <div className="w-[calc(100%-3rem)] space-y-2">
                        <h3 className="font-semibold">Property URL:</h3>
                        <p className="wrap-break-word">{propertyUrl}</p>
                    </div>
                    <Icon id='jobs-arrow-right-top' />
                </div>
                <div className="col-span-2 flex justify-between bg-surface rounded-lg p-5">
                    <div className="w-[calc(100%-3rem)] space-y-2">
                        <h3 className="font-semibold">Areas of Concern:</h3>
                        <p className="wrap-break-word">{areaOfConcern}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}