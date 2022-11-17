export default function Alert({ text, show }: { text: string; show: boolean }) {
  return show ? (
    <div data-cy='modal-information' className="alert bg-base-100 shadow-[0_6px_10px_0px_rgba(0,0,0,0.15)] w-full max-w-md absolute bottom-4">
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="stroke-primary flex-shrink-0 w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          ></path>
        </svg>
        <span className="font-semibold">{text}</span>
      </div>
    </div>
  ) : null;
}
