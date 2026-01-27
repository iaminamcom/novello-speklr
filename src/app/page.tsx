import { AttrbuteCard } from "@/components/AttrbuteCard";
import { Icon } from "@/components/Icon";
import { ConditionRating, KeyOverviewCard, Summary, WhenToAct } from "@/components/KeyOverviewCard";
import AppLayout from "@/components/layout/AppLayout";
import { ScoreSlider } from "@/components/ScoreSlider";
import Image from "next/image";
import Link from "next/link";

const data = {
  addressAndDates: {
    address: '24A Lupus St, London SW1V 3DZ',
    dates: [
      { date: '19.02.2025', text: 'Inspection date' },
      { date: '19.02.2025', text: 'Report published' },
    ]
  },
  propertyInfo: [
    {
      name: 'Property type',
      icon: <Icon id="feature-property-type" />,
      valueText: 'End-of-terrace house',
      smallText: true,
    },
    {
      name: 'Approximate age',
      icon: <Icon id="feature-approximate-age" />,
      valueText: '1800’s',
    },
    {
      name: 'Tenure',
      icon: <Icon id="feature-tenure" />,
      valueText: 'Freehold',
      smallText: true,
    },
    {
      name: 'Bathrooms',
      icon: <Icon id="feature-bathrooms" />,
      valueText: '4',
    },
    {
      name: 'Living rooms',
      icon: <Icon id="feature-living-rooms" />,
      valueText: '2',
    },
    {
      name: 'Bedrooms',
      icon: <Icon id="feature-bedrooms" />,
      valueText: '5',
    },
    {
      name: 'Kitchens',
      icon: <Icon id="feature-kitchens" />,
      valueText: '1',
    },
    {
      name: 'Dining rooms',
      icon: <Icon id="feature-dining-rooms" />,
      valueText: '2',
    },
    {
      name: 'En-suites',
      icon: <Icon id="feature-en-suite" />,
      valueText: '5',
    },
    {
      name: 'WCs',
      icon: <Icon id="feature-wcs" />,
      valueText: '4',
    },
    {
      name: 'Utility rooms',
      icon: <Icon id="feature-utility-room" />,
      valueText: '2',
    },
    {
      name: 'Conservatory',
      icon: <Icon id="feature-conservatory" />,
      valueText: '5',
    },
    {
      name: 'Other rooms',
      icon: <Icon id="feature-other-rooms" />,
      tags: ['Study', 'Snug', 'tag 3', 'tag 4']
    },
    {
      name: 'Outside areas',
      icon: <Icon id="feature-uutside-areas" />,
      tags: ['Garden', 'Balcony/Terrace', 'Patio/Courtyard', 'Shared outdoor space']
    },
    {
      name: 'Outbuildings',
      icon: <Icon id="feature-outbuildings" />,
      tags: ['Garage (detached)', 'Shed/Workshop', 'Summerhouse/Garden room', 'Greenhouse']
    },
    {
      name: 'Parking',
      icon: <Icon id="feature-parking" />,
      tags: ['Driveway', 'Garage', 'On-street', 'Allocated bay']
    },
  ],
  scoreInfo: {
    score: 6,
  },
  keyOverviews: [
    {
      name: 'Condition rating',
      icon: <Icon id='star-filled' width={25} />,
      link: '#',
      conditionRating: {
        red: 2, amber: 4, green: 6
      }
    },
    {
      name: 'When to act',
      icon: <Icon id='clock' width={25} />,
      link: '#',
      whenToAct: {
        intermediate: 4,
        short: 5,
        medium: 7,
        long: 2
      }
    },
    {
      name: 'Structure',
      icon: <Icon id='home' width={25} />,
      summary: {
        text: 'No movement noted. 1 Crack to monitor',
        icon: <Icon id='thumb' height={36} width={36} />,
        color: 'text-my-green'
      }
    },
    {
      name: 'Damp & Decay',
      icon: <Icon id='drop' width={25} />,
      summary: {
        text: 'No movement noted. 1 Crack to monitor',
        icon: <Icon id='thumb' height={36} width={36} />,
        color: 'text-my-green'
      }
    },
    {
      name: 'Roof & Chimneys',
      icon: <Icon id='home' width={25} />,
      summary: {
        text: 'No movement noted. 1 Crack to monitor',
        icon: <Icon id='alert' height={36} width={36} />,
        color: 'text-my-red'
      }
    },
    {
      name: 'Safety matters',
      icon: <Icon id='shield' width={25} />,
      summary: {
        text: 'No movement noted. 1 Crack to monitor',
        icon: <Icon id='alram' height={36} width={36} />,
        color: 'text-my-amber'
      }
    },
    {
      name: 'Property status at the time',
      icon: <Icon id='home' width={25} />,
      summary: {
        text: 'No movement noted. 1 Crack to monitor',
      }
    },
    {
      name: 'Scope of instruction & General limitations',
      icon: <Icon id='info-filled' width={25} />,
      summary: {
        text: 'No movement noted. 1 Crack to monitor',
      }
    },
  ]
}

