{
   //............... global variable start.............//
   let ranged = document.querySelector('#ranged');
   let defence = document.querySelector('#defence');
   let hitpoints = document.querySelector('#hitpoints');
   let prayer = document.querySelector('#prayer');

     // ........... Result Showing Variable Start..........//
     let price_h = document.querySelector('.price_h');
    
     // ........... Result Showing Variable End..........//


   //............... global variable End.............//

   //formClick function............

   function formClick(){

    

      
      // ............  Formula 1 Provided  Variable Start...................
      let ranged_1Formula = ranged.value >= 50 && ranged.value <= 60; // 50-60 range
      let ranged_2Formula = ranged.value >= 61 && ranged.value <= 69; //61-69 range
      let ranged_3Formula = ranged.value >= 70 && ranged.value <= 74; // 70-74 range
      let ranged_4Formula = ranged.value >= 75 && ranged.value <= 84; //75-84 range
      let ranged_5Formula = ranged.value >= 85 && ranged.value <= 99; //85-99 range
      let defence_1Formula = defence.value >= 1 && defence.value <= 39; //1-39 defence
      let defence_2Formula = defence.value >= 40 && defence.value <=99; // 40-99 defence
      let hitpoints_1Formula = hitpoints.value >= 50 && hitpoints.value <= 99; //50-99 Hitpoints
      let prayer_1Formula = prayer.value >= 43 && prayer.value <= 99; // 43-99 prayer
      // ............  Formula 1 Provided  Variable End...................
       
      //................Formula Provided 2 Variable Start.........//
      let ranged_1Formula2 = ranged.value >= 50 && ranged.value <= 59; // 50-59 range
      let ranged_2Formula2 = ranged.value >= 60 && ranged.value <= 69; // 60-69 range
       // 70-74 range  see Formula 1 Provided..
       // 75-84 range see Formula 1 Provided..
       // 75-84 range see Formula 1 Provided..
       // 85-99 range see Formula 1 Provided
      let hitpoints_1Formula2 = hitpoints.value >= 50 && hitpoints.value <= 74; // 50-74hp
      let hitpoints_2Formula2 = hitpoints.value >= 75 && hitpoints.value <= 99; //75-99hp
      let prayer_1Formula2 = prayer.value >= 1 && prayer.value <= 31; //1-31 prayer
       
      //................Formula Provided 2 Variable End.........//

      /* formula 1 if statement.
       50-60 range
       1-39 defence 
       50-99 Hitpoints
       43-99 prayer
        = Price:50m
       */
      if (ranged_1Formula && defence_1Formula && hitpoints_1Formula && prayer_1Formula) {
         price_h.innerHTML = 'Price: 50m';
       

      } 

      /* formula 2 if statement 
      50-60 range 
      40-99 defence 
      50-99 hit points 
      43-99 prayer 
      = Price:45m
      */
   else  if (ranged_1Formula && defence_2Formula && hitpoints_1Formula && prayer_1Formula ) {
      price_h.innerHTML = 'Price: 45m';


      }

      /* formula 3 if statement
      
      61-69 range
      1-39 defence
      50-99 Hitpoints
      43-99 prayer
      Price: 40m
      */
   else if (ranged_2Formula && defence_1Formula && hitpoints_1Formula && prayer_1Formula ) {
      price_h.innerHTML = 'Price: 40m';

     }

     /* formula 4 if statement
      61-69 range
      40-99 defence
      50-99 hitpoints
      43-99 Prayer
      Price: 35m
     */
   else if (ranged_2Formula && defence_2Formula && hitpoints_1Formula && prayer_1Formula ) {
      price_h.innerHTML = 'Price: 35m';


    }

    /* formula 5 if statement
    70-74 range
    1-39 defence
    50-99 hitpoints
    43-99 prayer
    Price: 30m
    */
else if (ranged_3Formula && defence_1Formula && hitpoints_1Formula && prayer_1Formula) {
   price_h.innerHTML = 'Price: 30m';


   }

   /* formula 6 if statement 
    70-74 range
    40-99 defence
    50-99 hitpoints
    43-99 prayer
    Price: 25m
   */
else if (ranged_3Formula && defence_2Formula && hitpoints_1Formula && prayer_1Formula) {
   price_h.innerHTML = 'Price: 25m';


  }

  /* formula 7 if statement
  75-84 range
  1-39 defence
  50-99 hitpoints
  43-99 prayer
  Price:18m
  */
else if (ranged_4Formula && defence_1Formula && hitpoints_1Formula && prayer_1Formula) {
   price_h.innerHTML = 'Price: 18m';


 }

 /* formula 8 if statement
  75-84 range
  40-99 defence
  50-99 hitpoints
  43-99 prayer
  Price:15m
 */
else if (ranged_4Formula && defence_2Formula && hitpoints_1Formula && prayer_1Formula) {
   price_h.innerHTML = 'Price: 15m';

 }

 /* formula 9 if statement
  85-99 range
  1-39 defence
  50-99 hitpoints
  43-99 prayer
  Price:13m
 */ 
else  if (ranged_5Formula && defence_1Formula && hitpoints_1Formula && prayer_1Formula) {
   price_h.innerHTML = 'Price: 13m';

  }

  /* formula 10 if statement 
   85-99 range
   40-99 defence
   50-99 hitpoints
   43-99 prayer
   Price:12m
  */
else if (ranged_5Formula && defence_2Formula && hitpoints_1Formula && prayer_1Formula) {
   price_h.innerHTML = 'Price: 12m';

 }
 /*.......................Formula Provided 2.............*/
  // formula 1 ...provided 2

  // 50-59 range
  // 50-74hp
  // 1-31 prayer
  // Price:325m + 4k sweets

  else if (ranged_1Formula2 && hitpoints_1Formula2 && prayer_1Formula2) {
     price_h.innerHTML = 'Price: 325m + 4k sweets'
  }

  // formula 2 ...provided 2

  // 50-59 range
  // 75-99hp
  // 1-31 prayer
  // Price: 300m + 4k sweets

  else if (ranged_1Formula2 && hitpoints_2Formula2 && prayer_1Formula2 ) {
     price_h.innerHTML = 'Price: 300m + 4k sweets'
  }

  // formula 3 ...provided 2

  // 60-69 range
  // 50-74hp
  // 1-31 prayer
  // Price: 190m + 3k sweets
  else if (ranged_2Formula2 && hitpoints_1Formula2 && prayer_1Formula2 ) {
     price_h.innerHTML = 'Price: 190m + 3k sweets';
  }

  // formula 4 ...provided 2

  // 60-69 range
  // 75-99hp
  // 1-31 prayer
  // Price: 175m + 3k sweets

  else if (ranged_2Formula2 && hitpoints_2Formula2 && prayer_1Formula2) {
     price_h.innerHTML = 'Price: 175m + 3k sweets';
  }

  
// formula 5 ...provided 2

  // 70-74 range
  // 50-74hp
  // 1-31 prayer
  // Price: 160m + 3k sweets

  else if (ranged_3Formula && hitpoints_1Formula2 && prayer_1Formula2) {
     price_h.innerHTML = 'Price: 160m + 3k sweets';
  }

  // formula 6 ...provided 2

  // 70-74 range
  // 75-99hp
  // 1-31 prayer
  // Price: 145m + 3k sweets

  else if (ranged_3Formula && hitpoints_2Formula2 && prayer_1Formula2 ) {
     price_h.innerHTML = 'Price: 145m + 3k sweets';
  }

  // formula 7 ...provided 2

  // 75-84 range
  // 50-74hp
  // 1-31 prayer
  // Price: 90m + 3k sweets

  else if (ranged_4Formula && hitpoints_1Formula2 && prayer_1Formula2 ) {
     price_h.innerHTML = 'Price: 90m + 3k sweets';
  }

// formula 8 ...provided 2

 // 75-84 range
 // 75-99hp
 // 1-31 prayer
 // Price: 85m + 3k sweets

 else if (ranged_4Formula && hitpoints_2Formula2 && prayer_1Formula2 ) {
    price_h.innerHTML = 'Price: 85m + 3k sweets';
 }

 // formula 9 ...provided 2

 // 85-99 range
 // 50-74hp
 // 1-31prayer
 // Price: 80m + 3k sweets

 else if (ranged_5Formula && hitpoints_1Formula2 && prayer_1Formula2 ) {
    price_h.innerHTML = 'Price: 80m + 3k sweets';
 }


// formula 10 ...provided 2

 // 85-99 range
 // 75-99hp
 // 1-31 prayer
 // Price: 75m + 3k sweet

 else if (ranged_5Formula && hitpoints_2Formula2 && prayer_1Formula2 ) {
    price_h.innerHTML = 'Price: 75m + 3k sweet';
 }
 /*.......................Formula Provided 2 End.............*/


 // formula not found statement
 else {
   price_h.innerHTML = 'Price Not Matched';

     // result Showing alert start..
   //   price_showing_alert.classList.add('price_show_hide');
   //   price_result_show.innerHTML = 'Sorry! Not Matched.';
      // if (price_showing_alert.classList.contains('price_show_hide')) {
         // myForm.setAttribute('style', 'opacity: 0.3; pointer-events: none;');
      // }

     // result Showing alert end..
 }

      return false;
   };

}



