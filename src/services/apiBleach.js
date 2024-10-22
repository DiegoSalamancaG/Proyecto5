import axios from "axios";

const BASE_URL = "https://bleach-api-8v2r.onrender.com/";

export const fetchBleach = async () => {
  try {
    const { data } = axios.get(`${BASE_URL}`);
    if (!data) throw new Error("Error al obtener los datos!");
    return data;
  } catch (error) {
    throw new Error("Error al obtener los datos", error);
  }
};

export const fetchBleachHumans = async (search) => {
  try {
    const { data } = await axios.get(`${BASE_URL}characters/humans/${search}`);
    if (!data) throw new Error(`Error al encontrar ${search}`);
    return data;
  } catch (error) {
    throw new Error(`Error al encontrar ${search}`, error);
  }
};

export const fetchBleachShinigami = async (search) => {
  try {
    const { data } = await axios.get(
      `${BASE_URL}/characters/shinigami/${search}`
    );
    if (!data) throw new Error(`Error al encontrar ${search}`);
    return data;
  } catch (error) {
    throw new Error(`Error al encontrar ${search}`, error);
  }
};

export const fetchBleachQuincy = async (search) => {
  try {
    const { data } = await axios.get(`${BASE_URL}characters/quincy/${search}`);
    if (!data) throw new Error(`Error al encontrar ${search}`);
    return data;
  } catch (error) {
    throw new Error(`Error al encontrar ${search}`, error);
  }
};

export const fetchBleachArrancar = async (search) => {
  try {
    const { data } = await axios.get(
      `${BASE_URL}characters/arrancar/${search}`
    );
    if (!data) throw new Error(`Error al encontrar ${search}`);
    return data;
  } catch (error) {
    throw new Error(`Error al encontrar ${search}`, error);
  }
};
