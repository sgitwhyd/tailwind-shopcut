import React from 'react';
import Image from 'next/image';
import { FaCheck } from 'react-icons/fa';
import { BiRestaurant } from 'react-icons/bi';

function CategoryWrapper({ categoryName, children }) {
	const clicked = () => {
		console.log('helo');
	};

	return (
		<>
			<div className='flex flex-col mx-auto mt-5' onClick={() => clicked()}>
				<div className='border-2 w-16 h-16 flex justify-center content-center rounded-full p-2 relative'>
					{/* <div className='rounded-full w-5 h-5 flex justify-center content-center bg-primary-color absolute top-0 z-10 -right-1'>
						<FaCheck size={13} className='pt-1' />
					</div> */}
					<div className='p-2'>{children}</div>
				</div>
				<div className='font-normal text-sm mt-3 text-center'>
					{categoryName}
				</div>
			</div>
		</>
	);
}

export default CategoryWrapper;
