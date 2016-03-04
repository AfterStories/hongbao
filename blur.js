
  var canvasWidth=600
  var canvasHeight=800

var canvas = document.getElementById("canvas")
var context = canvas.getContext("2d")

canvas.width=canvasWidth
canvas.height=canvasHeight

var image=new Image()
var radius=50
var clippingRegion={x:200,y:400,r:radius}
image.src="image.jpg"

image.onload= function(e){
	
	initCanvas()	
}

function initCanvas(){
	clippingRegion={
		x:Math.random()*(canvas.width-2*radius)+radius,
		y:Math.random()*(canvas.height-2*radius)+radius,r:radius}
	draw(image,clippingRegion)	
}

function setClippingRegion(clippingRegion){
	context.beginPath()
	context.arc(clippingRegion.x,clippingRegion.y,clippingRegion.r,0,Math.PI*2,false)	
	context.clip()
}

function draw(image,clippingRegion){
	context.clearRect(0,0,canvas.width,canvas.height)	
	
	context.save()
	setClippingRegion(clippingRegion)
	context.drawImage(image,0,0,600,800)
	context.restore()
}

function reset(){
	initCanvas()
	}

function show(){
	
	var theAnimation = setInterval(
		function(){
			clippingRegion.r += 20
			if(clippingRegion.r> 2*Math.max(canvas.width,canvas.height)){
				clearInterval(theAnimation)
				}
			draw(image,clippingRegion)
},
30)
}
	
	