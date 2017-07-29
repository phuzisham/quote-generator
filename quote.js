var quotes = [
  {quote: 'Tomorrow never comes.', author: 'Allan Watts'},
  {quote: 'Nobody realizes that some people expend tremendous energy merely to be normal.', author: 'Albert Camus'},
  {quote: 'It\'s not what you look at that matters; it\'s what you see.', author: 'Henry David Thoreau'},
  {quote: 'The knack of flying is learning how to throw yourself at the ground and miss.', author: 'Douglas Adams'},
  {quote: 'If we knew each other’s secrets, what comfort we should find.', author: 'John Churton Collins'},
  {quote: 'Resentment is like taking poison and waiting for the other person to die.', author: 'Malachy McCourt'},
  {quote: 'If you do not ask the right questions, you do not get the right answers.', author: 'Edward Hodnett'},
  {quote: 'The thing that lies at the foundation of positive change is service to a fellow human being.', author: 'Lee Iacocca'},
  {quote: 'The truth will set you free, but first it will make you miserable.', author: 'James A Garfield'},
  {quote: 'Our biggest problems arise from the avoidance of smaller ones.', author: 'Jeremy Caulfield'},
  {quote: 'The master understands that the universe is forever out of control.', author: 'Lao Tzu'},
  {quote: 'Guilt: The gift that keeps on giving.', author: 'Erma Bombeck'},
  {quote: 'Let not a man guard his dignity, but let his dignity guard him.', author: 'Ralph Waldo Emerson'},
  {quote: 'Some of us think holding on makes us strong, but sometimes it is letting go.', author: 'Herman Hesse'},
  {quote: 'Discontent is the first necessity of progress.', author: 'Thomas Edison'},
  {quote: 'The value of identity is that so often with it comes purpose.', author: 'Richard R. Grant'},
  {quote: 'Love is a willingness to sacrifice.', author: 'Michael Novak'},
  {quote: 'Doubt must be no more than vigilance, otherwise it can become dangerous.', author: 'George C. Lichtenberg'},
  {quote: 'Isolation is a self-defeating dream.', author: 'Carlos Salinas de Gortari'},
  {quote: 'Make no judgments where you have no compassion.', author: 'Anne McCaffrey'},
  {quote: 'What if spiders could talk with cats?', author: 'Charlie'},
  {quote: 'Anger as soon as fed is dead — tis starving makes it fat.', author: 'Emily Dickinson'},
  {quote: 'In general, pride is at the bottom of all great mistakes.', author: 'Steven H. Coogler'},
  {quote: 'Conscience is the dog that can’t bite, but never stops barking.', author: 'Proverb'},
  {quote: 'Seek respect mainly from thyself, for it comes first from within.', author: 'Steven H. Coogler'},
  {quote: 'Happiness can exist only in acceptance.', author: 'George Orwell'},
  {quote: 'Fear has its use but cowardice has none.', author: 'Mahatma Gandhi'},
  {quote: 'Sanity and happiness are an impossible combination.', author: 'Mark Twain'}
]; //⌃⌃⌃⌃⌃⌃quotes⌃⌃⌃⌃⌃⌃

// Populates data for first quote
$(document).ready(function() {
  nextQuote();
});

// sets i onclick button && holds tweet quote function
function nextQuote() {
  var i = Math.floor(Math.random() * quotes.length);
  document.getElementById("quote").innerHTML = '"' + quotes[i].quote + '"';
  document.getElementById("author").innerHTML = '-' + quotes[i].author;

  // 'tweet quote' vars && .click function
  // needs to stay in nextQuote to access current i
  var postQuote =  document.getElementById("quote").innerHTML;
  var linkElement = document.getElementById("tweet");
  var postAuthor = quotes[i].author;

  $(linkElement).click(function(event){
    event.preventDefault();
    window.open("http://twitter.com/intent/tweet?url=" + "&text=" + postQuote + ' -' + postAuthor, "twitterwindow", "height=450, width=550, toolbar=0, location=0, menubar=0, directories=0, scrollbars=0");
}); // .click
} // function nextQuote
