import { useOutletContext } from "react-router-dom";
import AssignmentList from "../components/assignments-list";

const assignments = [
  {
    id: "1",
    title: "Learn React",
  },
  {
    id: "2",
    title: "Learn GraphQL",
  },
  {
    id: "3",
    title: "Learn Apollo",
  },
];

export default function User() {
  const { username } = useOutletContext();

  return (
    <div className="flex h-full items-center justify-center">
      <h1 className="text-3xl font-bold">Welcome back, {username}!</h1>
      <AssignmentList assignments={assignments} />
    </div>
  );
}
