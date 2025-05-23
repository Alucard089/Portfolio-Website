
interface SkillBarProps {
  name: string;
  level: string;
  percentage: number;
}

export const SkillBar = ({ name, level, percentage }: SkillBarProps) => {
  return (
    <div className="mb-6">
      <div className="flex justify-between mb-1">
        <span className="text-bg3-light">{name}</span>
        <span className="text-red-400">{level}</span>
      </div>
      <div className="w-full bg-bg3-dark/30 rounded-full h-2 relative overflow-hidden">
        <div 
          className="absolute left-0 top-0 h-full bg-gradient-to-r from-red-500 to-bg3-purple animate-[fillBar_1s_ease-out]"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};
