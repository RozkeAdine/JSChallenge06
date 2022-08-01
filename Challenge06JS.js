function calcAverage(score1, score2, score3){
   return ((score1 + score2 + score3) / 3)
}

dauphin1 = calcAverage(44, 23, 71);
koala1 = calcAverage(65, 54, 49);

dauphin2 = calcAverage(85, 54, 41);
koala2 = calcAverage(23, 34, 27);

console.log(dauphin2);

function checkWinner(team1, score1 , team2, score2){

   if (score1 >= (score2 * 2)){
       console.log('l\'équipe ' + team1 + ' gagne (' + score1 + ' vs ' + score2 + ').')
   } else if (score2 >= (score1 * 2)) {
       console.log('l\'équipe ' + team2 + ' gagne (' + score2 + ' vs ' + score1 + ').')
   } else {
       console.log('Personne ne gagne')

   }
}

checkWinner('Dauphin', dauphin2, 'Koala', koala2);
