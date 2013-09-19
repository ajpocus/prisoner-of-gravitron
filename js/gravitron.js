$(function () {
  // set the scene size
  var WIDTH = 400,
    HEIGHT = 300;

  // set some camera attributes
  var VIEW_ANGLE = 45,
    ASPECT = WIDTH / HEIGHT,
    NEAR = 0.1,
    FAR = 10000;

  // get the DOM element to attach to
  // - assume we've got jQuery to hand
  var $container = $('#container');

  // create a WebGL renderer, camera
  // and a scene
  var renderer = new THREE.WebGLRenderer();
  var camera =
    new THREE.PerspectiveCamera(
      VIEW_ANGLE,
      ASPECT,
      NEAR,
      FAR);

  var scene = new THREE.Scene();
  scene.add(camera);
  camera.position.z = 300;
  renderer.setSize(WIDTH, HEIGHT);
  $container.append(renderer.domElement);
  
  // create an ambient light
  var light =
    new THREE.AmbientLight(0x404040);

  // set its position
  light.position.x = 0;
  light.position.y = 50;
  light.position.z = 130;

  // add to the scene
  scene.add(light);
  
  // create the ball
  var radius = 50,
    widthSegs = 16,
    heightSegs = 16;
    
  var sphereMaterial = new THREE.MeshBasicMaterial({ color: 0xCC0000 });
  var sphereGeometry = new THREE.SphereGeometry(radius, widthSegs, heightSegs);
  var sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
  sphere.position = { x: 0, y: 0, z: 0 };
  scene.add(sphere);
  
  // draw!
  renderer.render(scene, camera);
});