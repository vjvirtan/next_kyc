export const useLocalStorage: any = () => {
  const addToLocalStorage = (key: string, value: any) => {
    if (typeof window !== "undefined") {
      localStorage.setItem(key, JSON.stringify(value));
    }
  };
  const getFromLocalStorage = (key: string) => {
    if (typeof window !== "undefined") {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : null;
    }
  };

  return { addToLocalStorage, getFromLocalStorage };
};
