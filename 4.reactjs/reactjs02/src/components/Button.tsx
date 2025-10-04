type Props = {
  title: string;
  onClick: () => void;
};
export default function Button({ title, onClick }: Props) {
  return <button onClick={onClick}>{title}</button>;
}

//Function là object --> Tham chiếu

//a = () => {}
//b = a
//c = b;
//c() --> a sẽ chạy
