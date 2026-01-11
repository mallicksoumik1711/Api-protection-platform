const rules = 
{
    "/api": // route
    {
        apiKey: true,
        rateLimit: true,
        auth: true
    },
    "/unprotected-api": //route
    {
        apiKey: true,
        rateLimit: true,
        auth: false
    },
    "/auth": //middleware
    {
        apiKey: false,
        rateLimit: true,
        auth: false
    },
    "/apikeys": //middlewrae
    {
        apiKey: false,
        rateLimit: true,
        auth: true
    },
    "/anon-apikeys": //route
    {
        apiKey: false,
        rateLimit: true,
        auth: false
    }
}

module.exports = rules;