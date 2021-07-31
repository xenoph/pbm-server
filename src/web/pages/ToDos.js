import React, { useState } from 'react';
import styled from 'styled-components';
import FullScreenLayout from 'web/components/layouts/FullScreenLayout';
import { useAuth0 } from 'web/config/auth0';
import useTodos from 'web/hooks/useTodos';

import ListIcon from '@material-ui/icons/List';
import StarIcon from '@material-ui/icons/Star';

import UnChecked from '@material-ui/icons/RadioButtonUnchecked';
import Checked from '@material-ui/icons/CheckCircleOutline';

const SidebarWrapper = styled.div`
	position: relative;
	width: 320px;
	height: 100vh;
	background: ${({ theme }) => theme.colors.primary[1]};
	color: ${({ theme }) => theme.colors.neutral[3]};
	overflow: auto;
	box-shadow: 10px 9px 70px 0px rgba(0, 0, 0, 0.3);
`;

const ProfileWrapper = styled.div`
	padding: 12px;
`;

const SidebarButton = styled.button`
	background: none;
	width: 100%;
	color: inherit;
	font-weight: inherit;
	font-size: inherit;
	text-align: inherit;
	padding: 0;
	border: 2px solid transparent;
	border-left: 6px solid ${({ theme, active }) => (active && theme.colors.neutral[3]) || 'transparent'};
	& > svg {
		margin-bottom: -6px;
		margin-left: 6px;
		margin-right: 12px;
	}

	&:hover,
	&:active,
	&:focus {
		border-color: ${({ theme }) => theme.colors.neutral[3]};
		border-left: 6px solid ${({ theme }) => theme.colors.neutral[3]};
	}
`;

const Wrapper = styled.div`
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 320px;
`;
const ScrollPane = styled.div`
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	overflow: auto;
`;

const MaxWidth = styled.div`
	width: calc(100% - 60px);
	max-width: 900px;
	margin: auto;
	position: relative;
`;

const ToDoList = styled.div`
	width: calc(100% - 60px);
	max-width: 900px;
	margin: 120px auto;
`;

const ListTitle = styled.h3``;

const NewToDoWrapper = styled.div`
	opacity: 0.8;
	position: absolute;
	bottom: 30px;
	left: 0;
	right: 0;
`;

const NewToDoInput = styled.input`
	background: none;
	border: none;
	color: inherit;
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 60px;
	width: calc(100% - 60px);
	box-sizing: border-box;
	color: inherit;
	padding: 0 12px;
	font-size: inherit;
	font-weight: inherit;
	&::placeholder {
		color: inherit;
	}
`;

const ToDoElementWrapper = styled.div`
	background: ${({ theme }) => theme.colors.primary[1]};
	color: ${({ theme }) => theme.colors.neutral[3]};
	box-shadow: 10px 9px 70px 0px rgba(0, 0, 0, 0.3);
	border-radius: 5px;
	height: 60px;
	position: relative;
	margin-bottom: 12px;
`;

const ToDoElementCheckboxButton = styled.button`
	width: 60px;
	height: 60px;
	padding: 0;
	background: none;
	border: 2px solid transparent;
	float: left;
	& > svg {
		margin-bottom: -3px;
	}
`;

const ToDoElementTitle = styled.span`
	width: calc(100% - 60px);
	display: block;
	float: right;
	line-height: 60px;
	padding-left: 12px;
	box-sizing: border-box;
`;

function ToDoElement(todo) {
	const { done, label, toggleChecked } = todo;

	return (
		<ToDoElementWrapper>
			<ToDoElementCheckboxButton onClick={toggleChecked}>{(done && <Checked />) || <UnChecked />}</ToDoElementCheckboxButton>
			<ToDoElementTitle>{label}</ToDoElementTitle>
		</ToDoElementWrapper>
	);
}

const DEFAULT_QUERIES = [
	{
		id: 'all',
		label: 'Alle oppgaver',
		icon: <ListIcon style={{ display: 'inline' }} />,
	},
	{
		id: 'star',
		label: 'Merket',
		icon: <StarIcon style={{ display: 'inline' }} />,
	},
];

export default function ToDos() {
	const { user } = useAuth0();
	const [currentQuery, setCurrentQuery] = useState('all');
	const queries = [...DEFAULT_QUERIES];

	const { todos, insertOneTodo, updateOneTodo } = useTodos();

	return (
		<FullScreenLayout>
			<SidebarWrapper>
				<SidebarWrapper>
					<ProfileWrapper>
						<h5>{user.name}</h5>
					</ProfileWrapper>
					{queries.map(query => (
						<SidebarButton key={query.id} onClick={() => setCurrentQuery(query.id)} active={currentQuery === query.id}>
							{query.icon}
							{query.label}
						</SidebarButton>
					))}
				</SidebarWrapper>
			</SidebarWrapper>
			<Wrapper>
				<ScrollPane>
					<ToDoList>
						{todos.map((todo) => <ToDoElement key={todo._id} {...todo} toggleChecked={() => {
							updateOneTodo({ ...todo, done: !todo.done });
						}} />)}
					</ToDoList>
				</ScrollPane>
				<MaxWidth>
					<ListTitle>{queries.find(q => currentQuery === q.id).label}</ListTitle>
				</MaxWidth>
				<MaxWidth
					style={{
						position: 'absolute',
						bottom: 0,
						left: '0',
						right: '0',
						margin: 'auto',
					}}>
					<NewToDoWrapper>
						<ToDoElementWrapper style={{ marginBottom: '0' }}>
							<ToDoElementCheckboxButton disabled>
								<UnChecked />
							</ToDoElementCheckboxButton>
							<form
								onSubmit={e => {
									e.preventDefault();

									const label = e.target.label.value.trim();

									if (!label) {
										return;
									}

									insertOneTodo({ label });

									e.target.label.value = '';
								}}>
								<NewToDoInput placeholder="Legg til en oppgave..." name="label" />
							</form>
						</ToDoElementWrapper>
					</NewToDoWrapper>
				</MaxWidth>
			</Wrapper>
		</FullScreenLayout>
	);
}
