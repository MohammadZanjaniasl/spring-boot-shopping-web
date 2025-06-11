
import { useEffect, useRef } from 'react';

const ThreeBackground = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Create script element for Three.js
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js';
    script.onload = () => {
      initThreeScene();
    };
    document.head.appendChild(script);

    const initThreeScene = () => {
      if (!window.THREE || !mountRef.current) return;

      const scene = new window.THREE.Scene();
      const camera = new window.THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      const renderer = new window.THREE.WebGLRenderer({ alpha: true });
      
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setClearColor(0x000000, 0);
      mountRef.current.appendChild(renderer.domElement);

      // Create particles
      const particlesGeometry = new window.THREE.BufferGeometry();
      const particlesCount = 1000;
      const posArray = new Float32Array(particlesCount * 3);

      for (let i = 0; i < particlesCount * 3; i++) {
        posArray[i] = (Math.random() - 0.5) * 20;
      }

      particlesGeometry.setAttribute('position', new window.THREE.BufferAttribute(posArray, 3));

      const particlesMaterial = new window.THREE.PointsMaterial({
        size: 0.005,
        color: 0x00ffff,
        transparent: true,
        opacity: 0.8
      });

      const particlesMesh = new window.THREE.Points(particlesGeometry, particlesMaterial);
      scene.add(particlesMesh);

      // Create floating geometric shapes
      const geometries = [
        new window.THREE.BoxGeometry(0.5, 0.5, 0.5),
        new window.THREE.SphereGeometry(0.3, 32, 32),
        new window.THREE.ConeGeometry(0.3, 0.6, 8),
        new window.THREE.OctahedronGeometry(0.4)
      ];

      const materials = [
        new window.THREE.MeshBasicMaterial({ color: 0x00ffff, wireframe: true, transparent: true, opacity: 0.3 }),
        new window.THREE.MeshBasicMaterial({ color: 0x8a2be2, wireframe: true, transparent: true, opacity: 0.3 }),
        new window.THREE.MeshBasicMaterial({ color: 0xff6b6b, wireframe: true, transparent: true, opacity: 0.3 }),
        new window.THREE.MeshBasicMaterial({ color: 0x4ecdc4, wireframe: true, transparent: true, opacity: 0.3 })
      ];

      const meshes: any[] = [];
      for (let i = 0; i < 15; i++) {
        const geometry = geometries[Math.floor(Math.random() * geometries.length)];
        const material = materials[Math.floor(Math.random() * materials.length)];
        const mesh = new window.THREE.Mesh(geometry, material);
        
        mesh.position.set(
          (Math.random() - 0.5) * 20,
          (Math.random() - 0.5) * 20,
          (Math.random() - 0.5) * 20
        );
        
        mesh.rotation.set(
          Math.random() * Math.PI,
          Math.random() * Math.PI,
          Math.random() * Math.PI
        );
        
        scene.add(mesh);
        meshes.push(mesh);
      }

      camera.position.z = 10;

      // Animation loop
      const animate = () => {
        requestAnimationFrame(animate);

        // Rotate particles
        particlesMesh.rotation.y += 0.001;
        particlesMesh.rotation.x += 0.0005;

        // Animate meshes
        meshes.forEach((mesh, index) => {
          mesh.rotation.x += 0.001 + index * 0.0001;
          mesh.rotation.y += 0.001 + index * 0.0001;
          mesh.position.y += Math.sin(Date.now() * 0.001 + index) * 0.001;
        });

        renderer.render(scene, camera);
      };

      animate();

      // Handle resize
      const handleResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      };

      window.addEventListener('resize', handleResize);

      // Cleanup
      return () => {
        window.removeEventListener('resize', handleResize);
        if (mountRef.current && renderer.domElement) {
          mountRef.current.removeChild(renderer.domElement);
        }
        renderer.dispose();
      };
    };

    return () => {
      // Cleanup
      const scripts = document.querySelectorAll('script[src*="three.min.js"]');
      scripts.forEach(script => script.remove());
    };
  }, []);

  return (
    <div 
      ref={mountRef} 
      className="fixed inset-0 -z-10 opacity-30"
      style={{ pointerEvents: 'none' }}
    />
  );
};

export default ThreeBackground;
