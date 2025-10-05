import React, { useState } from "react";
import { toast } from "sonner";
export type Form = {
  email: string;
  password: string;
};
type Props = {
  onSubmit?: (formData: Form) => void;
};
export default function Form({ onSubmit }: Props) {
  //State lưu trữ form
  const [form, setForm] = useState<Form>({} as Form);
  const [errors, setErrors] = useState<Form>({} as Form);
  const handleChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { email, password } = form;
    const errorBag: Form = {} as Form;
    if (!email) {
      errorBag.email = "Vui lòng nhập email";
    }
    if (!password) {
      errorBag.password = "Vui lòng nhập password";
    }
    setErrors(errorBag);
    if (!Object.keys(errorBag).length) {
      onSubmit?.(form); //Thêm thành công
      setForm({
        email: "",
        password: "",
      });
    } else {
      toast("Validate failed");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-[300px] mx-auto py-5">
      <h1 className="text-2xl text-center">Login Form</h1>
      <div className="mb-3">
        <label className="block">Email</label>
        <input
          type="email"
          className="border-[1px] border-gray-500 px-3 py-2 w-full outline-none"
          placeholder="Email..."
          name="email"
          onChange={handleChangeValue}
          value={form.email ?? ""}
        />
        {errors.email && <span className="text-red-600">{errors.email}</span>}
      </div>
      <div className="mb-3">
        <label className="block">Password</label>
        <input
          type="password"
          className="border-[1px] border-gray-500 px-3 py-2 w-full outline-none"
          placeholder="Password..."
          name="password"
          onChange={handleChangeValue}
          value={form.password ?? ""}
        />
        {errors.password && (
          <span className="text-red-600">{errors.password}</span>
        )}
      </div>
      <button className="bg-amber-700 w-full py-2 text-white cursor-pointer">
        Login
      </button>
    </form>
  );
}

//Hook use<Tenbatky> khác gì với hàm thông thường
// - Rule: Chỉ được gọi trong body của functional component
// - Được phép sử dụng các hook khác

//Custom hook
// const useSomething = () => {
//     const [a, setA] = useState(0);
// }

//Hàm cập nhật State là bất đồng bộ
