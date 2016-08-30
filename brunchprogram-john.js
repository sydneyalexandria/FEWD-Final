


'use strict';

(function($) {
  // STEP 1
  // Setup global array of data (would be brunch stuff for you)
  // Note how everything is machine readable here
  // The goal is to make the program such that you can handle machine-readable objects first
  // At the end of the program you convert back to english
    var brunchSpots = [
      {
        'brunchSpot': 'Johnny Pistolas',
        'brunchHood': 'Adams Morgan',
        'bunchDrinks': 'Bottomless Mimosas Only',
        'brunchFood': 'Pre-Fixe',
        'brunchPrice': 'price-2'
      },
      {
        'brunchSpot': 'restaurant10002',
        'brunchHood': 'locChntwn',
        'bunchDrinks': 'drinkAll',
        'brunchFood': 'Pre-Fixe',
        'brunchPrice': 'price2'
      },
      {
        'brunchSpot': 'restaurant10003',
        'brunchHood': 'locCaphill',
        'bunchDrinks': 'drinkNull',
        'brunchFood': 'Pre-Fixe',
        'brunchPrice': 'price4'
      }
    ];

  // // STEP 2 - create array comparing form ID values to real world names
  // // This allows you to receive form option and quickly translate them into human-readable terms
  // // Why would we do this? Remember you are basically building a DB so think like a computer
  // // Names of things change over time but we want our programmatic ID values to remain constant
  // // You don't need to do this but it's a best practice thing to abstract away from plain language in a program
  // // Why did I start restaurant at 10000? Should be a large enough number range for 100K restaurants (thinking ahead so you don't have to refactor later)

    // var brunchOptions = [
    //   {
    //     'restaurant10001': 'Restaurant 1\'s Name',
    //     'restaurant10002': 'Restaurant 2\'s Name',
    //     'restaurant10003': 'Restaurant 3\'s Name',
    //     'locLogan': 'Logan Circle',
    //     'locCaphill': 'Capitol Hill',
    //     'locChntwn': 'Chinatown',
    //     'drinkInc': 'Included',
    //     'drinkAll': 'All You Can Drink',
    //     'drinkGlass': 'By the Glass',
    //     'price1': '$',
    //     'price2': '$$',
    //     'price3': '$$$',
    //     'price4': '$$$$'
    //   }
    // ];

  // STEP 3
  // Figure out total number of select lists in your form
  // Create two variables to do this
  // Why would we do this?
  // We want to be able to create a program that can accept more / less select lists later
  // We're using jQuery .each() which is very similar to a JS for loop
  var brunchCategoriesNumber;
  var brunchCategoriesIDs = [];

  // Use jQuery each to figure out how many selects you have
  $('#brunch-selection').each(function() {
    brunchCategoriesNumber = $(this).find('select').length;

    // Get the ID of each select list you created in your HTML
    $(this).find('select').each(function(index) {
      brunchCategoriesIDs[index] = $(this).attr('id');
      brunchCategoriesIDs[index] = "#" + brunchCategoriesIDs[index];
    });
  });

  // Step 4
  // Capture user submission
  // We want to capture whatever the user selected and then loop through it
  var brunchSelection = [];

  $('#brunch-selection').submit(function(event) {
    // Loop through each brunchCategory
    for (var i=0; i < brunchCategoriesNumber; i++) {
      brunchSelection = $(brunchCategoriesIDs[i]).val();
      // Prevent real HTML submission
      console.log(brunchSelection);
      event.preventDefault();
    }
  });
  // Step 5
  // Compare brunchSelection to results
  var brunchResults = [];

  for (var j=0; j < brunchSpots.length; j++) {
    if(brunchSelection[0] == brunchSpots[j].brunchHood) {
      brunchResults = brunchSpots[j].brunchSpot;

      $('#result').text(brunchResults);
    }
  }

//  if (brunchResults[0]) {
    for (var k=0; k < brunchResults.length; k++) {
      console.log("it worked");
      $('#result').text(brunchResults[k].brunchSpot + " ");
    }
  //}

  //.text('Sorry');

  })
  (jQuery);
//$('#result').text(brunchSpots[j].brunchSpot);
  // && brunchSelection[1] == brunchSpots[j].brunchDrinks && brunchSelection[2] == brunchSpots[j].brunchFood && brunchSelection[3] == brunchSpots[j].brunchPrice
