
export const keyId = (id: number): string => {
  return Math.random().toString(36) + id;
};

const helper = {
  keyId
};

export default helper;