/* formula provided 1.............

formula 1.....

50-60 range
1-39 defence
50-99 Hitpoints
43-99 prayer
Price:50m


formula 2......

50-60 range
40-99 defence
50-99 hit points
43-99 prayer
Price:45m


formula 3......

61-69 range
1-39 defence
50-99 Hitpoints
43-99 prayer
Price: 40m



formula 4....

61-69 range
40-99 defence
50-99 hitpoints
43-99 Prayer
Price: 35m


formula 5....

70-74 range
1-39 defence
50-99 hitpoints
43-99 prayer
Price: 30m


formula 6...

70-74 range
40-99 defence
50-99 hitpoints
43-99 prayer
Price: 25m


formula 7...

75-84 range
1-39 defence
50-99 hitpoints
43-99 prayer
Price:18m


formula 8...

75-84 range
40-99 defence
50-99 hitpoints
43-99 prayer
Price:15m


formula 9...

85-99 range
1-39 defence
50-99 hitpoints
43-99 prayer
Price:13m


formula 10...

85-99 range
40-99 defence
50-99 hitpoints
43-99 prayer
Price:12m
*/


/* Formula provided 2

// formula 1 ...provided 2

50-59 range
50-74hp
1-31 prayer
Price:325m + 4k sweets


// formula 2 ...provided 2

50-59 range
75-99hp
1-31 prayer
Price: 300m + 4k sweets


// formula 3 ...provided 2

60-69 range
50-74hp
1-31 prayer
Price: 190m + 3k sweets


// formula 4 ...provided 2

60-69 range
75-99hp
1-31 prayer
Price: 175m + 3k sweets


// formula 5 ...provided 2

70-74 range
50-74hp
1-31 prayer
Price: 160m + 3k sweets


// formula 6 ...provided 2

70-74 range
75-99hp
1-31 prayer
Price: 145m + 3k sweets


// formula 7 ...provided 2

75-84 range
50-74hp
1-31 prayer
Price: 90m + 3k sweets


// formula 8 ...provided 2

75-84 range
75-99hp
1-31 prayer
Price: 85m + 3k sweets


// formula 9 ...provided 2

85-99 range
50-74hp
1-31prayer
Price: 80m + 3k sweets


// formula 10 ...provided 2

85-99 range
75-99hp
1-31 prayer
Price: 75m + 3k sweet


*/