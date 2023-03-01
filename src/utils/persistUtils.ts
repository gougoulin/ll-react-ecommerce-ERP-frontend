type Storage = typeof localStorage | typeof sessionStorage;

const save = (storage: Storage) => {
  return (key: string, val: unknown) => {
    storage.setItem(key, JSON.stringify(val));
  };
};
const get = (storage: Storage) => {
  return (key: string) => {
    let val = storage.getItem(key);
    return val && JSON.parse(val);
  };
};
const remove = (storage: Storage) => {
  return (key: string) => {
    storage.removeItem(key);
  };
};

let storage = {
  local: {
    save(key: string, val: unknown) {
      return save(localStorage)(key, val);
    },
    get(key: string) {
      return get(localStorage)(key);
    },
    remove(key: string) {
      remove(localStorage)(key);
    }
  },
  session: {
    save(key: string, val: unknown) {
      return save(sessionStorage)(key, val);
    },
    get(key: string) {
      return get(sessionStorage)(key);
    },
    remove(key: string) {
      remove(sessionStorage)(key);
    }
  }
};

export default storage;
