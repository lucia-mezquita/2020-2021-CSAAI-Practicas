function BreakoutBall (radius, color, lineWidth, strokeClr) {
  if (radius === undefined) { radius = 40; }
  if (color === undefined) { color = "#0000FF"; }
  if(lineWidth === undefined) {lineWidth = 0;}
  if(strokeClr === undefined){ strokeClr = "#FF0000";}
  this.x = 0;
  this.y = 0;
  this.dx = 2;
  this.dy = 2;
  this.radius = radius;
  this.rotation = 0;
  this.scaleX = 1;
  this.scaleY = 1;
  this.color = color; 
  this.lineWidth = lineWidth;
  this.strokeStyle = strokeClr;
}

BreakoutBall.prototype.draw = function (context) {
  context.save();
  context.translate(this.x, this.y);
  context.rotate(this.rotation);
  context.scale(this.scaleX, this.scaleY);
  
  context.lineWidth = this.lineWidth;
  context.fillStyle = this.color;
  context.beginPath();
  //x, y, radius, start_angle, end_angle, anti-clockwise
  context.arc(0, 0, this.radius, 0, (Math.PI * 2), true);
  context.closePath();
  context.fill();
  if (this.lineWidth > 0) {
	context.strokeStyle = this.strokeStyle;
    context.stroke();
  }
  context.restore();
};