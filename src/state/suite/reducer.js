import subjectListReducer from '../subject-list/reducer';

function buildDefaultState () {
	return {
		subjects: [],
	};
}

export default function (state = buildDefaultState(), action = {}) {
	return {
		subjects: subjectListReducer(state.subjects, action),
	};
}
