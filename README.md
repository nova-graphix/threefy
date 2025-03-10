<h1>
<img src='./dist/threefy.svg'
    style='position: relative; top: 7px; padding: 0px; filter: brightness(5) sepia(1) hue-rotate(180deg) saturate(6)' 
    alt='threefy-logo' width='32' height='32'/>
Threefy
</h1>

![](https://img.shields.io/badge/package_size-43.8KB-blue)
![](https://img.shields.io/badge/npm-v1.0.5-yellow)
![](https://img.shields.io/badge/react-18.2.0-red)
![](https://img.shields.io/badge/three.js-r174-green)
![](https://img.shields.io/badge/license-mit-white)

## Overview
**Threefy** is a lightweight JavaScript library that integrates [**React**](https://react.dev/) with [**three.js**](https://threejs.org/). This was designed to streamline the creation of 3D graphic content, enabling users to effortlessly build immersive visual experiences by leveraging the power of three.js and React. With its intuitive integration and efficient workflow, threefy empowers developers to craft sophisticated 3D environments with ease and speed.

## Installation
To install threefy, follow these steps:
1. Run the following command to install threefy via npm:
```sh
npm install threefy
```
2. Once installed, you can import it into your React project:
```js
import * as Threefy from 'threefy'
```
Now you’re ready to start using threefy to create 3D graphic content!

## Basic Usage

Here’s a quick example of how to get started with threefy. The first example shows creating a 3D element, and the second example shows updating the geometry and material of a box mesh using React hooks. If no camera and scene are defined, as in the second example, threefy will insert a default camera and scene for your convenience. Note that all 3D elements in threefy must exist inside a **ThreeCanvas**.

#### 1) Example: Creating 3D elements
```jsx
import { createRoot } from 'react-dom/client'
import * as Threefy from 'threefy'

createRoot(document.getElementById('root')).render(
    <Threefy.ThreeCanvas>
        <perspectiveCamera args={[ 60, 1.23, 0.1, 1000 ]} position={[ 0, 0, 50 ]}/>
        <scene>
            <ambientLight args={[ 0xffffff, 0.5 ]}/>
            <directionalLight args={[ 0xffffff, 1 ]} position={[ 1, 2, 3 ]}/>
            <mesh>
                <boxGeometry args={[ 20, 20, 20 ]}/>
                <meshStandardMaterial color={'yellow'}/>
            </mesh>
        </scene>
    </Threefy.ThreeCanvas>
)
```
#### 2) Example: Updating a created 3D element
```jsx
import { useRef, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { ThreeCanvas, useFrame } from 'threefy'

const DemoHoverClick = () =>
{
    const ref = useRef(null)
    const [ index, setIndex ] = useState( 0 )
    const [ hovered, setHovered ] = useState( false )

    const sizes = [ 7, 10, 13, 16 ]
    const colors = [ 'red', 'green', 'blue', 'yellow' ]
    const size = sizes[ index ]
    const color = hovered ? colors[ index ] : 'white'

    useFrame( t => { if( ref.current ) ref.current.rotation.y = t } )

    return (
        <mesh
            ref={ref}
            onClick={() => setIndex( (index + 1) % 4 )}
            onPointerOver={() => setHovered(true)}
            onPointerOut={() => setHovered(false)}
        >
            <boxGeometry args={[size, size, size]}/>
            <meshStandardMaterial color={color}/>
        </mesh>
    )
}

createRoot(document.getElementById('root')).render(
    <ThreeCanvas>
        <threePointLighting/>
        <DemoHoverClick/>
    </ThreeCanvas>
)
```

## Features
- **Seamless React Integration**: Use React components to manage your 3D scenes, making it easier to maintain and update the structure.
- **Powered by three.js**: Leverages the power of three.js to provide high-performance 3D rendering.
- **Easy Syntax**: Write clean and concise code with threefy's simplified syntax for 3D objects, animations, and interactivity.
- **Increased Convenience**: Simplifies the development process, allowing you to focus on the content, not the boilerplate.
- **Great Performance**: Optimized to ensure smooth and efficient rendering of 3D elements, even in complex scenes.

## Documentation
For more examples and detailed documentation, please refer to the [threefy documentation](https://nova-graphix.gitbook.io/threefy).

## Contributing
All contributions are welcome as well as donations! Please contact us at **info@nova-graphix.com** for any questions or suggestions.
- Website: https://www.nova-graphix.com
- LinkedIn: https://www.linkedin.com/company/novagraphix/
- Facebook: https://www.facebook.com/NovaGraphixCo
- YouTube: https://www.youtube.com/@3D-novagraphix

## License
This project is licensed under the MIT License.
