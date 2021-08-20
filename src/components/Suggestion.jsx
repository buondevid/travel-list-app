import styled from 'styled-components';

const Button = styled.button`
	position: relative;
	top: 50%;
	transform: translateY(-50%);
	margin: 0 0.7rem;
	padding: 0.5rem;
	border: 2px dashed #8d7d77;
	border-radius: 2rem;
	appearance: none;
	transition: all 0.3s;

	&:hover,
	&:focus {
		background-color: #8d7d77;
		color: #efd0ca;
	}
`;

function Suggestion({ children }) {
	return <Button tabIndex={10}>{children}</Button>;
}

export default Suggestion;
