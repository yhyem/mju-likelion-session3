import "../../Main.css";

import Special from "./Special";

const SpecialList = (props) => {
  const { special } = props.data;
  return (
    <>
      <h3>특이점</h3>
      {special.map((data, index) => (
        <div className="wrapSpecial">
          <Special data={data} key={index} isDark={props.dark} />
        </div>
      ))}
    </>
  );
};

export default SpecialList;
