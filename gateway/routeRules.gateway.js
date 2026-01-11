const rules = 
{
    "/api": 
    {
        apiKey: true,
        rateLimit: true,
        auth: true
    },
    "/unprotected-api":
    {
        apiKey: true,
        rateLimit: true,
        auth: false
    },
    "/auth": 
    {
        apiKey: false,
        rateLimit: true,
        auth: false
    },
    "/apikeys":
    {
        apiKey: false,
        rateLimit: true,
        auth: true
    },
    "/anon-apikeys":
    {
        apiKey: false,
        rateLimit: true,
        auth: false
    }
}

module.exports = rules;