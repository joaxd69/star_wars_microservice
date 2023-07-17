const axios =require('axios')

module.exports=async()=>{
    const data = await axios.get('http://database:8004/films')
    return data.data
}