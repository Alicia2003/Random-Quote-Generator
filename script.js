var quotes =["The harder you work for something, the greater you’ll feel when you achieve it", "Do something today that your future self will thank you for", "It’s going to be hard, but hard does not mean impossible","What defines us is how well we rise after falling","A winner is a dreamer who never gives up","Sometimes we are tested not to show our weaknesses but to discover our strengths","It’s not what you do once in a while it’s what you do day in and day out that makes the difference"];
console.log(quotes.length);


$("button").click(function() {
    
    var random= Math.floor(Math.random()* quotes.length);
    
  $('.name').text(quotes[random]);  
    
 });   



