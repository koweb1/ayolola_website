import "./beforeaftercard.css";

interface BeforeAfterCardProps {
  beforeImage: string;
  afterImage: string;
  title: string;
}

export default function BeforeAfterCard({
  beforeImage,
  afterImage,
  title,
}: BeforeAfterCardProps) {
  return (
    <div className="before-after-card">
      <div className="before-after-images">
        <div className="image-box">
          <img src={beforeImage} alt="" />
          <span>Before</span>
        </div>

        <div className="image-box">
          <img src={afterImage} alt="" />
          <span>After</span>
        </div>
      </div>

      <h3>{title}</h3>
    </div>
  );
}
