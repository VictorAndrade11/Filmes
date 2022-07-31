import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState
} from "react";
import { getFilmList } from "../services/films";

const PaginationContext = createContext();

export const PaginationProvider = ({ children }) => {
  const [items, handleData] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  const handlePage = (event, value) => {
    setPage(value);
  };

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      const { data } = await getFilmList(page);

      const _items = [[]];
      let listIndex = 0;

      data.forEach((item, index) => {
        if (index % 10 === 0 && index) {
          listIndex++;
          _items.push([]);
        }
        _items[listIndex].push(item);
      });

      handleData(_items);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  }, [page]);

  useEffect(() => {
    fetchData();
  }, [fetchData, page]);

  const count = useMemo(() => {
    return items.length;
  }, [items]);

  const provider = {
    items,
    page,
    count,
    isLoading,
    handlePage,
    handleData,
    fetchData
  };

  return (
    <PaginationContext.Provider value={provider}>
      {children}
    </PaginationContext.Provider>
  );
};

export const usePagination = () => {
  const provider = useContext(PaginationContext);

  return provider;
};
