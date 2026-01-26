import Image from "next/image";

export function JobHeader() {
    return (
        <header className="flex items-center justify-between">
            <div className="flex items-center gap-5">
                <div className="rounded-xl bg-surface-elevated py-3 px-5 grid place-content-center">
                    <Image src='/images/novello-logo.svg' width={220} height={60} alt="logo" />
                </div>
                <div className="space-y-1">
                    <div className="text-xs">Powered by </div>
                    <img src='/images/speklr.png' alt="speklr logo" width={98} height={29} />
                </div>
            </div>
            <div className="flex gap-5">
                <button className="bg-primary rounded-full size-10 flex justify-center items-center">
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.27275 5.45454H19.0909M7.27275 10.9091H19.0909M7.27275 16.3636H19.0909M2.72729 5.45454H2.73639M2.72729 10.9091H2.73639M2.72729 16.3636H2.73639" stroke="#222D31" strokeWidth="1.81818" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
                <button className="bg-surface rounded-full size-10 flex justify-center items-center">
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.18184 2.72727L2.72729 5.45454V19.0909L8.18184 16.3636M8.18184 2.72727L13.6364 5.45454M8.18184 2.72727V16.3636M13.6364 5.45454L19.0909 2.72727V16.3636L13.6364 19.0909M13.6364 5.45454V19.0909M13.6364 19.0909L8.18184 16.3636" stroke="white" strokeWidth="1.81818" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
                <button className="bg-surface rounded-full size-10 flex justify-center items-center">
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.5455 1.81818V5.45455M7.27275 1.81818V5.45455M2.72729 9.09091H19.0909M15.4546 12.7273H10M11.8182 16.3636H6.36366M6.36366 12.7273H6.37275M15.4546 16.3636H15.4637M4.54548 3.63637H17.2727C18.2769 3.63637 19.0909 4.45039 19.0909 5.45455V18.1818C19.0909 19.186 18.2769 20 17.2727 20H4.54548C3.54132 20 2.72729 19.186 2.72729 18.1818V5.45455C2.72729 4.45039 3.54132 3.63637 4.54548 3.63637Z" stroke="white" strokeWidth="1.81818" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
            </div>
        </header>
    )
}