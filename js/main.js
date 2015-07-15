var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );


var geometry = new THREE.BoxGeometry( 2, 1, 1 );
var material = new THREE.MeshBasicMaterial( { 
	color: 0x11ffcc,
	wireframe:true
} );
var cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 5;
renderer.render(scene, camera);
var requestId = 0;
var play = function () {
	// console.log(rx);
	requestId = requestAnimationFrame( play );

	cube.rotation.x += 0.05;
	cube.rotation.y += 0.05;

	renderer.render(scene, camera);
};
var stop = function () {
	// console.log(rx);
	cancelAnimationFrame(requestId);

	cube.rotation.x = 0;
	cube.rotation.y = 0;
	renderer.render(scene, camera);

};


