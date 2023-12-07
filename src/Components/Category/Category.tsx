import React from 'react'
import '../../css/components/components.css'
interface CategoryProps {
    name: string | undefined;
    desc: string | undefined;
    img: string ;
}

export const Category: React.FC<CategoryProps> = ({name,desc,img}: CategoryProps) => {
    console.log(typeof img)
        return (
            <div className="c_ctn bg-sec text-center shadow-md bcu">
            <div className="c-txt-ctn">
            <div className="c_title lg-f titF-24 ">{name}</div>
<div className="c_desc lg-f titF-16">{desc}</div>
            </div>
<img src={require(`../../images/${img}`)} alt={name} className="pic c_img" />
        </div>
        );
}