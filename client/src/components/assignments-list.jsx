import PropTypes from "prop-types";
import oilimage from "../img/Oil.jpg";
import potteryimage from "../img/Potteryphoto.jpg";
import waterimage from "../img/Watercolorphoto.jpg";

export default function AssignmentList({ assignments }) {
  return (
    <div className="items-left flex flex-col justify-center">
      <h1 className="text-3xl font-bold">Assignments</h1>
      <img alt="Assignment List" src={potteryimage}></img>
      <p className="text-center">
        Create a Vase on a wheel for this assignment
      </p>
      <ul className="mt-4">
        <img alt="Assignment List" src={waterimage}></img>
        <p className="text-center">
          Create a Watercolor painting for this assignment
        </p>
        {assignments.map((assignment) => (
          <li key={assignment.id} className="text-xl">
            {assignment.title}
          </li>
        ))}
      </ul>
      <img alt="Assignment List" src={oilimage}></img>
      <p className="text-center">Create an Oil painting for this assignment</p>
    </div>
  );
}

AssignmentList.propTypes = {
  assignments: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
};
