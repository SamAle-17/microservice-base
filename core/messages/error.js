const { badRequest, notFound, serviceUnavailable } = require('../utils/httpStatusCodes');

module.exports = {
    SERVICE_UNAVAILABLE: {
        code: serviceUnavailable,
        message: {
            tr: 'Servis geçici bir süreliğine kullanım dışıdır.',
            en: 'Service is temporarily unavailable.',
        },
    },
    NOT_FOUND: {
        code: notFound,
        message: {
            tr: 'Sunucu istek yapılan adresi bulamadı.',
            en: 'The server has not found anything matching the Request-URI.',
        },
    },
    BAD_REQUEST: {
        code: badRequest,
        message: {
            tr: 'İstek işlenirken bir sorun oluştu',
            en: 'Something went wrong while proccessing the request.',
        },
    },
};
