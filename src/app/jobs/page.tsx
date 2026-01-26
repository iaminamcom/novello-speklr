import { JobHeader } from "@/components/jobs/Header";
import { JobCard } from "@/components/jobs/JobCard";

const upcomingJobs = [
    {
        draft: false,
        name: '24A Lupus St, London SW1V 3DZ',
        referenceId: 'ref#23453288',
        user: 'Sam Smith',
        postedBy: 'Daniel Johnson',
        documents: 0,
        notes: 'No',
        date: '17.05.2025',
        serviceType: 'Building Survey',
        additionalService: 'no',
        keyCollection: 'Stowe Brothers, 136 George Ln, London E18 1AY',
        propertyUrl: 'https://www.rightmove.co.uk/properties/154627925#/?channel=RES_BUY',
        areaOfConcern: 'Worried about Balcony firedoors as has been suggested these may not be compliant and client will be responsible for any repairs.'
    },
    {
        draft: true,
        name: '78B Orion Rd, Manchester M1 4JZ',
        referenceId: 'ref#23453288',
        user: 'Sam Smith',
        postedBy: 'Daniel Johnson',
        documents: 0,
        notes: 'No',
        date: '17.05.2025',
        serviceType: 'Building Survey',
        additionalService: 'no',
        keyCollection: 'Stowe Brothers, 136 George Ln, London E18 1AY',
        propertyUrl: 'https://www.rightmove.co.uk/properties/154627925#/?channel=RES_BUY',
        areaOfConcern: 'Worried about Balcony firedoors as has been suggested these may not be compliant and client will be responsible for any repairs.'
    },
    {
        draft: true,
        name: '56C Phoenix Ave, Bristol BS1 5BD',
        referenceId: 'ref#23453288',
        user: 'Sam Smith',
        postedBy: 'Daniel Johnson',
        documents: 0,
        notes: 'No',
        date: '17.05.2025',
        serviceType: 'Building Survey',
        additionalService: 'no',
        keyCollection: 'Stowe Brothers, 136 George Ln, London E18 1AY',
        propertyUrl: 'https://www.rightmove.co.uk/properties/154627925#/?channel=RES_BUY',
        areaOfConcern: 'Worried about Balcony firedoors as has been suggested these may not be compliant and client will be responsible for any repairs.'
    }
]
const pastJobs = [
    {
        draft: true,
        name: '24A Lupus St, London SW1V 3DZ',
        referenceId: 'ref#23453288',
        user: 'Sam Smith',
        postedBy: 'Daniel Johnson',
        documents: 0,
        notes: 'No',
        date: '17.05.2025',
        serviceType: 'Building Survey',
        additionalService: 'no',
        keyCollection: 'Stowe Brothers, 136 George Ln, London E18 1AY',
        propertyUrl: 'https://www.rightmove.co.uk/properties/154627925#/?channel=RES_BUY',
        areaOfConcern: 'Worried about Balcony firedoors as has been suggested these may not be compliant and client will be responsible for any repairs.'
    },
    {
        draft: true,
        name: '78B Orion Rd, Manchester M1 4JZ',
        referenceId: 'ref#23453288',
        user: 'Sam Smith',
        postedBy: 'Daniel Johnson',
        documents: 0,
        notes: 'No',
        date: '17.05.2025',
        serviceType: 'Building Survey',
        additionalService: 'no',
        keyCollection: 'Stowe Brothers, 136 George Ln, London E18 1AY',
        propertyUrl: 'https://www.rightmove.co.uk/properties/154627925#/?channel=RES_BUY',
        areaOfConcern: 'Worried about Balcony firedoors as has been suggested these may not be compliant and client will be responsible for any repairs.'
    },
    {
        draft: true,
        name: '56C Phoenix Ave, Bristol BS1 5BD',
        referenceId: 'ref#23453288',
        user: 'Sam Smith',
        postedBy: 'Daniel Johnson',
        documents: 0,
        notes: 'No',
        date: '17.05.2025',
        serviceType: 'Building Survey',
        additionalService: 'no',
        keyCollection: 'Stowe Brothers, 136 George Ln, London E18 1AY',
        propertyUrl: 'https://www.rightmove.co.uk/properties/154627925#/?channel=RES_BUY',
        areaOfConcern: 'Worried about Balcony firedoors as has been suggested these may not be compliant and client will be responsible for any repairs.'
    }
]

export default function () {
    return (
        <div className="py-7 px-10 space-y-5 max-w-208.5 mx-auto">
            <JobHeader />
            <main className="space-y-5">
                <h2 className="text-2xl font-semibold">Upcoming jobs</h2>
                {upcomingJobs.map(upcomingJob => (
                    <JobCard {...upcomingJob} key={upcomingJob.name} />
                ))}
                <h2 className="text-2xl font-semibold">Past jobs</h2>
                {pastJobs.map(pastJob => (
                    <JobCard {...pastJob} key={pastJob.name} />
                ))}
            </main>
        </div>
    )
}