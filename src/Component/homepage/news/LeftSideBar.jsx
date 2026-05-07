import Link from 'next/link';
import React from 'react';

const LeftSideBar = ({ categories, activeID }) => {
    return (
        <div>
            {categories.news_category.map(category => {
                return <li
                    className={`
                        ${activeID === category.category_id && 'bg-slate-100'}
                        rounded-md  text-center text-md`}
                    key={category.category_id}>
                    <Link
                        href={`/category/${category.category_id}`}
                        className='block  p-2'
                        >
                        {category.category_name}
                    </Link>
                </li>
            })}
        </div>
    );
};

export default LeftSideBar;