import styled from 'styled-components';
import { useEffect } from 'react';
import { useQuery } from '@apollo/client';

import { GET_LAMPS, LAMP_SUB } from 'Utils/queries';
import { Box, BoxHeader, BoxContent, PageContainer } from 'Theme/Components';

const DashGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-template-rows: repeat(auto-fill, minmax(100px, 1fr));
	grid-gap: 15px;

	@media screen and (max-width: 1300px) {
		grid-template-columns: 1fr 1fr;
	}

	@media screen and (max-width: 900px) {
		grid-template-columns: 1fr;
	}
`;

const LampBox = () => {
	const { loading, error, data, refetch, subscribeToMore } = useQuery(GET_LAMPS);

	useEffect(() => {
		refetch();
		subscribeToMore({
			document: LAMP_SUB,
		});
	}, [refetch, subscribeToMore]);

	if (loading) return null;
	if (error) return null;

	const litLamps = data.lamps.filter((lamp) => lamp.state);

	if (litLamps.length == 0) return null;

	return (
		<Box variant="warning">
			<BoxHeader>Lit lamps</BoxHeader>
			<BoxContent>
				{litLamps.map((lamp) => (
					<div key={lamp.id}>
						{lamp.name} - {lamp.room.name}
					</div>
				))}
			</BoxContent>
		</Box>
	);
};

const Dashboard = () => {
	return (
		<PageContainer>
			<DashGrid>
				<LampBox />
			</DashGrid>
		</PageContainer>
	);
};

export default Dashboard;
