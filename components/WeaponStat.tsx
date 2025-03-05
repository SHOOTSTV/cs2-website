export const WeaponStat = ({
  label,
  labelValue,
  width,
}: {
  label: string;
  labelValue: number;
  width: number;
}) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-between text-white">
        <span>{label}</span>
        <span>{labelValue}</span>
      </div>
      <div className="h-2 bg-white/20 rounded">
        <div
          className="h-full bg-orange-500 rounded transition-all duration-300"
          style={{ width: `${width}%` }}
        ></div>
      </div>
    </div>
  );
};
