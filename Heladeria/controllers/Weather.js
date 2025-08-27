async function getWeather(request,response) {
    try {  
        const result = await fetch (`https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid=${process.env.OPEN_WEATHER_API}`);
        
        response.send ({
            data:result
        })
    } catch (error) {
        response.status(400).send({
            details: "Error al obtener el clima."
        })
    }
}

module.export = {
    getWeather
}