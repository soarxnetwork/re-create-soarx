import { formDataDsa2 } from "@/constants/dsa2";

interface FormCampusProps {
  selectedYear: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleOptionChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const renderFormElements = ({
  handleChange,
  handleOptionChange,
  selectedYear,
}: FormCampusProps) => {
  return formDataDsa2.map((data) => {
    if (data.selectOptions) {
      return (
        <div key={data.label}>
          <label htmlFor={data.label}>{data.label}</label>
          <select
            id={data.label}
            onChange={handleOptionChange}
            value={selectedYear}
            name={data.label}
          >
            {data.selectOptions.map((option) => (
              <option key={option.key} value={option.value}>
                {option.value}
              </option>
            ))}
          </select>
        </div>
      );
    } else {
      return (
        <div key={data.label}>
          <label htmlFor={data.label}>{data.label}</label>
          {data.subLabel && (
            <label htmlFor={data.label} className="text-sm text-secondDsaBlack">
              {data.subLabel}
            </label>
          )}
          <input
            type={data.inputProps.type}
            id={data.inputProps.id}
            name={data.label}
            className={data.inputProps.className}
            onChange={handleChange}
          />
        </div>
      );
    }
  });
};
