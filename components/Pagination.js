import React from 'react';
import Link from 'next/link';
const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
	const pageNumbers = [];
	for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
		pageNumbers.push(i);
	}

	return (
		<ul className="pagination">
			{pageNumbers.map((number) => (
				<li
					onClick={() => paginate(number)}
					key={number}
					style={{ listStyle: 'none', fontSize: '2rem' }}
					className="pagination__item"
				>
					<Link href="#">
						<a className="pagination__item__link">{number}</a>
					</Link>
				</li>
			))}
		</ul>
	);
};

export default Pagination;
