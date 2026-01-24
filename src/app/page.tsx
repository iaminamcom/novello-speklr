import AppLayout from "@/components/layout/AppLayout";

const data = {
  addressAndDates: {
    address: '24A Lupus St, London SW1V 3DZ',
    dates: [
      { date: '19.02.2025', text: 'Inspection date' },
      { date: '19.02.2025', text: 'Report published' },
    ]
  },
  propertyImageUrl: '',
  propertyInfo: [
    { name: '', icon: '', valueText: '', },
  ]
}

export default function Home() {
  return (
    <AppLayout>
      <div className="col-span-full py-3 px-5 rounded-2xl bg-surface flex justify-between">
        <div className="font-semibold text-xl flex gap-3 items-center">
          {data.addressAndDates.address}
        </div>
        <div className="flex gap-10">
          {data.addressAndDates.dates.map(date => (
            <div className="grid gap-1">
              <span className="text-xs">{date.text}</span>
              <span className="text-primary text-xl font-semibold">{date.date}</span>
            </div>
          ))}
        </div>
      </div>

      {data.propertyImageUrl && <img src={data.propertyImageUrl} alt="property" className="lg:col-span-6 lg:row-span-2" />}



    </AppLayout>
  );
}
