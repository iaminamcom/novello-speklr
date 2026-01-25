import Image from "next/image";

type MenuItem = {
  name: string;
  url?: string;
  active: boolean;
  children?: MenuItem[]
}

const menuData: MenuItem[] = [
  {
    name: 'Summary',
    url: '#',
    active: true
  },
  {
    name: 'Exterior',
    children: [],
    active: false
  },
  {
    name: 'Interior',
    children: [],
    active: false
  },
  {
    name: 'Services',
    children: [],
    active: false
  },
  {
    name: 'Scout: Location Intelligence',
    children: [],
    active: false
  },
  {
    name: 'Legal matters',
    url: '#',
    active: false
  },
]

export default function Sidebar() {
  return (
    <aside className="bg-surface p-5 rounded-[20px] max-w-100 space-y-7 w-full">
      <div className="space-y-10">
        <div className="rounded-xl bg-surface-elevated py-3 px-5 grid place-content-center">
          <Image src='/images/novello-logo.svg' width={220} height={60} alt="logo" />
        </div>
        <nav>
          <ul className="space-y-1">
            {menuData.map(item => (
              <li key={item.name}><NavItem item={item} /></li>
            ))}
          </ul>
        </nav>
      </div>

      <a href="" className="py-3 px-7 bg-primary rounded-full flex items-center justify-center gap-2.5 text-surface font-semibold hover:bg-primary/80">
        Download Report
      </a>

      <div className="bg-surface-elevated space-y-5 p-5 rounded-2xl text-center">
        <div className="flex flex-col items-center gap-2">
          <Image src='/images/james.png' alt="Surveyor" className="rounded-full" width={68} height={68} />
          <div className="grid gap-0.5">
            <span className="text-primary">Surveyor</span>
            <span className="font-semibold text-2xl">James Brook</span>
          </div>
        </div>
        <div className="flex flex-col items-center gap-4">
          <a href="" className="flex gap-2 items-center">
            <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.4068 13.2667V15.7667C17.4077 15.9988 17.3602 16.2285 17.2672 16.4412C17.1743 16.6538 17.0379 16.8447 16.8669 17.0016C16.6959 17.1585 16.4939 17.278 16.2741 17.3523C16.0542 17.4267 15.8213 17.4543 15.5901 17.4334C13.0258 17.1548 10.5626 16.2785 8.39847 14.8751C6.38499 13.5956 4.67792 11.8885 3.39847 9.87506C1.99012 7.70106 1.11367 5.22589 0.840138 2.65006C0.819313 2.41962 0.8467 2.18736 0.920555 1.96808C0.99441 1.7488 1.11311 1.5473 1.26911 1.37641C1.42511 1.20552 1.61498 1.06898 1.82663 0.975495C2.03829 0.882006 2.26709 0.833612 2.49847 0.833394H4.99847C5.40289 0.829413 5.79496 0.972626 6.10161 1.23634C6.40825 1.50005 6.60854 1.86627 6.66514 2.26673C6.77066 3.06678 6.96635 3.85233 7.24847 4.60839C7.36059 4.90666 7.38486 5.23082 7.31839 5.54246C7.25193 5.8541 7.09752 6.14015 6.87347 6.36673L5.81514 7.42506C7.00143 9.51135 8.72885 11.2388 10.8151 12.4251L11.8735 11.3667C12.1 11.1427 12.3861 10.9883 12.6977 10.9218C13.0094 10.8553 13.3335 10.8796 13.6318 10.9917C14.3879 11.2739 15.1734 11.4695 15.9735 11.5751C16.3783 11.6322 16.748 11.8361 17.0122 12.148C17.2765 12.4599 17.4169 12.858 17.4068 13.2667Z" stroke="white" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
            </svg>

            07700 900582
          </a>
          <a href="" className="flex gap-2 items-center">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18.3333 5.83331L10.8583 10.5833C10.601 10.7445 10.3036 10.83 9.99996 10.83C9.69636 10.83 9.3989 10.7445 9.14163 10.5833L1.66663 5.83331M3.33329 3.33331H16.6666C17.5871 3.33331 18.3333 4.07951 18.3333 4.99998V15C18.3333 15.9205 17.5871 16.6666 16.6666 16.6666H3.33329C2.41282 16.6666 1.66663 15.9205 1.66663 15V4.99998C1.66663 4.07951 2.41282 3.33331 3.33329 3.33331Z" stroke="white" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            james@novello.com
          </a>
        </div>
      </div>

      <div className="flex flex-col items-center">
        <div className="text-xs py-1 px-3">Powered by </div>
        <img src='/images/speklr.png' alt="speklr logo" width={145} height={43} />
      </div>
    </aside>
  );
}

function NavItem({ item }: { item: MenuItem }) {
  const styleClasses = `rounded py-4 px-5 flex items-center justify-between cursor-pointer font-semibold
                        hover:bg-surface-elevated ${item.active ? 'bg-surface-elevated' : ''}`

  if (item.children && item.children.length) {
    return (
      <div className="">
        <button className={styleClasses}>
          {item.name}
        </button>
      </div>
    )
  }

  return <a href={item.url} className={styleClasses}>{item.name}</a>
}