export const nameExist = (data, value) => {
  if (data.find((v) => v.Name === value)) {
    return true;
  }
  return false;
};

export const titleExist = (data = [], value, id) => {
  const res = data.filter((v) => {
    if (v.Title === value) {
      return v.Id !== id
    }
  });
  return res.length > 0
};
