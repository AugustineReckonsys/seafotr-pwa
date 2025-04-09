export const DetailItem = ({
  icon,
  label,
  value,
}: {
  icon: string;
  label: string;
  value: string | number;
}) => (
  <div className="detail-item">
    <img src={icon} alt={label} className="detail-icon" />
    <div className="detail-text">
      <p className="detail-label">{label}</p>
      <p className="detail-value">{value}</p>
    </div>
  </div>
);
