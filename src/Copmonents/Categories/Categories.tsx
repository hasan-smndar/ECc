import clsx from "clsx";
import { useEffect, useState } from "react";
import { useFilterContext } from "../../context/FilterContext";
import { commerce } from "../../lib/commerce";
import style from "./Categories.module.css";
type Props = {
  className?: string;
};
type State = {
  name: string;
  slug: string;
};
const Categories = ({ className }: Props) => {
  const [categories, setCategories] = useState<State[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { updateCategory } = useFilterContext();
  const getCategories = async () => {
    const { data } = await commerce.categories.list();
    const selected = data.map((item) => {
      return {
        name: item.name,
        slug: item.slug,
      };
    });
    setCategories([...selected, { name: "all", slug: "all" }]);
    setIsLoading(false);
  };
  useEffect(() => {
    getCategories();
  }, []);

  return (
    <div className={clsx(className, style.container)}>
      <h4 className={style.title}>Categories:</h4>
      <div className={style.list}>
        {categories.map((category) => {
          return (
            <button
              style={{ display: "block" }}
              key={category.slug}
              onClick={() => updateCategory(category.slug)}
            >
              {category.name}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Categories;
