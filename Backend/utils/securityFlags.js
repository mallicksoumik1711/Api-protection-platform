const getSecurityFlags = (rules = "") => {
    return{
        requireApiKey: rules.includes("API_KEY"),
        requireJWT: rules.includes("JWT"),
    };
};

module.exports = {
    getSecurityFlags,
};