import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Button from "../component/Button";

const Register = () => {
  const nav = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      name: "",
      email: "",
      birth: "",
      gender: "",
    },
  });

  const onSubmit = (data) => {
    alert("회원가입이 완료되었습니다!");
    console.log(data);
    // 추후 백엔드 API 연결

    nav("/");
  };

  return (
    <div className="w-full max-w-md bg-white rounded-2xl shadow-lg px-8 py-10">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">추가 정보를 입력하세요</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* 닉네임 */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">닉네임</label>
          <input
            type="text"
            placeholder="닉 네 임"
            {...register("name", { required: "닉네임을 입력해주세요" })}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
        </div>

        {/* 이메일 */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">이메일</label>
          <input
            type="email"
            placeholder="example@email.com"
            autoComplete="email"
            {...register("email", {
              required: "이메일을 입력해주세요",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "유효한 이메일 주소를 입력해주세요",
              },
            })}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
        </div>

        {/* 생년월일 */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">생년월일</label>
          <input
            type="date"
            autoComplete="bday"
            {...register("birth", {
              required: "생년월일을 입력해주세요",
              validate: (value) => {
                const today = new Date();
                const birthDate = new Date(value);
                const age = today.getFullYear() - birthDate.getFullYear();
                return age >= 19 || "19세 이상만 회원가입이 가능합니다";
              },
            })}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          {errors.birth && <p className="text-red-500 text-sm mt-1">{errors.birth.message}</p>}
        </div>

        {/* 성별 선택 */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">성별</label>
          <select
            {...register("gender", { required: "성별을 선택해주세요" })}
            className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-400"
            defaultValue=""
          >
            <option value="" disabled>
              성별을 선택하세요
            </option>
            <option value="MALE">남성</option>
            <option value="FEMALE">여성</option>
          </select>
          {errors.gender && <p className="text-red-500 text-sm mt-1">{errors.gender.message}</p>}
        </div>

        {/* 제출 버튼 */}
        <Button type="submit" variant="Register" disabled={!isValid} className="w-full">
          회원가입
        </Button>
      </form>
    </div>
  );
};

export default Register;
