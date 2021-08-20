import styled from 'styled-components';

const Li = styled.li`
	position: relative;
	border-bottom: 1px dotted #8d7d77;
	padding: 1.5rem 0;
	vertical-align: middle;

	&:last-child {
		border: none;
	}
`;

const Div = styled.div`
	padding: 0 1rem;
	vertical-align: middle;
`;

const Input = styled.input`
	height: 2rem;
	width: 2rem;
	margin-right: 1.5rem;
	vertical-align: middle;
	cursor: pointer;
	transition: all 0.3s;

	&:hover {
		transform: scale(1.2);
	}

	&:checked label {
	}
`;

const Label = styled.label`
	transition: all 0.5s;
	color: ${({ theme }) => theme.colors.text_primary};

	${Input}:checked ~ & {
		font-style: italic;
		font-size: 1.5rem;
		margin-left: 3rem;
	}
`;

const DeleteButton = styled.button`
	visibility: hidden;
	opacity: 0;
	position: absolute;
	color: ${({ theme }) => theme.colors.secondary};
	padding: 0.5rem;
	cursor: pointer;
	right: 2rem;
	top: 0;
	bottom: 0;
	font-size: 3rem;
	outline: none;
	border: none;
	background: transparent;
	transition: all 0.2s;
	transform: translateX(-1rem);

	&:hover {
		transform: scale(1.2);
	}

	${Li}:hover & {
		visibility: visible;
		opacity: 1;
		transform: translateX(0);
	}

	${Li}:hover &:hover {
		transform: scale(1.3);
	}
`;

function Item({ country, isVisited, handleCheckboxChange, handleDeleteItem }) {
	function handleDelete(e) {
		handleDeleteItem(e.target.previousSibling.htmlFor);
	}

	return (
		<Li>
			<Div>
				<Input id={country} type='checkbox' checked={isVisited} onChange={handleCheckboxChange} />
				<Label htmlFor={country}>{country}</Label>
				<DeleteButton onClick={handleDelete}>ｘ</DeleteButton>
			</Div>
		</Li>
	);
}

export default Item;
