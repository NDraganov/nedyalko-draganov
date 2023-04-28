import classes from "./current-year.module.css";

const CurrentYear = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className={classes.currentYear}>
      <p>
        &copy;
        <span>{currentYear}</span>
      </p>
    </div>
  );
};

export default CurrentYear;
