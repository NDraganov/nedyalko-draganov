import classes from "./coming-soon.module.css";

const CommingSoon = ({ text }) => {
  return (
    <div className={classes.soon}>
      <p>{text}</p>
    </div>
  );
};

export default CommingSoon;
