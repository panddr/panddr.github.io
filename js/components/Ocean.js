AFRAME.registerComponent('oceann', {
  schema: {
    // Dimensions of the ocean area.
    width: {default: 100, min: 0},
    depth: {default: 100, min: 0},

    // Density of waves.
    density: {default: 50},

    // Wave amplitude and variance.
    amplitude: {default: 3.1},
    amplitudeVariance: {default: 3.3},

    // Wave speed and variance.
    speed: {default: 0},
    speedVariance: {default: 0},

    // Material.
    color: {default: '#7AD2F7', type: 'color'},
    opacity: {default: 0.8}
  },

  /**
   * Use play() instead of init(), because component mappings – unavailable as dependencies – are
   * not guaranteed to have parsed when this component is initialized.
   */
  init: function () {
    // var el = this.el,
    //     data = this.data,
    //     material = el.components.material;

    // var geometry = new THREE.PlaneGeometry(data.width, data.depth, data.density, data.density);
    // geometry.mergeVertices();
    // this.waves = [];
    // for (var v, i = 0, l = geometry.vertices.length; i < l; i++) {
    //   v = geometry.vertices[i];
    //   this.waves.push({
    //     z: v.z,
    //     ang: Math.random() * Math.PI * 2,
    //     amp: data.amplitude + Math.random() * data.amplitudeVariance,
    //     speed: (data.speed + Math.random() * data.speedVariance) / 1000 // radians / frame
    //   });
    // }

    // if (!material) {
    //   material = {};
    //   material.material = new THREE.MeshPhongMaterial({
    //     color: data.color,
    //     transparent: data.opacity < 1,
    //     opacity: data.opacity,
    //     shading: THREE.FlatShading,
    //   });
    // }

    // this.mesh = new THREE.Mesh(geometry, material.material);
    // el.setObject3D('mesh', this.mesh);




    //cannon
    const world = this.el.sceneEl.systems.physics.world;
    console.log(world)
    var matrix = [];
    var sizeX = 150,
        sizeY = 150;
    for (var i = 0; i < sizeX; i++) {
        matrix.push([]);
        for (var j = 0; j < sizeY; j++) {
            var height = Math.cos(i/sizeX * Math.PI * 20)*Math.cos(j/sizeY * Math.PI * 20) + 2;
            if(i===0 || i === sizeX-1 || j===0 || j === sizeY-1)
                height = 3;
            matrix[i].push(height);
        }
    }
    // Create the heightfield
    this.hfShape = new CANNON.Heightfield(matrix, {
        elementSize: 1
    });
    var hfBody = new CANNON.Body({ mass: 0 });
    hfBody.addShape(this.hfShape);
    hfBody.position.set(-sizeX * this.hfShape.elementSize / 2, -60, -10);
    // world.addBody(hfBody);




    //three
    this.geometry = new THREE.Geometry();

    this.v0 = new CANNON.Vec3();
    this.v1 = new CANNON.Vec3();
    this.v2 = new CANNON.Vec3();
    for (var xi = 0; xi < this.hfShape.data.length - 1; xi++) {
        for (var yi = 0; yi < this.hfShape.data[xi].length - 1; yi++) {
            for (var k = 0; k < 2; k++) {
                this.hfShape.getConvexTrianglePillar(xi, yi, k===0);
                this.v0.copy(this.hfShape.pillarConvex.vertices[0]);
                this.v1.copy(this.hfShape.pillarConvex.vertices[1]);
                this.v2.copy(this.hfShape.pillarConvex.vertices[2]);
                this.v0.vadd(this.hfShape.pillarOffset, this.v0);
                this.v1.vadd(this.hfShape.pillarOffset, this.v1);
                this.v2.vadd(this.hfShape.pillarOffset, this.v2);
                this.geometry.vertices.push(
                    new THREE.Vector3(this.v0.x, this.v0.y, this.v0.z),
                    new THREE.Vector3(this.v1.x, this.v1.y, this.v1.z),
                    new THREE.Vector3(this.v2.x, this.v2.y, this.v2.z)
                );
                var i = this.geometry.vertices.length - 3;
                this.geometry.faces.push(new THREE.Face3(i, i+1, i+2));
            }
        }
    }
    this.geometry.computeBoundingSphere();
    this.geometry.computeFaceNormals();
    this.mesh = new THREE.Mesh(this.geometry, this.el.components.material.material);
    this.el.setObject3D('mesh', this.mesh);
  },

  // tick: function (t, dt) {
  //   if (!dt) return;

  //   for (var xi = 0; xi < this.hfShape.data.length - 1; xi++) {
  //       for (var yi = 0; yi < this.hfShape.data[xi].length - 1; yi++) {
  //           for (var k = 0; k < 2; k++) {
  //               this.hfShape.getConvexTrianglePillar(xi, yi, k===0);
  //               this.v0.copy(this.hfShape.pillarConvex.vertices[0]);
  //               this.v1.copy(this.hfShape.pillarConvex.vertices[1]);
  //               this.v2.copy(this.hfShape.pillarConvex.vertices[2]);
  //               this.v0.vadd(this.hfShape.pillarOffset, this.v0);
  //               this.v1.vadd(this.hfShape.pillarOffset, this.v1);
  //               this.v2.vadd(this.hfShape.pillarOffset, this.v2);
  //           }
  //       }
  //   }
  // }
});
