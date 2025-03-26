
export const generateImage = async (req,res)=>{
    try {
        
        const {userId,prompt} = req.body;
        
        const  

    } catch (error) {
        console.log(error); 
        res.json({
          success:false,
          message:error.message
        })
  
      }
}