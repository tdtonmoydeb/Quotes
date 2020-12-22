var quotes = [
    {
        txt: 'Love is that condition in which the happiness of another person is essential',
        author: 'Robert A. Heinlein'
    },
    {
        txt: 'We are most alive when we\'re in love',
        author: 'John Updike'
    },
    {
        txt: 'True love stories never have endings.',
        author: 'Richard Bach'
    },{
        txt: 'Love is composed of a single soul inhabiting two bodies.',
        author: 'Aristotle'
    },{
        txt: 'The best thing to hold onto in life is each other.',
        author: 'Audrey Hepburn'
    },{
        txt: 'You know you\'re in love when you can\'t fall asleep because reality is finally better than your dreams',
        author: 'Dr. Seuss'
    },{
        txt: 'The best and most beautiful things in the world cannot be seen or even heard, but must be felt with the heart.',
        author: 'Helen Keller'
    },{
        txt: 'Love cures people—both the ones who give it and the ones who receive it.',
        author: 'Karl Menninger'
    },{
        txt: 'When you realize you want to spend the rest of your life with somebody, you want the rest of your life to start as soon as possible.',
        author: 'When Harry Met Sally'
    },{
        txt: 'True love is not a hide-and-seek game; in true love, both lovers seek each other.',
        author: 'Michael Bassey Johnson'
    },{
        txt: 'The most important thing in life is to learn how to give out love, and to let it come in.',
        author: 'Morrie Schwartz'
    },{
        txt: 'At the touch of love, everyone becomes a poet.',
        author: 'Plato'
    },{
        txt: 'Who, being loved, is poor?',
        author: 'Oscar Wilde'
    },{
        txt: 'Love is totally nonsensical. But we have to keep doing it or else we\'re lost and love is dead, and humanity should just pack it in. Because love is the best thing we do.',
        author: 'Ted (Josh Radnor)'
    },{
        txt: 'A loving heart is the truest wisdom.',
        author: 'Charles Dickens'
    },{
        txt: 'There is always some madness in love. But there is also always some reason in madness.',
        author: 'Friedrich Nietzsche'
    },{
        txt: 'Have enough courage to trust love one more time and always one more time.',
        author: 'Maya Angelou'
    },{
        txt: 'Sometimes two people have to fall apart to realize how much they need to fall back together.',
        author: ''
    },{
        txt: 'Love alone can rekindle life',
        author: 'Henri Frederic Amiel'
    },{
        txt: 'A successful marriage requires falling in love many times, always with the same person.',
        author: 'Mignon McLaughlin'
    },{
        txt: 'Love is a game that two can play and both can win.',
        author: 'Eva Gabor'
    },{
        txt: 'To know when to go away and when to come closer is the key to any lasting relationship.',
        author: 'Doménico Cieri Estrada'
    },{
        txt: 'Love doesn\'t make the world go around. Love is what makes the ride worthwhile.',
        author: 'Fraklin P. Jones'
    },{
        txt: 'To get the full value of joy, you must have someone to divide it with.',
        author: 'Mark Twain'
    },{
        txt: 'Souls tend to go back to who feels like home.',
        author: 'N.R. Heart'
    },{
        txt: 'Love does not consist in gazing at each other, but in looking outward together in the same direction.',
        author: 'Antoine de Saint-Exupéry'
    },{
        txt: 'I love her, and it is the beginning of everything',
        author: 'F. Scott Fitzgerald'
    },{
        txt: 'In my opinion, the best thing you can do is find someone who loves you for exactly what you are. Good mood, bad mood, ugly, pretty, handsome, what have you.',
        author: 'Mac (J.K. Simmons)'
    },{
        txt: 'I love you—I am at rest with you—I have come home',
        author: 'Dorothy L. Sayers'
    },{
        txt: 'Gravitation is not responsible for people falling in lov',
        author: 'Albert Einstein'
    },{
        txt: 'Okay, life\'s a fact, people do fall in love, people do belong to each other, because that\'s the only chance anybody\'s got for real happiness.',
        author: 'Paul (George Peppard)'
    },{
        txt: 'Age does not protect you from love. But love, to some extent, protects you from age.',
        author: 'Anais Nin'
    },{
        txt: 'The emotion that can break your heart is sometimes the very one that heals it.',
        author: 'Nicholas Sparks'
    },{
        txt: 'One word frees us of all the weight and pain of life. That word is love.',
        author: 'Sophocles'
    },{
        txt: 'Anyone can love a thing because. That\'s as easy as putting a penny in your pocket. But to love something despite. To know the flaws and love them too. That is rare and pure and perfect.',
        author: 'Patrick Rothfuss'
    }
    
]
    var quoteIndex = 0;

const quoteTxt = document.querySelector('.quoteTxt');
const quoteCredit = document.querySelector('.quoteCredit');
const loadBtn = document.querySelector('.loadBtn');
const copyBtn = document.querySelector('.copy');

loadBtn.addEventListener('click', () => {

    if( quoteIndex > quotes.length ){
        quoteIndex = 0;
    }else{
        quoteIndex++;
    }
    
    quoteTxt.innerText = quotes[quoteIndex].txt;
    quoteCredit.innerText = '-' + quotes[quoteIndex].author;
})

copyBtn.addEventListener('click', () => {
    var elem = document.createElement("textarea");
    document.body.appendChild(elem);
    elem.value = quoteTxt.innerText;
    elem.select();
    if(document.execCommand('copy')){
        document.body.removeChild(elem);
        copyBtn.innerHTML = '<small class="copied">copied</small>';
        
        setTimeout(function(){
            copyBtn.innerHTML = '<i class="far fa-copy"></i>';
        }, 500)
    }
})
