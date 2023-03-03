import { getdb } from "../app";

export function Joueurs (){getdb.query('SELECT * FROM joueurs');}

