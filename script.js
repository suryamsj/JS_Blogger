let x = document.getElementById("birthday_song"); 
x.onended = function() {
    $('.girl').removeClass('dance');
    $('.boy').removeClass('dance');
  };

/* Comment the below line to mute the audio*/
x.play();

$blow = $('.girl .mouth .blow');
$grin = $('.girl .mouth .teeth');
$song = $('#birthday_song');

const flyDown = (resume) => {
  $('.boy').css({top: '-10px'});
  resume();
};

const blowCandle = (resume) => {
  $blow.css({ visibility: 'visible' });
  resume();
};

const miscEffects = (resume) => {
  $blow.css({
    visibility: 'hidden'
  });

  $grin.css({
    visibility: 'visible'
  });

  $('.lit').addClass('off');
  $('.girl').addClass('dance');
  $('.boy').addClass('dance');

  resume();
};

const delay = (time, callback) => {
  setTimeout(function() {
    callback();
  }, time);
};

const run = (generatorFunction) => {
  var generatorItr = generatorFunction(resume);
  function resume(callbackValue) {
    console.log("called");
    generatorItr.next(callbackValue);
  }
  generatorItr.next()
};


run(function* generatorFunction(resume) {
  yield delay(3000, flyDown.bind(this, resume));
  yield delay(5200, blowCandle.bind(this, resume));
  yield delay(100, miscEffects.bind(this, resume));
});

