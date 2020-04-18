import React from 'react'


const ListContacts = props => {
	console.log('props', props)
		const contacts = props.contacts
		return(
			<ol className="contact-list">
			{contacts.map((person) => 
				<li key={person.id} className='contact-list-item'>
					<div className='contact-avatar' style={{backgroundImage:`url(${person.avatarURL})`}}/>
					<div className='contact-details'>
						<p>{person.name}</p>
						<p>{person.email}</p>
					</div>
						<button 
						onClick={() => props.deleteContact(person)}
						className='contact-remove' 
						style={{backgroundImage: "url('./icons/cancel.svg')"}}
						>						
							Remove
						</button>
				</li>)}
			</ol>
		)
}

export default ListContacts;