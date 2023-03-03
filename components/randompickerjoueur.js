import { getdb } from "../app";

export function selectionJoueur(){getdb.query(' SELECT * FROM joueurs ORDER BY RANDOM() LIMIT 2;', (err,rows) => {
    if(err) throw err;
  
    console.log('Joueurs sélectionnés');
    console.log(rows);
  });
}
