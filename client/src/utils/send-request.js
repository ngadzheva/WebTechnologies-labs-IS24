const sendRequest = async (url, options, successCallback, errorCallback) => {
    // Implement
    try {
        const result = await fetch(url, options);

        if (result.status === 200 || result.status === 201) {
            successCallback(await result.json());
        } else {
            errorCallback(await result.json());
        }
    } catch(error) {
        console.error(error);
        errorCallback('Internal server error');
    }
};