export const PUT_USER = (id, username, email) => {
	return {
		query: `
        mutation {
            updateUsersPermissionsUser(
                id: ${id},
                data: { username: "${username}", email: "${email}" }
            ) {
            data {
                    id
                    attributes {
                        username
                        email
                    }
                }
            }
        }`,
	};
};
