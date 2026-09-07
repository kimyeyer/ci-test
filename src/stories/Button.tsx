import './button.css';

export interface ButtonProps {
  /** 주요 버튼인지 여부 */
  primary?: boolean;
  /** 버튼 배경 색 */
  backgroundColor?: string;
  /** 버튼 크기 */
  size?: 'small' | 'medium' | 'large';
  /** 버튼 텍스트 */
  label: string;
  /** 클릭 핸들러 */
  onClick?: () => void;
}

/** Primary UI component for user interaction */
export const Button = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  return (
    <button
      type="button"
      className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
      {...props}
    >
      {label}
      <style jsx>{`
        button {
          background-color: ${backgroundColor};
        }
      `}</style>
    </button>
  );
};
