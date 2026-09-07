import { fireEvent, render, screen } from "@testing-library/react"
import { LikeButton } from "."


test("아요 버튼 클릭 테스트", () => {
    render(<LikeButton />);

    const likeButton = screen.getByRole('button', { name: '좋아요' });
    expect(likeButton).toHaveTextContent('좋아요');
    expect(likeButton).toHaveClass('bg-gray-400');

    //'좋아요' 버튼을 클릭하면 '좋아요 취소'로 텍스트가 변경되어야 하며, bg-red-400 클래스가 적용되어야 한다.
    fireEvent.click(likeButton);

    expect(likeButton).toHaveTextContent('좋아요 취소');
    expect(likeButton).toHaveClass('bg-red-400');

    // 좋아요' 버튼을 한 번 클릭 후 다시 클릭하면 '좋아요' 버튼으로 되돌아와야 한다.
    fireEvent.click(likeButton);

    expect(likeButton).toHaveTextContent('좋아요');
    expect(likeButton).toHaveClass('bg-gray-400');

})