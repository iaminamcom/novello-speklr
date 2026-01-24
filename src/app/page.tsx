import AppLayout from "@/components/layout/AppLayout";
import { ScoreSlider } from "@/components/ScoreSlider";

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
  ],
  scoreInfo: {
    score: 6,

  }
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

      <div className="py-4 px-3 rounded-2xl bg-surface space-y-2.5 col-span-full">
        <ScoreSlider score={data.scoreInfo.score} />
        <div className="space-y-4 mt-12">
          <h2 className="text-2xl font-semibold p-2">Your smart score is {data.scoreInfo.score}/10</h2>
          <p className="p-2 font-myriad">
            <b>Summary:</b> This report provides a comprehensive overview of the recent land assessment conducted in the Green Valley region. The survey highlights key findings regarding soil quality, vegetation health, and water resources, offering valuable insights for future development projects. The data collected indicates a diverse ecosystem with potential for sustainable growth, while also addressing environmental concerns that need to be managed carefully.
          </p>
        </div>
      </div>

    </AppLayout>
  );
}
