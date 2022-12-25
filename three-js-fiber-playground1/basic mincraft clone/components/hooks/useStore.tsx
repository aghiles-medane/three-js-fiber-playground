import { Triplet } from '@react-three/cannon';
import create from 'zustand'
interface Cube{
    id:number;
    position:Triplet;
    texture:textureTypes;
}
type textureTypes =  "dirt" |"glass" | "glass" | "log" | "wood" 
interface State{
    texture:textureTypes;
    cubes:Cube[]
}
const useStore = create<State>((set) => ({
        texture:"dirt",
        cubes:[
            {
                id:1,
                position:[1,1,1],
                texture:"dirt"
            }
        ],
        // addCube:(x:number,y:number,z:number)=>{
        //     set((prev)=>({
        //         cubes:[
        //             ...prev.cubes,
        //             {
        //                 id: Date.now(),
        //                 position:[x,y,z],
        //                 texture:prev.texture
        //             }
        //         ]
        //     }))
        // },
        removeCube:()=>{},
        setTexture:()=>{},
        saveWorld:()=>{},
        resetWorld:()=>{},

}))

export default useStore