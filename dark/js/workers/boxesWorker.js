import CANNON from 'cannon';
let world = undefined;
let boxBodies = [];

self.onmessage = function(e) {
  if (!world) {
    world = new CANNON.World();
    world.broadphase = new CANNON.NaiveBroadphase();
    world.gravity.set(0,-10,0);
    world.solver.tolerance = 0.001;

    // Ground plane
    const plane = new CANNON.Plane();
    const groundBody = new CANNON.Body({ mass: 0 });
    groundBody.addShape(plane);
    groundBody.quaternion.setFromAxisAngle(new CANNON.Vec3(1,0,0),-Math.PI/2);
    world.add(groundBody);

    // Create N cubes
    const shape = new CANNON.Box(new CANNON.Vec3(0.5,0.5,0.5));
    for (let i=0; i!==e.data.N; i++) {
      const body = new CANNON.Body({ mass: 1 });
      body.addShape(shape);
      body.position.set(Math.random()-0.5,2.5*i+0.5,Math.random()-0.5);
      world.add(body);
      boxBodies.push(body);
    }

    // Create person
    // const mass = 50, radius = 1.3;
    // const sphereShape = new CANNON.Sphere(radius);
    // const sphereBody = new CANNON.Body({ mass: mass });
    // sphereBody.addShape(sphereShape);
    // sphereBody.position.set(0,10,120);
    // sphereBody.linearDamping = 0.9;
    // world.addBody(sphereBody);
  }

  // // Step the world
  world.step(e.data.dt);

  // Copy over the data to the buffers
  const positions = e.data.positions;
  const quaternions = e.data.quaternions;
  for (let i=0; i!==boxBodies.length; i++) {
    const b = boxBodies[i],
        p = b.position,
        q = b.quaternion;
    positions[3*i + 0] = p.x;
    positions[3*i + 1] = p.y;
    positions[3*i + 2] = p.z;
    quaternions[4*i + 0] = q.x;
    quaternions[4*i + 1] = q.y;
    quaternions[4*i + 2] = q.z;
    quaternions[4*i + 3] = q.w;
  }

  // Send data back to the main thread
  self.postMessage({
    positions:positions,
    quaternions:quaternions
  }, [positions.buffer,
    quaternions.buffer]);
};
