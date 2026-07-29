"use client"

import React from "react"
import { motion } from "framer-motion"

interface TagProps {
  label: string
  icon?: React.ReactNode
}

interface MockChatProps {
  placeholder?: string
  className?: string
}

// --- Sub-Components ---
const Tag: React.FC<TagProps> = ({ label, icon }) => (
  <div className="flex items-center gap-1 px-[8px] pr-[6px] h-6 bg-white/5 rounded-[36px] text-[12px] text-[#caccce] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.02),inset_0_1px_0_0_rgba(255,255,255,0.04)] cursor-pointer hover:bg-white/10 transition-colors">
    {icon && <span className="w-4 h-4 flex items-center justify-center">{icon}</span>}
    <span>{label}</span>
  </div>
)

// --- Main Component ---
export function MockChat({ 
  placeholder = "Build anything...",
  className = "" 
}: MockChatProps) {
  return (
    <div className={`group relative inline-block rounded-[20px] p-[1px] overflow-hidden bg-[#1d1d1d] shadow-[inset_0_0_0_1px_rgba(44,47,54,0.52),inset_0_0_50px_0_rgba(255,255,255,0.02)] ${className}`}>
      {/* Animated Border Beam Glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-[20px]">
        <motion.div
          className="absolute -inset-[100%] opacity-80 group-hover:opacity-100 transition-opacity"
          style={{
            background:
              "conic-gradient(from 0deg at 50% 50%, transparent 0deg, transparent 270deg, rgba(59,130,246,0.9) 320deg, rgba(168,85,247,0.9) 350deg, transparent 360deg)",
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        />
      </div>

      {/* Inner Content Container */}
      <div className="relative rounded-[19px] bg-[#1d1d1d]">
        <div className="mock-chat-inner flex flex-col w-[273px] min-h-[100px] p-[7px_7px_8px] bg-transparent font-sans text-[#fbfbfb]">
          {/* Placeholder Section */}
          <div className="placeholder pt-2 px-1 pb-0 text-[13px] text-[#4e4e4e] selection:bg-white/10">
            {placeholder}
          </div>

          {/* Bottom Row Actions */}
          <div className="bottom-row mt-[23px] flex items-center gap-2">
            <Tag 
              label="Agent" 
              icon={
                <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M7 11L10 8L7 5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              } 
            />
            <Tag label="Auto" />

            {/* Send Button */}
            <button className="send-btn ml-auto w-7 h-7 flex items-center justify-center bg-white/5 rounded-full text-[#fbfbfb] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.02),inset_0_1px_0_0_rgba(255,255,255,0.04)] hover:bg-white/10 active:scale-95 transition-all outline-none">
              <svg width="12" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M8 12.6667V3.33333M12.6667 8L8 3.33333L3.33333 8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MockChat
