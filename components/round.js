import joueurs from 'joueurs';
import SelectionQuestion from 'randompickerquestion';
import SelectionJoueur from 'randompickerjoueur';
import CalculResultat from 'pourcentage';
import MakeVote from 'vote';

export function Round (joueurs, SelectionQuestion, SelectionJoueur) {
    if joueurs.length > 3 {
        SelectionQuestion.start;
        MakeVote.start(SelectionJoueur);
        if MakeVote.break{CalculResultat.start};
    }
    
}