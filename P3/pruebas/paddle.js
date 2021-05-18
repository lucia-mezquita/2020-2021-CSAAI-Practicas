function Paddle (height, width, color) {
  if (height === undefined) { height = 20; }
  if (width === undefined) { width = 20; }
  if (color === undefined) { color = "#FFFFFF"; }
  var color = color; 
  this.x = 0;
  this.y = 0;
  this.height = height;
  this.width = width;
  this.dx = 4;
  this.rotation = 0;
  this.color = color; 
  this.lineWidth = 1;
  
}

Paddle.prototype.draw = function (context) {
  context.save();
  context.translate(this.x, this.y);
  context.rotate(this.rotation);
  context.lineWidth = this.lineWidth;
  context.fillStyle = this.color;
  context.fillRect (0,0,this.width,this.height);
  context.restore();
};