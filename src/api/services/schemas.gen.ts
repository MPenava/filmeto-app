// This file is auto-generated by @hey-api/openapi-ts

export const $Stats = {
    type: 'object',
    properties: {
        questionnaires: {
            type: 'object',
            properties: {
                rating: {
                    type: 'number',
                    format: 'float'
                }
            },
            required: ['rating']
        }
    }
} as const;

export const $Unauthorized = {
    type: 'object',
    properties: {
        type: {
            type: 'string',
            example: 'about:blank',
            description: "An absolute URI that identifies the problem type. When dereferenced, it SHOULD provide human-readable documentation for the problem type (e.g., using HTML). When this member is not present its value is assumed to be 'about:blank'."
        },
        title: {
            type: 'string',
            example: 'Unauthorized',
            description: 'A short, human-readable summary of the problem type. It SHOULD NOT change from occurrence to occurrence of the problem, except for purposes of localization.'
        },
        detail: {
            type: 'string',
            example: 'No authorization token provided',
            description: 'A human-readable explanation specific to this occurrence of the problem.'
        },
        status: {
            type: 'integer',
            example: 401,
            enum: [401],
            description: 'The HTTP status code generated by the origin server for this occurrence of the problem.'
        }
    },
    required: ['type', 'title', 'detail', 'status']
} as const;

export const $Forbidden = {
    type: 'object',
    properties: {
        type: {
            type: 'string',
            example: 'about:blank',
            description: "An absolute URI that identifies the problem type. When dereferenced, it SHOULD provide human-readable documentation for the problem type (e.g., using HTML). When this member is not present its value is assumed to be 'about:blank'."
        },
        title: {
            type: 'string',
            example: 'Forbidden',
            description: 'A short, human-readable summary of the problem type. It SHOULD NOT change from occurrence to occurrence of the problem, except for purposes of localization.'
        },
        detail: {
            type: 'string',
            example: "You don't have the permission to access the requested resource. It is either read-protected or not readable by the server.",
            description: 'A human-readable explanation specific to this occurrence of the problem.'
        },
        status: {
            type: 'integer',
            example: 403,
            enum: [403],
            description: 'The HTTP status code generated by the origin server for this occurrence of the problem.'
        }
    },
    required: ['type', 'title', 'detail', 'status']
} as const;

export const $InternalServerError = {
    type: 'object',
    properties: {
        type: {
            type: 'string',
            example: 'about:blank',
            description: "An absolute URI that identifies the problem type. When dereferenced, it SHOULD provide human-readable documentation for the problem type (e.g., using HTML). When this member is not present its value is assumed to be 'about:blank'."
        },
        title: {
            type: 'string',
            example: 'Internal Server Error',
            description: 'A short, human-readable summary of the problem type. It SHOULD NOT change from occurrence to occurrence of the problem, except for purposes of localization.'
        },
        detail: {
            type: 'string',
            example: 'The server encountered an internal error and was unable to complete your request. Either the server is overloaded or there is an error in the application.',
            description: 'A human-readable explanation specific to this occurrence of the problem.'
        },
        status: {
            type: 'integer',
            example: 500,
            enum: [500],
            description: 'The HTTP status code generated by the origin server for this occurrence of the problem.'
        }
    },
    required: ['type', 'title', 'detail', 'status']
} as const;

export const $NotFound = {
    type: 'object',
    properties: {
        type: {
            type: 'string',
            example: 'about:blank',
            description: "An absolute URI that identifies the problem type. When dereferenced, it SHOULD provide human-readable documentation for the problem type (e.g., using HTML). When this member is not present its value is assumed to be 'about:blank'."
        },
        title: {
            type: 'string',
            example: 'Not Found',
            description: 'A short, human-readable summary of the problem type. It SHOULD NOT change from occurrence to occurrence of the problem, except for purposes of localization.'
        },
        detail: {
            type: 'string',
            example: 'entity: chatbot with id: 58283a0e-64ba-4d9e-a8e5-3f74784846bc not found',
            description: 'A human-readable explanation specific to this occurrence of the problem.'
        },
        status: {
            type: 'integer',
            example: 404,
            enum: [404],
            description: 'The HTTP status code generated by the origin server for this occurrence of the problem.'
        }
    },
    required: ['type', 'title', 'detail', 'status']
} as const;

export const $BadRequest = {
    type: 'object',
    properties: {
        type: {
            type: 'string',
            example: 'about:blank',
            description: "An absolute URI that identifies the problem type. When dereferenced, it SHOULD provide human-readable documentation for the problem type (e.g., using HTML). When this member is not present its value is assumed to be 'about:blank'."
        },
        title: {
            type: 'string',
            example: 'Bad Request',
            description: 'A short, human-readable summary of the problem type. It SHOULD NOT change from occurrence to occurrence of the problem, except for purposes of localization.'
        },
        detail: {
            type: 'string',
            example: "'name' is a required property",
            description: 'A human-readable explanation specific to this occurrence of the problem.'
        },
        status: {
            type: 'integer',
            example: 400,
            enum: [400],
            description: 'The HTTP status code generated by the origin server for this occurrence of the problem.'
        }
    },
    required: ['type', 'title', 'detail', 'status']
} as const;