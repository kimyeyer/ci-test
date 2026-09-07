// src/components/PasswordInput/index.tsx

"use client";

import { useState } from "react";

export const PasswordInput = () => {
    const [isHide, setIsHide] = useState<boolean>(true);
    return (
        <div>
            <input
                placeholder="비밀번호를 입력하세요."
                type={isHide ? 'password' : 'text'}
            />
            <button
                onClick={() => setIsHide(!isHide)}
            >
                {isHide ? '보기' : '숨기기'}
            </button>
        </div>
    );
};
