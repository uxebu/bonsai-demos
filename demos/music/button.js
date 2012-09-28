(function() {

  function Button() {
    Group.call(this);
    this.resources_url = '';
    this.buttonUp = new Bitmap(this.resources_url + 'Button_normal.png').addTo(this);
    this.buttonDown = new Bitmap(this.resources_url + 'Button_pressed.png').attr({y: -2}).addTo(this);
    this.pauseGlyph = new Bitmap(this.resources_url + 'Pause_glyph.png').attr({x: 18, y: 15}).addTo(this);
    this.playGlyph = new Bitmap(this.resources_url + 'Play_glyph.png').attr({x: 22, y: 13}).addTo(this);
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

  Button.prototype.setResourcesUrl = function(url) {
      this.resources_url = url;
  };

  exports.Button = Button;

}());
