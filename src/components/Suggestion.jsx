import styled from 'styled-components';
import PropTypes from 'prop-types';

const Button = styled.button`
	position: relative;
	top: 50%;
	transform: translateY(-50%);
	margin: 0 0.7rem;
	padding: 0.5rem;
	border: 2px solid ${({ theme }) => theme.colors.secondary};
	border-radius: 2rem;
	appearance: none;
	transition: all 0.3s;

	&:hover,
	&:focus {
		background-color: ${({ theme }) => theme.colors.secondary};
		color: ${({ theme }) => (theme.name === 'light' ? theme.colors.primary : 'black')};
		transform: translateY(-60%);
	}
`;

function Suggestion({ children }) {
	return <Button tabIndex={2}>{children}</Button>;
}

Suggestion.propTypes = {
	children: PropTypes.string.isRequired,
};

export default Suggestion;
