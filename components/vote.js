import joueurs from 'joueurs';
import selectionJoueur from 'randompickerjoueur';

export function makeVote(n, SelectionJoueur, joueurs) {
    let voters = joueurs;
    for (let i = 0; i < n; i++) {
      let voter = {};
      let choices = [...SelectionJoueur];
      for (let j = 1; j <= 5; j++) {
        let idx = Math.floor(Math.random() * choices.length);
        let choice = choices[idx];
  
        voter[j] = choice;
        choices.splice(idx, 1);
      }
      voters.push(voter);
    }



  class Node {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  }
  
  class Voter {
    constructor(voter, numChoices) {
      this.root = new Node(voter[1]);
  
      let current = this.root;
      for (let i = 2; i <= numChoices; i++) {
        current.next = new Node(voter[i]);
        current = current.next;
      }
      return this;
    }
  
    shift() {
      if (!this.root) return null;
      let returnVal = this.root;
      if (this.root.next) {
        this.root = this.root.next;
      } else {
        this.root = null;
      }
      return returnVal;
    }
  }
}
  
}
