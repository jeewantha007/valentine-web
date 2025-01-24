let btnWidth = 100; 
let btnHeight = 50;  
let clickCount = 0;
let marginTop = 0; 
let nobtnWidth = 100;
let fontSize = 20;

let hii = [
    'are you sure ?', 
    'think again!!', 
    'you are killing me', 
    'don\'t break my heart', 
    'you\'re breaking my heart', 
    'this is getting serious', 
    'don\'t do this to me', 
    'please reconsider', 
    'don\'t go there', 
    'think about it',
    'I can\'t take this anymore',
    'I need you to stop',
    'this is getting too much',
    'is this real?',
    'why are you doing this?',
    'I\'m going to need some time',
    'you\'re making it hard',
    'I feel like I\'m dying here',
    'this feels like the end',
    'my heart can\'t take much more'
];

let songPlayed = false; // Flag to track if the song has been played
let audio; // Reference to the audio element

const btunSizeChanger = () => {


    

    
    if (clickCount < 20) {
        // Play the song only on the first click
        if (!songPlayed) {
            audio = new Audio('images/videoplayback.weba');
            audio.play();
            songPlayed = true;  // Set the flag to true after the song plays
        }

  


        document.getElementById('image').src = 'https://media.tenor.com/amRuuQRN6d0AAAAi/love.gif';
    



        // Button size and text changes
        btnWidth += 50;
        btnHeight += 50;

        document.getElementById('yesBtn').style.width = btnWidth + 'px';
        document.getElementById('yesBtn').style.height = btnHeight + 'px';

        fontSize += 20;
        document.getElementById('yesBtn').style.fontSize = fontSize + 'px';
        document.getElementById('yesBtn').style.fontWeight = 'bold';  // Set fontWeight to bold

        marginTop += 20;  
        document.getElementById('noBtn').style.marginTop = marginTop + 'px'; 

        nobtnWidth += 10;  
        document.getElementById('noBtn').style.width = nobtnWidth + 'px'; 

        let noBtnTextIndex = clickCount % hii.length;  
        document.getElementById('noBtn').textContent = hii[noBtnTextIndex];

        clickCount++;
    } else {
        alert('You broke my heart!!!');
    }
};

// Stop the song when the "Yes" button is clicked
document.getElementById('yesBtn').addEventListener('click', () => {
    if (audio) {
        audio.pause(); // Pause the audio
        audio.currentTime = 0; // Reset the audio to the beginning
        songPlayed = false;  // Reset the flag to allow the song to play again if needed
    }
});

const yesButton = () => {

  

    const audio = new Audio('images/No Promises - Shayne Ward [www.sangeethe.com].mp3');
  audio.play();

  document.getElementById('image').src = 'https://media.tenor.com/NGFif4dxa-EAAAAi/hug-hugs.gif';

  document.getElementById('quz').innerHTML = '';
  document.getElementById('yesBtn').style.display = 'none';
  document.getElementById('noBtn').style.display = 'none';


    const Confettiful = function(el) {
        this.el = el;
        this.containerEl = null;
        
        this.confettiFrequency = 3;
        this.confettiColors = ['#EF2964', '#00C09D', '#2D87B0', '#48485E','#EFFF1D'];
        this.confettiAnimations = ['slow', 'medium', 'fast'];
        
        this._setupElements();
        this._renderConfetti();
      };
      
      Confettiful.prototype._setupElements = function() {
        const containerEl = document.createElement('div');
        const elPosition = this.el.style.position;
        
        if (elPosition !== 'relative' || elPosition !== 'absolute') {
          this.el.style.position = 'relative';
        }
        
        containerEl.classList.add('confetti-container');
        
        this.el.appendChild(containerEl);
        
        this.containerEl = containerEl;
      };
      
      Confettiful.prototype._renderConfetti = function() {
        this.confettiInterval = setInterval(() => {
          const confettiEl = document.createElement('div');
          const confettiSize = (Math.floor(Math.random() * 3) + 7) + 'px';
          const confettiBackground = this.confettiColors[Math.floor(Math.random() * this.confettiColors.length)];
          const confettiLeft = (Math.floor(Math.random() * this.el.offsetWidth)) + 'px';
          const confettiAnimation = this.confettiAnimations[Math.floor(Math.random() * this.confettiAnimations.length)];
          
          confettiEl.classList.add('confetti', 'confetti--animation-' + confettiAnimation);
          confettiEl.style.left = confettiLeft;
          confettiEl.style.width = confettiSize;
          confettiEl.style.height = confettiSize;
          confettiEl.style.backgroundColor = confettiBackground;
          
          confettiEl.removeTimeout = setTimeout(function() {
            confettiEl.parentNode.removeChild(confettiEl);
          }, 3000);
          
          this.containerEl.appendChild(confettiEl);
        }, 25);
      };
      
      window.confettiful = new Confettiful(document.querySelector('.js-container'));








      
      
  // Display the main romantic message
document.getElementById('display-2').innerHTML = 
"I knew it! You and I are meant to be ❤️";

document.getElementById('display-2').style.color = 'red';
document.getElementById('display-2').style.fontSize = '2rem';

// Add a celebratory message
document.getElementById('display-1').innerHTML = 
"This is the start of something amazing! 🌟";

document.getElementById('display-1').style.color = 'gold';
document.getElementById('display-1').style.fontWeight = 'bold';

// Add a funny follow-up message using display-3
const funnyMessage = document.getElementById('display-3');
funnyMessage.innerHTML = "Now there's no escaping me! 😜";
funnyMessage.style.color = 'green';
funnyMessage.style.fontSize = '1.5rem';
funnyMessage.style.transition = 'opacity 1s, transform 1s';


// Start with an invisible message
funnyMessage.style.opacity = '0';
funnyMessage.style.transform = 'scale(0.8)';

// Show the message with animation
setTimeout(() => {
    funnyMessage.style.opacity = '1';
    funnyMessage.style.transform = 'scale(1)';
}, 500);

// Add a delayed funny follow-up with animation
setTimeout(() => {
    funnyMessage.innerHTML = "Just kidding... You're stuck with the best! 😉";
    funnyMessage.style.color = 'red'; // Change color for emphasis
    funnyMessage.style.transform = 'scale(1.2)';
}, 3000);

// Reset the scale back to normal
setTimeout(() => {
    funnyMessage.style.transform = 'scale(1)';
}, 4000);






    // Add the animation class to the Yes button for the animation effect
    const yesBtn = document.getElementById('yesBtn');
    yesBtn.classList.add('congratulation-animation');

    // Reset the button styles and text
    yesBtn.style.width = '100px';
    yesBtn.style.height = '50px';
    yesBtn.style.fontSize = '20px';  // Reset fontSize
    yesBtn.style.fontWeight = 'normal'; // Reset fontWeight
    yesBtn.style.padding = '10px';

    document.getElementById('noBtn').style.width = '100px';
    document.getElementById('noBtn').style.height = '50px';
    document.getElementById('noBtn').style.marginTop = '10px'; // Reset the margin
    document.getElementById('noBtn').innerText = 'No'; // Reset the text of "No" button

    // Reset the variables to their initial state
    btnWidth = 100;
    btnHeight = 50;
    clickCount = 0;
    marginTop = 0;
    nobtnWidth = 100;
    fontSize = 20;

    // Remove the animation class after it finishes so it can be re-applied if needed
    setTimeout(() => {
        yesBtn.classList.remove('congratulation-animation');
    }, 1000);  // 1 second to match the animation duration
};


