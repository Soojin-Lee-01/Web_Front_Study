import { useForm } from "react-hook-form";

export default function Pra1() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onValid = (data) => {
    console.log(data);
  };

  const onInValid = (err) => {
    console.log("error 입니다.");
  };

  return (
    <form onSubmit={handleSubmit(onValid, onInValid)}>
      <input
        type="text"
        placeholder="이름 입력해주세요."
        {...register("username", {
          required: "이름은 필수 항목입니다.",
          minLength: {
            message: "이름은 필수 항목입니다.",
            value: 1,
          },
        })}
      />
      {errors.username?.message}
      <br />
      <input
        type="number"
        placeholder="나이 입력해주세요."
        {...register("age", {
          required: "0 이상의 숫자만 입력 가능합니다.",
          validate: {
            useAge: (value) => {
              return value >= 0 ? true : "no";
            },
          },
        })}
      />
      <br />
      <button type="submit" onClick={handleSubmit(onValid, onInValid)}>
        제출
      </button>
    </form>
  );
}
