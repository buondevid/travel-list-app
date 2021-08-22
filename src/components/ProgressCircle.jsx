// inspired and adapted from https://dev.to/jackherizsmith/making-a-progress-circle-in-react-3o65

import { useContext } from 'react';
import { ThemeContext } from 'styled-components';

import { UserCountriesContext } from './ctx/UserCountriesContext';

const Circle = ({ colour, pct }) => {
	const r = 70;
	const circ = 2 * Math.PI * r;
	const strokePct = ((100 - pct) * circ) / 100;
	return (
		<circle
			r={r}
			cx={100}
			cy={100}
			fill='transparent'
			stroke={strokePct !== circ ? colour : ''} // remove colour as 0% sets full circumference
			strokeWidth={'2rem'}
			strokeDasharray={circ}
			strokeDashoffset={pct ? strokePct : 0}
			strokeLinecap='round'
		></circle>
	);
};

const Text = ({ percentage }) => {
	return (
		<>
			<text x='50%' y='45%' dominantBaseline='central' textAnchor='middle' fontSize={'1em'}>
				{percentage.toFixed(0)}% 🌎
			</text>
			<text x='37%' y='60%'>
				visited
			</text>
		</>
	);
};

const Pie = () => {
	const { userCountries } = useContext(UserCountriesContext);
	const theme = useContext(ThemeContext);

	const countriesVisited = userCountries.filter((el) => el.isVisited).length;
	const percentage = (countriesVisited / 250) * 100;

	return (
		<svg width={200} height={200}>
			<g transform={`rotate(-90 ${'100 100'})`}>
				<Circle colour={theme.colors.primary} />
				<Circle colour={theme.colors.secondary} pct={percentage} />
			</g>
			<Text percentage={percentage} />
		</svg>
	);
};

export default Pie;
