import { renderHook } from "@testing-library/react"
import { useCounter } from "./useCounter"

describe("useCounter", () => {
    test("useCounter 훅의 인자가 초기값으로 세팅되는지 확인", () => {
        //컴포넌트 렌더링
        const { result } = renderHook(() => useCounter(3))
        expect(result.current.count).toBe(10)
    })


})