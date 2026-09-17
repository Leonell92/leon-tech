import React from "react";

export type ServiceIconSlug =
  | "software-development"
  | "business-automation"
  | "web-development"
  | "mobile-development"
  | "data-analytics"
  | "api-integration"
  | "it-support"
  | "ai-implementation"
  | string;

interface ServiceIconProps {
  slug?: ServiceIconSlug;
  icon?: string;
  size?: "sm" | "md" | "lg" | "xl";
  interactive?: boolean;
  className?: string;
}

const sizeConfig = {
  sm: {
    container: "w-9 h-9 p-1.5 rounded-lg",
    svg: "w-6 h-6",
    glow: "blur-sm",
  },
  md: {
    container: "w-12 h-12 p-2 rounded-xl",
    svg: "w-8 h-8",
    glow: "blur-md",
  },
  lg: {
    container: "w-14 h-14 p-2.5 rounded-xl",
    svg: "w-9 h-9",
    glow: "blur-md",
  },
  xl: {
    container: "w-20 h-20 p-3.5 rounded-2xl",
    svg: "w-13 h-13",
    glow: "blur-lg",
  },
};

export default function ServiceIcon({
  slug,
  icon,
  size = "md",
  interactive = true,
  className = "",
}: ServiceIconProps) {
  // Normalize key to service identifier
  const key = slug
    ? slug.toLowerCase().replace(/^\/services\//, "").replace(/\/$/, "")
    : icon || "";

  const config = sizeConfig[size] || sizeConfig.md;

  const renderSvg = () => {
    switch (key) {
      // 1. SOFTWARE DEVELOPMENT
      case "software-development":
      case "code":
        return (
          <svg
            viewBox="0 0 48 48"
            fill="none"
            className={`${config.svg} transition-transform duration-300 group-hover:scale-105`}
          >
            {/* Terminal Window Frame */}
            <rect
              x="6"
              y="7"
              width="36"
              height="34"
              rx="6"
              className="fill-teal-500/5 stroke-navy-800/80 transition-colors duration-300 group-hover:stroke-teal-600"
              strokeWidth="2"
            />
            {/* Window Top Controls */}
            <circle cx="12" cy="13" r="1.5" className="fill-red-400" />
            <circle cx="16.5" cy="13" r="1.5" className="fill-amber-400" />
            <circle cx="21" cy="13" r="1.5" className="fill-teal-400" />
            <line x1="6" y1="18" x2="42" y2="18" className="stroke-navy-800/20" strokeWidth="1.5" />

            {/* Code Brackets */}
            <path
              d="M17 23L12 28L17 33"
              className="stroke-navy-900 transition-transform duration-300 group-hover:-translate-x-1 group-hover:stroke-teal-600"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M31 23L36 28L31 33"
              className="stroke-navy-900 transition-transform duration-300 group-hover:translate-x-1 group-hover:stroke-teal-600"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Center Code Slash */}
            <path
              d="M26 22L22 34"
              className="stroke-teal-500 transition-transform duration-300 group-hover:rotate-6 group-hover:stroke-teal-400"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            {/* Active Blinking Cursor Accent */}
            <line
              x1="26"
              y1="28"
              x2="28"
              y2="28"
              className="stroke-teal-500 animate-pulse"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
          </svg>
        );

      // 2. BUSINESS AUTOMATION
      case "business-automation":
      case "zap":
        return (
          <svg
            viewBox="0 0 48 48"
            fill="none"
            className={`${config.svg} transition-transform duration-300 group-hover:scale-105`}
          >
            {/* Rotating Gear / Orbit Ring */}
            <circle
              cx="24"
              cy="24"
              r="17"
              className="stroke-teal-500/30 transition-transform duration-700 ease-in-out group-hover:rotate-90 group-hover:stroke-teal-500/60"
              strokeWidth="2"
              strokeDasharray="4 3"
            />
            <circle cx="24" cy="7" r="2" className="fill-teal-500 transition-transform duration-700 group-hover:scale-125" />
            <circle cx="41" cy="24" r="2" className="fill-navy-800 transition-transform duration-700 group-hover:scale-125" />
            <circle cx="24" cy="41" r="2" className="fill-teal-500 transition-transform duration-700 group-hover:scale-125" />
            <circle cx="7" cy="24" r="2" className="fill-navy-800 transition-transform duration-700 group-hover:scale-125" />

            {/* Energetic Automation Lightning Bolt */}
            <path
              d="M26 8L15 25H24L22 40L33 23H24L26 8Z"
              className="fill-teal-500/10 stroke-teal-600 transition-all duration-300 group-hover:fill-teal-500/25 group-hover:stroke-teal-500 group-hover:scale-110"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* Kinetic Sparks */}
            <circle cx="35" cy="13" r="1.5" className="fill-amber-400 animate-ping opacity-75" />
            <circle cx="12" cy="33" r="1.5" className="fill-teal-400 animate-pulse" />
          </svg>
        );

      // 3. WEB DEVELOPMENT
      case "web-development":
      case "globe":
        return (
          <svg
            viewBox="0 0 48 48"
            fill="none"
            className={`${config.svg} transition-transform duration-300 group-hover:scale-105`}
          >
            {/* Browser Header Bar */}
            <rect
              x="6"
              y="8"
              width="36"
              height="32"
              rx="6"
              className="fill-teal-500/5 stroke-navy-800/80 transition-colors duration-300 group-hover:stroke-teal-600"
              strokeWidth="2"
            />
            <line x1="6" y1="17" x2="42" y2="17" className="stroke-navy-800/20" strokeWidth="1.5" />
            <circle cx="11" cy="12.5" r="1.5" className="fill-teal-400 group-hover:animate-bounce" />
            <circle cx="15.5" cy="12.5" r="1.5" className="fill-teal-500" />
            <rect x="20" y="11" width="18" height="3.5" rx="1.5" className="fill-navy-800/10" />

            {/* High-Tech Wireframe Globe */}
            <circle cx="24" cy="28" r="9" className="stroke-navy-900 transition-colors group-hover:stroke-teal-600" strokeWidth="1.8" />
            <ellipse cx="24" cy="28" rx="4.5" ry="9" className="stroke-teal-500" strokeWidth="1.5" />
            <line x1="15" y1="28" x2="33" y2="28" className="stroke-teal-500/60" strokeWidth="1.5" />

            {/* Orbital Planetary Ring */}
            <ellipse
              cx="24"
              cy="28"
              rx="14"
              ry="5"
              transform="rotate(-25 24 28)"
              className="stroke-teal-400/50 transition-transform duration-500 group-hover:rotate-0"
              strokeWidth="1.5"
              strokeDasharray="3 2"
            />
          </svg>
        );

      // 4. MOBILE DEVELOPMENT
      case "mobile-development":
      case "smartphone":
        return (
          <svg
            viewBox="0 0 48 48"
            fill="none"
            className={`${config.svg} transition-transform duration-300 group-hover:scale-105`}
          >
            {/* Phone Chassis */}
            <rect
              x="13"
              y="6"
              width="22"
              height="36"
              rx="5"
              className="fill-teal-500/5 stroke-navy-800/90 transition-all duration-300 group-hover:-translate-y-1 group-hover:stroke-teal-600"
              strokeWidth="2"
            />
            {/* Dynamic Island / Speaker */}
            <rect x="20" y="9.5" width="8" height="2" rx="1" className="fill-navy-900" />

            {/* App Screen UI Cards */}
            <rect
              x="16.5"
              y="15"
              width="15"
              height="8"
              rx="2"
              className="fill-teal-500/15 stroke-teal-500/60 transition-transform duration-300 group-hover:-translate-y-0.5"
              strokeWidth="1.2"
            />
            <rect
              x="16.5"
              y="25"
              width="9"
              height="3"
              rx="1.5"
              className="fill-navy-800/30 transition-transform duration-300 group-hover:-translate-y-0.5"
            />
            <rect
              x="16.5"
              y="30"
              width="15"
              height="3"
              rx="1.5"
              className="fill-navy-800/20 transition-transform duration-300 group-hover:-translate-y-0.5"
            />

            {/* Home Indicator Bar */}
            <line x1="19" y1="38.5" x2="29" y2="38.5" className="stroke-navy-800/60" strokeWidth="2" strokeLinecap="round" />

            {/* Tactile Notification Badge */}
            <circle
              cx="31"
              cy="12"
              r="2.5"
              className="fill-teal-500 transition-transform duration-300 group-hover:scale-125"
            />
          </svg>
        );

      // 5. DATA ANALYTICS
      case "data-analytics":
      case "bar-chart":
        return (
          <svg
            viewBox="0 0 48 48"
            fill="none"
            className={`${config.svg} transition-transform duration-300 group-hover:scale-105`}
          >
            {/* Grid Axes */}
            <line x1="8" y1="39" x2="40" y2="39" className="stroke-navy-800/30" strokeWidth="1.8" strokeLinecap="round" />
            <line x1="8" y1="39" x2="8" y2="10" className="stroke-navy-800/30" strokeWidth="1.8" strokeLinecap="round" />

            {/* Interactive Data Bars */}
            {/* Bar 1 */}
            <rect
              x="11.5"
              y="28"
              width="4.5"
              height="11"
              rx="1.5"
              className="fill-navy-800/40 transition-all duration-300 group-hover:fill-teal-600/50"
            />
            {/* Bar 2 */}
            <rect
              x="18.5"
              y="22"
              width="4.5"
              height="17"
              rx="1.5"
              className="fill-navy-800/60 transition-all duration-300 group-hover:fill-teal-600/70"
            />
            {/* Bar 3 */}
            <rect
              x="25.5"
              y="16"
              width="4.5"
              height="23"
              rx="1.5"
              className="fill-teal-600 transition-all duration-300 group-hover:fill-teal-500"
            />
            {/* Bar 4 */}
            <rect
              x="32.5"
              y="11"
              width="4.5"
              height="28"
              rx="1.5"
              className="fill-teal-500 transition-all duration-300 group-hover:fill-teal-400 group-hover:-translate-y-1"
            />

            {/* Dynamic Trendline */}
            <path
              d="M10 32L18 24L26 19L36 10"
              className="stroke-teal-600 transition-all duration-300 group-hover:stroke-teal-400"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Peak Beacon Arrow / Pulse */}
            <circle cx="36" cy="10" r="2.5" className="fill-teal-400 animate-ping opacity-75" />
            <circle cx="36" cy="10" r="2" className="fill-navy-900 stroke-teal-300" strokeWidth="1.5" />
          </svg>
        );

      // 6. API INTEGRATION
      case "api-integration":
      case "git-merge":
        return (
          <svg
            viewBox="0 0 48 48"
            fill="none"
            className={`${config.svg} transition-transform duration-300 group-hover:scale-105`}
          >
            {/* Connecting Data Pipelines */}
            <path
              d="M12 14C19 14 19 24 24 24"
              className="stroke-navy-800/60 transition-colors duration-300 group-hover:stroke-teal-500"
              strokeWidth="2.2"
              strokeLinecap="round"
            />
            <path
              d="M36 14C29 14 29 24 24 24"
              className="stroke-navy-800/60 transition-colors duration-300 group-hover:stroke-teal-500"
              strokeWidth="2.2"
              strokeLinecap="round"
            />
            <path
              d="M24 24V37"
              className="stroke-teal-500 transition-colors duration-300 group-hover:stroke-teal-400"
              strokeWidth="2.5"
              strokeLinecap="round"
            />

            {/* Endpoint A (Top-Left Node) */}
            <circle cx="12" cy="14" r="4.5" className="fill-white stroke-navy-900 transition-transform duration-300 group-hover:scale-110" strokeWidth="2.2" />
            <circle cx="12" cy="14" r="1.8" className="fill-teal-500" />

            {/* Endpoint B (Top-Right Node) */}
            <circle cx="36" cy="14" r="4.5" className="fill-white stroke-navy-900 transition-transform duration-300 group-hover:scale-110" strokeWidth="2.2" />
            <circle cx="36" cy="14" r="1.8" className="fill-teal-500" />

            {/* Central Hub (Bridge/Gateway) */}
            <circle
              cx="24"
              cy="24"
              r="4"
              className="fill-teal-500/20 stroke-teal-600 transition-transform duration-500 group-hover:rotate-45"
              strokeWidth="2"
            />
            <circle cx="24" cy="24" r="1.5" className="fill-teal-600 animate-pulse" />

            {/* Output Node (Bottom) */}
            <circle
              cx="24"
              cy="37"
              r="4.5"
              className="fill-teal-600 stroke-navy-900 transition-transform duration-300 group-hover:scale-110"
              strokeWidth="2.2"
            />
            <circle cx="24" cy="37" r="1.8" className="fill-white" />
          </svg>
        );

      // 7. IT SUPPORT
      case "it-support":
      case "headphones":
        return (
          <svg
            viewBox="0 0 48 48"
            fill="none"
            className={`${config.svg} transition-transform duration-300 group-hover:scale-105`}
          >
            {/* Headset Arc Band */}
            <path
              d="M13 25C13 15.5 17.5 11 24 11C30.5 11 35 15.5 35 25"
              className="stroke-navy-900 transition-colors duration-300 group-hover:stroke-teal-600"
              strokeWidth="2.5"
              strokeLinecap="round"
            />

            {/* Left Earcup */}
            <rect
              x="9"
              y="22"
              width="6.5"
              height="11"
              rx="3"
              className="fill-white stroke-navy-900 transition-all duration-300 group-hover:fill-teal-50 group-hover:stroke-teal-600"
              strokeWidth="2"
            />

            {/* Right Earcup */}
            <rect
              x="32.5"
              y="22"
              width="6.5"
              height="11"
              rx="3"
              className="fill-white stroke-navy-900 transition-all duration-300 group-hover:fill-teal-50 group-hover:stroke-teal-600"
              strokeWidth="2"
            />

            {/* Microphone Boom */}
            <path
              d="M12 30C12 37.5 18 39 23 37.5"
              className="stroke-navy-800 transition-colors duration-300 group-hover:stroke-teal-500"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <rect x="23" y="36" width="3" height="3" rx="1" className="fill-teal-500 animate-pulse" />

            {/* Equalizer Sound Waves (Left & Right) */}
            <path
              d="M6 24C4.5 25.5 4.5 28.5 6 30"
              className="stroke-teal-500/60 transition-transform duration-300 group-hover:-translate-x-0.5 group-hover:stroke-teal-500"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M42 24C43.5 25.5 43.5 28.5 42 30"
              className="stroke-teal-500/60 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:stroke-teal-500"
              strokeWidth="2"
              strokeLinecap="round"
            />

            {/* 24/7 Live Active Badge */}
            <circle cx="36" cy="11" r="2.5" className="fill-emerald-400 animate-ping opacity-75" />
            <circle cx="36" cy="11" r="2" className="fill-emerald-500 stroke-white" strokeWidth="1" />
          </svg>
        );

      // 8. AI IMPLEMENTATION
      case "ai-implementation":
      case "cpu":
        return (
          <svg
            viewBox="0 0 48 48"
            fill="none"
            className={`${config.svg} transition-transform duration-300 group-hover:scale-105`}
          >
            {/* External Circuit Pins */}
            {/* Top */}
            <line x1="18" y1="6" x2="18" y2="12" className="stroke-navy-800/60 group-hover:stroke-teal-400 transition-colors" strokeWidth="2" strokeLinecap="round" />
            <line x1="24" y1="6" x2="24" y2="12" className="stroke-teal-500 group-hover:stroke-teal-300 transition-colors" strokeWidth="2" strokeLinecap="round" />
            <line x1="30" y1="6" x2="30" y2="12" className="stroke-navy-800/60 group-hover:stroke-teal-400 transition-colors" strokeWidth="2" strokeLinecap="round" />
            {/* Bottom */}
            <line x1="18" y1="36" x2="18" y2="42" className="stroke-navy-800/60 group-hover:stroke-teal-400 transition-colors" strokeWidth="2" strokeLinecap="round" />
            <line x1="24" y1="36" x2="24" y2="42" className="stroke-teal-500 group-hover:stroke-teal-300 transition-colors" strokeWidth="2" strokeLinecap="round" />
            <line x1="30" y1="36" x2="30" y2="42" className="stroke-navy-800/60 group-hover:stroke-teal-400 transition-colors" strokeWidth="2" strokeLinecap="round" />
            {/* Left */}
            <line x1="6" y1="18" x2="12" y2="18" className="stroke-navy-800/60 group-hover:stroke-teal-400 transition-colors" strokeWidth="2" strokeLinecap="round" />
            <line x1="6" y1="24" x2="12" y2="24" className="stroke-teal-500 group-hover:stroke-teal-300 transition-colors" strokeWidth="2" strokeLinecap="round" />
            <line x1="6" y1="30" x2="12" y2="30" className="stroke-navy-800/60 group-hover:stroke-teal-400 transition-colors" strokeWidth="2" strokeLinecap="round" />
            {/* Right */}
            <line x1="36" y1="18" x2="42" y2="18" className="stroke-navy-800/60 group-hover:stroke-teal-400 transition-colors" strokeWidth="2" strokeLinecap="round" />
            <line x1="36" y1="24" x2="42" y2="24" className="stroke-teal-500 group-hover:stroke-teal-300 transition-colors" strokeWidth="2" strokeLinecap="round" />
            <line x1="36" y1="30" x2="42" y2="30" className="stroke-navy-800/60 group-hover:stroke-teal-400 transition-colors" strokeWidth="2" strokeLinecap="round" />

            {/* Main Processor Die */}
            <rect
              x="12"
              y="12"
              width="24"
              height="24"
              rx="4"
              className="fill-white stroke-navy-900 transition-all duration-300 group-hover:stroke-teal-500"
              strokeWidth="2.2"
            />

            {/* Neural Matrix Core */}
            <rect
              x="16.5"
              y="16.5"
              width="15"
              height="15"
              rx="2.5"
              className="fill-teal-500/10 stroke-teal-500/40 transition-all duration-300 group-hover:fill-teal-500/25 group-hover:stroke-teal-500"
              strokeWidth="1.5"
            />

            {/* AI Intelligence Core Spark */}
            <path
              d="M24 19L25.8 22.2L29 24L25.8 25.8L24 29L22.2 25.8L19 24L22.2 22.2Z"
              className="fill-teal-600 transition-transform duration-500 group-hover:rotate-45 group-hover:scale-125"
            />
            <circle cx="24" cy="24" r="1" className="fill-white" />
          </svg>
        );

      default:
        return (
          <svg viewBox="0 0 24 24" fill="none" className={config.svg} stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
          </svg>
        );
    }
  };

  return (
    <div
      className={`relative inline-flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
        interactive
          ? "group cursor-pointer hover:-translate-y-0.5 hover:shadow-md hover:shadow-teal-500/10"
          : ""
      } ${className}`}
    >
      {/* Background Soft Glow Aura */}
      <div
        className={`absolute inset-0 rounded-xl bg-teal-400/20 ${config.glow} opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none`}
      />

      {/* Modern Glass Container Badge */}
      <div
        className={`relative z-10 flex items-center justify-center bg-gradient-to-br from-white via-teal-50/40 to-gray-50 border border-gray-100 transition-all duration-300 group-hover:border-teal-300 group-hover:bg-white ${config.container}`}
      >
        {renderSvg()}
      </div>
    </div>
  );
}
