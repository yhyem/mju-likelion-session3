import "../../Main.css";

const Hobby = (props) => {
  const hobby = props.data;

  return (
    <div className={props.isDark ? "hobbyContentDarkMode" : "hobbyContent"}>
      {hobby}
    </div>
  );
};

export default Hobby;
