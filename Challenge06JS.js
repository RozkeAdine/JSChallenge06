//tache numero 1
// const DauphinsScore1 = (44 + 23 + 71) / 3;
// console.log('moyenne D1 :'+ DauphinsScore1);
// const KoalaScore1 = (65 + 54 + 49) / 3;
// console.log('moyenne K1 :' + KoalaScore1);
//
// const DauphinsScore2 = (85 + 54 + 41) / 3;
// console.log('moyenne D2 :' + DauphinsScore2);
// const KoalaScore2 = (23 + 34 + 27) / 3;
// console.log('moyenne K2 :' + KoalaScore2);

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

checkWinner('Dauphin', dauphin2, 'Koala', koala2)

//tache numero 2
// console.log("comparaison et affichage")
// console.log("premier jeu")
// if (meansDauphinsScore1 < meansKoalasScore1) {
//     console.log("Pour ce premier jeu, les gagnants sont les Koalas !")
// }else if (meansDauphinsScore1 > meansKoalasScore1){
//     console.log("Pour ce premier jeu, les gagnants sont les Dauphins !")
// }else if (meansDauphinsScore1 === meansKoalasScore1){
//     console.log("Pour ce premier jeu, les équipes sont à égalité !")
// };
