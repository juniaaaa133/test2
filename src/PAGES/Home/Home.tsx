import React from 'react'
import { Category } from '../../Components/Category/Category';

interface HomeProps {

}

export const Home: React.FC<HomeProps> = ({}) => {

let category_arr = [
    {id:1,name: 'Most Popular Games',desc: 'With the best price', img:'pantheon.jpg'},
    {id:2,name: 'Leatest Games',desc: 'With the leatest ', img:'mickey.jpg'},
    {id:3,name: 'Top Selling Games',desc: 'With the best price', img:'witch.jpg'},
]

        return (
            <div className="flex justify-evenly items-center px-[20px] flex-wrap gap-[20px]">
{
    category_arr.map((data,idx) => (
     <Category key={idx} name={data.name} desc={data.desc} img={data.img}/>
    ))
}         
            </div>     
            
            );
}