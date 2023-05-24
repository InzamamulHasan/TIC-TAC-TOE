import { GrRadial } from "react-icons/gr";
import { HiOutlineX} from "react-icons/hi";
import { GoPencil } from "react-icons/go";

import React from "react";
let Symbols=({ic})=>{
    console.log(ic)
    switch(ic){
        case "Circle":return(<GrRadial className="cir"/>);
        case "Cross":return(<HiOutlineX className="cx"/>);
        default: return(<GoPencil className="icon"/>)
    }
}
export default Symbols;