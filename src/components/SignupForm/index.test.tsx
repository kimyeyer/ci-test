import { render, screen } from "@testing-library/react";
import SignupForm from ".";
test("회원가입 폼 테스트", () => {
    render(<SignupForm />);
    const emailText = screen.getByLabelText("이메일");
    expect(emailText).toBeInTheDocument();
    const pwdText = screen.getByLabelText("비밀번호");
    expect(pwdText).toBeInTheDocument();
    const pwdConfirmText = screen.getByLabelText("비밀번호 확인");
    expect(pwdConfirmText).toBeInTheDocument();

    const pwdField = screen.getByPlaceholderText("비밀번호")
    expect(pwdField).toHaveAttribute("type", "password")

    const pwdConfirmField = screen.getByPlaceholderText("비밀번호 확인")
    expect(pwdConfirmField).toHaveAttribute("type", "password")

    const button = screen.getByRole("button", { name: "회원가입" });
    expect(button).toBeInTheDocument();
})