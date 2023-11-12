interface SearchBoxProps {
  keyword: string;
  onlyStocked: boolean;
  onKeywordChanged: (newValue: string) => void;
  onOnlyStockedChanged: (newValue: boolean) => void;
}

export default function SearchBox({
  keyword,
  onlyStocked,
  onKeywordChanged,
  onOnlyStockedChanged,
}: SearchBoxProps) {
  const handleChange = (e: any) => {
    onKeywordChanged(e.target.value);
  };

  const handleCheckboxChange = (e: any) => {
    onOnlyStockedChanged(e.target.checked);
  };
  return (
    <div>
      <input placeholder="Search..." value={keyword} onChange={handleChange} />
      <div>
        Only Show Stocked
        <input
          type="checkbox"
          checked={onlyStocked}
          onChange={handleCheckboxChange}
        />
      </div>
    </div>
  );
}
