import { useState } from 'react';
import { Header } from '../components/Header/Header';
import { BleachDetail } from '../components/BleachDetail';
import { InputBleach } from '../components/InputBleach';
import { ErrorBoundary } from 'react-error-boundary'
import { ErrorFallback } from '../components/ErrorFallback'

export const HomePage = () => {
  const [searchBleach, setSearchBleach] = useState(""); // Para el término de búsqueda
  const [bleachSearched, setBleachSearched] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(""); // Nueva variable para la categoría seleccionada

  const handleSearchChange = (event) => {
    setSearchBleach(event.target.value);
  };

  const handleOnKey = (event) => {
    if (event.key === "Enter") {
      setBleachSearched(searchBleach);
      setSearchBleach("");
    }
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category); // Asignar la categoría seleccionada
  };

  return (
    <>
      <Header title="Proyecto5" subtitle="¡Vamos a buscar tu personaje favorito!" />
      <section className='contendor_principal'>
        <h3>¿Qué personaje deseas buscar?</h3>
      <InputBleach
        value={searchBleach}
        handleOnChange={handleSearchChange}
        handleKeyDown={handleOnKey}
        handleCategoryChange={handleCategoryChange} // Pasamos la función al hijo
      />
      <div>
        <p>Categoría seleccionada: {selectedCategory}</p> {/* Mostrar la categoría seleccionada */}
        {bleachSearched.length > 0 ? (
          <BleachDetail bleachSearched={bleachSearched} type={selectedCategory} />
        ) : null}
      </div>
      </section>
      <section>
        <ErrorBoundary
          FallbackComponent={ErrorFallback}
          onReset={() => window.location.reload()}
        >
        </ErrorBoundary>
      </section>
    </>
  );
};
