
		import * as THREE from './three/build/three.module.js';

		import { OrbitControls } from './three/examples/jsm/controls/OrbitControls.js';
		import { GLTFLoader } from './three/examples/jsm/loaders/GLTFLoader.js';
		import { EffectComposer } from './three/examples/jsm/postprocessing/EffectComposer.js';
		import { RenderPass } from './three/examples/jsm/postprocessing/RenderPass.js';
		import { UnrealBloomPass } from './three/examples/jsm/postprocessing/UnrealBloomPassTransparencyFix.js';

		let camera, scene, renderer, ball, water, composer;
		var height = window.innerHeight
		var width = window.innerWidth

		function onWindowResize() {
			height = window.innerHeight
			width = window.innerWidth
			windowHalf = new THREE.Vector2( window.innerWidth / 2, window.innerHeight / 2 );

			camera.aspect = 1
			camera.updateProjectionMatrix()
			render();
			renderer.setSize( 800, 800 );
			composer.setSize( 800, 800 );
			composer.render()
		}

		function render() {
			renderer.render( scene, camera );
		}

		/////////smooth mouse rotation///////////
		const mouse = new THREE.Vector2();
		const target = new THREE.Vector2();
		let windowHalf = new THREE.Vector2( window.innerWidth / 2, window.innerHeight / 2 );

		mouse.x = 150
		function animate() {
			requestAnimationFrame(animate)
			if (water) { water.rotation.y += 0.006 }
			if (ball) {
				target.y = -(( 1 - mouse.y ) * 0.0005)
				target.x += -(( 1 - mouse.x ) * 0.00003)
				ball.rotation.y += 0.05 * (target.x - ball.rotation.y)
				ball.rotation.x += 0.05 * (target.y - ball.rotation.x)
			}
			renderer.render(scene, camera)

			composer.render();
		}
		
		window.onmousemove = (e) => {
			mouse.x = ( e.clientX - windowHalf.x );
			mouse.y = ( e.clientY - windowHalf.x );
		}
		/////////////////////


		camera = new THREE.PerspectiveCamera( 10, width / height, 0.25, 20 );
		camera.position.set( -1.8, 0.6, 10 );
		scene = new THREE.Scene();


		const textureLoader = new THREE.TextureLoader()
		const environment = textureLoader.load( './assets/hdri.jpg', function ( texture ) {
			texture.mapping = THREE.EquirectangularReflectionMapping;
			texture.encoding = THREE.sRGBEncoding;
			scene.background = null;
			scene.environment = texture;
		})

		const loader = new GLTFLoader();
		loader.load( './assets/Taboo_Ball_16b.glb', function ( gltf ) {
			ball = gltf.scene
			scene.add( ball )
			gltf.scene.scale.set(0.0023, 0.0023, 0.0023)
			render()
		});




		/////clear water/////
		// const material = new THREE.MeshPhysicalMaterial({
		// 	color: 0xffffff,
		// 	metalness: 0,
		// 	roughness: 0.2,
		// 	transmission: 1.15,
		// 	ior: 1.5,
		// 	reflectivity: 0.5,
		// 	thickness: 0.5,
		// 	clearcoat: 1,
		// 	clearcoatRoughness: 0.1
		// })

		loader.load( './assets/Taboo_Water_20b.glb', function ( gltf ) {
			// let loadedWater
			// gltf.scene.traverse(m => { if (m.type === "Mesh") loadedWater = m})
			// const waterGeometry = loadedWater.geometry.clone()
			// waterGeometry.rotateZ(5.1)
		
			// water = new THREE.Mesh(waterGeometry, material)
			water = gltf.scene
			water.scale.set(0.0023, 0.0023, 0.0023);
			scene.add(water)
		})
		/////////////////////



		let pixelRatio = 1
		if (/Android|webOS|iPhone|iPad|iPod|Opera Mini/i.test(navigator.userAgent) ) {
			pixelRatio = 3
		}

		renderer = new THREE.WebGLRenderer( { antialias: true, alpha: true } );
		renderer.setPixelRatio( window.devicePixelRatio/pixelRatio );
		console.log("number", window.devicePixelRatio)
		renderer.setSize( 800, 800 );
		renderer.toneMapping = THREE.ACESFilmicToneMapping;
		renderer.toneMappingExposure = 1;
		renderer.outputEncoding = THREE.sRGBEncoding;
		renderer.setClearColor(0xFF0000, 0)
		camera.aspect = 1
		camera.updateProjectionMatrix()

		
		// bloom effects start here
		composer = new EffectComposer( renderer )//, renderTarget )
		composer.addPass( new RenderPass( scene, camera ) )

		const bloomPass = new UnrealBloomPass( new THREE.Vector2( width, height ), 3, 1, 0.1 );
		composer.addPass( bloomPass );


		document.querySelector("#three").appendChild( renderer.domElement );

		const controls = new OrbitControls( camera, renderer.domElement );
		controls.enabled = false

		window.addEventListener( 'resize', onWindowResize );

		render()
		animate()
		

