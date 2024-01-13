
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftsideNav = () => {
    const [categories, setCategories] = useState([])

    useEffect(()=>{
        fetch('categories.json')
        .then(res=>res.json())
        .then(data=> setCategories(data) )
    }, [])
    return (
        <div space-y-6>
        <h1>All Caterogy {categories.length}</h1>
        {
          categories.map(category => <Link className='block ml-4 text-xl' key={category.id} 
          to={`/category/${category.id}`} >{category.name}</Link>)
        }
        </div>
    );
};

export default LeftsideNav;