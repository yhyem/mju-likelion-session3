import "../../Main.css";

import Hobby from "./Hobby";

const HobbyList = (props) => {
  const { hobby } = props.data;

  return (
    <>
      <h3>HOBBY</h3>
      <div className="wrapHobby">
        {hobby.map((data, index) => (
          <Hobby data={data} key={index} isDark={props.dark} />
        ))}
      </div>
    </>
  );
};

export default HobbyList;
