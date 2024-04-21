export const createModelsOptions = ({ selectedOption, currentBrand }) => {
  if (selectedOption.brand === "-") return <option>-</option>;
  return currentBrand.models?.map((model, index) => (
    <option key={index}>{model.name}</option>
  ));
};

export const createYearsOpitons = ({ selectedOption, currentModel }) => {
  if (selectedOption.model === "-") return <option>-</option>;
  return currentModel.years?.map((year, index) => (
    <option key={index}>{year.num}</option>
  ));
};

export const createModificationsOpitons = ({ selectedOption, currentYear }) => {
  if (selectedOption.year === "-") return <option>-</option>;
  return currentYear?.modification?.map((mod, index) => (
    <option key={index}>{mod}</option>
  ));
};
