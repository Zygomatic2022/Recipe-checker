import { useState } from "react";
import { RecipeListPage } from "./pages/RecipeListPage";
import { RecipeItempage } from "./pages/RecipeItemPage";
import { Header } from "./components/ui/Header";

export const App = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleRecipeclick = (recipe) => {
    setSelectedItem(recipe);
  };
  return (
    <>
      <Header clickFn={handleRecipeclick} item={selectedItem} />

      {selectedItem ? (
        <RecipeItempage item={selectedItem} />
      ) : (
        <RecipeListPage clickFn={handleRecipeclick} />
      )}
    </>
  );
};
