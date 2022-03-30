import React, { useEffect, useState } from "react";
import { useFilterContext } from "../../context/FilterContext";
import { commerce } from "../../lib/commerce";
type Props = {
  className: string;
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
    <div
      className={className}
      style={{ padding: "10px", display: "flex", gap: "10px" }}
    >
      {categories.map((category) => {
        return (
          <button
            key={category.slug}
            onClick={() => updateCategory(category.slug)}
          >
            {category.name}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
