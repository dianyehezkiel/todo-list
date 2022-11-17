import { useRouter } from 'next/router';
import { useGlobalState } from '../reducer';

export default function TitleBar() {
  const [{ activityTitle }] = useGlobalState();
  const router = useRouter();
  return (
    <header data-cy="header-background" className="bg-primary sticky top-0">
      <div className="todo-container navbar py-0">
        <h1
          data-cy="header-title"
          className="hidden md:block text-lg md:text-xl lg:text-2xl font-bold text-primary-content"
        >
          {'TO DO LIST APP'}
        </h1>
        <h1
          data-cy="header-title"
          className="flex items-center md:hidden text-lg md:text-xl lg:text-2xl font-bold text-primary-content"
        >
          {activityTitle ? (
            <>
              <button data-cy='todo-back-button' onClick={() => router.push('/')} className="btn btn-sm btn-square btn-ghost -ml-2 mr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={3}
                  stroke="currentColor"
                  className="w-7 h-7"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 19.5L8.25 12l7.5-7.5"
                  />
                </svg>
              </button>
              {activityTitle}
            </>
          ) : (
            'TO DO LIST APP'
          )}
        </h1>
      </div>
    </header>
  );
}
