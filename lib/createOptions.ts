const createOptions = (
  data: { name: string; id: string | number }[]
) => {
  return data.map((item) => ({
    label: item.name,
    value: item.id,
  }));
};

export default createOptions;
