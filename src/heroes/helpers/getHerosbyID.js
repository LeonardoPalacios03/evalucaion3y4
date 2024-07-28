import { heroes } from "../data/heroes"

export const getHerosbyID = (id) => {
    return heroes.find((hero) => hero.id === id);
}