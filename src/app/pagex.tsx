"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, m } from "motion/react";

export const TypingEffect = ({
    text,
    typingSpeed = 150,
}: {
    text: string;
    typingSpeed?: number;
}) => {
    // 현재 입력된 텍스트
    const [displayText, setDisplayText] = useState("");
    // 현재 입력된 텍스트의 인덱스
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (currentIndex < text.length) {
            const timeout = setTimeout(() => {
                setDisplayText(text.slice(0, currentIndex + 1));
                setCurrentIndex(currentIndex + 1);
            }, typingSpeed);
            return () => clearTimeout(timeout);
        }
    }, [currentIndex, text, typingSpeed]);
    return (
        <AnimatePresence mode="wait">
            <m.div
                key={text}
                className="font-mono text-2xl"
            >
                {/* 현재 입력된 텍스트 */}
                {displayText}
                {/* 깜빡거리는 타이핑 커서 */}
                <m.span className="ml-1 inline-block h-5 w-2 bg-black"
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ duration: 0.5, repeat: Infinity }} />
            </m.div>
        </AnimatePresence>
    );
};

// 사용 예시
export default function TypingEffectExample() {
    return (
        <div className="p-8">
            <TypingEffect text="오늘은 러닝 어떤가요?" typingSpeed={100} />
        </div>
    );
}
