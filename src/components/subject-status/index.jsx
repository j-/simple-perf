import React from 'react';
import {
	STATUS_DEFAULT,
	STATUS_PENDING,
	STATUS_RUNNING,
	STATUS_SKIPPED,
	STATUS_CANCELLED,
	STATUS_ERROR,
	STATUS_SUCCESS,
} from '../../store/subject/statuses';

export default class SubjectStatus extends React.Component {
	getDisplayText (status) {
		// Horizontal ellipsis (...)
		// Indicates that the status will change
		const hellip = '\u2026';
		switch (status) {
			case STATUS_DEFAULT: return 'Not yet run';
			case STATUS_PENDING: return `Pending${hellip}`;
			case STATUS_RUNNING: return `Running${hellip}`;
			case STATUS_SKIPPED: return 'Skipped';
			case STATUS_CANCELLED: return 'Cancelled';
			case STATUS_ERROR: return 'Error';
			case STATUS_SUCCESS: return 'Done';
		}
	}

	getClassName (status) {
		switch (status) {
			case STATUS_DEFAULT: return 'subject-status subject-status-default';
			case STATUS_PENDING: return 'subject-status subject-status-pending';
			case STATUS_RUNNING: return 'subject-status subject-status-running';
			case STATUS_SKIPPED: return 'subject-status subject-status-skipped';
			case STATUS_CANCELLED: return 'subject-status subject-status-cancelled';
			case STATUS_ERROR: return 'subject-status subject-status-error';
			case STATUS_SUCCESS: return 'subject-status subject-status-success';
		}
	}

	render () {
		const {
			status,
		} = this.props;
		const displayText = this.getDisplayText(status);
		const className = this.getClassName(status);
		return <span className={ className }>{ displayText }</span>
	}
}
