
		import * as THREE from './js/three.module.js';

		import { OrbitControls } from './js/OrbitControls.js';
		import { GLTFLoader } from './js/GLTFLoader.js';
		import { RGBELoader } from './js/RGBELoader.js';

		let camera, scene, renderer, ball, water;

		init();
		render();
		animate()

		function init() {

			camera = new THREE.PerspectiveCamera( 10, window.innerWidth / window.innerHeight, 0.25, 20 );
			camera.position.set( -1.8, 0.6, 10 );
			scene = new THREE.Scene();

			new RGBELoader()
				.load( './assets/hdri.hdr', function ( texture ) {
					texture.mapping = THREE.EquirectangularReflectionMapping;
					scene.background = null;
					scene.environment = texture;
					render();

					var mesh = null

					const loader = new GLTFLoader();
					loader.load( './assets/Taboo_Ball_16b.glb', function ( gltf ) {
						ball = gltf.scene
						scene.add( ball )
						gltf.scene.scale.set(0.0015, 0.0015, 0.0015)
						render()
					});
					loader.load( './assets/Taboo_Water_20b.glb', function ( gltf ) {
						water = gltf.scene

						scene.add( water )

						gltf.scene.scale.set(0.0015, 0.0015, 0.0015)
						render()
					});
				});

			renderer = new THREE.WebGLRenderer( { antialias: true, alpha: true } );
			renderer.setPixelRatio( window.devicePixelRatio );
			renderer.setSize( window.innerWidth, window.innerHeight );
			renderer.toneMapping = THREE.ACESFilmicToneMapping;
			renderer.toneMappingExposure = 1;
			renderer.outputEncoding = THREE.sRGBEncoding;

			document.querySelector("#three").appendChild( renderer.domElement );

			const controls = new OrbitControls( camera, renderer.domElement );
			controls.enabled = false

			window.addEventListener( 'resize', onWindowResize );

		}

		function onWindowResize() {
			camera.aspect = window.innerWidth / window.innerHeight;
			camera.updateProjectionMatrix();
			renderer.setSize( window.innerWidth, window.innerHeight );
			render();
		}

		function render() {
			renderer.render( scene, camera );
		}

		function animate() {
				requestAnimationFrame(animate)
				if (water) { water.rotation.y += 0.006 }
				if (ball) { ball.rotation.y += 0.003 }
				renderer.render(scene, camera)
		}

		window.onmousemove = (e) => {
			if (ball) ball.rotation.x = e.clientY/7000
		}
