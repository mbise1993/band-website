import { Metadata } from 'next';

import { SectionHeading } from '@/components/section-heading';
import { PromoPhoto } from '@/components/promo-photo';

const ASSETS = [
  {
    name: 'Main logo',
    url: '/assets/main-logo.png',
  },
];

export const metadata: Metadata = {
  title: 'About | HWDI',
  description: 'About the band',
};

export default function Page() {
  return (
    <div className="prose px-8">
      <SectionHeading>ABOUT</SectionHeading>
      <PromoPhoto
        src="/promos/group-1.jpg"
        alt="Band photo"
        photographer="reillysbadphotos"
      />
      <p className="mt-4">Metalcore from Austin, Texas.</p>

      <SectionHeading className="mt-6">LOGOS</SectionHeading>
      <ul className="flex flex-col gap-4">
        {ASSETS.map((asset) => (
          <li key={asset.url}>
            <img className="h-[60px]" src={asset.url} alt={asset.name} />
            <a target="_blank" href={asset.url}>
              {asset.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
