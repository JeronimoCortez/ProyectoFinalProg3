import { FC, useState } from "react";
import { ILocalidad } from "../../../types/ILocalidad";
import { IPais } from "../../../types/IPais";
import { IProvincia } from "../../../types/IProvincia";
import styles from "./InputSelect.module.css";

interface IPropsInputSelect {
  options: IPais[] | IProvincia[] | ILocalidad[];
  name: string;
  placeholder: string;
}

const InputSelect: FC<IPropsInputSelect> = ({ options, name, placeholder }) => {
  const [selectedValue, setSelectedValue] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(event.target.value);
  };
  return (
    <>
      <select
        className={styles.selectContainer}
        id={name}
        name={name}
        value={selectedValue}
        onChange={handleChange}
      >
        <option className={styles.selectOption} value="" disabled>
          {placeholder}
        </option>
        {options.map((option) => (
          <option
            className={styles.selectOption}
            key={option.id}
            value={option.nombre}
          >
            {option.nombre}
          </option>
        ))}
      </select>
    </>
  );
};

export default InputSelect;
