

function setup() {

}

function draw() {



}


TWINKLE_TWINKLE = {
  notes: [
    {pitch: 60, startTime: 0.0, endTime: 0.5},
    {pitch: 60, startTime: 0.5, endTime: 1.0},
    {pitch: 67, startTime: 1.0, endTime: 1.5},
    {pitch: 67, startTime: 1.5, endTime: 2.0},
    {pitch: 69, startTime: 2.0, endTime: 2.5},
    {pitch: 69, startTime: 2.5, endTime: 3.0},
    {pitch: 67, startTime: 3.0, endTime: 4.0},
    {pitch: 65, startTime: 4.0, endTime: 4.5},
    {pitch: 65, startTime: 4.5, endTime: 5.0},
    {pitch: 64, startTime: 5.0, endTime: 5.5},
    {pitch: 64, startTime: 5.5, endTime: 6.0},
    {pitch: 62, startTime: 6.0, endTime: 6.5},
    {pitch: 62, startTime: 6.5, endTime: 7.0},
    {pitch: 60, startTime: 7.0, endTime: 8.0},
    {pitch: 64, startTime: 8.0, endTime: 9.0},
    {pitch: 60, startTime: 9.0, endTime: 10.5},
    {pitch: 62, startTime: 10.5, endTime: 11.0},
    {pitch: 69, startTime: 11.0, endTime: 12.0},
    {pitch: 61, startTime: 12.0, endTime: 13.0},
    {pitch: 65, startTime: 13.0, endTime: 14.5},
    {pitch: 66, startTime: 14.5, endTime: 15.0},
    {pitch:  121.6368406, startTime: 15.0, endTime: 20.0},
    
  ],
  totalTime: 20
};



player = new mm.Player();



function playTwinkle(){
player.stop();
  player.start(TWINKLE_TWINKLE);

}


