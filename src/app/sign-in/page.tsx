"use client";

import { NextPage } from "next";
import LogoAndName from "@/assets/logoAndName.svg";
import TextInput from "@/components/common/Input/TextInput";
import { useForm, FieldErrors } from "react-hook-form";
import Button from "@/components/common/Button/Button";
import { EXCLUDE_EN_NUM_REGEX } from "@/utils/inputTextLimit";
// interface Props {}
interface FormInput {
  id: string;
  password: string;
}

const SignIn: NextPage = ({}) => {
  const {
    register,
    handleSubmit,
    clearErrors,
    formState: { errors },
  } = useForm<FormInput>();

  const onValid = (data: FormInput) => {
    // TODO : API 보낼 때 에러 텍스트 관련해서 유의하자
    clearErrors();
    console.log(`data : `, data);
  };
  const onInValid = (errors: FieldErrors) => {
    console.log(`errors : `, errors);
  };

  return (
    <>
      <section className="section">
        <div className="section-container">
          <form
            className="form form-space-gap"
            onSubmit={handleSubmit(onValid, onInValid)}
          >
            <div className="form-input-wrap">
              <div className="center-box">
                <LogoAndName />
              </div>
              <TextInput
                register={register("id", {
                  required: { value: true, message: "필수값입니다." },
                  maxLength: 8,
                  pattern: {
                    value: EXCLUDE_EN_NUM_REGEX,
                    message: "한글은 작성할 수 없습니다.",
                  },
                })}
                type="text"
                label="아이디"
                name="id"
                placeholder="아이디를 입력해주세요"
                errorText={errors.id?.message}
              />
              <TextInput
                register={register("password", {
                  required: true,
                  maxLength: 8,
                })}
                type="password"
                label="비밀번호"
                name="password"
                placeholder="비밀번호를 입력해주세요"
              />
            </div>
            <div className="btn-row-wrap">
              <Button
                variant="cta-btn"
                size="size-small"
                type="submit"
                isFullWidth
              >
                로그인 하기
              </Button>
              <Button variant="text-center" type="submit" isFullWidth>
                회원가입 하러 가기
              </Button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default SignIn;
