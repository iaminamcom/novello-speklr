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
        <div className="rounded-xl bg-surface-elevated py-3 px-5 grid place-content-center"></div>
        <nav>
          <ul className="space-y-1">
            {menuData.map(item => (
              <li><NavItem item={item} /></li>
            ))}
          </ul>
        </nav>
      </div>

      <a href="" className="py-3 px-7 bg-primary rounded-full flex items-center justify-center gap-2.5 text-surface font-semibold hover:bg-primary/80">
        Download Report
      </a>

      <div className="bg-surface-elevated space-y-5 p-5 rounded-2xl text-center">
        <div className="flex flex-col items-center gap-2">
          <img src="" alt="Surveyor" className="rounded-full" width={68} height={68} />
          <div className="grid gap-0.5">
            <span className="text-primary">Surveyor</span>
            <span className="font-semibold text-2xl">James Brook</span>
          </div>
        </div>
        <div className="flex flex-col items-center gap-4">
          <a href="" className="flex gap-2 items-center">
            07700 900582
          </a>
          <a href="" className="flex gap-2 items-center">
            james@novello.com
          </a>
        </div>
      </div>

      <div className="flex flex-col items-center">
        <div className="text-xs py-1 px-3">Powered by </div>
        <img src="" alt="speklr logo" width={145} />
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