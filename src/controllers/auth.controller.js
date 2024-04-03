const getTest =async(req,res)=>{
    try{
        res.status(200).send({
            message:'tested'
        })
        console.log('tested')
    }catch(error){
        console.log(error)
    }
}



export default {
    getTest
}