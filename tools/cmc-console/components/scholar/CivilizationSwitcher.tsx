'use client';

interface CivilizationSwitcherProps {
  civilizations: string[];
  selectedCivilization: string | null;
  onSelect: (civilization: string) => void;
}

export default function CivilizationSwitcher({
  civilizations,
  selectedCivilization,
  onSelect,
}: CivilizationSwitcherProps) {
  if (civilizations.length === 0) return null;

  return (
    <div className="flex flex-wrap gap-2 mb-4">
      {civilizations.map((civ) => {
        const isSelected = selectedCivilization?.toUpperCase() === civ.toUpperCase();
        return (
          <button
            key={civ}
            type="button"
            onClick={() => onSelect(civ)}
            className={`
              px-4 py-2 rounded-md text-sm font-medium
              transition-all duration-200 ease-out
              border w-28 text-center
              ${isSelected
                ? 'bg-stone-700 text-stone-50 border-stone-700 shadow-md'
                : 'bg-white text-stone-600 border-stone-200 hover:border-stone-400 hover:bg-stone-50 hover:text-stone-800'
              }
            `}
          >
            {civ}
          </button>
        );
      })}
    </div>
  );
}
