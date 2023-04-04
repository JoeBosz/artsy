import { useOutletContext } from "react-router-dom";
import AssignmentList from "../components/assignments-list";

const assignments = [
  {
    id: "1",
    title: "",
  },
  {
    id: "2",
    title: "",
  },
  {
    id: "3",
    title: "",
  },
];

export default function User() {
  const { username } = useOutletContext();

  return (
    <div className="justify-left flex h-full items-center">
      <h1 className="text-3xl font-bold">Welcome back, {username}!</h1>
      <AssignmentList assignments={assignments} />
    </div>
  );
}
