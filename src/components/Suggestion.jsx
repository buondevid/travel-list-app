import styled from 'styled-components';

const Button = styled.button`
	position: relative;
	top: 50%;
	transform: translateY(-50%);
	margin: 0 0.7rem;
	padding: 0.5rem;
	border: 2px dashed ${({ theme }) => theme.colors.secondary};
	border-radius: 2rem;
	appearance: none;
	transition: all 0.3s;

	&:hover,
	&:focus {
		background-color: ${({ theme }) => theme.colors.secondary};
		color: ${({ theme }) => theme.colors.primary};
	}
`;

function Suggestion({ children }) {
	return <Button tabIndex={10}>{children}</Button>;
}

export default Suggestion;
