(function() {

  function Button(resourcesUrl) {
    Group.call(this);
    resourcesUrl = resourcesUrl || '';
    this.buttonUp = new Bitmap(resourcesUrl + 'Button_normal.png').addTo(this);
    this.buttonDown = new Bitmap(resourcesUrl + 'Button_pressed.png').attr({y: -2}).addTo(this);
    this.pauseGlyph = new Bitmap(resourcesUrl + 'Pause_glyph.png').attr({x: 18, y: 15}).addTo(this);
    this.playGlyph = new Bitmap(resourcesUrl + 'Play_glyph.png').attr({x: 22, y: 13}).addTo(this);
    this.isPlaying = false;
    this.changeState(false);
    this.on('pointerdown', this.handleMouseDown);
    this.on('pointerup', this.handleMouseUp);
  }

  Button.prototype = Object.create(Group.prototype);

  Button.prototype.changeState = function(isDownState) {
    this.buttonDown.attr('visible', isDownState);
    this.buttonUp.attr('visible', !isDownState);
    this.playGlyph.attr('visible', !this.isPlaying);
    this.pauseGlyph.attr('visible', this.isPlaying);
  };

  Button.prototype.handleMouseDown = function(e) {
    this.changeState(true);
  };

  Button.prototype.handleMouseUp = function(e) {
    this.isPlaying = !this.isPlaying;
    this.changeState(false);
    this.emit(this.isPlaying ? 'play' : 'pause');
  };

  exports.Button = Button;

}());
