const BulletContent = ({ parts }) => (
  <span style={{ marginLeft: "1em" }}>
    {parts.length > 1 ? (
      <>
        <strong>{parts[0]}:</strong> {parts.slice(1).join(":")}
      </>
    ) : (
      <strong>{parts[0]}</strong>
    )}
  </span>
);

export default BulletContent;
