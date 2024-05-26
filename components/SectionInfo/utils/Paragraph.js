import BulletContent from "./BulletContent";
import RegularContent from "./RegularContent";

const Paragraph = ({ paragraph, index }) => {
  const parts = paragraph.split(":");
  const isBullet = paragraph.startsWith("•");

  return (
    <li key={index} className="mb-2">
      {isBullet ? (
        <BulletContent parts={parts} />
      ) : (
        <RegularContent parts={parts} />
      )}
    </li>
  );
};

export default Paragraph;
