
		import * as THREE from './three/build/three.module.js';

		import { OrbitControls } from './three/examples/jsm/controls/OrbitControls.js';
		import { GLTFLoader } from './three/examples/jsm/loaders/GLTFLoader.js';
		import { EffectComposer } from './three/examples/jsm/postprocessing/EffectComposer.js';
		import { RenderPass } from './three/examples/jsm/postprocessing/RenderPass.js';
		import { UnrealBloomPass } from './three/examples/jsm/postprocessing/UnrealBloomPassTransparencyFix.js';
		import { SMAAPass } from './three/examples/jsm/postprocessing/SMAAPass.js';
		import { ShaderPass } from './three/examples/jsm/postprocessing/ShaderPass.js';

		let camera, scene, renderer, ball, water, composer;
		var height = window.innerHeight
		var width = window.innerWidth

		init();
		render();
		animate()

		function init() {

			camera = new THREE.PerspectiveCamera( 10, width / height, 0.25, 20 );
			camera.position.set( -1.8, 0.6, 10 );
			scene = new THREE.Scene();

			new THREE.TextureLoader().load( './assets/hdri.jpg', function ( texture ) {
				texture.mapping = THREE.EquirectangularReflectionMapping;
				texture.encoding = THREE.sRGBEncoding;
				scene.background = null;
				scene.environment = texture;
			})

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

			let pixelRatio = 1
			if (/Android|webOS|iPhone|iPad|iPod|Opera Mini/i.test(navigator.userAgent) ) {
				pixelRatio = 3
			}

			renderer = new THREE.WebGLRenderer( { antialias: true, alpha: true } );
			renderer.setPixelRatio( window.devicePixelRatio/pixelRatio );
			renderer.setSize( width, height );
			renderer.toneMapping = THREE.ACESFilmicToneMapping;
			renderer.toneMappingExposure = 1;
			renderer.outputEncoding = THREE.sRGBEncoding;
			renderer.setClearColor(0xFF0000, 0)

			
			// bloom effects start here
			composer = new EffectComposer( renderer )//, renderTarget )
			composer.addPass( new RenderPass( scene, camera ) )

			const bloomPass = new UnrealBloomPass( new THREE.Vector2( width, height ), 3, 1, 0.1 );
			composer.addPass( bloomPass );






			document.querySelector("#three").appendChild( renderer.domElement );

			const controls = new OrbitControls( camera, renderer.domElement );
			controls.enabled = false

			window.addEventListener( 'resize', onWindowResize );

		}

		function onWindowResize() {
			camera.aspect = width / height;
			camera.updateProjectionMatrix();
			render();
			renderer.setSize( width, height );
			composer.setSize( width, height );
		}

		function render() {
			renderer.render( scene, camera );
		}

		function animate() {
				requestAnimationFrame(animate)
				if (water) { water.rotation.y += 0.006 }
				if (ball) { ball.rotation.y += 0.003 }
				renderer.render(scene, camera)

				composer.render();
		}

		// window.onmousemove = (e) => {
		// 	if (ball) ball.rotation.x = e.clientY/7000
		// }
