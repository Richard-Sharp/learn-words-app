import React from 'react';

const FirebaseContext = React.createContext(null);

//HOC - добавляет в пропсы FirebaseContext:
export const withFirebase = Comment => props => (
		<FirebaseContext.Consumer>
			{
				(firebase) => <Comment {...props} firebase={firebase}/>
			}
		</FirebaseContext.Consumer>
)

export default FirebaseContext;