import { useState } from "react";

export const InputBleach = ({ value, handleOnChange, handleKeyDown, handleCategoryChange }) => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const handleCategorySelection = (e) => {
    const category = e.target.value;
    setSelectedCategory(category); // Actualizamos el estado local
    setSearchTerm("");
    handleCategoryChange(category); // Llamamos la función para actualizar la categoría en el componente padre
  };

  const handleSearchInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedCategory && searchTerm) {
      console.log(`Buscando ${searchTerm} en la categoría ${selectedCategory}`);
    } else {
      console.log("Por favor, selecciona una categoría y un término de búsqueda.");
    }
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
            onChange={handleCategorySelection} // Usamos el nuevo handler
          />
          Humanos
        </label>
        <label>
          <input
            type="radio"
            name="category"
            value="shinigami"
            checked={selectedCategory === "shinigami"}
            onChange={handleCategorySelection}
          />
          Shinigamis
        </label>
        <label>
          <input
            type="radio"
            name="category"
            value="quincy"
            checked={selectedCategory === "quincy"}
            onChange={handleCategorySelection}
          />
          Quincy
        </label>
        <label>
          <input
            type="radio"
            name="category"
            value="arrancar"
            checked={selectedCategory === "arrancar"}
            onChange={handleCategorySelection}
          />
          Arrancar
        </label>
      </div>

      {/* Si hay una categoría seleccionada, mostrar el input de búsqueda */}
      {selectedCategory && (
        <form onSubmit={handleSubmit}>
          <div>
            <label>Buscar en: </label>
            <input
              type="text"
              id="searchTerm"
              value={searchTerm}
              onChange={handleSearchInputChange}
              placeholder={`Buscar en ${selectedCategory}`}
            />
          </div>
          <button type="submit">Buscar</button>
        </form>
      )}
    </div>
  );
};
