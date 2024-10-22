import { useFetchArrancar } from '../hooks/useFetchArrancar';
import { useFetchHuman } from '../hooks/useFetchHuman';
import { useFetchQuincy } from '../hooks/useFetchQuincy';
import { useFetchShinigami } from '../hooks/useFetchShinigami';
import { CardDetailBleach } from './CardDetailBleach';

export const BleachDetail = ({ bleachSearched, type }) => {
  // Llamamos a todos los hooks, pero solo usaremos uno dependiendo del tipo
  const fetchArrancar = useFetchArrancar(bleachSearched);
  const fetchHuman = useFetchHuman(bleachSearched);
  const fetchQuincy = useFetchQuincy(bleachSearched);
  const fetchShinigami = useFetchShinigami(bleachSearched);

  let fetchResult;

  // Selección del resultado según el tipo
  if (type === "arrancar") {
    fetchResult = fetchArrancar;
  } else if (type === "human") {
    fetchResult = fetchHuman;
  } else if (type === "quincy") {
    fetchResult = fetchQuincy;
  } else if (type === "shinigami") {
    fetchResult = fetchShinigami;
  } else {
    return <p>Tipo no reconocido</p>;
  }

  const { bleach, loading, error } = fetchResult;

  // Mostrar el estado de carga o error
  if (loading) {
    return <p>Cargando detalles del Personaje...</p>;
  }

  if (error) {
    return <p>Error al cargar el personaje: {error.message}</p>;
  }

  // Renderizar el componente de detalles
  return <CardDetailBleach bleach={bleach} />;
};
