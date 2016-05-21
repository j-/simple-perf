/*
 * Subject status. Describes a subject's state in the most recent run.
 */

// Default state, test has not been run
export const STATUS_DEFAULT = 'STATUS_DEFAULT';

// Suite is running, subject is yet to be run
export const STATUS_PENDING = 'STATUS_PENDING';

// Suite is running, subject is currently being run
export const STATUS_RUNNING = 'STATUS_RUNNING';

// Testing for this subject was aborted BEFORE run
export const STATUS_SKIPPED = 'STATUS_SKIPPED';

// Testing for this subject was aborted DURING run
export const STATUS_CANCELLED = 'STATUS_CANCELLED';

// There was an error testing this subject
export const STATUS_ERROR = 'STATUS_ERROR';

// This subject was tested successfully
export const STATUS_SUCCESS = 'STATUS_SUCCESS';

export default STATUS_DEFAULT;
