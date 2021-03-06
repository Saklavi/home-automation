import { gql } from '@apollo/client';

export const GET_ROOM_LAMPS = gql`
	query RoomLamps {
		rooms {
			id
			name
			appliances {
				... on Lamp {
					id
					name
					state
				}
			}
		}
	}
`;

export const GET_LAMPS = gql`
	query Lamps {
		lamps {
			id
			name
			state
			room {
				name
			}
		}
	}
`;

export const TOGGLE_LAMP = gql`
	mutation toggleLamp($id: ID) {
		toggleLamp(id: $id) {
			ok
		}
	}
`;

export const LAMP_SUB = gql`
	subscription TestLamp {
		lamp {
			id
			state
		}
	}
`;
