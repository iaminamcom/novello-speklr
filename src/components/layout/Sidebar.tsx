'use client';

import Image from "next/image";
import { Icon } from "../Icon";
import { useTheme, defaultTheme } from "@/context/ThemeContext";

type MenuItem = {
  name: string;
  iconId: string;
  url?: string;
  active: boolean;
  children?: MenuItem[];
};

const menuData: MenuItem[] = [
  {
    name: 'Summary',
    iconId: 'menu-summary',
    url: '#',
    active: true
  },
  {
    name: 'Exterior',
    iconId: 'menu-warehouse',
    children: [],
    active: false
  },
  {
    name: 'Interior',
    iconId: 'menu-gallery',
    children: [],
    active: false
  },
  {
    name: 'Services',
    iconId: 'menu-plug',
    children: [],
    active: false
  },
  {
    name: 'Scout: Location Intelligence',
    iconId: 'menu-map',
    children: [],
    active: false
  },
  {
    name: 'Legal matters',
    iconId: 'menu-landmark',
    url: '#',
    active: false
  },
];

interface SidebarProps {
  themed?: boolean;
}

export default function Sidebar({ themed = false }: SidebarProps) {
  const themeContext = themed ? useTheme() : null;
  const theme = themeContext?.theme ?? defaultTheme;

  const surveyorName = theme.surveyorName;
  const isCustomLogo = themed && theme.logo && theme.logo !== defaultTheme.logo;

  return (
    <aside className="bg-surface p-5 rounded-[20px] max-w-100 space-y-7 w-full">
      <div className="space-y-10">
        <div className="rounded-xl bg-surface-elevated py-3 px-5 grid place-content-center min-h-21">
          {isCustomLogo ? (
            <img
              src={theme.logo}
              alt="logo"
              className="max-w-55 max-h-15 object-contain"
            />
          ) : (
            <Image src='/images/novello-logo.svg' width={220} height={60} alt="logo" />
          )}
        </div>
        <nav>
          <ul className="space-y-1">
            {menuData.map(item => (
              <li key={item.name}><NavItem item={item} /></li>
            ))}
          </ul>
        </nav>
      </div>

      <a
        href=""
        className="py-3 px-7 bg-primary rounded-full flex items-center justify-center gap-2.5 text-surface font-semibold hover:opacity-80 transition-opacity"
      >
        <Icon id='download' />
        Download Report
      </a>

      <div className="bg-surface-elevated space-y-5 p-5 rounded-2xl text-center">
        <div className="flex flex-col items-center gap-2">
          <Image src='/images/james.png' alt="Surveyor" className="rounded-full" width={68} height={68} />
          <div className="grid gap-0.5">
            <span className="text-primary">Surveyor</span>
            <span className="font-semibold text-2xl">{surveyorName}</span>
          </div>
        </div>
        <div className="flex flex-col items-center gap-4">
          <a href="" className="flex gap-2 items-center">
            <Icon id="phone" />
            07700 900582
          </a>
          <a href="" className="flex gap-2 items-center">
            <Icon id="email" />
            {themed ? 'contact@novello.com' : 'james@novello.com'}
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
  const styleClasses = `rounded py-4 px-5 flex items-center justify-between cursor-pointer font-semibold w-full
                        hover:bg-surface-elevated ${item.active ? 'bg-surface-elevated' : ''}`;

  if (item.children) {
    return (
      <div className="">
        <button className={styleClasses}>
          <div className="flex items-center gap-3">
            <Icon id={item.iconId} className="text-primary" />
            {item.name}
          </div>
          <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1L7 7L13 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    );
  }

  return (
    <a href={item.url} className={styleClasses}>
      <div className="flex items-center gap-3">
        <Icon id={item.iconId} className="text-primary" />
        {item.name}
      </div>
    </a>
  );
}
