export class CustomError {
    constructor(message, code, originalError) {
        this.message = message
        this.code = code
        this.originalError = originalError
    }
}

export const createError = (message = '', originalError = null, code = 0) => {
    return new CustomError(message, originalError, code)
}