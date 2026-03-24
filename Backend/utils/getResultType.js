function getResultType(status){
    if(status === 200) return "allowed";
    if(status === 201) return "created";
    if(status === 304) return "cached";
    if(status === 401) return "auth_failed";
    if(status === 429) return "rate_limit";
    if(status >= 500) return "server_error";
    return "blocked";
}

module.exports = getResultType;