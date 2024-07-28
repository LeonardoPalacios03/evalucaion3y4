import { getHerosbyTipo } from "../helpers/getHerosbyTipo";
import { HeroeCard } from "./HeroeCard";

export const HeroeList = ({ tipo }) => {
  const heroes = getHerosbyTipo(tipo);

  return (
    <>
      <h1>Heroe List</h1>

      <div className="container mt-4">
        <div className="row">
          {heroes.map((aux) => (
            <HeroeCard key={aux.id} {...aux} />
          ))}
        </div>
      </div>
    </>
  );
};
