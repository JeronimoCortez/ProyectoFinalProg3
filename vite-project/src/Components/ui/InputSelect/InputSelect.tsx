import { FC, useState } from "react";
import { ILocalidad } from "../../../types/ILocalidad";
import { IPais } from "../../../types/IPais";
import { IProvincia } from "../../../types/IProvincia";
import styles from "./InputSelect.module.css";

interface IPropsInputSelect {
  options: IPais[] | IProvincia[] | ILocalidad[];
  returnOptionSelected: IPais | IProvincia | ILocalidad;
  placeholder: string;
  name: string;
}

const InputSelect: FC<IPropsInputSelect> = ({
  options,
  returnOptionSelected,
  placeholder,
  name,
}) => {
  const [optionSelected, setOptionSelected] = useState<
    IPais | ILocalidad | IProvincia
  >();

  const onHandleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const id = Number(event.target.value);
    const findOption = options.find((option) => option.id === id);
    setOptionSelected(findOption);
  };
  return (
    <>
      <select
        className={styles.selectContainer}
        value={name}
        onChange={() => onHandleChange}
      >
        <option className={styles.selectOption} value="" disabled>
          {placeholder}
        </option>
        {options.map((option) => (
          <option
            className={styles.selectOption}
            key={option.id}
            value={option.id}
          >
            {option.nombre}
          </option>
        ))}
      </select>
    </>
  );
};

export default InputSelect;
