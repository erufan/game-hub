import { DependencyList, useEffect } from "react";

interface Props {
  callback: () => void;
  time: number;
  deps?: DependencyList;
}

const useDebounce = ({ callback, time, deps }: Props) => {
  useEffect(() => {
    const timer = setTimeout(callback, time);

    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
};

export default useDebounce;
