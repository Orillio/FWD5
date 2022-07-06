export const get = async (url : URL) : Promise<JSON | undefined> => {

    const response = await fetch(url, {
    });
    if(response.ok) {
        const json = await response.json();
        return json;
    }
}
