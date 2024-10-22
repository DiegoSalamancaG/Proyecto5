import { useState } from "react";

export const InputBleach = () => {
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  return (
    <div className="inputBleach">
      <h3>¿Qué deseas buscar?</h3>
      <div>
        <label>
          <input
            type="radio"
            name="category"
            value="humans"
            checked={selectedCategory === "humans"}
            onChange={handleCategoryChange}
          />
          Humans
        </label>
        <label>
          <input
            type="radio"
            name="category"
            value="shinigami"
            checked={selectedCategory === "shinigami"}
            onChange={handleCategoryChange}
          />
          Shinigamis
        </label>
        <label>
          <input
            type="radio"
            name="category"
            value="quincy"
            checked={selectedCategory === "quincy"}
            onChange={handleCategoryChange}
          />
          Quincy
        </label>
        <label>
          <input
            type="radio"
            name="category"
            value="arrancar"
            checked={selectedCategory === "arrancar"}
            onChange={handleCategoryChange}
          />
          Arrancar
        </label>
      </div>
      <p>Seleccionado: {selectedCategory}</p>
    </div>
  );
};