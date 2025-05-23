"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

export interface EduTimelineEvent {
  id: string;
  school: string;
  location?: string, 
  degree?: string,
  subdegree?: string,
  description?: string;
  date?: string;
  [key: string]: unknown; // Allow additional custom fields
}

interface EduTimelineItemProps {
  event: EduTimelineEvent;
  isActive: boolean;
  isFirst: boolean;
  isLast: boolean;
  onHover: (index: number | null) => void;
  index: number;
  activeIndex: number | null;
  styles: EduTimelineStyles;
  customRender?: (event: EduTimelineEvent) => React.ReactNode;
}

interface EduTimelineStyles {
  lineColor: string;
  activeLineColor: string;
  dotColor: string;
  activeDotColor: string;
  dotSize: string;
  titleColor: string;
  descriptionColor: string;
  dateColor: string;
}

const EduTimelineItem: React.FC<EduTimelineItemProps> = ({
  event,
  isActive,
  isLast,
  onHover,
  index,
  activeIndex,
  styles,
  customRender,
}) => {
  const invertedIndex = activeIndex !== null ? index - activeIndex : 0;
  const fillDelay = activeIndex !== null ? Math.max(0, invertedIndex * 0.1) : 0;
  const fillDuration = activeIndex !== null ? Math.max(0.2, 0.5 - invertedIndex * 0.1) : 0.5;


  return (
    <motion.div
      className="flex last:mb-0"
      onHoverStart={() => onHover(index)}
      onHoverEnd={() => onHover(null)}
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative mr-4 flex flex-col items-center">
        <div
          className={`absolute ${isLast ? "hidden" : "block"} bottom-0 top-0 w-1`}
          style={{ backgroundColor: styles.lineColor }}
        >
          <motion.div
            className="w-full origin-bottom"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: isActive ? 1 : 0 }}
            transition={{ duration: fillDuration, delay: fillDelay }}
            style={{ height: "100%", backgroundColor: styles.activeLineColor }}
          />
        </div>
        <motion.div
          className="relative z-10 rounded-full border-4"
          style={{
            width: styles.dotSize,
            height: styles.dotSize,
            borderColor: isActive ? styles.activeDotColor : styles.dotColor,
            backgroundColor: isActive ? styles.activeDotColor : "Background",
          }}
          animate={{
            scale: isActive ? 1.2 : 1,
            backgroundColor: isActive ? styles.activeDotColor : "Background",
            borderColor: isActive ? styles.activeDotColor : styles.dotColor,
          }}
          transition={{ duration: fillDuration, delay: fillDelay }}
        />
      </div>
      <div className={cn("group flex-grow leading-5", !isLast && "mb-3")}>
        {customRender ? (
          customRender(event)
        ) : (
          <>
            <div className="flex flex-col sm:flex-row justify-between -mt-1">
              <h3 className="text-2xl font-semibold" style={{ color: styles.titleColor }}>
                {event.school}
              </h3>
              <span className="text-base mb-auto" style={{ color: styles.dateColor }}>
                {event.date}
              </span>
            </div>
            <div className="flex gap-1 my-1">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="fill-black dark:fill-white size-[1.3rem]"><path d="M18.364 17.364L12 23.7279L5.63604 17.364C2.12132 13.8492 2.12132 8.15076 5.63604 4.63604C9.15076 1.12132 14.8492 1.12132 18.364 4.63604C21.8787 8.15076 21.8787 13.8492 18.364 17.364ZM12 13C13.1046 13 14 12.1046 14 11C14 9.89543 13.1046 9 12 9C10.8954 9 10 9.89543 10 11C10 12.1046 10.8954 13 12 13Z"></path></svg>
              <p style={{ color: styles.descriptionColor }} className="my-auto">{event.location}</p>
            </div>
            <h3 className="text-xl" style={{ color: styles.titleColor }}>
              {event.degree}
            </h3>
            {event.subdegree && 
              <h3 className="text-lg" style={{ color: styles.titleColor }}>
                {event.subdegree}
              </h3>
            }
            <p style={{ color: styles.descriptionColor }} >{event.description}</p>
          </>
        )}
      </div>
    </motion.div>
  );
};

interface EduAnimatedTimelineProps {
  events: EduTimelineEvent[];
  className?: string;
  styles?: Partial<EduTimelineStyles>;
  customEventRender?: (event: EduTimelineEvent) => React.ReactNode;
  onEventHover?: (event: EduTimelineEvent | null) => void;
  onEventClick?: (event: EduTimelineEvent) => void;
  initialActiveIndex?: number;
}

const defaultStyles: EduTimelineStyles = {
  lineColor: "#d1d5db",
  activeLineColor: "#22c55e",
  dotColor: "#d1d5db",
  activeDotColor: "#22c55e",
  dotSize: "1.5rem",
  titleColor: "inherit",
  descriptionColor: "inherit",
  dateColor: "inherit",
};

export function EducationAnimatedTimeline({
  events,
  className = "",
  styles: customStyles = {},
  customEventRender,
  onEventHover,
  onEventClick,
  initialActiveIndex,
}: EduAnimatedTimelineProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(initialActiveIndex ?? null);
  const styles = { ...defaultStyles, ...customStyles };

  const handleHover = (index: number | null) => {
    setActiveIndex(index);
    onEventHover?.(index !== null ? events[index] : null);
  };

  return (
    <div className={`relative py-4 ${className}`}>
      {events.map((event, index) => (
        <div key={event.id} onClick={() => onEventClick?.(event)}>
          <EduTimelineItem
            event={event}
            isActive={activeIndex !== null && index >= activeIndex}
            isFirst={index === 0}
            isLast={index === events.length - 1}
            onHover={handleHover}
            index={index}
            activeIndex={activeIndex}
            styles={styles}
            customRender={customEventRender}
          />
        </div>
      ))}
    </div>
  );
}
