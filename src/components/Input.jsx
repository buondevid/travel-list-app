import styled from 'styled-components';

const StyledInput = styled.input`
	position: relative;
	appearance: none;
	outline: none;
	text-overflow: ellipsis;
	border: 1px solid #3b3b3d;
	border-radius: 4px;
	width: 100%;
	padding: 1.5rem;
	transition: all 0.3s;
	background-color: transparent;

	&:hover {
		border-color: transparent;
	}

	&:focus {
		border: 1px solid #8d7d77;
		box-shadow: 0 0 1px 1px #8d7d77;
	}

	&::placeholder {
		font-style: italic;
		color: #a9a9a9;
	}
`;

function Input({ handleInputChange, inputValue }) {

	function handleBlur(e) {
		console.log(e.target)
		e.target === document.body && handleInputChange('');
	}
	return (
		<StyledInput
			value={inputValue}
			onChange={(e) => handleInputChange(e.target.value)}
			onClick={handleBlur}
			placeholder='Country I want to visit'
		></StyledInput>
	);
}

export default Input;
