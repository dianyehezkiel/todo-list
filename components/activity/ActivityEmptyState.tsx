import Image from 'next/image';
import activityEmptyBg from '../../public/activity-empty-bg.png';

export default function ActivityEmptyState() {
  return (
    <div data-cy='activity-empty-state' className="w-full h-full flex-grow max-w-screen-sm flex justify-center items-center">
      <div className='relative'>
        <Image
          src={activityEmptyBg}
          alt='activity empty background'
          aria-hidden
        />
        <p className='text-center font-semibold my-4 md:text-2xl'>Buat activity pertamamu</p>
      </div>
    </div>
  )
}