import { getdb } from "../app";

export function selectionQuestion(){getdb.query(' SELECT * FROM questions ORDER BY RANDOM() LIMIT 1;', (err,rows) => {
    if(err) throw err;
  
    console.log('Question sélectionnée');
    console.log(rows);
  });
}
