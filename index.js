const service = require("./service");

class Properties {
    async getAllPropertiesTitle() {
        try {
            const response = await service.PropertiesService();
            const getTitles = response.map(property => property.title);
            console.log(getTitles)
            return getTitles
        }
        catch (e) {
            console.log(e)
        }
    }
}


module.exports = {
    Properties
}