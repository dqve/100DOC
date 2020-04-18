import React, {Component} from 'react'
import PropTypes from 'prop-types'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'


class ListContacts extends Component{	

static propTypes = {
	contacts: PropTypes.array.isRequired,
	deleteContact: PropTypes.func.isRequired
}

	state = {
		query : ''
	}

	updateQuery = (query) => {
		this.setState({ query: query.trim() })
	}

	render(){

		const {contacts, deleteContact} = this.props
		const {query} = this.state
		let showingContacts

		if(this.state.query){
			const match = new RegExp(escapeRegExp(this.state.query), 'i')
			match.test('Tyler')
			showingContacts = contacts.filter((contact) => match.test(contact.name)) 
		}else{
			showingContacts = contacts
		}

		showingContacts.sort(sortBy('name'))

		return(

			<div className="list-contacts">
				<div className="list-contacts-top">
					<input
						className='search-contacts'
						type='text'
						placeholder='Search Contacts'
						value={query}
						onChange={(event) => this.updateQuery(event.target.value)}
					/>
				</div>
				{
					showingContacts.length !== contacts.length && (
						<div className="showing-contacts">
							<span>Now showing {showingContacts.length} of {contacts.length} total</span>
						</div>
				)}
				<ol className="contact-list">
				{showingContacts.map((person) => 
					<li key={person.id} className='contact-list-item'>
						<div className='contact-avatar' style={{backgroundImage:`url(${person.avatarURL})`}}/>
						<div className='contact-details'>
							<p>{person.name}</p>
							<p>{person.email}</p>
						</div>
							<button 
							onClick={() => deleteContact(person)}
							className='contact-remove' 
							style={{backgroundImage: "url('./icons/cancel.svg')"}}
							>						
								Remove
							</button>
					</li>)}
				</ol>
			</div>
		)
	}
}

export default ListContacts;