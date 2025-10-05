import type { History } from "../App";

type Props = {
  data: History[];
  onDelete?: (id: string) => void;
};
export default function History({ data, onDelete }: Props) {
  return (
    <div className="max-w-[300px] mx-auto py-5">
      <h2 className="text-2xl text-center mb-3">Login History</h2>

      <div className="flex justify-between mb-3 border-b-[1px] border-gray-400">
        <div className="font-bold">Email</div>
        <div className="font-bold">Password</div>
        <div className="font-bold">Delete</div>
      </div>
      {data.map(({ id, email, password }) => (
        <div
          key={id}
          className="flex justify-between mb-3 border-b-[1px] border-gray-400 items-center"
        >
          <div>{email}</div>
          <div>{password}</div>
          <div
            className="text-red-600 font-bold cursor-pointer text-xl"
            onClick={() => onDelete?.(id)}
          >
            &times;
          </div>
        </div>
      ))}
    </div>
  );
}
