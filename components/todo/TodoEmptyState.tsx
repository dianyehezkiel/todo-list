import Image from 'next/image';
import todoEmptyBg from '../../public/todo-empty-bg.png';

export default function TodoEmptyState() {
  return (
    <div data-cy='todo-empty-state' className="w-full h-full flex-grow max-w-screen-sm flex justify-center items-center">
      <div className='relative'>
        <Image
          src={todoEmptyBg}
          alt='todo empty background'
          aria-hidden
        />
        <p className='text-center font-semibold my-4 md:text-2xl'>Buat list item kamu</p>
      </div>
    </div>
  )
}