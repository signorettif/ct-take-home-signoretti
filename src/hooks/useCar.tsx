import useCarsList from './useCarsList';

const useCar = (id: string) => {
  const { carsList } = useCarsList();

  return carsList.find((car) => car.id === id);
};

export default useCar;
