module.exports = {
    // Insert data must form in array
    insertDoc: async(data, collection) => {
        return await collection.insertMany(data, collection);
    },

    findDoc: async(filter, collection) => {
        return await collection.find(filter).toArray();
    },

    updateDoc: async(filter, set, collection) => {
        return await collection.updateOne(filter, set);
    },

    removeDoc: async(filter, collection) => {
        return await collection.deleteMany(filter);
    }
};
