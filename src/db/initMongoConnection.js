export const initMongoConnection = async () => {
    try {
        console.log("Mongo connection successfully established!")
    } catch (error) {
        console.log("Error while setting up mongo connection", error);
        throw error;
    }
};