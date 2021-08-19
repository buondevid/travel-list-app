import styled from 'styled-components';

const Li = styled.li`
	position: relative;
	border-bottom: 1px dotted #ccc;
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
`;

const Label = styled.label`
	margin-right: auto;
	
`;

const DeleteButton = styled.button`
	visibility: hidden;
	opacity: 0;
	position: absolute;
	right: 2rem;
	top: 0;
	bottom: 0;
	font-size: 3rem;
	outline: none;
	border: none;
	background: transparent;
	transition: all 0.2s;

	&:hover {
		transform: scale(1.2);
	}

	${Li}:hover & {
		visibility: visible;
		opacity: 1;
	}
`;

function Item() {
	return (
		<Li>
			<Div>
				<Input type='checkbox' />
				<Label>Norway</Label>
				<DeleteButton>ｘ</DeleteButton>
			</Div>
		</Li>
	);
}

export default Item;
