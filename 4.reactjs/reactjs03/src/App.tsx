import { useState } from "react";
import Form, { type Form as FormType } from "./components/Form";
import { Toaster, toast } from "sonner";
import History from "./components/History";
import { v4 as uuid } from "uuid";
export type History = {
  id: string;
} & FormType;

/*
{
  id: string;
}
&
{
  email: string;
  password: string;
}

{
  id: string;
  email: string;
  password: string;
}
*/

export default function App() {
  const [histories, setHistories] = useState<History[]>([]);
  const handleSubmit = (formData: FormType) => {
    setHistories([
      ...histories,
      {
        id: uuid(),
        email: formData.email,
        password: formData.password,
      },
    ]);
    toast("Login success");
  };

  const handleDelete = (_id: string) => {
    if (!confirm("Are you sure?")) {
      return;
    }
    setHistories(histories.filter(({ id }) => id !== _id));
    toast("Remove success");
  };

  console.log(histories);

  // const handleSort = () => {
  //   setHistories([...histories].reverse());
  // };

  // const handleUpdate = () => {
  //   const _index = 1;
  //   setHistories(
  //     histories.map((item, index) => {
  //       if (index === _index) {
  //         item.email = "something@gmail.com";
  //       }
  //       return item;
  //     })
  //   );
  // };

  return (
    <div>
      <Form onSubmit={handleSubmit} />
      <History data={histories} onDelete={handleDelete} />
      <Toaster position="top-right" />
      {/* <div className="flex justify-between">
        <button onClick={handleSort}>Sort</button>
        <button onClick={handleUpdate}>Update</button>
      </div> */}
    </div>
  );
}
