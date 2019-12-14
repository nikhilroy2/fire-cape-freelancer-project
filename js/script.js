{
   //............... global variable start.............//
   let ranged = document.querySelector('#ranged');
   let defence = document.querySelector('#defence');
   let hitpoints = document.querySelector('#hitpoints');
   let prayer = document.querySelector('#prayer');

     // ........... Result Showing Variable Start..........//

     let price_showing_alert = document.querySelector('.price_showing_alert');
     let price_result_show = document.querySelector('.price_result_show');
     let myForm = document.querySelector('#myForm');
    
     // ........... Result Showing Variable End..........//


   //............... global variable End.............//

   //formClick function............

   function formClick(){

    

      
      // ............  Formula   Variable Start...................
      let ranged_1Formula = ranged.value >= 50 && ranged.value <= 60; // 50-60 range
      let ranged_2Formula = ranged.value >= 61 && ranged.value <= 69; //61-69 range
      let ranged_3Formula = ranged.value >= 70 && ranged.value <= 74; // 70-74 range
      let ranged_4Formula = ranged.value >= 75 && ranged.value <= 84; //75-84 range
      let ranged_5Formula = ranged.value >= 85 && ranged.value <= 99; //85-99 range
      let defence_1Formula = defence.value >= 1 && defence.value <= 39; //1-39 defence
      let defence_2Formula = defence.value >= 40 && defence.value <=99; // 40-99 defence
      let hitpoints_1Formula = hitpoints.value >= 50 && hitpoints.value <= 99; //50-99 Hitpoints
      let prayer_1Formula = prayer.value >= 43 && prayer.value <= 99; // 43-99 prayer
      // ............  Formula   Variable End...................
     
      
      /* formula 1 if statement.
       50-60 range
       1-39 defence 
       50-99 Hitpoints
       43-99 prayer
        = Price:50m
       */
      if (ranged_1Formula && defence_1Formula && hitpoints_1Formula && prayer_1Formula) {
         // alert('Formula 1 Show');
         // result Showing alert start..
         price_showing_alert.classList.add('price_show_hide');
         price_result_show.innerHTML = 'Price: 50m';
          if (price_showing_alert.classList.contains('price_show_hide')) {
             myForm.setAttribute('style', 'opacity: 0.3; pointer-events: none;');
          }

         // result Showing alert end..
       

      } 

      /* formula 2 if statement 
      50-60 range 
      40-99 defence 
      50-99 hit points 
      43-99 prayer 
      = Price:45m
      */
   else  if (ranged_1Formula && defence_2Formula && hitpoints_1Formula && prayer_1Formula ) {
        // alert('Formula 2 Show');

        // result Showing alert start..
        price_showing_alert.classList.add('price_show_hide');
        price_result_show.innerHTML = 'Price: 45m';
         if (price_showing_alert.classList.contains('price_show_hide')) {
            myForm.setAttribute('style', 'opacity: 0.3; pointer-events: none;');
         }

        // result Showing alert end..
      }

      /* formula 3 if statement
      
      61-69 range
      1-39 defence
      50-99 Hitpoints
      43-99 prayer
      Price: 40m
      */
   else if (ranged_2Formula && defence_1Formula && hitpoints_1Formula && prayer_1Formula ) {
        // alert('Formula 3 Show');

         // result Showing alert start..
         price_showing_alert.classList.add('price_show_hide');
         price_result_show.innerHTML = 'Price: 40m';
          if (price_showing_alert.classList.contains('price_show_hide')) {
             myForm.setAttribute('style', 'opacity: 0.3; pointer-events: none;');
          }
 
         // result Showing alert end..
     }

     /* formula 4 if statement
      61-69 range
      40-99 defence
      50-99 hitpoints
      43-99 Prayer
      Price: 35m
     */
   else if (ranged_2Formula && defence_2Formula && hitpoints_1Formula && prayer_1Formula ) {
     //  alert('Formula 4 Show');
       // result Showing alert start..
       price_showing_alert.classList.add('price_show_hide');
       price_result_show.innerHTML = 'Price: 35m';
        if (price_showing_alert.classList.contains('price_show_hide')) {
           myForm.setAttribute('style', 'opacity: 0.3; pointer-events: none;');
        }

       // result Showing alert end..


    }

    /* formula 5 if statement
    70-74 range
    1-39 defence
    50-99 hitpoints
    43-99 prayer
    Price: 30m
    */
else if (ranged_3Formula && defence_1Formula && hitpoints_1Formula && prayer_1Formula) {
     // alert('Formula 5 Show');

       // result Showing alert start..
       price_showing_alert.classList.add('price_show_hide');
       price_result_show.innerHTML = 'Price: 30m';
        if (price_showing_alert.classList.contains('price_show_hide')) {
           myForm.setAttribute('style', 'opacity: 0.3; pointer-events: none;');
        }

       // result Showing alert end..
   }

   /* formula 6 if statement 
    70-74 range
    40-99 defence
    50-99 hitpoints
    43-99 prayer
    Price: 25m
   */
else if (ranged_3Formula && defence_2Formula && hitpoints_1Formula && prayer_1Formula) {
    // alert('Formula 6 Show');

      // result Showing alert start..
      price_showing_alert.classList.add('price_show_hide');
      price_result_show.innerHTML = 'Price: 25m';
       if (price_showing_alert.classList.contains('price_show_hide')) {
          myForm.setAttribute('style', 'opacity: 0.3; pointer-events: none;');
       }

      // result Showing alert end..
  }

  /* formula 7 if statement
  75-84 range
  1-39 defence
  50-99 hitpoints
  43-99 prayer
  Price:18m
  */
else if (ranged_4Formula && defence_1Formula && hitpoints_1Formula && prayer_1Formula) {
   // alert('Formula 7 Show');

     // result Showing alert start..
     price_showing_alert.classList.add('price_show_hide');
     price_result_show.innerHTML = 'Price: 18m';
      if (price_showing_alert.classList.contains('price_show_hide')) {
         myForm.setAttribute('style', 'opacity: 0.3; pointer-events: none;');
      }

     // result Showing alert end..
 }

 /* formula 8 if statement
  75-84 range
  40-99 defence
  50-99 hitpoints
  43-99 prayer
  Price:15m
 */
else if (ranged_4Formula && defence_2Formula && hitpoints_1Formula && prayer_1Formula) {
   // alert('Formula 8 Show');
     // result Showing alert start..
     price_showing_alert.classList.add('price_show_hide');
     price_result_show.innerHTML = 'Price: 15m';
      if (price_showing_alert.classList.contains('price_show_hide')) {
         myForm.setAttribute('style', 'opacity: 0.3; pointer-events: none;');
      }

     // result Showing alert end..
 }

 /* formula 9 if statement
  85-99 range
  1-39 defence
  50-99 hitpoints
  43-99 prayer
  Price:13m
 */ 
else  if (ranged_5Formula && defence_1Formula && hitpoints_1Formula && prayer_1Formula) {
   //  alert('Formula 9 Show');
     // result Showing alert start..
     price_showing_alert.classList.add('price_show_hide');
     price_result_show.innerHTML = 'Price: 13m';
      if (price_showing_alert.classList.contains('price_show_hide')) {
         myForm.setAttribute('style', 'opacity: 0.3; pointer-events: none;');
      }

     // result Showing alert end..
  }

  /* formula 10 if statement 
   85-99 range
   40-99 defence
   50-99 hitpoints
   43-99 prayer
   Price:12m
  */
else if (ranged_5Formula && defence_2Formula && hitpoints_1Formula && prayer_1Formula) {
   // alert('Formula 10 Show');
     // result Showing alert start..
     price_showing_alert.classList.add('price_show_hide');
     price_result_show.innerHTML = 'Price: 12m';
      if (price_showing_alert.classList.contains('price_show_hide')) {
         myForm.setAttribute('style', 'opacity: 0.3; pointer-events: none;');
      }

     // result Showing alert end..
 }

 // formula not found statement
 else {
   // alert('Formula doesn\'t match ')
     // result Showing alert start..
     price_showing_alert.classList.add('price_show_hide');
     price_result_show.innerHTML = 'Sorry! Not Matched.';
      if (price_showing_alert.classList.contains('price_show_hide')) {
         myForm.setAttribute('style', 'opacity: 0.3; pointer-events: none;');
      }

     // result Showing alert end..
 }

      return false;
   };

   // formClick function ended........



    //  remove result alert ...
    function removeAlert(){
      price_showing_alert.classList.remove('price_show_hide');
      myForm.setAttribute('style', 'opacity: 1; pointer-events: visible;');
    }



}












/* formula.............

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