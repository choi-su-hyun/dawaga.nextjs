import { NextPage } from "next";
import { ButtonHTMLAttributes, ReactNode } from "react";
import style from "./Button.module.scss";

type ButtonVariantType = "cta-btn" | "ghost-btn" | "text-center";
type ButtonSizeType = "size-small";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: string;
  variant?: ButtonVariantType; //버튼 종류
  size?: ButtonSizeType; //버튼 크기
  rightSlot?: ReactNode; //버튼 오른쪽에 넣는 아이콘
  isFullWidth?: boolean; //전체 크기 버튼
}

const Button: NextPage<Props> = ({
  // const Button: React.FC<Props> = ({
  children,
  variant,
  size,
  rightSlot,
  isFullWidth,
  ...rest
}) => {
  return (
    <>
      <button
        className={`${variant && style[variant]} ${size && style[size]} ${
          isFullWidth ? style["full-width"] : ""
        } ${style["btn-style"]}`}
        {...rest}
      >
        {children}
        {rightSlot}
      </button>
    </>
  );
};

export default Button;
