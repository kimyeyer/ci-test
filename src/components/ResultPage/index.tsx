"use client";

import { m } from "motion/react";

export default function ResultPage({ answers }: { answers: string[] }) {
    return (
        <m.div className="text-center">
            <m.h2
                className="mb-6 text-3xl font-bold"
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
            >테스트 결과</m.h2>
            <m.div className="rounded-lg bg-white p-6 shadow-lg">
                {answers.map((answer, index) => (
                    <m.p
                        key={index}
                        className="mb-2"
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                        질문 {index + 1}: {answer}
                    </m.p>
                ))}
            </m.div>
        </m.div>
    );
}
