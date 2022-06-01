import React from 'react';
import { GlobalConxtet } from '../../Context/Context';
import { MapingItems } from '../MapingItems/MapingItems';
import { Header } from '../Header/Header';
export const Home = () => {
	const { Data } = GlobalConxtet();
	return (
		<section className='container-header-singeltour'>
			<Header></Header>
			<MapingItems data={Data}></MapingItems>
		</section>
	);
};
