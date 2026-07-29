tsx
import React from 'react';

// --- Types ---
interface TagProps {
  label: string;
  icon?: React.ReactNode;
}

interface MockChatProps {
  placeholder?: string;
  className?: string;
}

// --- Sub-Components ---
const Tag: React.FC<TagProps> = ({ label, icon }) => (
  <div className="flex items-center gap-1 px-[8px] pr-[6px] h-6 bg-white/5 rounded-[36px] text-[12px] text-[#caccce] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.02),inset_0_1px_0_0_rgba(255,255,255,0.04)] cursor-pointer hover:bg-white/10 transition-colors">
    {icon && <span className="w-4 h-4 flex items-center justify-center">{icon}</span>}
    <span>{label}</span>
  </div>
);

// --- Main Component ---
const MockChatInner: React.FC<MockChatProps> = ({
  placeholder = "Build anything...",
  className = ""
}) => {
  return (
    <div className={`mock-chat-inner flex flex-col w-[273px] min-h-[122px] p-[7px_7px_8px] bg-transparent font-sans text-[#fbfbfb] ${className}`}>

      {/* Top Pill Icon */}
      <div className="pill flex items-center justify-center w-6 h-6 ml-[1px] bg-white/5 rounded-full shadow-[inset_0_0_0_1px_rgba(255,255,255,0.02),inset_0_1px_0_0_rgba(255,255,255,0.04)]">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10.4 5.59963V8.59962C10.4 9.07701 10.5896 9.53485 10.9272 9.87242C11.2648 10.21 11.7226 10.3996 12.2 10.3996C12.6774 10.3996 13.1352 10.21 13.4728 9.87242C13.8104 9.53485 14 9.07701 14 8.59962V7.99962C13.9999 6.64544 13.5417 5.33111 12.7 4.27035C11.8582 3.20958 10.6823 2.46476 9.36359 2.15701C8.04484 1.84925 6.66076 1.99665 5.43641 2.57525C4.21206 3.15384 3.21944 4.1296 2.61996 5.34386C2.02048 6.55812 1.84939 7.93947 2.13451 9.26329C2.41963 10.5871 3.14419 11.7756 4.19038 12.6354C5.23657 13.4952 6.54286 13.9758 7.89684 13.9991C9.25083 14.0224 10.5729 13.587 11.648 12.7636M10.4 7.99962C10.4 9.32511 9.32549 10.3996 8 10.3996C6.67452 10.3996 5.6 9.32511 5.6 7.99962C5.6 6.67414 6.67452 5.59963 8 5.59963C9.32549 5.59963 10.4 6.67414 10.4 7.99962Z" fill="currentColor" />
        </svg>
      </div>

      {/* Placeholder Section */}
      <div className="placeholder pt-4 px-1 pb-0 text-[13px] text-[#4e4e4e] selection:bg-white/10">
        {placeholder}
      </div>

      {/* Bottom Row Actions */}
      <div className="bottom-row mt-[23px] flex items-center gap-2">
        <Tag
          label="Agent"
          icon={
            <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M7 11L10 8L7 5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          }
        />
        <Tag label="Auto" />

        {/* Send Button */}
        <button className="send-btn ml-auto w-7 h-7 flex items-center justify-center bg-white/5 rounded-full text-[#fbfbfb] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.02),inset_0_1px_0_0_rgba(255,255,255,0.04)] hover:bg-white/10 active:scale-95 transition-all">
          <svg width="12" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M8 12.6667V3.33333M12.6667 8L8 3.33333L3.33333 8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default MockChatInner;