export default function Home() {
  return (
    <AppLayout>
      <div className="col-span-full pb-4 flex justify-end">
        <Link
          href="/builder"
          className="py-2 px-4 bg-primary rounded-full text-center text-surface font-semibold text-sm hover:opacity-90 transition-opacity"
        >
          Create My Site
        </Link>
      </div>

      <div className="col-span-full py-3 px-5 rounded-2xl bg-surface flex justify-between">
        <div className="font-semibold text-xl flex gap-3 items-center">
          <Icon id='menu-map' width={24} />
          {data.addressAndDates.address}
        </div>
        <div className="flex gap-10">
          {data.addressAndDates.dates.map(date => (
            <div className="grid gap-1" key={date.text}>
              <span className="text-xs">{date.text}</span>
              <span className="text-primary text-xl font-semibold">{date.date}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="grid lg:grid-cols-12 gap-2.5 gap-x-3 grid-rows-[180px_180px_auto] col-span-full">
        <div className="lg:col-span-6 lg:row-span-2">
          <Image src="/images/c48de55123334e5f3278a62129f5433987c40ce3.jpg" alt="property" width='600' height={0} className="rounded-2xl size-full object-cover" />
        </div>
        {data.propertyInfo.map(info => (
          <AttrbuteCard {...info} key={info.name} />
        ))}
      </div>

      <div className="py-4 px-3 rounded-2xl bg-surface space-y-2.5 col-span-full">
        <ScoreSlider score={data.scoreInfo.score} />
        <div className="space-y-4 mt-12">
          <h2 className="text-2xl font-semibold p-2 flex items-center gap-3">
            Your smart score is {data.scoreInfo.score}/10
            <Icon width={20} height={20} id="info" />
          </h2>
          <p className="p-2 font-myriad">
            <b>Summary:</b> This report provides a comprehensive overview of the recent land assessment conducted in the Green Valley region. The survey highlights key findings regarding soil quality, vegetation health, and water resources, offering valuable insights for future development projects. The data collected indicates a diverse ecosystem with potential for sustainable growth, while also addressing environmental concerns that need to be managed carefully.
          </p>
        </div>
      </div>

      <h2 className="col-span-full text-[32px] font-semibold">Key overview</h2>

      {data.keyOverviews.map(keyOverview => (
        <KeyOverviewCard name={keyOverview.name} icon={keyOverview.icon} link={keyOverview.link} key={keyOverview.name}>
          {keyOverview.conditionRating && <ConditionRating {...keyOverview.conditionRating} />}
          {keyOverview.whenToAct && <WhenToAct {...keyOverview.whenToAct} />}
          {keyOverview.summary && <Summary {...keyOverview.summary} />}
        </KeyOverviewCard>
      ))}
    </AppLayout>
  );
}
