const RegularContent = ({ parts }) => (
  <>
    <span>{parts[0]}:</span> {parts.slice(1).join(":")}
  </>
);
export default RegularContent;
